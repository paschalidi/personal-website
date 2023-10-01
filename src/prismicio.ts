import * as prismic from "@prismicio/client";
import { ClientConfig } from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

import sm from "../slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const { repositoryName } = sm;

/**
 * The project's Prismic Route Resolvers. This list determines a Prismic document's URL.
 */
const routes: ClientConfig["routes"] = [
  {
    type: "page",
    path: "/:uid",
  },
  {
    type: "page",
    uid: "home",
    path: "/",
  },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 */
export const createClient = (config: ClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "no-store" } // TODO ** IMPORTANT Change this to force-cache
        : { next: { revalidate: 5 } },
    ...config,
  });

  prismicNext.enableAutoPreviews({ client });

  return client;
};
