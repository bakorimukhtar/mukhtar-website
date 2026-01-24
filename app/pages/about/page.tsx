// app/pages/about/page.tsx
import SectionsLayout from "@/app/sections-layout";

export default function AboutPage() {
  return (
    <SectionsLayout>
      <section className="w-full max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          About Me
        </h1>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Write about your background, experience, and what you are focused on
          here.
        </p>
      </section>
    </SectionsLayout>
  );
}
