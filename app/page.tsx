// app/page.tsx
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionsLayout from "./sections-layout";

export default function Home() {
  return (
    <SectionsLayout>
      <section className="w-full max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          Mukhtar Abdullahi
        </h1>
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-neutral-700 dark:text-neutral-200">
          A coder by day, problem-solver by night!
        </h2>
        <p className="mt-6 text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
          I am a dedicated Software Engineer specializing in full-stack
          application development. I enjoy crafting responsive web solutions
          using modern technologies while continuously aiming to deliver
          high-quality, comprehensive, user-centric software solutions.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button className="bg-violet-600 hover:bg-violet-500 px-5 py-2.5 text-sm font-semibold">
            Get Resume
            <ExternalLink className="ml-2 h-3 w-3" />
          </Button>

          <Button
            variant="outline"
            className="border-neutral-300 text-neutral-900 hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-50 dark:hover:bg-neutral-900"
          >
            Send Mail
          </Button>
        </div>
      </section>
    </SectionsLayout>
  );
}
