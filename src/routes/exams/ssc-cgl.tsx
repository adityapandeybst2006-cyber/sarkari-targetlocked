import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { DataTable, Jump, Note, Section } from "@/components/exam-bits";

export const Route = createFileRoute("/exams/ssc-cgl")({ component: SscCgl });

const jumps = [
  { href: "#status", label: "Live status" },
  { href: "#pattern", label: "Exam pattern" },
  { href: "#syllabus", label: "Syllabus" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#channels", label: "YouTube" },
  { href: "#stats", label: "Past stats" },
];

function SscCgl() {
  return (
    <Shell>
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">Staff Selection Commission</p>
      <h1 className="mt-1 text-4xl">SSC CGL 2026</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        Combined Graduate Level. About 10,731 Group B and C posts. Tier-1 is a 60-minute CBT running 30 September to 30 October 2026.
      </p>
      <Jump items={jumps} />

      <Section id="status" title="Live status">
        <DataTable
          headers={["Stage", "When", "Where"]}
          rows={[
            ["Notification", "21 May 2026", "ssc.gov.in"],
            ["Apply", "Closed (window was May–June)", "Candidate login"],
            ["City intimation", "From late September", "ssc.gov.in"],
            ["Tier-1 admit card", "From 27 Sep, phased", "Registration no. + password"],
            ["Tier-1 exam", "30 Sep – 30 Oct 2026", "CBT, multiple shifts"],
            ["Answer key", "Not out — expect November", "With response sheet"],
            ["Tier-1 result", "After final key", "ssc.gov.in"],
          ]}
        />
        <Note>Official site only: ssc.gov.in. Do not pay third-party “download” pages.</Note>
      </Section>

      <Section id="pattern" title="Exam pattern">
        <h3 className="font-display text-xl">Tier-1</h3>
        <DataTable
          headers={["Section", "Questions", "Marks", "Time"]}
          rows={[
            ["General Intelligence & Reasoning", "25", "50", "60 minutes for all four"],
            ["General Awareness", "25", "50", "shared"],
            ["Quantitative Aptitude", "25", "50", "shared"],
            ["English Comprehension", "25", "50", "shared"],
            ["Total", "100", "200", "60 min · −0.50 per wrong"],
          ]}
        />
        <h3 className="font-display text-xl">Tier-2 (after you clear Tier-1)</h3>
        <p className="text-muted">
          Paper-I is compulsory and computer-based: Mathematical Abilities, Reasoning, English, General Awareness, plus Computer Knowledge. Session structure and module timing follow the current SSC scheme (Paper-I is the merit paper; a qualifying computer/dest module sits alongside). Paper-II (Statistics) is only for JSO. Typing or DEST applies to posts that need it.
        </p>
        <Note>Normalisation is applied across shifts. A raw score from an easy shift is not comparable to a hard one.</Note>
      </Section>

      <Section id="syllabus" title="Syllabus">
        <details className="rounded-xl border border-line bg-surface p-4" open>
          <summary className="cursor-pointer font-semibold">Quantitative Aptitude</summary>
          <p className="mt-2 text-muted">
            Number system, simplification, percentage, ratio, average, profit-loss, SI/CI, time-work, time-speed-distance, mensuration (2D/3D), algebra, trigonometry, geometry, data interpretation (tables, bar, pie, line), mixture, partnership.
          </p>
        </details>
        <details className="rounded-xl border border-line bg-surface p-4">
          <summary className="cursor-pointer font-semibold">Reasoning</summary>
          <p className="mt-2 text-muted">
            Analogy, classification, series, coding-decoding, blood relation, direction, order-ranking, syllogism, seating (linear and circular), puzzle, mirror/water image, paper folding, embedded figures, matrix, statement-conclusion.
          </p>
        </details>
        <details className="rounded-xl border border-line bg-surface p-4">
          <summary className="cursor-pointer font-semibold">English</summary>
          <p className="mt-2 text-muted">
            Reading comprehension, cloze, error spotting, sentence improvement, fillers, para-jumbles, one-word substitution, idioms, active-passive, direct-indirect, vocabulary in context. Tier-1 is comprehension-heavy; grammar still decides the close calls.
          </p>
        </details>
        <details className="rounded-xl border border-line bg-surface p-4">
          <summary className="cursor-pointer font-semibold">General Awareness</summary>
          <p className="mt-2 text-muted">
            Static GK (history, geography, polity, economy, science), current affairs of the last 6–8 months, schemes, awards, sports, books, and SSC-style “match the following”. Polity + science + last-year current affairs usually carry the section.
          </p>
        </details>
      </Section>

      <Section id="roadmap" title="16-week roadmap">
        <DataTable
          headers={["Weeks", "Focus", "Output"]}
          rows={[
            ["1–4", "NCERT-level maths + grammar rules + one reasoning topic a day", "Topic tests, 70% accuracy before speed"],
            ["5–8", "DI sets, puzzles, RC daily, static GK notebooks", "Sectional mocks twice a week"],
            ["9–12", "Full Tier-1 mocks under 60 minutes, analyse every miss", "Stable attempt band, not random 90+"],
            ["13–15", "Revision only: formulas, vocab, last 8 months of CA", "Error log shrinking"],
            ["Exam week", "City, shift, ID, two photos, route", "Admit card printed, no new books"],
            ["After exam", "Memory-based paper, then objection window", "Do not wait for the key to start Tier-2 maths"],
          ]}
        />
      </Section>

      <Section id="channels" title="YouTube channels worth a playlist">
        <DataTable
          headers={["Channel", "Use it for", "Link"]}
          rows={[
            ["RBE (Revolution By Education)", "CGL quant shortcuts and mocks talk", "youtube.com/@RBE"],
            ["Adda247", "Daily CA and notification explainers", "youtube.com/@Adda247"],
            ["Oliveboard", "Mock analysis and strategy", "youtube.com/@oliveboard"],
            ["WiFiStudy", "Hindi-medium full syllabus classes", "youtube.com/@wifistudy"],
            ["StudyIQ Education", "Polity and current affairs depth", "youtube.com/@StudyIQEducation"],
          ]}
        />
        <Note>Channels move playlists. Cross-check the teacher against the latest SSC scheme before you commit a month to one series.</Note>
      </Section>

      <Section id="stats" title="Past numbers">
        <Note>
          Compiled from widely reported figures, rounded. SSC publishes exact registration, attendance, and normalised cutoffs on its own PDFs — treat this table as orientation, not an official extract.
        </Note>
        <DataTable
          headers={["Cycle", "Applied (approx)", "Tier-1 appeared", "Vacancies (approx)", "UR Tier-1 cutoff (normalised)"]}
          rows={[
            ["CGL 2022", "23 lakh", "~15 lakh", "~36,000 advertised, fewer finally", "~114"],
            ["CGL 2023", "24 lakh", "~16 lakh", "~14,500 class posts in later result", "~150"],
            ["CGL 2024", "24 lakh+", "mid-teens lakh", "notice-wise, lower than 2022 peak", "~150–155"],
            ["CGL 2026 (this cycle)", "Not published here", "Exam still running", "10,731 tentative", "Not out"],
          ]}
        />
        <p className="text-muted">
          Final selection is a small slice of people who appear. A Tier-1 cutoff near 150/200 normalised (UR) has been the recent band; category, post, and shift normalisation move the real number. OBC/EWS/SC/ST cutoffs sit below UR and must be read from the official list, not guessed from a single UR figure.
        </p>
      </Section>
    </Shell>
  );
}
