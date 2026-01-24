// app/header.tsx
"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Github,
  Music,
  Moon,
  Sun,
  ExternalLink,
  Search,
  Pause,
} from "lucide-react";
import { useTheme } from "./theme-provider";

const sections = [
  { href: "/", label: "Introduction" },
  { href: "/pages/about", label: "About Me" },
  { href: "/pages/projects", label: "Projects" },
  { href: "/pages/skills", label: "Skills & Tools" },
  { href: "/pages/experience", label: "Experience" },
  { href: "/pages/education", label: "Education" },
  { href: "/pages/contact", label: "Contact" },
  { href: "/pages/clients", label: "Clients" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState("");

  const { dark, toggleTheme, playing, toggleMusic } = useTheme();

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTimeString(
        d.toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-neutral-200 bg-neutral-50/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
        <div className="flex items-center justify-between px-4 md:px-8 h-14 text-sm">
          {/* left: brand + nav */}
          <div className="flex items-center gap-6">
            <div className="font-semibold tracking-tight">bakoritech</div>

            <nav className="hidden md:flex items-center gap-4 text-neutral-500 dark:text-neutral-400">
              <a
                href="/"
                className="hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                Home
              </a>
              <a
                href="https://www.linkedin.com"
                className="flex items-center gap-1 hover:text-neutral-900 dark:hover:text-neutral-100"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="/resume.pdf"
                className="flex items-center gap-1 hover:text-neutral-900 dark:hover:text-neutral-100"
                target="_blank"
                rel="noreferrer"
              >
                Resume
                <ExternalLink className="h-3 w-3" />
              </a>
            </nav>
          </div>

          {/* center: search (desktop) */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="flex items-center gap-2 w-full rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1.5 text-xs text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400">
              <Search className="h-3.5 w-3.5" />
              <input
                placeholder="Search sections..."
                className="flex-1 bg-transparent outline-none text-xs text-neutral-800 placeholder:text-neutral-400 dark:text-neutral-200 dark:placeholder:text-neutral-500"
              />
              <kbd className="rounded border border-neutral-200 px-1.5 py-0.5 text-[10px] text-neutral-400 dark:border-neutral-700 dark:text-neutral-400">
                ⌘ K
              </kbd>
            </div>
          </div>

          {/* right: status + controls */}
          <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-300">
            <div className="hidden md:flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>{timeString}</span>
            </div>

            {/* music toggle (global) */}
            <button
              type="button"
              onClick={toggleMusic}
              className={`flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800 ${
                playing ? "text-violet-600 dark:text-violet-400" : ""
              }`}
            >
              {playing ? <Pause className="h-4 w-4" /> : <Music className="h-4 w-4" />}
            </button>

            {/* theme toggle (global) */}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            >
              {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            >
              <Github className="h-4 w-4" />
            </a>

            {/* mobile time */}
            <div className="flex md:hidden items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>{timeString}</span>
            </div>

            {/* mobile menu toggle */}
            <button
              type="button"
              className="flex md:hidden h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen sections sheet */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden">
          <div className="absolute inset-y-0 right-0 w-full bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
            <div className="flex items-center justify-between px-4 h-14 border-b border-neutral-200 dark:border-neutral-800">
              <div className="font-semibold tracking-tight">bakoritech</div>
              <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>{timeString}</span>
              </div>
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="px-4 py-4">
              <div className="mb-3 rounded-xl bg-white shadow-sm dark:bg-neutral-900">
                <a
                  href="/"
                  className="flex w-full items-center justify-between px-4 py-3 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Home</span>
                  <span className="text-neutral-400">›</span>
                </a>
              </div>

              <p className="mb-2 text-center text-xs font-semibold tracking-wide text-neutral-500 dark:text-neutral-400">
                SECTIONS
              </p>

              <div className="space-y-2">
                {sections.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="flex w-full items-center justify-between rounded-xl bg-white px-4 py-3 text-sm shadow-sm dark:bg-neutral-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{s.label}</span>
                    <span className="text-neutral-400">›</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
