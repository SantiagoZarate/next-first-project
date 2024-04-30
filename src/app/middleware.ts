import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export const config = {
  matcher: ["/about/:path", "/about"],
};

export function middleware(request: NextRequest) {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return NextResponse.redirect("/login");
  }

  return NextResponse.next();
}
