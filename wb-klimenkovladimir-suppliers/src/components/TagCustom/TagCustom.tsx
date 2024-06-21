import { FC } from "react";

import "./TagCustom.scss";

interface TagProps {
  label: string | null;
  status: "on-the-way" | "delayed";
}

const TagCustom: FC<TagProps> = ({ label, status }) => {
  if (!label) {
    return null;
  }
  return <div className={`tag tag--${status} `}>{label}</div>;
};

export default TagCustom;
