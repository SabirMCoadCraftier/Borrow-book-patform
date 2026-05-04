"use client";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await signOut();
    toast.success("Logged out successfully!");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f1a]/90 backdrop-blur-md border-b border-[rgba(108,99,255,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#6C63FF] to-[#43E97B] flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-purple-500/40 transition-all">
              B
            </div>
            <span className="text-xl font-bold gradient-text">BookBorrow</span>
          </Link>

          {/* Center Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "All Books"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : "/books"}
                className="text-slate-400 hover:text-[#6C63FF] transition-colors text-sm font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6C63FF] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            {session && (
              <Link
                href="/my-profile"
                className="text-slate-400 hover:text-[#6C63FF] transition-colors text-sm font-medium relative group"
              >
                My Profile
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6C63FF] group-hover:w-full transition-all duration-300" />
              </Link>
            )}
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-4">
            {isPending ? (
              <div className="w-8 h-8 rounded-full bg-slate-700 animate-pulse" />
            ) : session ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-[rgba(108,99,255,0.1)] border border-[rgba(108,99,255,0.2)] rounded-full px-3 py-1.5">
                  {session.user.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name || "User"}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#43E97B] flex items-center justify-center text-white text-xs font-bold">
                      {session.user.name?.charAt(0).toUpperCase() || "U"}
                    </div>
                  )}
                  <span className="text-sm text-slate-300 font-medium">
                    {session.user.name?.split(" ")[0]}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm bg-transparent border border-[rgba(255,101,132,0.4)] text-[#FF6584] hover:bg-[#FF6584] hover:text-white hover:border-[#FF6584] transition-all"
                >
                  Logout
                </button>
              </div>
          ) : (
  <div className="flex items-center gap-2">
    <Link
      href="/register"
      className="btn btn-sm bg-transparent border border-[rgba(108,99,255,0.4)] text-[#6C63FF] hover:bg-[rgba(108,99,255,0.1)] transition-all"
    >
      Sign Up
    </Link>
    <Link
      href="/login"
      className="btn btn-sm bg-gradient-to-r from-[#6C63FF] to-[#43E97B] text-white border-none hover:opacity-90 transition-opacity"
    >
      Login
    </Link>
  </div>
)}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-[rgba(108,99,255,0.2)] space-y-3">
            <Link href="/" className="block text-slate-400 hover:text-[#6C63FF] py-2 px-2" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/books" className="block text-slate-400 hover:text-[#6C63FF] py-2 px-2" onClick={() => setMenuOpen(false)}>All Books</Link>
            {session && <Link href="/my-profile" className="block text-slate-400 hover:text-[#6C63FF] py-2 px-2" onClick={() => setMenuOpen(false)}>My Profile</Link>}
            <div className="pt-2 border-t border-[rgba(108,99,255,0.1)]">
              {session ? (
                <button onClick={handleLogout} className="w-full text-left text-[#FF6584] py-2 px-2">Logout</button>
             ) : (
  <>
    <Link href="/login" className="block text-[#6C63FF] py-2 px-2" onClick={() => setMenuOpen(false)}>Login</Link>
    <Link href="/register" className="block text-[#43E97B] py-2 px-2" onClick={() => setMenuOpen(false)}>Sign Up</Link>
  </>
)}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
