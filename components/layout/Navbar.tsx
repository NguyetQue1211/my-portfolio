import Link from "next/link";
import { siteConfig } from "@/lib/metadata";

export default function Navbar() {
  return (
    <nav className="mx-auto max-w-5xl flex justify-between items-center py-8 mb-12 border-b border-gray-100">
      {/* Left: Name + role */}
      <div>
        <Link
          href="/"
          className="font-serif text-2xl font-bold tracking-tight"
        >
          {siteConfig.name}
        </Link>

        <p className="text-xs text-gray-500 font-mono mt-1">
          Product Manager
        </p>
      </div>

      {/* Right: Navigation */}
      <div className="flex gap-6 text-sm font-medium text-gray-600">
        <Link href="/about" className="hover:text-black transition">
          Bio
        </Link>
        <Link href="/work" className="hover:text-black transition">
          Work
        </Link>
        <Link href="/insights" className="hover:text-black transition">
          Insight
        </Link>
      </div>
    </nav>
  );
}
