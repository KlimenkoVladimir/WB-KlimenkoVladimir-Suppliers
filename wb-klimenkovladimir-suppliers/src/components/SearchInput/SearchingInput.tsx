import React, { FC } from "react";
import IconSearch from "../icons/IconSearch";
import "./SearchInput.scss";
import ButtonSearch from "../ButtonSearch/ButtonSearch";
import { useDispatch } from "react-redux";
import { setSortMethod } from "../../redux/sortSlice";

const SearchInput: FC = () => {
  const dispatch = useDispatch();

  const sortOptions = [
    { name: "По номеру", value: "number" },
    { name: "По городу", value: "city" },
    { name: "По типу поставки", value: "typeSuppliers" },
    { name: "По статусу", value: "status" },
  ];
  const handleSelect = (item: string) => {
    const selectedSort = sortOptions.find((option) => option.name === item);
    if (selectedSort) {
      dispatch(setSortMethod(selectedSort.value));
    }
  };

  return (
    <div className="search-input">
      <ButtonSearch
        items={sortOptions.map((option) => option.name)}
        onSelect={handleSelect}
        placeholder={"По номеру"}
      ></ButtonSearch>
      <input className="search-input__input"></input>
      <div className="search-input__icon">
        <IconSearch></IconSearch>
      </div>
    </div>
  );
};

export default SearchInput;
