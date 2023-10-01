import { IconProps } from "./IconProps";

export const SocialLinkedin = ({ className, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-current ${className}`}
    width={16}
    height={16}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M.5 1.98c0-.478.169-.871.507-1.181.338-.31.777-.466 1.317-.466.531 0 .96.153 1.289.458.338.315.507.725.507 1.231 0 .458-.164.84-.493 1.145-.337.315-.781.472-1.332.472h-.014c-.531 0-.96-.157-1.289-.472C.664 2.852.5 2.457.5 1.979ZM.688 14.5V4.941h3.215v9.56H.688Zm4.995 0h3.215V9.163c0-.334.038-.592.116-.773.135-.324.34-.599.615-.823.275-.224.62-.336 1.035-.336 1.081 0 1.622.72 1.622 2.16v5.11H15.5V9.02c0-1.412-.338-2.483-1.014-3.213-.675-.73-1.568-1.095-2.678-1.095-1.245 0-2.215.53-2.91 1.589v.028h-.015l.015-.028V4.94H5.683c.02.306.03 1.255.03 2.848s-.01 3.83-.03 6.711Z"
    />
    <defs>
      <clipPath id="a">
        <path fillRule="evenodd" d="M.5.333h15V14.5H.5z" />
      </clipPath>
    </defs>
  </svg>
);