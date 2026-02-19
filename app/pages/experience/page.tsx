// app/pages/experience/page.tsx
import Link from "next/link";
import SectionsLayout from "@/app/sections-layout";
import { Briefcase, Award, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";

type Role = {
  title: string;
  org: string;
  meta: string;
  bullets: string[];
};

type Cert = {
  id: string;
  name: string;
  issuer: string;
  year: string;
  href?: string;
  logoSrc: string;
};

const roles: Role[] = [
  {
    title: "Founder & CTO",
    org: "Rijxa — Event Management Platform",
    meta: "2024 — Present • Product & engineering",
    bullets: [
      "Owns product direction and full‑stack development across core features and iterations.",
      "Designs workflows for organizers (dashboards, reporting, and operational visibility).",
      "Works end‑to‑end: scoping, UX decisions, implementation, and continuous improvement.",
    ],
  },
  {
    title: "Product Builder",
    org: "YAWO — Mobility Platform",
    meta: "In progress • Startup product development",
    bullets: [
      "Building and validating a mobility product with a focus on user experience and operational clarity.",
      "Iterating quickly based on feedback, metrics, and real constraints from real users.",
    ],
  },
  {
    title: "Technical Assistant",
    org: "Nigerian Association of Computing Students (NACOS), UMYU Chapter",
    meta: "Dec 2025 — Present • Katsina, Nigeria",
    bullets: [
      "Supports student-led technical initiatives and events through planning and coordination.",
      "Assists with tooling, platforms, and execution for community activities.",
    ],
  },
  {
    title: "Lyric Specialist",
    org: "Musixmatch",
    meta: "Feb 2023 — Present • Specialist since Jul 2023 • Remote",
    bullets: [
      "Curates and verifies multilingual lyrics and metadata with consistent quality standards.",
      "Maintains accuracy and reliability across submissions and reviews.",
    ],
  },
  {
    title: "SIWES Intern — Web & Software Development",
    org: "Katsina State Institute of Technology and Management",
    meta: "3‑month SIWES (2025) • Katsina, Nigeria",
    bullets: [
      "Supported development of a school information system access layer for students and staff.",
      "Contributed to SQL-based login and portal flow implementations (within project scope).",
      "Helped with debugging, UI improvements, and documentation.",
      "Practiced a weekly coding cycle using HTML, Excel, Python, Word, and C++.",
    ],
  },
];

const certifications: Cert[] = [
  {
    id: "python-openedg",
    name: "Programming with Python Professional Certificate",
    issuer: "OpenEDG Python Institute",
    year: "2025",
    href: "https://www.linkedin.com/learning/certificates/0181539a5615e9e00947148b8440fe9b6798f1dfe31ae4d565626e0ee665e90b",
    logoSrc: "/experience/python.jfif",
  },
  {
    id: "sustainable-tech",
    name: "Career Essentials in Sustainable Tech",
    issuer: "Microsoft & LinkedIn",
    year: "2024",
    href: "https://www.linkedin.com/learning/certificates/4292092ff3decdf9bc63c5590a77ada5ca6180da70edbe2f22408f48ef063bd8",
    logoSrc: "/experience/microsoft.jfif",
  },
  {
    id: "project-management",
    name: "Career Essentials in Project Management",
    issuer: "Microsoft & LinkedIn",
    year: "2024",
    href: "https://www.linkedin.com/learning/certificates/40ef853c61ac5fd2a1b307f4fda2674caf8e1e378c16cc05edc3f019b95ebd4b",
    logoSrc: "/experience/microsoft.jfif",
  },
  {
    id: "generative-ai",
    name: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    year: "2024",
    href: "https://www.linkedin.com/learning/certificates/601fd5e1b1c58b365dc45dfb43388c8c8f388f5d71267293d7129a1c8fc7ec26",
    logoSrc: "/experience/microsoft.jfif",
  },
  {
    id: "musixmatch-track",
    name: "Graduate, Curator & Specialist Track",
    issuer: "Musixmatch",
    year: "Since Jul 2023",
    href: undefined,
    logoSrc: "/experience/musixmatch.jfif",
  },
];

function SectionCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-5 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
          <Icon className="h-4 w-4 text-neutral-800 dark:text-neutral-100" />
        </span>
        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
          {title}
        </h2>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <SectionsLayout>
      {/* Add padding + center container for mobile */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        {/* HERO */}
        <section className="w-full max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Experience &amp; background
          </p>

          <h1 className="mt-2 text-2xl font-semibold text-neutral-900 sm:text-3xl md:text-4xl dark:text-neutral-50">
            Founder work, internships,{" "}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              and leadership
            </span>
            .
          </h1>

          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            A practical overview of roles I’ve held, what I delivered, and the kind of environments I work best in.
          </p>
        </section>

        {/* GRID */}
        <section className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* LEFT: ROLES TIMELINE */}
          <div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-neutral-700 dark:text-neutral-200" />
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                Roles &amp; experience
              </h2>
            </div>

            {/* Smaller padding on mobile so it doesn't feel squeezed */}
            <div className="relative mt-5 border-l border-neutral-200 pl-4 sm:pl-6 dark:border-neutral-800">
              {roles.map((r) => (
                <div key={`${r.title}-${r.meta}`} className="relative pb-6 sm:pb-8">
                  {/* Marker position tuned per breakpoint */}
                  <span className="absolute -left-[7px] sm:-left-[9px] top-6 h-4 w-4 rounded-full border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900" />

                  <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-5 dark:border-neutral-800 dark:bg-neutral-900">
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50 break-words">
                        {r.title}
                      </h3>
                      <p className="text-sm text-neutral-700 dark:text-neutral-200 break-words">
                        {r.org}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 break-words">
                        {r.meta}
                      </p>
                    </div>

                    <ul className="mt-4 list-disc space-y-2 pl-4 sm:pl-5 text-sm text-neutral-600 dark:text-neutral-300">
                      {r.bullets.map((b) => (
                        <li key={b} className="break-words">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: CARDS */}
          <div className="space-y-5">
            <SectionCard icon={Sparkles} title="How I work">
              <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
                <li>Product-first mindset: clear workflows, clean UX, measurable outcomes.</li>
                <li>Builds for maintainability: readable code, reusable components, structured data flows.</li>
                <li>Ships iteratively: feedback loops, continuous improvement, reliable delivery.</li>
              </ul>

              <div className="mt-4">
                <Link
                  href="/pages/skills"
                  className="inline-flex items-center text-sm font-medium text-violet-600 hover:text-violet-500"
                >
                  View Skills &amp; Tools <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </SectionCard>

            <SectionCard icon={Award} title="Certifications">
              <div className="grid gap-3">
                {certifications.map((c) => (
                  <div
                    key={c.id}
                    className="rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950"
                  >
                    {/* min-w-0 prevents flex children from forcing overflow on small screens */}
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
                        <img
                          src={c.logoSrc}
                          alt={c.issuer}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 break-words">
                          {c.name}
                        </p>
                        <p className="mt-0.5 text-xs text-neutral-600 dark:text-neutral-400 break-words">
                          {c.issuer} • {c.year}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3">
                      {c.href ? (
                        <a
                          href={c.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-violet-600 px-3 py-2 text-xs font-semibold text-white hover:bg-violet-500"
                        >
                          Verify credential <ArrowUpRight className="h-4 w-4" />
                        </a>
                      ) : (
                        <span className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-neutral-100 px-3 py-2 text-xs font-semibold text-neutral-400 dark:bg-neutral-900 dark:text-neutral-600">
                          Verification unavailable <ArrowUpRight className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard icon={CheckCircle2} title="Strengths">
              <ul className="flex flex-wrap gap-2">
                {[
                  "Product-driven engineering",
                  "Founder mindset & ownership",
                  "Dashboard/reporting workflows",
                  "Documentation-first delivery",
                  "Community leadership",
                  "Consistency & reliability",
                ].map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </SectionCard>
          </div>
        </section>
      </div>
    </SectionsLayout>
  );
}
