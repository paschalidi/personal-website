import { IconProps } from "./IconProps";

export const ChevronDown = ({ className, ...props }: IconProps) => (
  <svg
    className={`fill-current ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M16.293 8.799a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5A1 1 0 1 1 7.707 8.8L12 13.092l4.293-4.293Z"
    />
  </svg>
);
