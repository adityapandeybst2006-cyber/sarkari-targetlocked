import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Shell } from "@/components/shell";
import { examLabel, filterUpdates, kindLabel, type ExamId, type Kind } from "@/lib/content";

const searchSchema = z.object({
  q: z.string().catch(""),
  kind: z.enum(["all", "job", "admit", "result", "key"]).catch("all"),
  exam: z.enum(["all", "ssc-cgl", "bank-clerk"]).catch("all"),
});

export const Route = createFileRoute("/browse")({
  validateSearch: searchSchema,
  component: Browse,
});

const kinds = ["all", "job", "admit", "result", "key"] as const;
const exams = ["all", "ssc-cgl", "bank-clerk"] as const;

function Browse() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const rows = filterUpdates(search);

  function setFilter(next: Partial<typeof search>) {
    navigate({ search: { ...search, ...next } });
  }

  return (
    <Shell>
      <h1 className="text-3xl">Updates</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Filter by what you need and which exam. The header search lands here too.
        {search.q ? ` Showing matches for “${search.q}”.` : ""}
      </p>

      <div className="mt-6 space-y-3">
        <FilterRow label="Type">
          {kinds.map((kind) => (
            <Chip key={kind} active={search.kind === kind} onClick={() => setFilter({ kind })}>
              {kind === "all" ? "All types" : kindLabel[kind as Kind]}
            </Chip>
          ))}
        </FilterRow>
        <FilterRow label="Exam">
          {exams.map((exam) => (
            <Chip key={exam} active={search.exam === exam} onClick={() => setFilter({ exam })}>
              {exam === "all" ? "Both exams" : examLabel[exam as ExamId]}
            </Chip>
          ))}
        </FilterRow>
      </div>

      <p className="mt-6 text-sm text-muted">{rows.length} update{rows.length === 1 ? "" : "s"}</p>
      <ul className="mt-3 grid gap-3">
        {rows.length === 0 ? (
          <li className="rounded-xl border border-dashed border-line bg-surface p-6 text-muted">
            Nothing matches. Clear a filter or try “admit”, “cutoff”, or “IBPS”.
          </li>
        ) : (
          rows.map((item) => (
            <li key={item.id} className="rounded-xl border border-line bg-surface p-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted">
                <span>{kindLabel[item.kind]}</span>
                <span aria-hidden>·</span>
                <span>{examLabel[item.exam]}</span>
                <span className="ml-auto normal-case tracking-normal">{item.date}</span>
              </div>
              <h2 className="mt-1 text-xl">{item.title}</h2>
              <p className="text-sm font-semibold text-good">{item.status}</p>
              <p className="mt-1 text-muted">{item.summary}</p>
            </li>
          ))
        )}
      </ul>
    </Shell>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="w-12 text-xs font-semibold uppercase tracking-wide text-muted">{label}</span>
      {children}
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "rounded-full bg-deep px-3 py-2 text-sm font-semibold text-deep-fg"
          : "rounded-full border border-line bg-surface px-3 py-2 text-sm text-ink hover:border-accent"
      }
    >
      {children}
    </button>
  );
}
