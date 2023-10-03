import React from "react";
import { ErrorMessage, Field } from "formik";
import clsx from "clsx";
import { CheckCircledIcon } from "@radix-ui/react-icons";

interface InputProps {
  /*
   * The name of the input
   */
  name: string;
  /*
   * The placeholder text when the input is empty
   */
  placeholder: string;

  /*
   * The type of the input
   */
  type?: "input" | "password" | "textarea";

  /*
   * Whether the input is required
   */
  required?: boolean;

  /*
   * Whether the input is disabled
   */
  disabled?: boolean;

  /*
   * The position of the icon
   */
  iconPosition?: "left" | "right";

  /**
   * The extra class names
   */
  className?: string;
}

export const FormInput = ({
  name,
  placeholder = "Type here",
  type = "input",
  required = false,
  disabled = false,
  iconPosition,
  className,
}: InputProps) => {
  const textareaProps =
    type === "textarea" ? { component: "textarea", rows: "10" } : {};
  return (
    <div className="relative">
      <label htmlFor={name} aria-label={`Input of type ${type}`} />
      <Field
        {...textareaProps}
        name={name}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={clsx(
          className,
          type === "textarea" && "h-40",
          iconPosition === "left" && "pl-10",
          iconPosition === "right" && "pr-8",
          disabled
            ? "placeholder-zinc-400"
            : "placeholder-zinc-600 hover:shadow-[0_0_0_1px_black]",
          `border border-zinc-400 resize-none w-full h-14 px-4 py-3 bg-zinc-50 rounded-md justify-start items-center inline-flex text-xl font-normal leading-7 outline-none focus:shadow-[0_0_0_1px_black] selection:color-white selection:bg-blackA9`,
        )}
        required={required}
      />
      {iconPosition === "left" && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <CheckCircledIcon
            className={
              disabled ? "text-zinc-400 text-opacity-50" : "text-black"
            }
          />
        </span>
      )}
      {iconPosition === "right" && (
        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
          <CheckCircledIcon
            className={
              disabled ? "text-zinc-400 text-opacity-50" : "text-black"
            }
          />
        </span>
      )}
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-400 mt-1 text-xs font-normal leading-none tracking-tight"
      />
    </div>
  );
};
