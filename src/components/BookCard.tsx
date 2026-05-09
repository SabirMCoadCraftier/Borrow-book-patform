import Image from "next/image";
import Link from "next/link";

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  available_quantity: number;
  image_url: string;
}

export default function BookCard({ book }: { book: Book }) {
  const categoryColor: Record<string, string> = {
    Tech: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    Science: "bg-green-500/20 text-green-300 border-green-500/30",
    Story: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  };

  return (
    <div className="book-card bg-[#16213e] border border-[rgba(108,99,255,0.15)] rounded-2xl overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={book.image_url}
          alt={book.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16213e] via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span className={`text-xs px-2 py-1 rounded-full border font-medium ${categoryColor[book.category] || "bg-slate-500/20 text-slate-300 border-slate-500/30"}`}>
            {book.category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${book.available_quantity > 0 ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"}`}>
            {book.available_quantity > 0 ? `${book.available_quantity} left` : "Unavailable"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-white text-lg leading-tight mb-1 line-clamp-2">{book.title}</h3>
        <p className="text-[#6C63FF] text-sm mb-3 font-medium">by {book.author}</p>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1">{book.description}</p>
        <div className="mt-4">
          <Link
            href={`/books/${book.id}`}
            className="w-full btn btn-sm bg-gradient-to-r from-[#6C63FF] to-[#43E97B] text-white border-none hover:opacity-90 transition-opacity"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
