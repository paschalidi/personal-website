import { IconProps } from "./IconProps";

export const Close = ({ className, ...props }: IconProps) => (
  <svg
    className={`fill-current ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    {...props}
  >
    <path d="M6.343 6.343a1 1 0 0 0 0 1.415l4.125 4.124a.167.167 0 0 1 0 .236l-4.125 4.125a1 1 0 1 0 1.414 1.414l4.125-4.125a.167.167 0 0 1 .236 0l4.125 4.125a1 1 0 0 0 1.414-1.414l-4.125-4.125a.167.167 0 0 1 0-.236l4.125-4.124a1 1 0 0 0-1.414-1.415l-4.125 4.125a.167.167 0 0 1-.236 0L7.757 6.343a1 1 0 0 0-1.414 0Z" />
  </svg>
);
