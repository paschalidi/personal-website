import clsx from "clsx";

export function Bounded({
  as: Comp = "div",
  yPadding = "base",
  collapsible = true,
  className = "pc",
  children,
}) {
  return (
    <Comp
      data-collapsible={collapsible}
      className={clsx(
        yPadding === "sm" && "py-8 md:py-10",
        yPadding === "base" && "py-16 md:py-20",
        yPadding === "lg" && "py-32 md:py-48",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
}
