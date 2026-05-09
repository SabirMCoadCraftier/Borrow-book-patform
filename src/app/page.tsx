// "use client";
// import Link from "next/link";
// import Marquee from "react-fast-marquee";
// import { books } from "@/data/books";
// import BookCard from "@/components/BookCard";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const featuredBooks = books.slice(0, 4);
// const categories = [
//   { name: "Technology", icon: "", count: books.filter(b => b.category === "Tech").length, color: "from-blue-500/20 to-blue-600/5 border-blue-500/30" },
//   { name: "Science", icon: "", count: books.filter(b => b.category === "Science").length, color: "from-green-500/20 to-green-600/5 border-green-500/30" },
//   { name: "Story", icon: "", count: books.filter(b => b.category === "Story").length, color: "from-purple-500/20 to-purple-600/5 border-purple-500/30" },
// ];
// export default function Home() {
//   return (
//     <div className="pt-16">
//       {/* HERO */}
//       <section className="hero-bg min-h-[90vh] flex items-center relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <div className="inline-flex items-center gap-2 bg-[rgba(108,99,255,0.1)] border border-[rgba(108,99,255,0.3)] rounded-full px-4 py-1.5 mb-6">
//                 <span className="w-2 h-2 rounded-full bg-[#43E97B] animate-pulse" />
//                 <span className="text-[#43E97B] text-sm font-medium">12+ Books Available Now</span>
//               </div>
//               <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
//                 Find Your<br />
//                 <span className="gradient-text">Next Read</span>
//               </h1>
//               <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
//                 Explore a vast digital library. Borrow books across Tech, Science, and Stories — all in one place, beautifully designed for the modern reader.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <Link
//                   href="/books"
//                   className="btn bg-gradient-to-r from-[#6C63FF] to-[#43E97B] text-white border-none px-8 hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-purple-500/25"
//                 >
//                   Browse Now →
//                 </Link>
//                 <Link
//                   href="/register"
//                   className="btn bg-transparent border border-[rgba(108,99,255,0.4)] text-[#6C63FF] hover:bg-[rgba(108,99,255,0.1)] px-8 transition-all"
//                 >
//                   Join Free
//                 </Link>
//               </div>

//               {/* Stats */}
//               <div className="flex gap-8 mt-12">
//                 {[
//                   { value: "12+", label: "Books" },
//                   { value: "3", label: "Categories" },
//                   { value: "100%", label: "Free" },
//                 ].map((stat) => (
//                   <div key={stat.label}>
//                     <div className="text-2xl font-black gradient-text">{stat.value}</div>
//                     <div className="text-slate-500 text-sm">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Swiper cards */}
//             <div className="hidden lg:block">
//               <Swiper
//                 modules={[Pagination, Autoplay]}
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 3000, disableOnInteraction: false }}
//                 loop
//                 className="rounded-2xl overflow-hidden"
//                 style={{ height: "480px" }}
//               >
//                 {books.slice(0, 6).map((book) => (
//                   <SwiperSlide key={book.id}>
//                     <div className="relative h-full">
//                       {/* eslint-disable-next-line @next/next/no-img-element */}
//                       <img src={book.image_url} alt={book.title} className="w-full h-full object-cover" />
//                       <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-[#0f0f1a]/40 to-transparent" />
//                       <div className="absolute bottom-10 left-6 right-6">
//                         <span className="text-xs text-[#43E97B] font-semibold tracking-widest uppercase">{book.category}</span>
//                         <h3 className="text-white text-2xl font-bold mt-1">{book.title}</h3>
//                         <p className="text-slate-400 text-sm mt-1">by {book.author}</p>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* MARQUEE */}
//       <div className="bg-[#6C63FF] py-3 overflow-hidden">
//         <Marquee speed={50} gradient={false}>
//           {books.map((book) => (
//             <span key={book.id} className="text-white font-medium text-sm mx-8">
//               📚 New Arrival: {book.title} &nbsp;|&nbsp; Special Discount on Memberships &nbsp;|
//             </span>
//           ))}
//         </Marquee>
//       </div>

//       {/* FEATURED BOOKS */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-black text-white mb-3">
//             Featured <span className="gradient-text">Books</span>
//           </h2>
//           <p className="text-slate-500 max-w-xl mx-auto">Hand-picked titles across our top categories — start your reading journey today.</p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {featuredBooks.map((book) => (
//             <BookCard key={book.id} book={book} />
//           ))}
//         </div>
//         <div className="text-center mt-10">
//           <Link href="/books" className="btn bg-transparent border border-[rgba(108,99,255,0.4)] text-[#6C63FF] hover:bg-[rgba(108,99,255,0.1)] px-8">
//             View All Books →
//           </Link>
//         </div>
//       </section>

//       {/* CATEGORIES */}
//       <section className="bg-[#0a0a14] py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-black text-white mb-3">
//               Browse by <span className="gradient-text">Category</span>
//             </h2>
//             <p className="text-slate-500">Find exactly what you&apos;re looking for.</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {categories.map((cat) => (
//               <Link
//                 key={cat.name}
//                 href={`/books?category=${cat.name === "Technology" ? "Tech" : cat.name}`}
//                 className={`group bg-gradient-to-br ${cat.color} border rounded-2xl p-8 text-center transition-all hover:scale-105 hover:shadow-xl`}
//               >
//                 <div className="text-5xl mb-4">{cat.icon}</div>
//                 <h3 className="text-white text-xl font-bold mb-1">{cat.name}</h3>
//                 <p className="text-slate-400 text-sm">{cat.count} books available</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* WHY BOOKBORROW */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-black text-white mb-3">
//             Why <span className="gradient-text">BookBorrow?</span>
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             { icon: "", title: "Secure Auth", desc: "Powered by BetterAuth with Google OAuth — your data is always safe and encrypted." },
//             { icon: "", title: "Lightning Fast", desc: "Built with Next.js for blazing-fast page loads and a seamless browsing experience." },
//             { icon: "", title: "Fully Responsive", desc: "Enjoy a perfect experience on any device — mobile, tablet, or desktop." },
//           ].map((f) => (
//             <div key={f.title} className="bg-[#16213e] border border-[rgba(108,99,255,0.15)] rounded-2xl p-8 text-center hover:border-[rgba(108,99,255,0.4)] transition-all">
//               <div className="text-4xl mb-4">{f.icon}</div>
//               <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
//               <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
