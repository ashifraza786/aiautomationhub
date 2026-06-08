# Package.json Updates Required

आपके project में कुछ packages missing हैं। ये add करो:

## **Required Packages**

```bash
# tRPC Express middleware (for API routes)
pnpm add @trpc/server@11.6.0

# Database (SQLite support)
pnpm add better-sqlite3

# Environment variables
pnpm add dotenv

# Development dependencies
pnpm add -D @types/better-sqlite3
```

## **या एक साथ सब install करो:**

```bash
pnpm add @trpc/server@11.6.0 better-sqlite3 dotenv && pnpm add -D @types/better-sqlite3
```

## **Verify करो:**

```bash
pnpm list @trpc/server better-sqlite3 dotenv
```

Output में ये packages दिखने चाहिए।

---

## **अगर Error आए:**

```bash
# सब packages fresh install करो
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

---

**अब `pnpm dev` करने से पहले ये packages install करना जरूरी है!**
