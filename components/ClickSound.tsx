"use client";

import { useEffect, useRef } from "react";

export default function ClickSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/click.wav");
    audioRef.current.volume = 0.35;

    const handleClick = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) {
        return;
      }

      if (event.pointerType === "mouse" && event.button !== 0) {
        return;
      }

      const clickable = target.closest(
        "button, a, [role='button'], [role='link'], input[type='button'], input[type='submit']"
      );

      if (!clickable) {
        return;
      }

      const audio = audioRef.current;
      if (!audio) {
        return;
      }

      audio.currentTime = 0;
      audio.play().catch(() => {});
    };

    document.addEventListener("pointerdown", handleClick, { capture: true });

    return () => {
      document.removeEventListener("pointerdown", handleClick, {
        capture: true,
      });
    };
  }, []);

  return null;
}
