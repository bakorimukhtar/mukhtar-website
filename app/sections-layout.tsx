// app/sections-layout.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Introduction" },
  { href: "/pages/about", label: "About Me" },
  { href: "/pages/projects", label: "Projects" },
  { href: "/pages/skills", label: "Skills & Tools" },
  { href: "/pages/experience", label: "Experience" },
  { href: "/pages/education", label: "Education" },
  { href: "/pages/contact", label: "Contact" },
  { href: "/pages/clients", label: "Clients" },
];

export default function SectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex">
      {/* sidebar (desktop only) */}
      <aside className="hidden md:flex flex-col w-64 border-r border-neutral-200 px-4 py-6 text-sm bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
        <p className="mb-4 font-medium text-neutral-600 dark:text-neutral-400">
          Sections
        </p>
        <nav className="space-y-1">
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block w-full rounded-md px-3 py-2 ${
                  active
                    ? "bg-neutral-200 text-neutral-900 font-medium dark:bg-neutral-800 dark:text-neutral-50"
                    : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* main content */}
      <main className="flex-1 px-4 md:px-8 py-8">{children}</main>
    </div>
  );
}
