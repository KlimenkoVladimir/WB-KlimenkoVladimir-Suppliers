import { FC } from "react";

interface IconProps {
  className?: string;
}

const IconChevronDown: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.78223 7.04297L9.21556 12.4763C9.85723 13.118 10.9072 13.118 11.5489 12.4763L16.9822 7.04297"
        stroke="white"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default IconChevronDown;
