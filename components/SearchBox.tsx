"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    router.push(trimmed ? `/products?q=${encodeURIComponent(trimmed)}` : "/products");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="hidden sm:flex items-center gap-2 border border-line rounded-full px-4 py-2 text-sm w-56 focus-within:border-teal transition-colors"
    >
      <span aria-hidden className="text-muted">⌕</span>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products…"
        className="outline-none w-full text-ink placeholder:text-muted bg-transparent"
      />
    </form>
  );
}
