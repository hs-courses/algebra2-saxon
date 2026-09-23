"use client";

import { useState } from "react";
import { ResizableSidebar } from "./ResizableSidebar";
import { Sidebar } from "./Sidebar";

type Props = {
  sidebarProps: React.ComponentProps<typeof Sidebar>;
  children: React.ReactNode;
};

export function AppShell({ sidebarProps, children }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-full w-full flex-col md:flex-row">
      <header className="flex shrink-0 items-center gap-3 border-b border-slate-200 bg-white px-4 py-3 md:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open lesson navigation"
          className="rounded p-1.5 text-slate-600 hover:bg-slate-100"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          </svg>
        </button>
        <span className="text-sm font-bold text-slate-900">Algebra 2 — Saxon</span>
      </header>

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] transform transition-transform duration-200 ease-out md:static md:z-auto md:w-auto md:max-w-none md:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ResizableSidebar {...sidebarProps} onNavigate={() => setMobileOpen(false)} />
      </div>

      <div className="min-w-0 flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
