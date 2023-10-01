import { IconProps } from "./IconProps";

export const SocialFacebook = ({ className, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className={`fill-current ${className}`}
    width={20}
    height={20}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12.6 4.433h1.567v-2.65a21.758 21.758 0 0 0-2.284-.116c-2.266 0-3.816 1.383-3.816 3.916v2.184H5.508v2.966h2.559v7.6h3.066v-7.6h2.55l.384-2.966h-2.934V5.875c0-.875.234-1.442 1.467-1.442Z"
    />
  </svg>
);
