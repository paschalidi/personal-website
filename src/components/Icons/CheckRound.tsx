import { IconProps } from "./IconProps";

export const CheckRound = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    className={`fill-current ${className}`}
  >
    <path
      fillRule="evenodd"
      d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.867-6.966 3.4-3.777a.778.778 0 1 1 1.156 1.041l-4 4.444a.778.778 0 0 1-1.175-.022L8.29 12.053a.778.778 0 0 1 1.195-.995l1.647 1.976Z"
      clipRule="evenodd"
    />
  </svg>
);
