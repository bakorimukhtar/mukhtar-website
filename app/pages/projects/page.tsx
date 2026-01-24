// app/pages/projects/page.tsx
import SectionsLayout from "@/app/sections-layout";

export default function ProjectsPage() {
  return (
    <SectionsLayout>
      <section className="w-full max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Projects
        </h1>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Showcase a few key projects, what problems they solved, and the tech stack you used.
        </p>
      </section>
    </SectionsLayout>
  );
}
