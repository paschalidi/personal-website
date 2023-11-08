// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for About Page documents
 */
interface AboutDocumentData {
  /**
   * title field in *About Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: about.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Image  field in *About Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Text field in *About Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField
  /**
   * meta title field in *About Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.meta_title
   * - **Tab**: SEO tags
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * meta description field in *About Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.meta_description
   * - **Tab**: SEO tags
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * meta image field in *About Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.meta_image
   * - **Tab**: SEO tags
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * About Page document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;

/**
 * Item in *Footer → copyright_links*
 */
export interface FooterDocumentDataCopyrightLinksItem {
  /**
   * text field in *Footer → copyright_links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.copyright_links[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * link field in *Footer → copyright_links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.copyright_links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Item in *Footer → social links*
 */
export interface FooterDocumentDataSocialLinksItem {
  /**
   * link field in *Footer → social links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.social_links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * aria text field in *Footer → social links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.social_links[].aria_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  aria_text: prismic.KeyTextField;

  /**
   * text field in *Footer → social links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.social_links[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * svg id field in *Footer → social links*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: instagram
   * - **API ID Path**: footer.social_links[].svg_id
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  svg_id: prismic.SelectField<"instagram" | "email" | "linkedin", "filled">;
}

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * copyright text field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.copyright_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  copyright_text: prismic.KeyTextField;

  /**
   * copyright_links field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.copyright_links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  copyright_links: prismic.GroupField<
    Simplify<FooterDocumentDataCopyrightLinksItem>
  >;

  /**
   * social links field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.social_links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  social_links: prismic.GroupField<Simplify<FooterDocumentDataSocialLinksItem>>;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

/**
 * Item in *Navigation → Dropdown Links*
 */
export interface NavigationDocumentDataDropdownLinksItem {
  /**
   * Link field in *Navigation → Dropdown Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.dropdown_links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * label field in *Navigation → Dropdown Links*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.dropdown_links[].label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.RichTextField;
}

/**
 * Item in *Navigation → Links*
 */
export interface NavigationDocumentDataLinksItem {
  /**
   * Link field in *Navigation → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for navigation item
   * - **API ID Path**: navigation.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Navigation → Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Homepage label field in *Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.homepage_label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  homepage_label: prismic.KeyTextField;

  /**
   * homepage link field in *Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.homepage_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  homepage_link: prismic.LinkField;

  /**
   * Dropdown Links Header field in *Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.dropdown_links_header
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  dropdown_links_header: prismic.KeyTextField;

  /**
   * Dropdown Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.dropdown_links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  dropdown_links: prismic.GroupField<
    Simplify<NavigationDocumentDataDropdownLinksItem>
  >;

  /**
   * Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | ListOfImagesSlice
  | SingleImageSlice
  | ContactFormSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>
  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta keywords field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_keywords
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_keywords: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes =
  | AboutDocument
  | FooterDocument
  | NavigationDocument
  | PageDocument;

/**
 * Primary content in *ContactForm → Primary*
 */
export interface ContactFormSliceDefaultPrimary {
  /**
   * background image field in *ContactForm → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * form header field in *ContactForm → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.primary.form_header
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  form_header: prismic.RichTextField;

  /**
   * button text field in *ContactForm → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * instagram field in *ContactForm → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.primary.instageam
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  instageam: prismic.RichTextField;

  /**
   * email field in *ContactForm → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.primary.email
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  email: prismic.RichTextField;

  /**
   * location field in *ContactForm → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.primary.location
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  location: prismic.RichTextField;

  /**
   * Success message field in *ContactForm → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.primary.success_message
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  success_message: prismic.KeyTextField;

  /**
   * Error message field in *ContactForm → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.primary.error_message
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  error_message: prismic.KeyTextField;
}

/**
 * Primary content in *ContactForm → Items*
 */
export interface ContactFormSliceDefaultItem {
  /**
   * field id field in *ContactForm → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.items[].field_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  field_id: prismic.KeyTextField;

  /**
   * placeholder field in *ContactForm → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.items[].placeholder
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  placeholder: prismic.KeyTextField;
}

/**
 * Default variation for ContactForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactFormSliceDefaultPrimary>,
  Simplify<ContactFormSliceDefaultItem>
>;

/**
 * Slice variation for *ContactForm*
 */
type ContactFormSliceVariation = ContactFormSliceDefault;

/**
 * ContactForm Shared Slice
 *
 * - **API ID**: `contact_form`
 * - **Description**: ContactForm
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSlice = prismic.SharedSlice<
  "contact_form",
  ContactFormSliceVariation
>;

/**
 * Primary content in *ListOfImages → Primary*
 */
export interface ListOfImagesSliceDefaultPrimary {
  /**
   * uid field in *ListOfImages → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: list_of_images.primary.uid
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  uid: prismic.KeyTextField;

  /**
   * Header field in *ListOfImages → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: list_of_images.primary.header
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  header: prismic.RichTextField;

  /**
   * paragraph field in *ListOfImages → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: list_of_images.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * has margin bottom field in *ListOfImages → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: list_of_images.primary.has_margin_bottom
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  has_margin_bottom: prismic.BooleanField;
}

/**
 * Primary content in *ListOfImages → Items*
 */
export interface ListOfImagesSliceDefaultItem {
  /**
   * Image field in *ListOfImages → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: list_of_images.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Description field in *ListOfImages → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: list_of_images.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for ListOfImages Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ListOfImagesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ListOfImagesSliceDefaultPrimary>,
  Simplify<ListOfImagesSliceDefaultItem>
>;

/**
 * Slice variation for *ListOfImages*
 */
type ListOfImagesSliceVariation = ListOfImagesSliceDefault;

/**
 * ListOfImages Shared Slice
 *
 * - **API ID**: `list_of_images`
 * - **Description**: ListOfImages
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ListOfImagesSlice = prismic.SharedSlice<
  "list_of_images",
  ListOfImagesSliceVariation
>;

/**
 * Primary content in *SingleImage → Primary*
 */
export interface SingleImageSliceDefaultPrimary {
  /**
   * image field in *SingleImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: single_image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for SingleImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SingleImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SingleImageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SingleImage*
 */
type SingleImageSliceVariation = SingleImageSliceDefault;

/**
 * SingleImage Shared Slice
 *
 * - **API ID**: `single_image`
 * - **Description**: SingleImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SingleImageSlice = prismic.SharedSlice<
  "single_image",
  SingleImageSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutDocument,
      AboutDocumentData,
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataCopyrightLinksItem,
      FooterDocumentDataSocialLinksItem,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataDropdownLinksItem,
      NavigationDocumentDataLinksItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      ContactFormSlice,
      ContactFormSliceDefaultPrimary,
      ContactFormSliceDefaultItem,
      ContactFormSliceVariation,
      ContactFormSliceDefault,
      ListOfImagesSlice,
      ListOfImagesSliceDefaultPrimary,
      ListOfImagesSliceDefaultItem,
      ListOfImagesSliceVariation,
      ListOfImagesSliceDefault,
      SingleImageSlice,
      SingleImageSliceDefaultPrimary,
      SingleImageSliceVariation,
      SingleImageSliceDefault,
    };
  }
}
