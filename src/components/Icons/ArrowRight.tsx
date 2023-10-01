import { IconProps } from "./IconProps";

export const ArrowRight = ({ className, ...props }: IconProps) => {
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
        d="M11.057 7.333 7.53 3.805a.667.667 0 1 1 .942-.943l4.667 4.667c.26.26.26.682 0 .942l-4.667 4.667a.667.667 0 0 1-.942-.943l3.528-3.528H3.333a.667.667 0 0 1 0-1.334h7.724Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
