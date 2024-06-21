import { FC, useState } from "react";
import "./ButtonSearch.scss";
import IconChevronDown from "../icons/IconChevronDown";

interface ListProps {
  items: string[];
  onSelect: (item: string) => void;
  placeholder?: string;
}

const ButtonSearch: FC<ListProps> = ({
  items,
  onSelect,
  placeholder = "Select an item",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className="button-search">
      <button
        onClick={handleToggle}
        className={`button-search__toggle ${
          isOpen ? "button-search__toggle--open" : ""
        }`}
      >
        {selectedItem || placeholder}
        <IconChevronDown className="button-search__icon"></IconChevronDown>
      </button>
      {isOpen && (
        <ul className="button-search__menu">
          {items.map((item) => (
            <li
              key={item}
              onClick={() => handleSelect(item)}
              className="button-search__item"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ButtonSearch;
