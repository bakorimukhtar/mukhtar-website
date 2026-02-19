// app/pages/skills/page.tsx
import SectionsLayout from "@/app/sections-layout";
import type { ComponentType } from "react";

// Simple Icons (via react-icons)
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiBootstrap,
  SiTailwindcss,
  SiPhp,
  SiSupabase,
  SiFirebase,
  SiDotnet,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";

// Lucide (for non-brand / safer icons)
import {
  Code2,
  Layout,
  Smartphone,
  Database,
  FileText,
  FileSpreadsheet,
  Presentation,
  Mic,
  Wrench,
} from "lucide-react";

type Skill = {
  name: string;
  Icon: ComponentType<{ className?: string }>;
};

const frontend: Skill[] = [
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Bootstrap", Icon: SiBootstrap },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Responsive Design", Icon: Smartphone },
  { name: "UI Layout / Components", Icon: Layout },
];

const backend: Skill[] = [
  { name: "PHP", Icon: SiPhp },
  { name: "Supabase", Icon: SiSupabase },
  { name: "Firebase", Icon: SiFirebase },
  { name: "C#", Icon: Code2 }, // ✅ replaces SiCsharp (not available in your build)
  { name: ".NET", Icon: SiDotnet },
  { name: "Databases / Data Modeling", Icon: Database },
];

const tools: Skill[] = [
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "Figma (wireframing)", Icon: SiFigma },
  { name: "MS Word", Icon: FileText },
  { name: "MS Excel", Icon: FileSpreadsheet },
  { name: "MS PowerPoint", Icon: Presentation },
  { name: "General Tools / Productivity", Icon: Wrench },
];

const other: Skill[] = [
  { name: "Transcription", Icon: Mic },
  { name: "Lyrics & Metadata Curation", Icon: FileText },
];

function SkillsGrid({ items }: { items: Skill[] }) {
  return (
    <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
      {items.map(({ name, Icon }) => (
        <div
          key={name}
          className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
            <Icon className="h-5 w-5 text-neutral-800 dark:text-neutral-100" />
          </span>

          <span className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function SkillsPage() {
  return (
    <SectionsLayout>
      <section className="w-full max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">
          Skills &amp; Tools
        </h1>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Technologies and tools I use to build web products, internal dashboards, and business platforms.
        </p>

        <div className="mt-8 space-y-10">
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Frontend
            </h2>
            <SkillsGrid items={frontend} />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Backend / Platform
            </h2>
            <SkillsGrid items={backend} />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Tools
            </h2>
            <SkillsGrid items={tools} />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Other
            </h2>
            <SkillsGrid items={other} />
          </div>
        </div>
      </section>
    </SectionsLayout>
  );
}
