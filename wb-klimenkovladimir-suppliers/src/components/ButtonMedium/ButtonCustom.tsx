import { FC, ReactNode } from "react";
import "./ButtonCustom.scss";

interface ButtonProps {
  label: string;
  size: "medium" | "small";
  color: "grey" | "blue" | "white";
  icon?: ReactNode;
  onClick?: () => void;
}

const ButtonCustom: FC<ButtonProps> = ({
  label,
  size,
  color,
  icon,
  onClick,
}) => {
  return (
    <button
      className={`button-custom button-custom--${size} button-custom--${color}`}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
};

export default ButtonCustom;
