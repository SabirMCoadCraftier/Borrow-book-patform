// "use client";
// import { useState, useMemo } from "react";
// import { useSearchParams } from "next/navigation";
// import { books } from "@/data/books";
// import BookCard from "@/components/BookCard";
// import { Suspense } from "react";

// const categories = ["All", "Tech", "Science", "Story"];

// function BooksContent() {
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [search, setSearch] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState(initialCategory);

//   const filtered = useMemo(() => {
//     return books.filter((book) => {
//       const matchSearch = book.title.toLowerCase().includes(search.toLowerCase());
//       const matchCat = selectedCategory === "All" || book.category === selectedCategory;
//       return matchSearch && matchCat;
//     });
//   }, [search, selectedCategory]);

//   return (
//     <div className="pt-20 min-h-screen">
//       {/* Header */}
//       <div className="bg-[#0a0a14] border-b border-[rgba(108,99,255,0.15)] py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-4xl font-black text-white mb-2">
//             All <span className="gradient-text">Books</span>
//           </h1>
//           <p className="text-slate-500 mb-8">Discover your next favorite read from our curated collection.</p>

//           {/* Search */}
//           <div className="relative max-w-xl">
//             <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//             <input
//               type="text"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search books by title..."
//               className="input-dark w-full rounded-2xl pl-12 pr-4 py-3.5 text-sm"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Sidebar */}
//           <aside className="md:w-56 flex-shrink-0">
//             <div className="bg-[#16213e] border border-[rgba(108,99,255,0.15)] rounded-2xl p-5 sticky top-24">
//               <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Categories</h3>
//               <ul className="space-y-2">
//                 {categories.map((cat) => {
//                   const count = cat === "All" ? books.length : books.filter(b => b.category === cat).length;
//                   return (
//                     <li key={cat}>
//                       <button
//                         onClick={() => setSelectedCategory(cat)}
//                         className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
//                           selectedCategory === cat
//                             ? "bg-[#6C63FF] text-white shadow-lg shadow-purple-500/25"
//                             : "text-slate-400 hover:text-white hover:bg-[rgba(108,99,255,0.1)]"
//                         }`}
//                       >
//                         <span>{cat === "All" ? " All" : cat === "Tech" ? " Tech" : cat === "Science" ? " Science" : " Story"}</span>
//                         <span className={`text-xs px-2 py-0.5 rounded-full ${selectedCategory === cat ? "bg-white/20" : "bg-[rgba(108,99,255,0.2)] text-[#6C63FF]"}`}>
//                           {count}
//                         </span>
//                       </button>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           </aside>

//           {/* Books Grid */}
//           <div className="flex-1">
//             <div className="flex items-center justify-between mb-6">
//               <p className="text-slate-500 text-sm">
//                 Showing <span className="text-white font-semibold">{filtered.length}</span> books
//                 {selectedCategory !== "All" && <span> in <span className="text-[#6C63FF]">{selectedCategory}</span></span>}
//               </p>
//             </div>

//             {filtered.length === 0 ? (
//               <div className="text-center py-24">
//                 <div className="text-6xl mb-4"></div>
//                 <h3 className="text-white text-xl font-bold mb-2">No books found</h3>
//                 <p className="text-slate-500">Try a different search term or category.</p>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {filtered.map((book) => (
//                   <BookCard key={book.id} book={book} />
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function BooksPage() {
//   return (
//     <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><span className="loading loading-spinner loading-lg text-[#6C63FF]" /></div>}>
//       <BooksContent />
//     </Suspense>
//   );
// }
