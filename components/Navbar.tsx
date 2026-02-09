import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 sticky top-0 bg-black backdrop-blur z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#top" className="font-bold text-lg">
          David
        </Link>
        <div className="flex gap-6">
          <Link href="#about" className="hover:underline">
            About
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
