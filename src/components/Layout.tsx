import { SSRNavigation } from "./Navigation";
import { SSRFooter } from "./Footer";
import { Locales } from "../utils/getLocales";
import { FC, ReactNode } from "react";
import { NavigationDocumentData, Simplify } from "../../prismicio-types";

export const Layout: FC<{
  locales: Locales;
  children: ReactNode;
  navigation: Simplify<NavigationDocumentData>;
}> = ({ locales, children, navigation }) => {
  return (
    <div className="text-slate-800">
      <SSRNavigation data={navigation} locales={locales} />
      <main>{children}</main>
      <SSRFooter />
    </div>
  );
};
