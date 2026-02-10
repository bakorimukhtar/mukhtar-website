// app/pages/projects/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import SectionsLayout from "@/app/sections-layout";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Globe2,
  Rocket,
  Building2,
  Sparkles,
  Mail,
  Images,
  FileText,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Screenshot = { src: string; alt: string };

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
  live?: string;
  logoSrc?: string;

  screenshots?: Screenshot[];
  caseStudy?: { href: string; label?: string };
  caseStudyComingSoon?: boolean;
};

const startups: Project[] = [
  {
    id: "rijxa",
    title: "Rijxa — Event Management Platform",
    category: "Startup",
    role: "Founder & CTO • Full‑stack",
    stage: "Early traction",
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

    // Real Estate assets
    caseStudy: {
      href: "/projects/real%20estate/SALES%20AND%20PROPERTY%20MANAGEMENT%20SYSTEM.pdf",
      label: "View case study (PDF)",
    },
    screenshots: [
      { src: "/projects/real%20estate/dashboard.png", alt: "Dashboard" },
      { src: "/projects/real%20estate/clients%20page.png", alt: "Clients page" },
      { src: "/projects/real%20estate/sales.png", alt: "Sales page" },
      { src: "/projects/real%20estate/payments%20page.png", alt: "Payments page" },
      { src: "/projects/real%20estate/discounts%20page.png", alt: "Discounts page" },
      { src: "/projects/real%20estate/plots%20view.png", alt: "Plots view" },
      { src: "/projects/real%20estate/area%20management.png", alt: "Area management" },
      { src: "/projects/real%20estate/user%20management.png", alt: "User management" },
    ],
  },
  {
    id: "car-dealership",
    title: "Automobile Dealership Management System",
    category: "Solution",
    summary:
      "A dealership workflow system for vehicle listings, buyers, installment tracking, documentation, and internal reporting.",
    focus: "Automotive • Operations",
    stack: ["React", "TypeScript", "Firebase", "Tailwind"],
    notes:
      "Designed for speed of entry, searchable records, and reliable tracking of transactions.",

    // Automobile assets
    caseStudyComingSoon: true,
    screenshots: [
      { src: "/projects/automobile/login.png", alt: "Login screen" },
      { src: "/projects/automobile/dashboard.png", alt: "Dashboard" },
      { src: "/projects/automobile/Vehicle%20Inventory.png", alt: "Vehicle inventory" },
      { src: "/projects/automobile/add%20vehicle%201.png", alt: "Add vehicle (step 1)" },
      { src: "/projects/automobile/add%20vehicle%202.png", alt: "Add vehicle (step 2)" },
      { src: "/projects/automobile/Car%20detail%201.png", alt: "Car detail (view 1)" },
      { src: "/projects/automobile/car%20detail%202.png", alt: "Car detail (view 2)" },
      { src: "/projects/automobile/customers%20view.png", alt: "Customers view" },
      { src: "/projects/automobile/payments%20page.png", alt: "Payments page" },
      { src: "/projects/automobile/Sales%20page.png", alt: "Sales page" },
      { src: "/projects/automobile/discount%20page.png", alt: "Discount page" },
      { src: "/projects/automobile/Stand%20View.png", alt: "Stand view" },
      { src: "/projects/automobile/clients%20contracts%20view.png", alt: "Client contracts view" },
      { src: "/projects/automobile/contract%20detail.png", alt: "Contract detail" },
      { src: "/projects/automobile/contract%20detail%202.png", alt: "Contract detail (variant)" },
      { src: "/projects/automobile/user%20management%20page.png", alt: "User management" },
    ],
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
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200">
      {children}
    </span>
  );
}

