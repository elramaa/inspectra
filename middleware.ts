import { NextRequest, NextResponse } from "next/server";
import { account } from "./config/appwrite";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
