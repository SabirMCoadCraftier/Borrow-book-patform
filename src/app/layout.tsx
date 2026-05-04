import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "BookBorrow — Digital Library Platform",
  description: "Explore, discover, and borrow books digitally. A modern library experience at your fingertips.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="booktheme">
      <body className={`${inter.variable} min-h-screen flex flex-col bg-[#0f0f1a]`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#16213e",
              color: "#e2e8f0",
              border: "1px solid rgba(108,99,255,0.3)",
            },
            success: { iconTheme: { primary: "#43E97B", secondary: "#16213e" } },
            error: { iconTheme: { primary: "#FF6584", secondary: "#16213e" } },
          }}
        />
      </body>
    </html>
  );
}
