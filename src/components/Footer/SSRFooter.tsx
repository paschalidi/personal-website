import { createClient } from "../../prismicio";
import { Footer } from "./index";

export async function SSRFooter() {
  const client = createClient();
  const footer = await client.getSingle("footer");
  const { data } = footer;

  return <Footer data={data} />;
}
