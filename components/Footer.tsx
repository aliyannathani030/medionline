import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 sm:px-16 py-10 sm:py-14 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3.5">
        <span className="w-8 h-8 rounded-full bg-teal-deep text-white flex items-center justify-center font-mono text-sm font-bold">
          Rx
        </span>
        <span className="text-muted text-sm">© 2026 medionline.com — Karachi, Pakistan</span>
      </div>
      <div className="flex gap-6 sm:gap-8 text-sm text-muted flex-wrap justify-center">
        <Link href="/about" className="hover:text-teal-deep transition-colors">About</Link>
        <Link href="/contact" className="hover:text-teal-deep transition-colors">Track Order</Link>
        <Link href="/contact" className="hover:text-teal-deep transition-colors">Become a Seller</Link>
        <Link href="/contact" className="hover:text-teal-deep transition-colors">Contact</Link>
      </div>
    </footer>
  );
}
