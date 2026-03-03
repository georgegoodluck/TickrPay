# TickrPay Application

This directory contains the core Next.js application for TickrPay.

---

## 🏗️ Architecture Overview

TickrPay is structured with scalability and maintainability in mind.

* Component-driven UI architecture
* Separation of business logic and presentation
* Environment-based configuration
* Supabase-powered backend services

---

## 📂 Folder Structure (Planned)

```bash
tickrpay/
│
├── app/                # Next.js App Router
├── components/         # Reusable UI components
├── lib/                # Utilities & business logic
├── supabase/           # Supabase client configuration
├── types/              # TypeScript definitions
├── public/             # Static assets
└── styles/             # Global styles
```

---

## ⚙️ Environment Setup

Create a `.env.local` file in this directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

---

## 🧪 Local Development

```bash
npm install
npm run dev
```

App runs on:

```
http://localhost:3000
```

---

## 🔐 Authentication

Authentication will be handled using Supabase Auth with role-based access planned for future updates.

---

## 🧠 Core Logic (Planned)

* Unique attendee ID generation algorithm
* Payment record validation
* Real-time dashboard updates
* Duplicate registration prevention
* Event-level data isolation

---

## 🛠️ Engineering Goals

* Clean, scalable folder architecture
* Strong TypeScript typing
* Performance-conscious rendering
* Real-time database sync
* Expandable multi-event design

---

## 🚧 Status

Project initialization phase.
Core features under development.

---
