import { FC } from "react";
import ButtonCustom from "../ButtonMedium/ButtonCustom";
import SearchInput from "../SearchInput/SearchingInput";
import "./GridHeader.scss";
import IconPlus from "../icons/IconPlus";
import { openModal } from "../../redux/modalSlice";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";

const GridHeader: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const defaultNewSupply = {
    heading: "Новая поставка",
    city: "Москва",
    quantity: 0,
    typeSuppliers: "Короб",
    warehouse: "Черная грязь",
    status: "В пути",
    id: null,
    number: null,
  };
  return (
    <div className="grid-header">
      <h1 className="grid-header__heading">Поставки</h1>
      <ButtonCustom
        label="Добавить поставку"
        color="grey"
        size="medium"
        icon={<IconPlus></IconPlus>}
        onClick={() => {
          dispatch(openModal(defaultNewSupply));
        }}
      />
      <SearchInput></SearchInput>
    </div>
  );
};

export default GridHeader;
