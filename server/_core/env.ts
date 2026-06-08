/**
 * Environment variables for local development
 */

export const ENV = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: parseInt(process.env.PORT || "3000"),
  databaseUrl: process.env.DATABASE_URL || "file:./local.db",
  ownerOpenId: process.env.OWNER_OPEN_ID || "local-owner",
  ownerName: process.env.OWNER_NAME || "Local Owner",
};

// Validate required env vars
if (!ENV.databaseUrl) {
  console.warn("⚠️  DATABASE_URL not set, using SQLite: ./local.db");
}
