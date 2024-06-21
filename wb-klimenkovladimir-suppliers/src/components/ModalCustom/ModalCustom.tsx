import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { closeModal } from "../../redux/modalSlice";
import "./ModalCustom.scss";
import DPList from "../DPList/DPList";
import ButtonCustom from "../ButtonMedium/ButtonCustom";
import InputCustom from "../InputCustom/InputCustom";
import IconClose from "../icons/IconClose";
import Supplier from "../../types/Suppliers";
import axios from "axios";
import { fetchSuppliers } from "../../redux/suppliersSlice";
import IconCal from "../icons/IconCal";

const ModalCustom: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.modal);

  const [formData, setFormData] = useState<Partial<Supplier>>({
    date: null,
  });

  const cities = [
    "Москва",
    "Псков",
    "Тверь",
    "Абакан",
    "Нижний Новгород",
    "Кострома",
    "Ярославль",
  ];
  const typeSuppliers = ["Короб", "Монопаллета"];
  const warehouses = [
    { name: "Склад", address: "ул. Примерная, 1" },
    { name: "СЦ Абакан", address: "ул. Складская, 12" },
    { name: "Черная грязь", address: "д.Черная грязь, ул.Промышленная, с.2" },
    { name: "Внуково", address: "Поселение Марушкинское, квартал №8" },
    { name: "Белая дача", address: "ул. Дачная, 7" },
    {
      name: "Электросталь",
      address: "Ногинский р-н, Московская обл., г. Электросталь",
    },
    { name: "Вёшки", address: "ул. Лесная, 4" },
  ];

  const statuses = ["В пути", "Задерживается"];

  const [numberSupply] = useState(generateSupplyNumber());

  const handleEditSupply = async () => {
    if (modal.id) {
      try {
        const response = await axios.patch(
          `http://localhost:4000/suppliers/${modal.id}`,
          formData
        );
        dispatch(fetchSuppliers());
        handleCloseModal();
        return response.data;
      } catch (error) {
        console.error("Error updating supplier:", error);
      }
    } else {
      try {
        const response = await axios.get("http://localhost:4000/info/1");
        const currentSuppliersId = Number(response.data.currentSuppliersId);
        const newSuppliersId = String(currentSuppliersId + 1);
        await axios.patch(`http://localhost:4000/info/1`, {
          currentSuppliersId: newSuppliersId,
        });

        const selectedWarehouse = warehouses.find(
          (warehouse) => warehouse.name === formData.warehouse
        );

        await axios.post(`http://localhost:4000/suppliers`, {
          ...formData,
          address: selectedWarehouse?.address,
          id: String(currentSuppliersId),
          number: numberSupply,
        });
        dispatch(fetchSuppliers());
        handleCloseModal();
      } catch (error) {
        console.error("Error updating supplier:", error);
      }
    }
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  function generateSupplyNumber() {
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    setFormData({
      city: modal.city,
      quantity: modal.quantity,
      typeSuppliers: modal.typeSuppliers,
      warehouse: modal.warehouse,
      status: modal.status,
    });
  }, [modal]);

  if (!modal.isOpen) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__title">
          <h2 className="modal__heading">{modal.heading}</h2>
          <div className="modal__number">#{modal.number || numberSupply}</div>
        </div>
        <div className="modal__fields">
          {!modal.number && (
            <div className="modal__field">
              <div className="modal__field-label">Дата поставки</div>
              <InputCustom
                value={null}
                icon={<IconCal></IconCal>}
                onChange={(value) => {
                  setFormData({ ...formData, date: value });
                }}
              ></InputCustom>
            </div>
          )}
          <div className="modal__field">
            <div className="modal__field-label">Город</div>
            <DPList
              items={cities}
              onSelect={(selectedOption) => {
                setFormData({ ...formData, city: selectedOption });
              }}
              selected={modal.city}
            ></DPList>
          </div>
          <div className="modal__field">
            <div className="modal__field-label">Тип поставки</div>
            <DPList
              items={typeSuppliers}
              onSelect={(selectedOption) => {
                setFormData({ ...formData, typeSuppliers: selectedOption });
              }}
              selected={modal.typeSuppliers}
            ></DPList>
          </div>
          <div className="modal__field">
            <div className="modal__field-label">Количество</div>
            <InputCustom
              value={modal.quantity || 0}
              onChange={(value) => {
                setFormData({ ...formData, quantity: value });
              }}
            ></InputCustom>
          </div>
          <div className="modal__field">
            <div className="modal__field-label">Склад</div>
            <DPList
              items={warehouses.map((warehouse) => warehouse.name)}
              onSelect={(selectedOption) => {
                setFormData({ ...formData, warehouse: selectedOption });
              }}
              selected={modal.warehouse}
            ></DPList>
          </div>
          <div className="modal__field">
            <div className="modal__field-label">Статус</div>
            <DPList
              items={statuses}
              onSelect={(selectedOption) => {
                setFormData({ ...formData, status: selectedOption });
              }}
              selected={modal.status}
            ></DPList>
          </div>
        </div>
        <div className="modal__buttons">
          <ButtonCustom
            label={"Сохранить"}
            size={"medium"}
            color={"blue"}
            onClick={handleEditSupply}
          ></ButtonCustom>
          <ButtonCustom
            label={"Отменить"}
            size={"medium"}
            color={"grey"}
            onClick={handleCloseModal}
          ></ButtonCustom>
        </div>
        <button className="modal__icon-close" onClick={handleCloseModal}>
          <IconClose></IconClose>
        </button>
      </div>
    </div>
  );
};

export default ModalCustom;
