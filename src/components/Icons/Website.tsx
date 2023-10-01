import { IconProps } from "./IconProps";

export const Website = ({ className, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className={`fill-current ${className}`}
    width={24}
    height={24}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M24 4.5a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v15a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-15ZM3 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm4-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm2 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm12 15.5a1 1 0 0 0 1-1V9a.5.5 0 0 0-.5-.5h-19A.5.5 0 0 0 2 9v10.5a1 1 0 0 0 1 1h18Z"
      clipRule="evenodd"
    />
    <path d="M3.5 11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-7ZM12.5 15.25h7a.75.75 0 0 0 0-1.5h-7a.75.75 0 0 0 0 1.5ZM12.5 12.25h7a.75.75 0 0 0 0-1.5h-7a.75.75 0 0 0 0 1.5ZM12.5 18.25h7a.75.75 0 0 0 0-1.5h-7a.75.75 0 0 0 0 1.5Z" />
  </svg>
);
