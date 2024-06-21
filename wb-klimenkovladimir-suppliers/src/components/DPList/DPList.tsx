import { FC, useState } from "react";
import "./DPList.scss";
import IconChevronDown from "../icons/IconChevronDown";

interface ListProps {
  items: string[];
  onSelect: (item: string) => void;
  selected?: string | null;
}

const DPList: FC<ListProps> = ({ items, onSelect, selected = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(selected);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className="dp-list">
      <button
        onClick={handleToggle}
        className={`dp-list__toggle ${isOpen ? "dp-list__toggle--open" : ""}`}
      >
        {selectedItem || "Options"}
        <IconChevronDown className="dp-list__icon"></IconChevronDown>
      </button>
      {isOpen && (
        <ul className="dp-list__menu">
          {items.map((item) => (
            <li
              key={item}
              onClick={() => handleSelect(item)}
              className="dp-list__item"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DPList;
