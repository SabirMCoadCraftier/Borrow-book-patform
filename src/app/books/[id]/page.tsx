// "use client";
// import { books } from "@/data/books";
// import { useSession } from "@/lib/auth-client";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import toast from "react-hot-toast";
// import { use } from "react";

// export default function BookDetailPage({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = use(params);
//   const { data: session, isPending } = useSession();
//   const router = useRouter();

//   const book = books.find((b) => b.id === id);

//   useEffect(() => {
//     if (!isPending && !session) {
//       toast.error("Please login to view book details.");
//       router.push("/login");
//     }
//   }, [session, isPending, router]);

//   if (isPending) {
//     return (
//       <div className="min-h-screen flex items-center justify-center pt-16">
//         <span className="loading loading-spinner loading-lg text-[#6C63FF]" />
//       </div>
//     );
//   }

//   if (!session) return null;

//   if (!book) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center pt-16">
//         <div className="text-6xl mb-4"></div>
//         <h2 className="text-white text-2xl font-bold mb-2">Book Not Found</h2>
//         <Link href="/books" className="text-[#6C63FF] hover:underline">← Back to All Books</Link>
//       </div>
//     );
//   }

//   const categoryColor: Record<string, string> = {
//     Tech: "bg-blue-500/20 text-blue-300 border-blue-500/30",
//     Science: "bg-green-500/20 text-green-300 border-green-500/30",
//     Story: "bg-purple-500/20 text-purple-300 border-purple-500/30",
//   };

//   const handleBorrow = () => {
//     if (book.available_quantity <= 0) {
//       toast.error("This book is currently unavailable.");
//       return;
//     }
//     toast.success(`"${book.title}" has been borrowed! Enjoy your reading.`, { duration: 4000 });
//   };

//   return (
//     <div className="min-h-screen pt-24 pb-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Breadcrumb */}
//         <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
//           <Link href="/" className="hover:text-[#6C63FF]">Home</Link>
//           <span>/</span>
//           <Link href="/books" className="hover:text-[#6C63FF]">All Books</Link>
//           <span>/</span>
//           <span className="text-slate-300 truncate max-w-xs">{book.title}</span>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           {/* Book Cover */}
//           <div className="relative">
//             <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:mx-0 shadow-2xl shadow-purple-500/20">
//               <Image
//                 src={book.image_url}
//                 alt={book.title}
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, 50vw"
//                 priority
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a]/60 to-transparent" />
//             </div>
//             {/* Glow */}
//             <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#6C63FF]/10 to-[#43E97B]/10 blur-2xl -z-10 scale-110" />
//           </div>

//           {/* Details */}
//           <div className="flex flex-col gap-6">
//             <div>
//               <span className={`inline-block text-xs px-3 py-1 rounded-full border font-medium mb-3 ${categoryColor[book.category] || ""}`}>
//                 {book.category}
//               </span>
//               <h1 className="text-4xl font-black text-white leading-tight mb-2">{book.title}</h1>
//               <p className="text-[#6C63FF] text-lg font-semibold">by {book.author}</p>
//             </div>

//             <p className="text-slate-400 leading-relaxed text-base">{book.description}</p>

//             {/* Availability */}
//             <div className="bg-[#16213e] border border-[rgba(108,99,255,0.2)] rounded-2xl p-5">
//               <div className="flex items-center justify-between mb-3">
//                 <span className="text-slate-400 text-sm font-medium">Availability</span>
//                 <span className={`text-sm font-bold px-3 py-1 rounded-full ${book.available_quantity > 0 ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
//                   {book.available_quantity > 0 ? "Available" : "Unavailable"}
//                 </span>
//               </div>
//               <div className="text-white text-2xl font-black">
//                 {book.available_quantity} <span className="text-slate-500 text-base font-normal">copies left</span>
//               </div>
//               {/* Progress */}
//               <div className="mt-3 bg-[rgba(108,99,255,0.1)] rounded-full h-2">
//                 <div
//                   className="bg-gradient-to-r from-[#6C63FF] to-[#43E97B] h-2 rounded-full transition-all"
//                   style={{ width: `${Math.min((book.available_quantity / 15) * 100, 100)}%` }}
//                 />
//               </div>
//             </div>

//             {/* Borrow Button */}
//             <button
//               onClick={handleBorrow}
//               disabled={book.available_quantity <= 0}
//               className={`btn btn-lg border-none text-white font-bold transition-all hover:scale-105 ${
//                 book.available_quantity > 0
//                   ? "bg-gradient-to-r from-[#6C63FF] to-[#43E97B] hover:opacity-90 shadow-lg shadow-purple-500/25"
//                   : "bg-slate-700 cursor-not-allowed opacity-50"
//               }`}
//             >
//               {book.available_quantity > 0 ? " Borrow This Book" : "Currently Unavailable"}
//             </button>

//             <Link href="/books" className="text-slate-500 hover:text-[#6C63FF] text-sm transition-colors">
//               ← Back to All Books
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
