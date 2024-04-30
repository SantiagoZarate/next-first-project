"use client";

import { usePathname } from "next/navigation";
import { links } from "@/data/constants";
import Link from "next/link";

export function NavLink() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 items-center">
      {links.map((link) => (
        <Link
          className={`px-4 py-2 border-b capitalize duration-150 transition-colors ${
            pathname === link.path ? "border-red-600" : "border-red-950"
          }`}
          key={link.path}
          href={link.path}
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
}
