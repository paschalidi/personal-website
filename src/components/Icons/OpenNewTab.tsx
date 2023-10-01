import { IconProps } from "./IconProps";

export const OpenNewTab = ({ className, ...props }: IconProps) => {
  return (
    <svg
      className={`fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M12.667 12.667H3.333V3.333H8V2H3.333C2.593 2 2 2.6 2 3.333v9.334C2 13.4 2.593 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V8h-1.333v4.667ZM9.333 2v1.333h2.394L5.173 9.887l.94.94 6.554-6.554v2.394H14V2H9.333Z"
      />
    </svg>
  );
};