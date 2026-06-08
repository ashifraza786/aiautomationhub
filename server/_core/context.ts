import type { Request, Response } from "express";
import type { User } from "../../drizzle/schema";

export interface TrpcContext {
  user: User | null;
  req: Request;
  res: Response;
}

export async function createContext({
  req,
  res,
}: {
  req: Request;
  res: Response;
}): Promise<TrpcContext> {
  // For local development, we'll skip authentication
  // In production, you would validate JWT tokens here
  return {
    user: null,
    req,
    res,
  };
}
