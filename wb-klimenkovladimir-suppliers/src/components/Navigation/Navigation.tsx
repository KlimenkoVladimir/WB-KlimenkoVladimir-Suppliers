import { FC, useState } from "react";
import "./Navigation.scss";
import ButtonCustom from "../ButtonMedium/ButtonCustom";

const Navigation: FC = () => {
  const [activeButton, setActiveButton] = useState<string>("Поставки");

  const handleButtonClick = (label: string) => {
    setActiveButton(label);
  };

  return (
    <div className="navigation">
      <ButtonCustom
        label="Поставки"
        color={`${activeButton === "Поставки" ? "white" : "grey"}`}
        size="medium"
        onClick={() => handleButtonClick("Поставки")}
      />

      <ButtonCustom
        label="Товары"
        color={`${activeButton === "Товары" ? "white" : "grey"}`}
        size="medium"
        onClick={() => handleButtonClick("Товары")}
      />

      <ButtonCustom
        label="Цены и скидки"
        color={`${activeButton === "Цены и скидки" ? "white" : "grey"}`}
        size="medium"
        onClick={() => handleButtonClick("Цены и скидки")}
      />

      <ButtonCustom
        label="Аналитик"
        color={`${activeButton === "Аналитик" ? "white" : "grey"}`}
        size="medium"
        onClick={() => handleButtonClick("Аналитик")}
      />

      <ButtonCustom
        label="Реклама"
        color={`${activeButton === "Реклама" ? "white" : "grey"}`}
        size="medium"
        onClick={() => handleButtonClick("Реклама")}
      />
    </div>
  );
};

export default Navigation;
