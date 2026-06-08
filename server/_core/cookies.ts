import type { Request } from "express";

export const COOKIE_NAME = "session";

export function getSessionCookieOptions(req: Request) {
  const isProduction = process.env.NODE_ENV === "production";
  const protocol = req.protocol || "http";
  const isSecure = protocol === "https" || isProduction;

  return {
    httpOnly: true,
    secure: isSecure,
    sameSite: "lax" as const,
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  };
}
