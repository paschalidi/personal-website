import { IconProps } from "./IconProps";

export const ArrowLeft = ({ className, ...props }: IconProps) => (
  <svg
    className={`fill-current ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="m7.414 13 5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 1 1 1.414 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414Z"
      clipRule="evenodd"
    />
  </svg>
);
