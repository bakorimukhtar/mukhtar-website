"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  greetings: string[];
  afterText: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseMs?: number;
  className?: string;
};

export default function TypewriterText({
  greetings,
  afterText,
  typeSpeed = 35,
  deleteSpeed = 18,
  pauseMs = 1200,
  className = "",
}: Props) {
  const lines = useMemo(
    () => greetings.map((g) => `${g}${afterText}`),
    [greetings, afterText]
  );

  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setLineIndex(0);
    setCharIndex(0);
    setDeleting(false);
  }, [lines.length]);

  useEffect(() => {
    if (!lines.length) return;

    const current = lines[lineIndex] ?? "";
    const doneTyping = !deleting && charIndex >= current.length;
    const doneDeleting = deleting && charIndex <= 0;

    let delay = deleting ? deleteSpeed : typeSpeed;
    if (doneTyping) delay = pauseMs;

    const t = setTimeout(() => {
      if (doneTyping) {
        setDeleting(true);
        return;
      }

      if (doneDeleting) {
        setDeleting(false);
        setLineIndex((i) => (i + 1) % lines.length);
        return;
      }

      setCharIndex((i) => i + (deleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(t);
  }, [lines, lineIndex, charIndex, deleting, typeSpeed, deleteSpeed, pauseMs]);

  const current = lines[lineIndex] ?? "";
  const display = current.slice(0, charIndex);

  return (
    <span className={className}>
      {display}
      <span className="type-cursor ml-0.5" aria-hidden>
        |
      </span>
    </span>
  );
}
