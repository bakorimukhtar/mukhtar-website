// app/header.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Music,
  Moon,
  Sun,
  ExternalLink,
  Search,
  Pause,
  Instagram,
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

/** Simple inline icons (since lucide doesn't include WhatsApp/Snapchat) */
function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.11 17.61c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.74.9-.9 1.09-.17.19-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.47h-.55c-.19 0-.5.07-.76.36-.26.28-1 1-1 2.44 0 1.43 1.03 2.82 1.17 3.02.14.19 2.02 3.08 4.9 4.32.69.3 1.22.48 1.64.61.69.22 1.32.19 1.82.12.56-.08 1.64-.67 1.87-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.19-.54-.33z" />
      <path d="M26.67 5.33C23.85 2.51 20.1.95 16.1.95 7.83.95 1.1 7.68 1.1 15.95c0 2.64.69 5.21 2 7.48L1 31l7.77-2.04a14.9 14.9 0 0 0 7.33 1.88h.01c8.27 0 15-6.73 15-15 0-4-1.56-7.75-4.44-10.51zm-10.57 22.3h-.01a12.35 12.35 0 0 1-6.31-1.74l-.45-.26-4.62 1.21 1.23-4.5-.29-.46a12.4 12.4 0 0 1-1.9-6.62c0-6.83 5.56-12.39 12.39-12.39 3.31 0 6.42 1.29 8.76 3.63a12.31 12.31 0 0 1 3.63 8.76c0 6.83-5.56 12.37-12.43 12.37z" />
    </svg>
  );
}

function SnapchatIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2c-2.8 0-4.6 2.2-4.6 4.9v2.1c0 .3-.2.6-.5.7-.7.3-1.6.8-1.6 1.6 0 .7.7 1.1 1.6 1.4.7.2 1.1.6 1.1 1.1 0 .8-.7 1.4-1.7 1.7-.7.2-1.5.3-1.7.9-.1.3 0 .6.2.8.5.5 2.3.9 3 .9.7 0 1.2.8 1.8 1.2.7.5 1.4.7 2.4.7 1 0 1.7-.2 2.4-.7.6-.4 1.1-1.2 1.8-1.2.7 0 2.5-.4 3-.9.2-.2.3-.5.2-.8-.2-.6-1-.7-1.7-.9-1-.3-1.7-.9-1.7-1.7 0-.5.4-.9 1.1-1.1.9-.3 1.6-.7 1.6-1.4 0-.8-.9-1.3-1.6-1.6-.3-.1-.5-.4-.5-.7V6.9C16.6 4.2 14.8 2 12 2z" />
    </svg>
  );
}

const socialLinks = [
  {
    href: "https://www.instagram.com/bakorimukhtar_?igsh=MWhvZmFkbGxoZmFlMA%3D%3D&utm_source=qr", // TODO: replace
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: "https://wa.me/2347026842722", // TODO: replace with your WhatsApp number
    label: "WhatsApp",
    Icon: WhatsAppIcon,
  },
  {
    href: "https://snapchat.com/t/C5BR6Wym", // TODO: replace
    label: "Snapchat",
    Icon: SnapchatIcon,
  },
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
              <Link
                href="/"
                className="hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                Home
              </Link>
              <a
                href="https://www.linkedin.com/in/bakorimukhtar/"
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
          <div className="flex items-center gap-2 md:gap-3 text-xs text-neutral-500 dark:text-neutral-300">
            {/* clock (always visible now) */}
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>{timeString}</span>
            </div>

            {/* social icons (NOW visible on mobile too) */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                >
                  {/* Icon could be lucide or custom svg */}
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* music toggle (global) */}
            <button
              type="button"
              onClick={toggleMusic}
              className={`flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800 ${
                playing ? "text-violet-600 dark:text-violet-400" : ""
              }`}
              aria-label={playing ? "Pause music" : "Play music"}
              title={playing ? "Pause music" : "Play music"}
            >
              {playing ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Music className="h-4 w-4" />
              )}
            </button>

            {/* theme toggle (global) */}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              title={dark ? "Light mode" : "Dark mode"}
            >
              {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>

            {/* mobile menu toggle */}
            <button
              type="button"
              className="flex md:hidden h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              title="Open menu"
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
                aria-label="Close menu"
                title="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="px-4 py-4">
              <div className="mb-3 rounded-xl bg-white shadow-sm dark:bg-neutral-900">
                <Link
                  href="/"
                  className="flex w-full items-center justify-between px-4 py-3 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Home</span>
                  <span className="text-neutral-400">›</span>
                </Link>
              </div>

              <p className="mb-2 text-center text-xs font-semibold tracking-wide text-neutral-500 dark:text-neutral-400">
                SECTIONS
              </p>

              <div className="space-y-2">
                {sections.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex w-full items-center justify-between rounded-xl bg-white px-4 py-3 text-sm shadow-sm dark:bg-neutral-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{s.label}</span>
                    <span className="text-neutral-400">›</span>
                  </Link>
                ))}
              </div>

              {/* Optional: show socials inside the mobile sheet too */}
              <div className="mt-6">
                <p className="mb-2 text-center text-xs font-semibold tracking-wide text-neutral-500 dark:text-neutral-400">
                  SOCIALS
                </p>
                <div className="flex items-center justify-center gap-3">
                  {socialLinks.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      title={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}