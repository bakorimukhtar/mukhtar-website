// app/pages/projects/page.tsx
"use client";

import Link from "next/link";
import SectionsLayout from "@/app/sections-layout";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Globe2,
  Rocket,
  Building2,
  Sparkles,
  Mail,
} from "lucide-react";

type Project = {
  id: string;
  title: string;
  category: "Startup" | "Solution";
  role?: string;
  stage?: string;
  summary: string;
  focus?: string;
  stack: string[];
  notes?: string;
  live?: string; // external link
  logoSrc?: string; // /public/projects/....
};

const startups: Project[] = [
  {
    id: "rijxa",
    title: "Rijxa — Event Management Platform",
    category: "Startup",
    role: "Founder & CTO • Full‑stack",
    stage: "Early traction",
    // Put your logo in: /public/projects/rijxa-logo.png
    logoSrc: "/projects/rijxa-logo.png",
    summary:
      "A platform for organizers to manage ticketing, attendee onboarding, QR check‑ins, analytics, and exportable reports.",
    focus: "SaaS • Operations",
    stack: ["React", "PHP", "REST APIs", "SQL", "QR", "Analytics"],
    notes:
      "Designed for real on‑ground workflows: capacity, queues, and reporting—not just demo check‑ins.",
    live: "https://rijxa.com.ng",
  },
  {
    id: "yawo",
    title: "YAWO — Mobility, Delivery & Living Super‑App",
    category: "Startup",
    role: "Product & Technical Lead",
    stage: "Ideation / Build",
    // Put your logo in: /public/projects/yawo-logo.png
    logoSrc: "/projects/yawo-logo.png",
    summary:
      "A super‑app concept combining mobility, delivery, rentals, and logistics—optimized for local usage and long‑term scale.",
    focus: "Mobility • Logistics",
    stack: ["Product design", "System architecture", "Market research"],
    notes:
      "Built with practical constraints in mind: low‑bandwidth UX, clear workflows, and one-wallet style experience.",
  },
];

const solutions: Project[] = [
  {
    id: "school-ms",
    title: "School Management System",
    category: "Solution",
    summary:
      "A school operations suite for managing students, classes, fees/payments tracking, results, and administrative reporting.",
    focus: "Education • Operations",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind", "SQL"],
    notes:
      "Built to reduce manual work, improve visibility, and standardize school processes.",
  },
  {
    id: "property-sales",
    title: "Property & Sales Management System",
    category: "Solution",
    summary:
      "A business tool for tracking properties, inventory, customers, payments, sales pipeline, and performance reporting.",
    focus: "Sales • Admin",
    stack: ["React", "PHP", "REST APIs", "SQL", "Dashboards"],
    notes:
      "Focused on clean workflow screens, clear records, and reporting that supports daily decisions.",
  },
  {
    id: "car-dealership",
    title: "Car Dealership Management System",
    category: "Solution",
    summary:
      "A dealership workflow system for vehicle listings, buyers, installment tracking, documentation, and internal reporting.",
    focus: "Automotive • Operations",
    stack: ["React", "TypeScript", "Firebase", "Tailwind"],
    notes:
      "Designed for speed of entry, searchable records, and reliable tracking of transactions.",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }, // cubic-bezier array
  },
};

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200">
      {children}
    </span>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const isStartup = p.category === "Startup";
  const icon = isStartup ? Rocket : Building2;

  // If no live/demo link yet, route to contact with a prefilled subject.
  const contactHref = `/pages/contact?subject=${encodeURIComponent(
    `Project inquiry: ${p.title}`
  )}`;

  const Icon = icon;

  return (
    <motion.article
      variants={item}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
    >
      <header className="flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
          {p.logoSrc ? (
            <img
              src={p.logoSrc}
              alt={p.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <Icon className="h-5 w-5 text-neutral-800 dark:text-neutral-100" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200">
              {p.category}
            </span>
            {p.stage ? (
              <span className="rounded-full bg-violet-600/10 px-3 py-1 text-xs font-medium text-violet-700 dark:text-violet-300">
                {p.stage}
              </span>
            ) : null}
          </div>

          <h2 className="mt-2 text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-50 break-words">
            {p.title}
          </h2>

          {p.role ? (
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              {p.role}
            </p>
          ) : null}
        </div>
      </header>

      <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        {p.summary}
      </p>

      {p.notes ? (
        <p className="mt-3 text-sm leading-relaxed text-neutral-500 dark:text-neutral-500">
          {p.notes}
        </p>
      ) : null}

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {p.focus ? (
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              Focus
            </p>
            <p className="mt-1 text-sm text-neutral-800 dark:text-neutral-200">
              {p.focus}
            </p>
          </div>
        ) : null}

        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950">
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Stack & work
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-5 flex flex-wrap items-center gap-3">
        {p.live ? (
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-500"
          >
            <Globe2 className="h-4 w-4" />
            <span>View demo</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : (
          <Link
            href={contactHref}
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-500"
          >
            <Mail className="h-4 w-4" />
            <span>View demo</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        )}

        <Link
          href={contactHref}
          className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:hover:bg-neutral-800"
        >
          Request similar build
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </footer>
    </motion.article>
  );
}

export default function ProjectsPage() {
  return (
    <SectionsLayout>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        {/* HERO */}
        <section className="w-full max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Projects
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-neutral-50">
            Products, platforms, and{" "}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              business solutions
            </span>
            .
          </h1>

          <p className="mt-3 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            A mix of founder-led startups and production-focused systems built to support operations, reporting, and growth.
          </p>
        </section>

        {/* STARTUPS */}
        <section className="mt-10">
          <div className="flex items-center gap-2">
            <Rocket className="h-4 w-4 text-neutral-700 dark:text-neutral-200" />
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Startups
            </h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-5 grid gap-4 grid-cols-1 sm:grid-cols-2"
          >
            {startups.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </motion.div>
        </section>

        {/* SOLUTIONS */}
        <section className="mt-12">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-neutral-700 dark:text-neutral-200" />
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Solutions & systems
            </h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-5 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {solutions.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </motion.div>
        </section>

        {/* “Not here?” CTA */}
        <section className="mt-12">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
                <Sparkles className="h-5 w-5 text-neutral-800 dark:text-neutral-100" />
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                  Looking for something else?
                </h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  If what you need isn’t listed here, I can still help—share your goals and I’ll propose an approach, stack, and timeline.
                </p>

                <div className="mt-4">
                  <Link
                    href="/pages/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-500"
                  >
                    Contact me
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SectionsLayout>
  );
}
