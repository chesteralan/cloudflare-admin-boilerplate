# 🌩️ Cloudflare Admin Boilerplate

A modern starter kit for building Cloudflare-powered admin dashboards with zero friction.

---

## 🚀 Overview
A production-ready boilerplate combining **Vite + React + Tailwind + TypeScript** on the frontend and **Hono** on the backend — built to run seamlessly on **Cloudflare Workers**.

---

## ✨ Key Features
- ⚡ **Blazing Fast**: Powered by Vite and Cloudflare’s global edge network for unparalleled performance.
- 🎨 **Beautiful by Default**: TailwindCSS utility-first styling for rapid UI development.
- 🛠️ **Backend Ready**: Lightweight Hono framework for efficient APIs.
- 📦 **Type-Safe**: Full TypeScript support across frontend and backend.
- 🌍 **Serverless First**: Deploys instantly and scales effortlessly on Cloudflare Workers.
- 🔐 **Admin-Friendly**: Perfect for dashboards, internal tools, and SaaS backends.

---

## 🧩 Core Stack
| Frontend         | Backend         | Deployment                |
|------------------|----------------|---------------------------|
| Vite             | Hono           | Cloudflare Workers/Pages  |
| React            |                |                           |
| TailwindCSS      |                |                           |
| TypeScript       |                |                           |

---

## 🎯 Who is this for?
- Developers building admin dashboards or internal tools on Cloudflare.
- Teams needing a scalable, serverless boilerplate with best practices.
- Freelancers and agencies wanting a plug-and-play setup to reduce bootstrapping time.

## 📊 What can you build?
- Admin dashboards for SaaS products
- Internal business intelligence and operational tools
- Combined API and dashboard setups for startups
- Any Cloudflare-first, serverless application

---

## 📁 Project Structure
```
cloudflare-admin-boilerplate/
├── backend/   # Hono API, Cloudflare Worker
│   └── src/
├── frontend/  # Vite + React + Tailwind
├── docs/      # Landing page (see index.html)
├── package.json (monorepo)
├── .gitignore
└── README.md
```

---

## ⚡ Getting Started

1. **Install dependencies:**
   ```sh
   yarn install
   ```
2. **Start frontend dev server:**
   ```sh
   yarn workspace frontend dev
   ```
3. **Start backend locally (with Wrangler):**
   ```sh
   yarn workspace backend wrangler dev
   ```

---

## 📝 License
MIT

---

> “Cloudflare Admin Boilerplate is the go-to starter kit for developers who want to build and deploy modern, type-safe admin dashboards and APIs — optimized for the Cloudflare ecosystem from day one.”
