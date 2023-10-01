import { IconProps } from "./IconProps";

export const SocialTwitter = ({ className, ...props }: IconProps) => (
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
      d="M11.59 8.724 17.8 1.667h-1.471l-5.39 6.127-4.306-6.127H1.667l6.51 9.266-6.51 7.4h1.47l5.693-6.47 4.546 6.47h4.966l-6.752-9.61Zm-2.014 2.29-.66-.922L3.668 2.75h2.26l4.235 5.925.66.923 5.505 7.701h-2.26l-4.492-6.284Z"
    />
  </svg>
);
