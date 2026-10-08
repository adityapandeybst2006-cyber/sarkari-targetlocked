import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Menu, Search, Target, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/browse", label: "Jobs", search: { q: "", kind: "job", exam: "all" } },
  { to: "/browse", label: "Admit cards", search: { q: "", kind: "admit", exam: "all" } },
  { to: "/browse", label: "Results", search: { q: "", kind: "result", exam: "all" } },
  { to: "/browse", label: "Answer keys", search: { q: "", kind: "key", exam: "all" } },
  { to: "/exams/ssc-cgl", label: "SSC CGL", search: undefined },
  { to: "/exams/bank-clerk", label: "Bank Clerk", search: undefined },
] as const;

export function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-bg text-ink">
      <header className="sticky top-0 z-40 border-b border-line bg-deep text-deep-fg">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
            <Target className="size-5 text-accent" aria-hidden />
            SarkariTarget
          </Link>
          <nav className="ml-6 hidden items-center gap-1 lg:flex" aria-label="Primary">
            {links.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                search={item.search}
                className="rounded-md px-2.5 py-2 text-sm text-deep-fg/80 hover:bg-white/10 hover:text-deep-fg"
                activeOptions={{ exact: item.to !== "/browse" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto hidden w-full max-w-xs md:block">
            <SearchBox />
          </div>
          <button
            type="button"
            className="ml-auto inline-flex size-11 items-center justify-center rounded-md hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">Menu</span>
          </button>
        </div>
        <div className="border-t border-white/10 px-4 py-2 md:hidden">
          <SearchBox />
        </div>
        {open ? (
          <nav id="mobile-nav" className="border-t border-white/10 px-3 py-2 lg:hidden" aria-label="Mobile">
            {links.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                search={item.search}
                className="block rounded-md px-3 py-3 text-base hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      <footer className="border-t border-line px-4 py-8 text-center text-sm text-muted">
        <p className="font-medium text-ink">SarkariTarget</p>
        <p className="mx-auto mt-1 max-w-xl">
          Jobs, admit cards, results, and answer keys for SSC CGL and Bank Clerk, plus the syllabus, pattern, and past numbers Sarkari-style lists skip.
          Figures marked as compiled are rounded public reports — confirm every date on the official site.
        </p>
      </footer>
    </div>
  );
}

function SearchBox() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  return (
    <form
      role="search"
      className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-deep-fg ring-1 ring-white/15"
      onSubmit={(event) => {
        event.preventDefault();
        navigate({ to: "/browse", search: { q, kind: "all", exam: "all" } });
      }}
    >
      <Search className="size-4 shrink-0 text-deep-fg/70" aria-hidden />
      <input
        value={q}
        onChange={(event) => setQ(event.target.value)}
        placeholder="Search updates"
        aria-label="Search updates"
        className="w-full bg-transparent text-sm outline-none placeholder:text-deep-fg/50"
      />
    </form>
  );
}
