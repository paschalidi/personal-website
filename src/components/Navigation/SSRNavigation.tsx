import { createClient } from "../../prismicio";
import { Navigation } from "./index";

export async function SSRNavigation({
  isLogoWhite = false,
  isTextWhite = false,
}: {
  isLogoWhite?: boolean;
  isTextWhite?: boolean;
}) {
  const client = createClient();
  const navigation = await client.getSingle("navigation");
  const { data } = navigation;

  return (
    <Navigation
      isTextWhite={isTextWhite}
      isLogoWhite={isLogoWhite}
      data={data}
    />
  );
}
