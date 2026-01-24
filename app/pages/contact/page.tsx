// app/pages/contact/page.tsx
import SectionsLayout from "@/app/sections-layout";

export default function ContactPage() {
  return (
    <SectionsLayout>
      <section className="w-full max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Contact
        </h1>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Share how people can reach you: email, LinkedIn, or a contact form.
        </p>
      </section>
    </SectionsLayout>
  );
}