function ScreenshotsModal({
  open,
  title,
  images,
  index,
  setIndex,
  onClose,
}: {
  open: boolean;
  title: string;
  images: Screenshot[];
  index: number;
  setIndex: (i: number) => void;
  onClose: () => void;
}) {
  const hasImages = images.length > 0;

  const safeIndex = useMemo(() => {
    if (!hasImages) return 0;
    return ((index % images.length) + images.length) % images.length;
  }, [index, images.length, hasImages]);

  const active = hasImages ? images[safeIndex] : null;

  const prev = () => {
    if (!hasImages) return;
    setIndex((safeIndex - 1 + images.length) % images.length);
  };

  const next = () => {
    if (!hasImages) return;
    setIndex((safeIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.documentElement.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, safeIndex, images.length, hasImages]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <motion.button
            type="button"
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Close screenshots"
          />

          {/* Panel */}
          <motion.div
            className="relative w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-950"
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 p-4 sm:p-5 border-b border-neutral-200 dark:border-neutral-800">
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Demo screenshots
                </p>
                <h3 className="mt-1 text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-50 truncate">
                  {title}
                </h3>
                {hasImages ? (
                  <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                    {safeIndex + 1} / {images.length}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                <button
                  type="button"
                  onClick={prev}
                  disabled={!hasImages}
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 dark:hover:bg-neutral-900"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Back</span>
                </button>

                <button
                  type="button"
                  onClick={next}
                  disabled={!hasImages}
                  className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-3 py-2 text-sm font-semibold text-white hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next screenshot"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white p-2 text-neutral-900 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 dark:hover:bg-neutral-900"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Body (scrollable) */}
            <div className="overflow-y-auto p-3 sm:p-5">
              {!hasImages ? (
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  No screenshots available yet.
                </p>
              ) : (
                <div className="grid gap-4 lg:grid-cols-[240px_1fr]">
                  {/* Desktop thumbnails (left) */}
                  <div className="hidden lg:block">
                    <div className="max-h-[70vh] overflow-y-auto pr-1">
                      <div className="grid gap-3">
                        {images.map((img, i) => {
                          const isActive = i === safeIndex;
                          return (
                            <button
                              key={img.src}
                              type="button"
                              onClick={() => setIndex(i)}
                              className={[
                                "w-full text-left rounded-2xl border overflow-hidden bg-neutral-50 dark:bg-neutral-900",
                                isActive
                                  ? "border-violet-500 ring-2 ring-violet-500/30"
                                  : "border-neutral-200 hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700",
                              ].join(" ")}
                              aria-label={`Open ${img.alt}`}
                            >
                              <div className="relative aspect-[16/10] w-full">
                                <Image
                                  src={img.src}
                                  alt={img.alt}
                                  fill
                                  sizes="240px"
                                  className="object-cover"
                                />
                              </div>
                              <div className="p-2">
                                <p className="text-xs text-neutral-600 dark:text-neutral-400 truncate">
                                  {img.alt}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Main preview (right) */}
                  <div className="min-w-0">
                    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-neutral-950">
                      <div className="relative w-full h-[46vh] sm:h-[56vh] lg:h-[64vh]">
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.div
                            key={active?.src}
                            className="absolute inset-0"
                            initial={{ opacity: 0, scale: 0.995 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.995 }}
                            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                          >
                            {active ? (
                              <Image
                                src={active.src}
                                alt={active.alt}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 900px"
                                className="object-contain"
                              />
                            ) : null}
                          </motion.div>
                        </AnimatePresence>

                        {/* Click zones (optional nice UX) */}
                        <button
                          type="button"
                          onClick={prev}
                          className="absolute left-0 top-0 h-full w-1/5 sm:w-1/6 bg-transparent"
                          aria-label="Previous"
                        />
                        <button
                          type="button"
                          onClick={next}
                          className="absolute right-0 top-0 h-full w-1/5 sm:w-1/6 bg-transparent"
                          aria-label="Next"
                        />
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-neutral-950 border-t border-white/10">
                        <p className="text-xs sm:text-sm text-white/80 truncate">
                          {active?.alt}
                        </p>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={prev}
                            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15"
                          >
                            <ChevronLeft className="h-4 w-4" />
                            Back
                          </button>
                          <button
                            type="button"
                            onClick={next}
                            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-3 py-2 text-xs font-semibold text-white hover:bg-violet-500"
                          >
                            Next
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Mobile thumbnails (bottom, horizontal) */}
                    <div className="mt-3 lg:hidden">
                      <div className="flex gap-3 overflow-x-auto pb-2">
                        {images.map((img, i) => {
                          const isActive = i === safeIndex;
                          return (
                            <button
                              key={img.src}
                              type="button"
                              onClick={() => setIndex(i)}
                              className={[
                                "shrink-0 w-[180px] rounded-2xl border overflow-hidden bg-neutral-50 dark:bg-neutral-900",
                                isActive
                                  ? "border-violet-500 ring-2 ring-violet-500/30"
                                  : "border-neutral-200 dark:border-neutral-800",
                              ].join(" ")}
                              aria-label={`Open ${img.alt}`}
                            >
                              <div className="relative aspect-[16/10] w-full">
                                <Image
                                  src={img.src}
                                  alt={img.alt}
                                  fill
                                  sizes="180px"
                                  className="object-cover"
                                />
                              </div>
                              <div className="p-2">
                                <p className="text-xs text-neutral-600 dark:text-neutral-400 truncate">
                                  {img.alt}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
                      Tip: Use left/right arrow keys to navigate.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function ProjectCard({
  p,
  onOpenScreenshots,
}: {
  p: Project;
  onOpenScreenshots: (project: Project, startIndex?: number) => void;
}) {
  const isStartup = p.category === "Startup";
  const Icon = isStartup ? Rocket : Building2;

  const contactHref = `/pages/contact?subject=${encodeURIComponent(
    `Project inquiry: ${p.title}`
  )}`;

  const hasScreens = (p.screenshots?.length ?? 0) > 0;

  return (
    <motion.article
      variants={item}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
    >
      <header className="flex items-start gap-4">
        <div className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
          {p.logoSrc ? (
            <Image
              src={p.logoSrc}
              alt={p.title}
              fill
              sizes="48px"
              className="object-cover"
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
        {/* Live demo OR contact */}
        {p.live ? (
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-500"
          >
            <Globe2 className="h-4 w-4" />
            <span>View live demo</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : (
          <Link
            href={contactHref}
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-500"
          >
            <Mail className="h-4 w-4" />
            <span>Request demo</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        )}

        {/* Screenshots */}
        {hasScreens ? (
          <button
            type="button"
            onClick={() => onOpenScreenshots(p, 0)}
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:hover:bg-neutral-800"
          >
            <Images className="h-4 w-4" />
            View screenshots
            <ArrowUpRight className="h-4 w-4" />
          </button>
        ) : null}

        {/* Case study */}
        {p.caseStudy ? (
          <a
            href={p.caseStudy.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:hover:bg-neutral-800"
          >
            <FileText className="h-4 w-4" />
            <span>{p.caseStudy.label ?? "View case study"}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : p.caseStudyComingSoon ? (
          <span className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm font-semibold text-neutral-500 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400 cursor-not-allowed">
            <FileText className="h-4 w-4" />
            Case study (soon)
          </span>
        ) : null}

        {/* Similar build CTA */}
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
  const [viewer, setViewer] = useState<{
    title: string;
    images: Screenshot[];
    index: number;
  } | null>(null);

  const viewerOpen = !!viewer;

  return (
    <SectionsLayout>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <ScreenshotsModal
          open={viewerOpen}
          title={viewer?.title ?? ""}
          images={viewer?.images ?? []}
          index={viewer?.index ?? 0}
          setIndex={(i) => setViewer((v) => (v ? { ...v, index: i } : v))}
          onClose={() => setViewer(null)}
        />

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
            A mix of founder-led startups and production-focused systems built to support
            operations, reporting, and growth.
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
              <ProjectCard
                key={p.id}
                p={p}
                onOpenScreenshots={(proj, startIndex = 0) =>
                  setViewer({
                    title: proj.title,
                    images: proj.screenshots ?? [],
                    index: startIndex,
                  })
                }
              />
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
              <ProjectCard
                key={p.id}
                p={p}
                onOpenScreenshots={(proj, startIndex = 0) =>
                  setViewer({
                    title: proj.title,
                    images: proj.screenshots ?? [],
                    index: startIndex,
                  })
                }
              />
            ))}
          </motion.div>
        </section>

        {/* CTA */}
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
                  If what you need isn’t listed here, I can still help—share your goals and
                  I’ll propose an approach, stack, and timeline.
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
