# 🚀 AIAutomationHub - Local Development Setup Guide

यह guide आपको अपने Windows PC पर पूरा Backend + Frontend setup करने में मदद करेगा।

---

## **📋 Requirements**

पहले ये सब install करो:

1. **Node.js** (v18+) - https://nodejs.org/
2. **pnpm** - `npm install -g pnpm`
3. **Git** (optional) - https://git-scm.com/

**Check करो:**
```bash
node --version
pnpm --version
```

---

## **🔧 Setup Steps**

### **Step 1: Project Folder में जाओ**

```bash
cd C:\Users\ashif\Downloads\aiautomationhub-fixed\aiautomationhub-fixed
```

### **Step 2: सभी Dependencies Install करो**

```bash
pnpm install
```

यह सब packages download करेगा (2-5 मिनट लग सकते हैं)।

### **Step 3: Environment File Setup करो**

`.env.local` फाइल पहले से ही है। Check करो:

```bash
type .env.local
```

Expected output:
```
NODE_ENV=development
PORT=3000
DATABASE_URL=file:./local.db
```

---

## **▶️ Development Server शुरू करो**

### **Option 1: सिर्फ Frontend (React)**

```bash
cd client
pnpm dev
```

फिर ब्राउजर में खोलो: **http://localhost:5173**

✅ Website दिखेगी
❌ Contact form काम नहीं करेगा (backend नहीं है)

---

### **Option 2: Backend + Frontend दोनों (Recommended)**

**Terminal 1 - Backend शुरू करो:**
```bash
pnpm dev
```

Output:
```
✅ Server running on http://localhost:3000/
📡 tRPC API: http://localhost:3000/api/trpc
🏥 Health check: http://localhost:3000/api/health
```

**Terminal 2 - Frontend शुरू करो:**
```bash
cd client
pnpm dev
```

Output:
```
VITE v7.1.7  ready in 500 ms

➜  Local:   http://localhost:5173/
```

---

## **🌐 ब्राउजर में खोलो**

दोनों terminal चल रहे हों तो:

1. **Frontend:** http://localhost:5173
2. **Backend API:** http://localhost:3000/api/trpc
3. **Health Check:** http://localhost:3000/api/health

---

## **✅ Contact Form Test करो**

1. Website पर जाओ (http://localhost:5173)
2. "Contact" section तक scroll करो
3. Form भरो:
   - Full Name: "Test User"
   - Email: "test@example.com"
   - Phone: "+91 1234567890"
   - Requirements: "Test message"
4. "Send Message" पर क्लिक करो

**Expected:**
- ✅ Success message दिखेगा
- ✅ Backend terminal में notification log होगा
- ✅ Data SQLite database में save होगा

---

## **🐛 Common Errors & Solutions**

### **Error 1: "Cannot find module 'dotenv'"**
```bash
pnpm install dotenv
```

### **Error 2: "Port 3000 already in use"**
```bash
# Port change करो
PORT=3001 pnpm dev
```

### **Error 3: "Cannot find module '@trpc/server'"**
```bash
pnpm install
```

### **Error 4: Database connection error**
- Database automatically create होगा (`local.db`)
- अगर error आए तो `.env.local` check करो

---

## **📁 Project Structure**

```
aiautomationhub-fixed/
├── client/                    # React Frontend
│   ├── src/
│   │   ├── pages/           # Page components
│   │   ├── components/      # UI components
│   │   └── lib/trpc.ts      # tRPC client
│   └── package.json
│
├── server/                    # Express Backend
│   ├── _core/               # Core utilities
│   │   ├── trpc.ts          # tRPC setup
│   │   ├── context.ts       # Request context
│   │   ├── env.ts           # Environment config
│   │   └── notification.ts  # Notifications
│   ├── index.ts             # Server entry point
│   ├── routers.ts           # tRPC routes
│   └── db.ts                # Database queries
│
├── drizzle/                  # Database schema
│   └── schema.ts            # Tables definition
│
├── .env.local               # Environment variables
├── package.json             # Dependencies
└── SETUP_GUIDE.md          # यह file!
```

---

## **🚀 Production Build करो**

```bash
# Frontend build करो
cd client
pnpm build

# Backend build करो
cd ..
pnpm build

# Production में चलाओ
pnpm start
```

---

## **💡 Tips & Tricks**

### **Frontend + Backend एक ही terminal में चलाना**

```bash
# Concurrently install करो
pnpm add -D concurrently

# package.json में add करो:
"dev:all": "concurrently \"pnpm dev\" \"cd client && pnpm dev\""

# फिर run करो:
pnpm dev:all
```

### **Database को Reset करना**

```bash
# local.db delete करो
del local.db

# फिर server restart करो
pnpm dev
```

### **Logs देखना**

Backend terminal में सभी logs दिखेंगे:
- API requests
- Database queries
- Contact form submissions
- Errors

---

## **📞 Contact Form Data कहाँ है?**

Contact submissions यहाँ save होते हैं:
- **Database:** `./local.db` (SQLite)
- **Table:** `contact_submissions`

Data देखने के लिए SQLite browser use करो:
- https://sqlitebrowser.org/

---

## **❓ अगर कोई Problem हो**

1. **Error का screenshot लो**
2. **Terminal output copy करो**
3. **`.env.local` content share करो**
4. **Manus support को contact करो**

---

## **✨ अगला Step**

अब आप:
- ✅ Website locally चला सकते हो
- ✅ Contact form test कर सकते हो
- ✅ Code edit कर सकते हो
- ✅ Database में data देख सकते हो

Happy Coding! 🎉
