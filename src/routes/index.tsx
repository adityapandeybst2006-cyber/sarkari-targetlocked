import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { examLabel, kindLabel, updates } from "@/lib/content";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const spotlight = updates.filter((item) => ["cgl-admit", "ibps-admit", "cgl-job", "ibps-job"].includes(item.id));
  return (
    <Shell>
      <section className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Exam lock, not a notice dump</p>
          <h1 className="mt-2 max-w-xl text-4xl text-ink sm:text-5xl">Know the paper before the admit card drops.</h1>
          <p className="mt-4 max-w-xl text-lg text-muted">
            SarkariTarget covers the live pipeline for SSC CGL and Bank Clerk — jobs, hall tickets, keys, results — and the syllabus, pattern, roadmap, channels, and past cutoffs that generic result sites leave out.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Stat value="10,731" label="SSC CGL posts" />
          <Stat value="~11.6k" label="IBPS Clerk posts" />
          <Stat value="Live" label="Both admit cards" />
          <Stat value="10–11 Oct" label="IBPS prelims" />
        </div>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        <ExamCard
          to="/exams/ssc-cgl"
          kicker="Graduate"
          title="SSC CGL 2026"
          body="Tier-1 is underway through 30 Oct. Pattern, full syllabus, 16-week roadmap, channels, and three years of applicants and UR cutoffs."
        />
        <ExamCard
          to="/exams/bank-clerk"
          kicker="Banking"
          title="Bank Clerk"
          body="IBPS CRP CSA-XVI prelims this weekend, plus SBI Clerk. Prelims and mains pattern, state cutoffs, and a clerk-specific roadmap."
        />
      </section>

      <section className="mt-12">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="text-2xl">What moved</h2>
          <Link to="/browse" search={{ q: "", kind: "all", exam: "all" }} className="text-sm font-semibold text-accent">
            Search all updates
          </Link>
        </div>
        <ul className="grid gap-3">
          {spotlight.map((item) => (
            <li key={item.id} className="rounded-xl border border-line bg-surface p-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted">
                <span>{kindLabel[item.kind]}</span>
                <span aria-hidden>·</span>
                <span>{examLabel[item.exam]}</span>
                <span className="ml-auto normal-case tracking-normal text-good">{item.status}</span>
              </div>
              <h3 className="mt-1 text-xl">{item.title}</h3>
              <p className="mt-1 text-muted">{item.summary}</p>
            </li>
          ))}
        </ul>
      </section>
    </Shell>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-deep px-4 py-4 text-deep-fg">
      <div className="font-display text-2xl text-accent">{value}</div>
      <div className="text-sm text-deep-fg/75">{label}</div>
    </div>
  );
}

function ExamCard({ to, kicker, title, body }: { to: "/exams/ssc-cgl" | "/exams/bank-clerk"; kicker: string; title: string; body: string }) {
  return (
    <Link to={to} className="block rounded-xl border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-accent">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">{kicker}</p>
      <h2 className="mt-1 text-2xl">{title}</h2>
      <p className="mt-2 text-muted">{body}</p>
    </Link>
  );
}
