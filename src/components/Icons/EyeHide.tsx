import { IconProps } from "./IconProps";
import clsx from "clsx";

export const EyeHide = ({ className, onClick, ...props }: IconProps) => (
  <svg
    className={clsx(!!onClick && "cursor-pointer", "fill-current", className)}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    onClick={onClick}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.28 6.555L2 4.275L3.275 3L21 20.73L19.725 22L16.81 19.08L16.385 18.655C15.03 19.2 13.55 19.5 12 19.5C7 19.5 2.73 16.39 1 12C1.78 10.015 3.085 8.3 4.735 7.01L4.28 6.555ZM17 12C17 9.24 14.76 7 12 7C11.355 7 10.74 7.135 10.175 7.355L8.015 5.2C9.26 4.75 10.6 4.5 12 4.5C17.005 4.5 21.27 7.61 23.005 12C22.27 13.86 21.08 15.49 19.57 16.75L16.645 13.825C16.87 13.26 17 12.645 17 12ZM7.53 9.8L9.075 11.345C9.03 11.56 9 11.775 9 12C9 13.655 10.345 15 12 15C12.225 15 12.44 14.97 12.65 14.925L14.195 16.47C13.53 16.8 12.79 17 12 17C9.24 17 7 14.76 7 12C7 11.21 7.2 10.47 7.53 9.8ZM14.985 12.165L11.835 9.015L12 9C13.655 9 15 10.345 15 12L14.985 12.165Z"
    />
  </svg>
);
