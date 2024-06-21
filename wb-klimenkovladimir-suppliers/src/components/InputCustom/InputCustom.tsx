import { FC, ReactNode, useRef, useState } from "react";
import "./InputCustom.scss";

interface InputCustomProps {
  value: number | string | null;
  icon?: ReactNode;
  onChange: (value: number | string | null) => void;
}

const InputCustom: FC<InputCustomProps> = ({ value, icon, onChange }) => {
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = icon
      ? e.targetы.valueAsDate.toLocaleDateString("en-CA")
      : Number(e.target.value);
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="input">
      <input
        className="input__field"
        type={icon ? "date" : "text"}
        value={inputValue}
        onChange={handleChange}
        ref={inputRef}
      />
      {icon ? (
        <span className="input__icon">{icon}</span>
      ) : (
        <span className="input__abreav">шт.</span>
      )}
    </div>
  );
};

export default InputCustom;
