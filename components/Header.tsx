import Link from "next/link";
import SearchBox from "./SearchBox";

const navLinks = [
  { href: "/products?category=hospital-disposables", label: "Hospital Disposables" },
  { href: "/products?category=pharmacy-packaging", label: "Pharmacy Packaging" },
  { href: "/products?category=hygiene-personal-care", label: "Hygiene & Care" },
  { href: "/about", label: "For Clinics" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 sm:px-16 py-5 sm:py-6 border-b border-line bg-white flex-wrap gap-4">
      <Link href="/" className="font-display font-semibold text-2xl tracking-tight flex items-center gap-2.5">
        <span className="w-8 h-8 rounded-full bg-teal-deep text-white flex items-center justify-center font-mono text-sm font-bold">
          Rx
        </span>
        medionline<span className="text-amber">.</span>
      </Link>

      <nav className="hidden lg:flex gap-8 text-sm font-medium">
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href} className="hover:text-teal transition-colors">
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4 sm:gap-5">
        <SearchBox />
        <Link
          href="/contact"
          className="bg-teal-deep text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-teal transition-colors"
        >
          Talk to Us
        </Link>
      </div>
    </header>
  );
}
