import { auth } from "./auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }
});

export const config = {
  matcher: "/dashboard/:path*",
};
