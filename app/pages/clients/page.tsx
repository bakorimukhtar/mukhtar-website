// app/pages/clients/page.tsx
import SectionsLayout from "@/app/sections-layout";
import { Building2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

type Client = {
  id: string;
  name: string;
  industry: string;
  description: string;
  logoSrc: string; // from /public
  website?: string;
};

const clients: Client[] = [
  {
    id: "afkar-schools",
    name: "Afkar Schools",
    industry: "Education",
    description:
      "A school focused on structured learning and administration. I’ve worked on systems that support day‑to‑day school operations and reporting.",
    logoSrc: "/clients/afkar-schools.png",
  },
  {
    id: "legit-empire",
    name: "Legit Empire",
    industry: "Real Estate",
    description:
      "A real estate company focused on property sales and management. I’ve contributed to building tools that improve records, tracking, and operational visibility.",
    logoSrc: "/clients/legit-empire.png",
  },
  {
    id: "solo-equations",
    name: "Solo Equations",
    industry: "Property / Community Management",
    description:
      "A community operations platform built to reduce friction in African estates—supporting payments, administration, and better day‑to‑day coordination for residents and facility managers.",
    logoSrc: "/clients/solo-equations.png",
  },
  {
    id: "akm-group",
    name: "AKM Group Inc.",
    industry: "Innovation / Technology",
    description:
      "A diversified, innovation‑driven parent company focused on building digital, financial, and technology solutions that bridge gaps in emerging markets.",
    logoSrc: "/clients/akm-group.png",
  },
  {
    id: "onlyus",
    name: "Only Us",
    industry: "Social / Consumer App",
    description:
      "A social startup exploring chat‑first experiences with in‑chat games—designed for engagement, retention, and lightweight community interaction.",
    logoSrc: "/clients/onlyus-logo.png",
  },
];

export default function ClientsPage() {
  // Filter out Legit Empire temporarily
  const visibleClients = clients.filter((c) => c.id !== "legit-empire");

  return (
    <SectionsLayout>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <section className="w-full max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Clients &amp; collaborations
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-neutral-50">
            Teams I’ve worked with
          </h1>

          <p className="mt-3 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            A selection of organizations and startups I’ve supported through software delivery, product work, and technical collaboration.
          </p>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleClients.map((c) => (
            <article
              key={c.id}
              className="group rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <header className="flex items-start gap-4">
                <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-white">
                  <img
                    src={c.logoSrc}
                    alt={`${c.name} logo`}
                    className="h-full w-full object-contain p-2 transition-transform duration-200 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-50 break-words">
                    {c.name}
                  </h2>
                  <p className="mt-1 inline-flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                    <Building2 className="h-3.5 w-3.5" />
                    <span className="break-words">{c.industry}</span>
                  </p>
                </div>
              </header>

              <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {c.description}
              </p>

              {c.website ? (
                <footer className="mt-4">
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-500"
                  >
                    Visit website <ArrowUpRight className="h-4 w-4" />
                  </a>
                </footer>
              ) : null}
            </article>
          ))}
        </section>

        <section className="mt-10">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
              Want to work together?
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              If you’re building a product, improving internal processes, or need a reliable engineer to ship with your team, reach out and let’s discuss.
            </p>

            <div className="mt-4">
              <Link
                href="/pages/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-500"
              >
                Contact me <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </SectionsLayout>
  );
}
