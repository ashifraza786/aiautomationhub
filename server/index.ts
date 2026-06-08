import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./routers";
import { createContext } from "./_core/context";
import { ENV } from "./_core/env";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // tRPC API routes
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Serve static files from dist/public in production, or client/dist in development
  const staticPath = path.join(process.cwd(), "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = ENV.port;

  server.listen(port, () => {
    console.log(`\n✅ Server running on http://localhost:${port}/`);
    console.log(`📡 tRPC API: http://localhost:${port}/api/trpc`);
    console.log(`🏥 Health check: http://localhost:${port}/api/health\n`);
  });
}

startServer().catch((error) => {
  console.error(" Server startup failed:", error);
  process.exit(1);
});
