// app/theme-provider.tsx
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type ThemeContextValue = {
  dark: boolean;
  toggleTheme: () => void;
  playing: boolean;
  toggleMusic: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const MUSIC_SRC = "/music/track.mp3";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(true);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // default theme based on time: dark from 6pm–7am
  useEffect(() => {
    const hour = new Date().getHours();
    const defaultDark = hour >= 18 || hour < 7;
    setDark(defaultDark);
  }, []);

  // restore preference if saved
  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme-dark");
      if (stored !== null) {
        setDark(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  // apply theme to <html> and persist
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");

    try {
      localStorage.setItem("theme-dark", JSON.stringify(dark));
    } catch {
      // ignore
    }
  }, [dark]);

  // global music toggle
  const toggleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(MUSIC_SRC);
      audioRef.current.loop = true;
    }
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  // stop music if provider ever unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleTheme: () => setDark((v) => !v),
        playing,
        toggleMusic,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return ctx;
}
