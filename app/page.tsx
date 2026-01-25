// app/page.tsx
import Link from "next/link";
import { ExternalLink, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionsLayout from "./sections-layout";
import TypewriterText from "./typewriter-text";

const stack = ["Next.js", "TypeScript", "Supabase", "Tailwind", "C#/.NET"];

export default function Home() {
  return (
    <SectionsLayout>
      <section className="w-full max-w-3xl">
        <p className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
          Entrepreneur • Software Engineer
        </p>

        <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          Mukhtar Abdullahi Bakori
        </h1>

        <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-neutral-700 dark:text-neutral-200">
          <TypewriterText
            greetings={["Namaste", "Hey", "Hello", "Bonjour", "Salam", "Ciao"]}
            afterText=", I'm Mukhtar. I'm an entrepreneur and software engineer."
          />
        </h2>

        <p className="mt-6 text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
          I build full‑stack software that helps teams run operations smoothly, streamlining processes, improving
          visibility with dashboards and reports, and delivering reliable systems that are easy to maintain and extend.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
            >
              {t}
            </span>
          ))}

          <Button
            asChild
            variant="outline"
            className="ml-1 border-neutral-300 text-neutral-900 hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-50 dark:hover:bg-neutral-900"
          >
            <Link href="/pages/skills">
              View Skills
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            asChild
            className="bg-violet-600 hover:bg-violet-500 px-5 py-2.5 text-sm font-semibold"
          >
            <Link href="/Mukhtar-Abdullahi-Bakori-Resume.pdf" target="_blank">
              Get Resume
              <ExternalLink className="ml-2 h-3 w-3" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-neutral-300 text-neutral-900 hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-50 dark:hover:bg-neutral-900"
          >
            <a href="mailto:bakorimuqhtar@gmail.com?subject=Hello%20Mukhtar%20—%20Project%20Inquiry">
              Send Mail
              <Mail className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </SectionsLayout>
  );
}
