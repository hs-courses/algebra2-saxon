"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Sidebar } from "./Sidebar";

const DEFAULT_WIDTH = 260;
const MIN_WIDTH = 200;
const MAX_WIDTH = 480;
const STORAGE_KEY = "sidebar-width";
const DESKTOP_QUERY = "(min-width: 768px)";

type Props = React.ComponentProps<typeof Sidebar> & { onNavigate?: () => void };

export function ResizableSidebar({ onNavigate, ...props }: Props) {
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const [dragging, setDragging] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY);
    setIsDesktop(mql.matches);
    const listener = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", listener);
    return () => mql.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setWidth(clamp(parseInt(stored, 10)));
    } catch {
      // ignore
    }
  }, []);

  const onPointerMove = useCallback((e: PointerEvent) => {
    setWidth(clamp(e.clientX));
  }, []);

  const onPointerUp = useCallback(() => {
    setDragging(false);
    setWidth((w) => {
      try {
        window.localStorage.setItem(STORAGE_KEY, String(w));
      } catch {
        // ignore
      }
      return w;
    });
  }, []);

  useEffect(() => {
    if (!dragging) return;
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [dragging, onPointerMove, onPointerUp]);

  return (
    <div
      ref={containerRef}
      className="flex h-full w-full shrink-0 border-r border-slate-200 bg-white md:w-auto"
      style={isDesktop ? { width } : undefined}
    >
      <div className="min-w-0 flex-1 overflow-hidden">
        <Sidebar {...props} onNavigate={onNavigate} />
      </div>
      <div
        role="separator"
        aria-orientation="vertical"
        onPointerDown={() => setDragging(true)}
        className={`hidden w-1.5 shrink-0 cursor-col-resize bg-transparent hover:bg-indigo-200 md:block ${
          dragging ? "bg-indigo-300" : ""
        }`}
      />
    </div>
  );
}

function clamp(value: number): number {
  return Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, value));
}
