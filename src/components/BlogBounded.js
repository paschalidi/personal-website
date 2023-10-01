import clsx from "clsx";

export const BlogBounded = ({
  as: Comp = "div",
  collapsible = true,
  className = "",
  children,
}) => {
  return (
    <Comp
      data-collapsible={collapsible}
      className={clsx("max-w-lg m-auto", className)}
    >
      <div className="mx-auto w-full max-w-2xl">{children}</div>
    </Comp>
  );
};
