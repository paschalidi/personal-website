import { IconProps } from "./IconProps";

export const Burger = ({ className, ...props }: IconProps) => (
  <svg
    className={`fill-current ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    {...props}
  >
    <path d="M2 9H22V10.5H2V9Z" />
    <path d="M2 14.5H22V16H2V14.5Z" />
  </svg>
);
