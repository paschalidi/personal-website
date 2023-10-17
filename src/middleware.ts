import { NextRequest, NextResponse } from "next/server";
import { createClient } from "./prismicio";

export async function middleware(request: NextRequest) {
  const client = createClient();
  const repository = await client.getRepository();

  const locales = repository.languages.map((lang) => lang.id);
  const defaultLocale = locales[0];

  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect to default locale if there is no supported locale prefix
  if (pathnameIsMissingLocale) {
    try {
      const url = new URL(`/${defaultLocale}${pathname}`, request.url);
      return NextResponse.rewrite(url);
    } catch (error) {
      return NextResponse.rewrite(new URL(`/`, request.url));
    }
  }
}

export const config = {
  // Do not localize these paths
  matcher: ["/((?!api|_next/static|slice-simulator|favicon.png).*)"],
};
