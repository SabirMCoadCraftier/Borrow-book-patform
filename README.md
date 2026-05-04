# 📚 BookBorrow — Online Book Borrowing Platform

A seamless and modern web application to digitize the traditional library experience. Users can explore a vast collection of books, filter by categories, and borrow titles digitally.

## 🌐 Live URL
> Deploy on Vercel and add your URL here: `https://your-app.vercel.app`

## ✨ Key Features
- 🔐 **BetterAuth** authentication (Email/Password + Google OAuth)
- 📚 Browse **12 books** across Tech, Science, and Story categories
- 🔍 **Search** books by title in real-time
- 🗂️ **Category sidebar** filter on the All Books page
- 📖 **Book detail page** (private — login required)
- 👤 **My Profile** page with update functionality
- 🎠 **Swiper.js** carousel on the homepage
- 📢 **Marquee** scrolling new arrivals banner
- 🌑 Dark cyberpunk theme, fully responsive
- 🔒 Secure environment variable configuration

## 🛠️ Tech Stack
| Tool | Purpose |
|------|---------|
| **Next.js 15** | React framework with App Router |
| **Tailwind CSS** | Utility-first styling |
| **DaisyUI** | Component library |
| **BetterAuth** | Authentication (email + Google) |
| **MongoDB** | Database via Mongoose |
| **Swiper.js** | Hero carousel |
| **react-fast-marquee** | Scrolling marquee |
| **react-hot-toast** | Toast notifications |
| **framer-motion** | Animations |

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/book-borrow-platform.git
cd book-borrow-platform
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.example .env.local
```
Edit `.env.local` with your values:
```env
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/bookborrow
BETTER_AUTH_SECRET=your_32_char_secret_key_here
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production
```bash
npm run build
npm start
```

## ⚙️ Environment Variables Guide

| Variable | Description |
|----------|------------|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `BETTER_AUTH_SECRET` | Secret key for BetterAuth (min 32 chars) |
| `BETTER_AUTH_URL` | Your app's base URL |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |
| `NEXT_PUBLIC_APP_URL` | Public base URL |

## 📁 Project Structure
```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── login/page.tsx        # Login page
│   ├── register/page.tsx     # Register page
│   ├── books/
│   │   ├── page.tsx          # All Books page
│   │   └── [id]/page.tsx     # Book Details (private)
│   ├── my-profile/
│   │   ├── page.tsx          # My Profile (private)
│   │   └── update/page.tsx   # Update Profile (private)
│   └── api/auth/[...all]/    # BetterAuth API routes
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── BookCard.tsx
├── data/
│   └── books.ts              # 12 book objects
└── lib/
    ├── auth.ts               # BetterAuth server config
    └── auth-client.ts        # BetterAuth client config
```

## 🌍 Deployment (Vercel)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repo
3. Add all environment variables in the Vercel dashboard
4. Deploy!

## 📦 NPM Packages Used
- `better-auth` — Authentication
- `mongoose` — MongoDB ODM
- `swiper` — Carousel/slider
- `react-fast-marquee` — Scrolling marquee
- `react-hot-toast` — Toast notifications
- `framer-motion` — Animations
- `next` — React framework
- `tailwindcss` — CSS framework
- `daisyui` — UI component library
