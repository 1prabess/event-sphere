"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchForm() {
  const [searchInput, setSearchInput] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/events/${searchInput}`);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        className="w-full h-12 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10"
        placeholder="Search events in any city..."
        spellCheck={false}
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
    </form>
  );
}
