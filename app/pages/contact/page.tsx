// app/pages/contact/page.tsx
"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import SectionsLayout from "@/app/sections-layout";
import { Mail, Phone, MapPin, Send, X } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.08, staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalError, setModalError] = useState("");

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setModalError("");

    try {
      const res = await fetch("https://formspree.io/f/xbdjnraj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (!res.ok) throw new Error("Request failed");

      setLoading(false);
      setModalOpen(true);
      setFormValues({ name: "", email: "", subject: "", message: "" });
    } catch {
      setLoading(false);
      setModalError(
        "Something went wrong. Please try again, or reach out by email."
      );
      setModalOpen(true);
    }
  };

  return (
    <SectionsLayout>
      <div className="relative w-full max-w-6xl overflow-hidden">
        {/* Background splashes + grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl dark:bg-violet-500/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl dark:bg-fuchsia-500/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(120,120,120,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.10)_1px,transparent_1px)] bg-[size:28px_28px] opacity-30 dark:opacity-20"
        />

        {/* MODAL */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 grid place-items-center bg-black/30 px-4 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl dark:border-neutral-800 dark:bg-neutral-950"
            >
              <button
                className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
                onClick={() => setModalOpen(false)}
                type="button"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              {modalError ? (
                <>
                  <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                    Something went wrong
                  </h2>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {modalError}
                  </p>
                  <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                    You can also reach me directly at{" "}
                    <a
                      className="font-medium text-violet-600 hover:text-violet-500"
                      href="mailto:muntari.audullahi@outlook.com"
                    >
                      muntari.audullahi@outlook.com
                    </a>
                    .
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                    Message received
                  </h2>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    Thanks for reaching out. I’ve received your message and I’ll
                    respond as soon as possible.
                  </p>
                </>
              )}
            </motion.div>
          </div>
        )}

        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="relative mt-2 grid gap-8 lg:grid-cols-2"
        >
          {/* LEFT SIDE */}
          <motion.div variants={item} className="w-full max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              Contact
            </p>

            <h1 className="mt-2 text-3xl font-semibold text-neutral-900 md:text-4xl dark:text-neutral-50">
              Let&apos;s ship{" "}
              <span className="inline-flex items-baseline">
                <span className="text-neutral-900 dark:text-neutral-50">
                  your next&nbsp;
                </span>
                <span className="contact-rotating-words text-violet-600 dark:text-violet-400">
                  <span>release</span>
                  <span>product</span>
                  <span>project</span>
                  <span>app</span>
                </span>
              </span>
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base dark:text-neutral-400">
              Share a brief, a timeline, or an idea. Whether you’re refining an
              existing system or starting from scratch, I help turn requirements
              into clean, maintainable software that teams can rely on.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                <span className="contact-pulse-dot" aria-hidden />
                <span>Open for selective projects &amp; collaborations.</span>
              </div>

              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                Replies usually within 24 hours.
              </span>
            </div>

            <div className="mt-6 space-y-3 text-sm text-neutral-700 dark:text-neutral-200">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <a
                  className="font-medium text-violet-600 hover:text-violet-500"
                  href="mailto:muntari.audullahi@outlook.com"
                >
                  muntari.audullahi@outlook.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <a className="hover:underline" href="tel:+2347026842722">
                  +234 702 684 2722
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span>Katsina, Nigeria</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: FORM */}
          <motion.div variants={item} className="relative">
            {/* Orbits */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-6 -right-8 h-20 w-20 rounded-full border border-violet-500/20"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute top-12 -right-2 h-28 w-28 rounded-full border border-fuchsia-500/15"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-10 -left-8 h-24 w-24 rounded-full border border-neutral-500/10"
            />

            <div className="rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/60">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                    Start with a short note
                  </span>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                    A few sentences about your goal, constraints, and timeline
                    is enough to begin.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium text-neutral-700 dark:text-neutral-200"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formValues.name}
                      onChange={handleChange}
                      required
                      className="h-11 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-900 outline-none ring-violet-500/30 placeholder:text-neutral-400 focus:ring-4 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium text-neutral-700 dark:text-neutral-200"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formValues.email}
                      onChange={handleChange}
                      required
                      className="h-11 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-900 outline-none ring-violet-500/30 placeholder:text-neutral-400 focus:ring-4 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="subject"
                    className="text-xs font-medium text-neutral-700 dark:text-neutral-200"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What would you like to build or improve?"
                    value={formValues.subject}
                    onChange={handleChange}
                    className="h-11 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-900 outline-none ring-violet-500/30 placeholder:text-neutral-400 focus:ring-4 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium text-neutral-700 dark:text-neutral-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Share context, goals, and any useful links."
                    value={formValues.message}
                    onChange={handleChange}
                    required
                    className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-3 py-3 text-sm text-neutral-900 outline-none ring-violet-500/30 placeholder:text-neutral-400 focus:ring-4 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Send className="h-4 w-4" />
                  <span>{loading ? "Sending..." : "Send message"}</span>
                </button>

                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Prefer email? Reach me at{" "}
                  <a
                    className="font-medium text-violet-600 hover:text-violet-500"
                    href="mailto:muntari.audullahi@outlook.com"
                  >
                    muntari.audullahi@outlook.com
                  </a>
                  .
                </p>
              </form>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </SectionsLayout>
  );
}
