"use client";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

export default function MyProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      toast.error("Please login to view your profile.");
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <span className="loading loading-spinner loading-lg text-[#6C63FF]" />
      </div>
    );
  }

  if (!session) return null;

  const user = session.user;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-white mb-8">
          My <span className="gradient-text">Profile</span>
        </h1>

        {/* Profile Card */}
        <div className="bg-[#16213e] border border-[rgba(108,99,255,0.2)] rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/10">
          {/* Banner */}
          <div className="h-36 bg-gradient-to-r from-[#6C63FF] via-[#4facfe] to-[#43E97B] relative">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
            }} />
          </div>

          <div className="px-8 pb-8">
            {/* Avatar */}
            <div className="flex items-end justify-between -mt-14 mb-6">
              <div className="relative">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name || "User"}
                    width={96}
                    height={96}
                    className="rounded-2xl border-4 border-[#16213e] shadow-lg"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-2xl border-4 border-[#16213e] bg-gradient-to-br from-[#6C63FF] to-[#43E97B] flex items-center justify-center text-white font-black text-4xl shadow-lg">
                    {user.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#43E97B] border-2 border-[#16213e]" />
              </div>
              <Link
                href="/my-profile/update"
                className="btn btn-sm bg-gradient-to-r from-[#6C63FF] to-[#43E97B] text-white border-none hover:opacity-90"
              >
                 Update Info
              </Link>
            </div>

            {/* Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="bg-[rgba(108,99,255,0.08)] border border-[rgba(108,99,255,0.15)] rounded-2xl p-5">
                <p className="text-slate-500 text-xs font-semibold tracking-widest uppercase mb-1">Full Name</p>
                <p className="text-white text-lg font-bold">{user.name || "—"}</p>
              </div>

              {/* Email */}
              <div className="bg-[rgba(108,99,255,0.08)] border border-[rgba(108,99,255,0.15)] rounded-2xl p-5">
                <p className="text-slate-500 text-xs font-semibold tracking-widest uppercase mb-1">Email</p>
                <p className="text-white text-lg font-bold">{user.email}</p>
              </div>

              {/* Member Since */}
              <div className="bg-[rgba(108,99,255,0.08)] border border-[rgba(108,99,255,0.15)] rounded-2xl p-5">
                <p className="text-slate-500 text-xs font-semibold tracking-widest uppercase mb-1">Member Since</p>
                <p className="text-white text-lg font-bold">
                  {user.createdAt ? new Date(user.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "—"}
                </p>
              </div>

              {/* Status */}
              <div className="bg-[rgba(67,233,123,0.08)] border border-[rgba(67,233,123,0.2)] rounded-2xl p-5">
                <p className="text-slate-500 text-xs font-semibold tracking-widest uppercase mb-1">Account Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#43E97B] animate-pulse" />
                  <p className="text-[#43E97B] text-lg font-bold">Active</p>
                </div>
              </div>

              {/* Photo URL */}
              {user.image && (
                <div className="md:col-span-2 bg-[rgba(108,99,255,0.08)] border border-[rgba(108,99,255,0.15)] rounded-2xl p-5">
                  <p className="text-slate-500 text-xs font-semibold tracking-widest uppercase mb-1">Profile Photo URL</p>
                  <p className="text-slate-400 text-sm break-all font-mono">{user.image}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
