import { IconProps } from "./IconProps";

export const Email = ({ className, ...props }: IconProps) => (
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
      d="M19.007 5.327a.138.138 0 0 0-.151.03l-7.385 7.382a2.083 2.083 0 0 1-2.945 0L1.145 5.357a.138.138 0 0 0-.235.098v9.09c0 .837.679 1.516 1.515 1.516h15.152c.837 0 1.515-.679 1.515-1.515V5.455a.137.137 0 0 0-.085-.128Z"
    />
    <path
      fillRule="evenodd"
      d="M9.33 11.936c.371.37.97.37 1.34 0l7.338-7.338a.379.379 0 0 0 .092-.387c-.084-.25-.315-.272-.523-.272H2.426c-.209 0-.442.023-.524.272a.379.379 0 0 0 .092.387l7.337 7.338Z"
    />
  </svg>
);
