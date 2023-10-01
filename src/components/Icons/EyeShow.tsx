import { IconProps } from "./IconProps";
import clsx from "clsx";

export const EyeShow = ({ className, onClick, ...props }: IconProps) => (
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
      d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5 5.005 0 9.27-3.11 11-7.5-1.73-4.39-5.995-7.5-11-7.5ZM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm-3-5c0-1.655 1.345-3 3-3s3 1.345 3 3-1.345 3-3 3-3-1.345-3-3Z"
      clipRule="evenodd"
    />
  </svg>
);
