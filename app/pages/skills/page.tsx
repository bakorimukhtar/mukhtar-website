// app/pages/skills/page.tsx
import SectionsLayout from "@/app/sections-layout";

export default function SkillsPage() {
  return (
    <SectionsLayout>
      <section className="w-full max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Skills &amp; Tools
        </h1>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          List your main languages, frameworks, databases, and tools you use daily.
        </p>
      </section>
    </SectionsLayout>
  );
}
