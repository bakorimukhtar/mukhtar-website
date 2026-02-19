// app/pages/about/page.tsx
import SectionsLayout from "@/app/sections-layout";

export default function AboutPage() {
  return (
    <SectionsLayout>
      <section className="w-full max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          About Mukhtar
        </h1>

        <div className="space-y-6 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <p>
            I&apos;m Mukhtar Abdullahi Bakori, a full‑stack developer, entrepreneur, and student
            born and raised in Katsina State, Nigeria. I use modern web and desktop technologies
            to help businesses move away from manual, repetitive work and towards clear, reliable
            software that supports their day‑to‑day operations.
          </p>

          <p>
            My work centers on turning real business needs into products that feel natural to use.
            I&apos;m currently building and growing startups like <span className="font-medium">Rijxa</span> and{" "}
            <span className="font-medium">YAWO</span> event and mobility platforms focused on how people
            move, gather, and experience services in their cities. Alongside these products, I take on
            projects that streamline processes for schools, small businesses, and organizations that
            want technology to work for them, not against them.
          </p>

          <p>
            My background includes a SIWES internship where I worked on school information system access
            layers, helping institutions manage data and permissions more effectively. I&apos;ve also
            contributed as a lyric specialist at Musixmatch, and I serve in campus leadership as the
            Technical Assistant of NACOS UMYU Chapter experience that combines product thinking, systems
            development, and active involvement in the developer community.
          </p>

          <p>
            Whether it&apos;s a school portal, an internal dashboard, or a new platform from scratch,
            I care about clarity, maintainability, and long‑term impact. I aim to be a partner, not just
            a coder someone who listens carefully, understands constraints, and ships software that
            supports real goals for teams, founders, and organizations.
          </p>
        </div>
      </section>
    </SectionsLayout>
  );
}
