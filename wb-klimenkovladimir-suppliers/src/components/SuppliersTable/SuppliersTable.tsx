import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { fetchSuppliers } from "../../redux/suppliersSlice";
import TagCustom from "../TagCustom/TagCustom";
import IconKebab from "../icons/IconKebab";
import ButtonCustom from "../ButtonMedium/ButtonCustom";
import "./SuppliersTable.scss";
import { openModal } from "../../redux/modalSlice";
import Supplier from "../../types/Suppliers";
import axios from "axios";
import { formatDate } from "../../utils";

const SuppliersTable = () => {
  const dispatch: AppDispatch = useDispatch();
  const suppliers = useSelector(
    (state: RootState) => state.suppliers.suppliers
  );
  const sortMethod = useSelector((state: RootState) => state.sort.method);
  const [showIdOptions, setShowIdOptions] = useState<string | null>(null);

  const options: string[] = ["Редактировать", "Отменить поставку"];

  useEffect(() => {
    dispatch(fetchSuppliers(sortMethod));
  }, [sortMethod]);

  const handleOptionClick = async (option: string, supplier: Supplier) => {
    setShowIdOptions(null);
    if (option === "Редактировать") {
      dispatch(openModal({ ...supplier, heading: "Редактирование" }));
    } else if (option === "Отменить поставку" && supplier.id) {
      await deliteAction(supplier.id);
    }
  };

  const deliteAction = async (id: string) => {
    try {
      await axios.delete(`http://localhost:4000/suppliers/${id}`);
      dispatch(fetchSuppliers(sortMethod));
    } catch (error) {
      console.error("Error updating supplier:", error);
    }
  };

  return (
    <>
      <table className="suppliers-table">
        <thead>
          <tr className="suppliers-table__head">
            <th className="suppliers-table__head-item">Номер</th>
            <th className="suppliers-table__head-item">Дата поставки</th>
            <th className="suppliers-table__head-item">Город</th>
            <th className="suppliers-table__head-item">Количество</th>
            <th className="suppliers-table__head-item">Тип поставки</th>
            <th className="suppliers-table__head-item">Склад</th>
            <th className="suppliers-table__head-item">Статус</th>
            <th className="suppliers-table__head-item"></th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id} className="suppliers-table__row">
              <td className="suppliers-table__item">{supplier.number}</td>
              <td className="suppliers-table__item">
                {supplier.date && formatDate(supplier.date as string)}
              </td>
              <td className="suppliers-table__item">{supplier.city}</td>
              <td className="suppliers-table__item">{supplier.quantity}</td>
              <td className="suppliers-table__item">
                {supplier.typeSuppliers}
              </td>
              <td className="suppliers-table__item">
                <div className="suppliers-table__warehouse">
                  {supplier.warehouse}
                </div>
                <div className="suppliers-table__address">
                  {supplier.address}
                </div>
              </td>
              <td className="suppliers-table__item">
                <TagCustom
                  label={supplier.status}
                  status={
                    supplier.status === "В пути" ? "on-the-way" : "delayed"
                  }
                ></TagCustom>
              </td>
              <td className="suppliers-table__item">
                <ButtonCustom
                  label={""}
                  icon={<IconKebab></IconKebab>}
                  size={"medium"}
                  color={"grey"}
                  onClick={() => setShowIdOptions(supplier.id)}
                ></ButtonCustom>
                {showIdOptions === supplier.id && (
                  <ul className="suppliers-table__options-container">
                    {options.map((option) => (
                      <li
                        key={option}
                        onClick={() => handleOptionClick(option, supplier)}
                        className="suppliers-table__option"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SuppliersTable;
