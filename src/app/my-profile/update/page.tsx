"use client";
import { useState, useEffect } from "react";
import { useSession, authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function UpdateProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
    if (session) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
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

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Name cannot be empty.");
      return;
    }
    setLoading(true);
    try {
      await authClient.updateUser({ name, image: image || undefined });
      toast.success("Profile updated successfully!");
      router.push("/my-profile");
    } catch {
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-lg mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <Link href="/my-profile" className="text-slate-500 hover:text-[#6C63FF] text-sm transition-colors">
            ← Back to Profile
          </Link>
        </div>

        <div className="bg-[#16213e] border border-[rgba(108,99,255,0.2)] rounded-3xl p-8 shadow-2xl shadow-purple-500/10">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6C63FF] to-[#43E97B] flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
              ✏️
            </div>
            <h1 className="text-2xl font-black text-white">Update Information</h1>
            <p className="text-slate-500 text-sm mt-1">Update your name and profile photo</p>
          </div>

          <form onSubmit={handleUpdate} className="space-y-5">
            <div>
              <label className="text-slate-400 text-sm font-medium block mb-1.5">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                required
                className="input-dark w-full rounded-xl px-4 py-3 text-sm"
              />
            </div>
            <div>
              <label className="text-slate-400 text-sm font-medium block mb-1.5">
                Profile Photo URL <span className="text-slate-600">(optional)</span>
              </label>
              <input
                type="url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://example.com/your-photo.jpg"
                className="input-dark w-full rounded-xl px-4 py-3 text-sm"
              />
              {image && (
                <div className="mt-3 flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={image} alt="Preview" className="w-12 h-12 rounded-xl object-cover border border-[rgba(108,99,255,0.3)]" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  <span className="text-slate-500 text-xs">Preview</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn bg-gradient-to-r from-[#6C63FF] to-[#43E97B] text-white border-none hover:opacity-90 transition-opacity mt-2 disabled:opacity-60"
            >
              {loading ? <span className="loading loading-spinner loading-sm" /> : "Update Information →"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
