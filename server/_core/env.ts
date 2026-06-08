/**
 * Environment variables — centralized config
 */

export const ENV = {
  nodeEnv:      process.env.NODE_ENV    || "development",
  port:         parseInt(process.env.PORT || "3000"),
  databaseUrl:  process.env.DATABASE_URL || "",
  ownerOpenId:  process.env.OWNER_OPEN_ID || "local-owner",
  ownerName:    process.env.OWNER_NAME   || "Local Owner",

  // Storage / Forge — optional, only needed if using file uploads
  forgeApiUrl:  process.env.FORGE_API_URL || "",
  forgeApiKey:  process.env.FORGE_API_KEY || "",
};

// Startup warnings
if (!ENV.databaseUrl) {
  console.warn("⚠️  DATABASE_URL not set — database features will not work");
}
if (!ENV.forgeApiUrl || !ENV.forgeApiKey) {
  console.warn("⚠️  Forge API config not set — file upload features will not work");
}