# 🎟️ TickrPay

> Real-time event payment registration and instant attendee ID generation.

TickrPay is a modern event check-in system built to help organizers confirm payments and instantly issue unique attendee IDs during live events.

This repository separates high-level documentation from the core application code for clarity and scalability.

---

## 📂 Repository Structure

```bash
TickrPay/
│
├── README.md            # Project overview (this file)
├── LICENSE              # Legal terms
└── tickrpay/            # Main application source code
    └── README.md        # Application-specific documentation
```

### Why This Structure?

This layout allows:

* Clean documentation at the root level
* Scalable architecture (future mobile app, admin panel, API service)
* Clear separation between meta files and source code
* Easier expansion into a monorepo if needed

---

## 🚀 Project Vision

TickrPay aims to eliminate manual event payment tracking by providing:

* Instant payment logging
* Automatic structured unique ID generation
* Live attendee dashboard
* Searchable check-in system

Designed for reliability under real event pressure.

---

## 🛠️ Planned Stack

* Next.js
* React + TypeScript
* Tailwind CSS
* shadcn/ui
* Supabase (PostgreSQL + Auth)
* Vercel deployment

---

## 📦 Getting Started

When development begins:

```bash
git clone https://github.com/georgegoodluck/TickrPay.git
cd TickrPay/tickrpay
npm install
npm run dev
```

---

## 📈 Roadmap

* Payment registration system
* Unique ID generation engine
* Authentication & role control
* Real-time dashboard
* QR code support
* Export functionality
* Multi-event support

---

## 📜 License

MIT License. See `LICENSE` for details.

---

## 👤 Author

**George Goodluck**
Software Engineer

---
