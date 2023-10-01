import clsx from "clsx";

export const BlogBounded = ({
  as: Comp = "div",
  collapsible = true,
  className = "",
  children,
}) => {
  return (
    <Comp data-collapsible={collapsible} className={clsx("pc", className)}>
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </Comp>
  );
};
