import { Client, PrismicDocument } from "@prismicio/client";

export type Locales = (PrismicDocument & { lang_name: string })[];
/**
 * Returns an array of document metadata containing each locale a document has
 * been translated into.
 *
 * A `lang_name` property is included in each document containing the document's
 * locale name as it is configured in the Prismic repository.
 */
export const getLocales = async (
  doc: PrismicDocument,
  client: Client,
): Promise<Locales> => {
  const [repository, altDocs] = await Promise.all([
    client.getRepository(),
    doc.alternate_languages.length > 0
      ? client.getAllByIDs(
          doc.alternate_languages.map((altLang) => altLang.id),
          {
            lang: "*",
            // Exclude all fields to speed up the query.
            fetch: `${doc.type}.__nonexistent-field__`,
          },
        )
      : Promise.resolve([]),
  ]);

  return [doc, ...altDocs].map((doc) => {
    return {
      ...doc,
      lang_name: repository.languages.find((lang) => lang.id === doc.lang).name,
    };
  });
};
