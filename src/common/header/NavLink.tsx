'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/data/constants";

export function NavLink() {
  const pathname = usePathname();
  console.log(links[0].path === pathname);

  return (
    <nav className="flex gap-4 items-center">
      {
        links.map(link => (
          <Link
            key={link.path}
            className={`px-4 py-2 border-b capitalize ${pathname === link.path ? 'border-red-600' : 'border-red-950'}`}
            href={link.path}>
            {link.text}
          </Link>
        ))
      }
    </nav>
  )
}
