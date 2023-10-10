import { SSRNavigation } from "./Navigation";
import { SSRFooter } from "./Footer";
import { Locales } from "../utils/getLocales";
import { FC, ReactNode } from "react";

export const Layout: FC = ({
  locales,
  children,
}: {
  locales: Locales;
  children: ReactNode;
}) => {
  return (
    <div className="text-slate-800">
      <SSRNavigation />
      <main>{children}</main>
      <SSRFooter locales={locales} />
    </div>
  );
};
