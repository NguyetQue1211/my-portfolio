import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-8 mb-12 border-b border-gray-100">
      <div>
        <Link href="/" className="font-serif text-2xl font-bold tracking-tight">
          Laura Phan
        </Link>
        <p className="text-xs text-gray-500 font-mono mt-1">/software-engineer/</p>
      </div>
      
      <div className="flex gap-6 text-sm font-medium text-gray-600">
        <Link href="#bio" className="hover:text-black transition">Bio</Link>
        <Link href="#projects" className="hover:text-black transition">Work</Link>
        <Link href="#insights" className="hover:text-black transition">Writing</Link>
      </div>
    </nav>
  );
}