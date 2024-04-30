import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextResponse) {
  const isAuthenticated = false;
  console.log(request.headers);

  if (!isAuthenticated) {
    return NextResponse.redirect("/login");
  }

  NextResponse.next();
}
export const config = {
  mathcers: ["/about"],
};
