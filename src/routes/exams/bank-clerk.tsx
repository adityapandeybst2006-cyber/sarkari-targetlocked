import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { DataTable, Jump, Note, Section } from "@/components/exam-bits";

export const Route = createFileRoute("/exams/bank-clerk")({ component: BankClerk });

const jumps = [
  { href: "#status", label: "Live status" },
  { href: "#pattern", label: "Exam pattern" },
  { href: "#syllabus", label: "Syllabus" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#channels", label: "YouTube" },
  { href: "#stats", label: "Past stats" },
];

function BankClerk() {
  return (
    <Shell>
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">IBPS and SBI</p>
      <h1 className="mt-1 text-4xl">Bank Clerk</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        IBPS Clerk (CRP CSA-XVI) is the shared clerk exam for participating public-sector banks. SBI runs its own Junior Associate recruitment. Same idea — prelims speed test, then a mains paper that actually decides the job — different portals.
      </p>
      <Jump items={jumps} />

      <Section id="status" title="Live status">
        <h3 className="font-display text-xl">IBPS Clerk 2026</h3>
        <DataTable
          headers={["Stage", "When", "Detail"]}
          rows={[
            ["Notification", "1 Aug 2026", "CRP CSA-XVI"],
            ["Apply", "1–28 Aug 2026", "Closed"],
            ["Vacancies", "Revised ~11,403–11,663", "State and category wise"],
            ["Prelims admit card", "1 Oct 2026", "ibps.in, open through exam dates"],
            ["Prelims", "10 and 11 Oct 2026", "4 shifts typical"],
            ["Prelims result", "Expected early–mid Nov", "State-wise cutoff"],
            ["Mains", "27 Dec 2026", "Call letter later"],
          ]}
        />
        <h3 className="font-display text-xl">SBI Clerk</h3>
        <p className="text-muted">
          SBI publishes Junior Associate (Customer Support and Sales) notices on sbi.co.in/web/careers. 2026 saw prelims call letters for some drives around mid-to-late September. Vacancy, exam date, and cutoff are drive-specific — do not copy IBPS numbers onto SBI.
        </p>
      </Section>

      <Section id="pattern" title="Exam pattern">
        <h3 className="font-display text-xl">IBPS Clerk prelims (qualifying)</h3>
        <DataTable
          headers={["Section", "Questions", "Marks", "Time"]}
          rows={[
            ["English Language", "30", "30", "20 min"],
            ["Numerical Ability", "35", "35", "20 min"],
            ["Reasoning Ability", "35", "35", "20 min"],
            ["Total", "100", "100", "60 min · sectional timing · −0.25"],
          ]}
        />
        <h3 className="font-display text-xl">IBPS Clerk mains</h3>
        <DataTable
          headers={["Section", "Questions", "Marks", "Time"]}
          rows={[
            ["General / Financial Awareness", "40", "50", "20 min"],
            ["General English", "40", "40", "35 min"],
            ["Reasoning & Computer Aptitude", "40", "60", "35 min"],
            ["Quantitative Aptitude", "35", "50", "30 min"],
            ["Total", "155", "200", "120 min · −0.25"],
          ]}
        />
        <Note>
          Prelims marks are not added to the final merit. You only need to clear the state cutoff. Mains score, plus local language where the bank requires it, decides allotment. SBI Clerk prelims is also 100 marks in 60 minutes with the same three sections; mains weights differ slightly — read the SBI information handout for that year.
        </Note>
      </Section>

      <Section id="syllabus" title="Syllabus">
        <details className="rounded-xl border border-line bg-surface p-4" open>
          <summary className="cursor-pointer font-semibold">Numerical ability</summary>
          <p className="mt-2 text-muted">
            Simplification, approximation, quadratic equations, number series, DI (table, pie, bar, caselet), percentage, ratio, average, profit-loss, SI/CI, time-work, boats, trains, mensuration, partnership. Prelims rewards speed on simplification and DI; mains adds longer arithmetic sets.
          </p>
        </details>
        <details className="rounded-xl border border-line bg-surface p-4">
          <summary className="cursor-pointer font-semibold">Reasoning</summary>
          <p className="mt-2 text-muted">
            Puzzles and seating (the bulk of the paper), syllogism, inequality, coding-decoding, blood relation, direction, alphanumeric series, input-output in mains, plus basic computer aptitude (hardware, networking, shortcuts, MS Office concepts) only at mains.
          </p>
        </details>
        <details className="rounded-xl border border-line bg-surface p-4">
          <summary className="cursor-pointer font-semibold">English</summary>
          <p className="mt-2 text-muted">
            Reading comprehension, cloze, error spotting, phrase replacement, para jumbles, fillers, word usage. Prelims English is short and ruthless on time; mains passages are longer.
          </p>
        </details>
        <details className="rounded-xl border border-line bg-surface p-4">
          <summary className="cursor-pointer font-semibold">General / financial awareness (mains)</summary>
          <p className="mt-2 text-muted">
            Last 4–6 months of banking and economy current affairs, RBI policy, budget highlights, banking terms (repo, CRR, NPA, Basel), static banking, government schemes, and a thin layer of national current affairs. This section is where clerk mains is won.
          </p>
        </details>
      </Section>

      <Section id="roadmap" title="Roadmap to 27 December">
        <DataTable
          headers={["Window", "Do this"]}
          rows={[
            ["Now → 11 Oct", "Prelims only. 2 full mocks a day is enough if you review them. Sectional timer is non-negotiable."],
            ["Exam days", "Printed call letter, photo ID, reach the centre early. No last-night formula sheets."],
            ["12 Oct → prelims result", "Start mains GA from today’s newspaper and a monthly banking PDF. Do not wait for the result."],
            ["Result → 27 Dec", "Mains mocks, puzzle sets of 4–5 questions, and a GA revision notebook you can finish in a weekend."],
            ["After mains", "Local language test if your state and bank ask for it. Documents as per the allotment notice."],
          ]}
        />
      </Section>

      <Section id="channels" title="YouTube channels">
        <DataTable
          headers={["Channel", "Use it for", "Link"]}
          rows={[
            ["Banking Wallah", "Full clerk courses and daily practice", "youtube.com/@bankingwallah"],
            ["Adda247", "Exam-day analysis and CA", "youtube.com/@Adda247"],
            ["Oliveboard", "Mock percentiles and strategy", "youtube.com/@oliveboard"],
            ["Career Power", "Quant and reasoning classes", "youtube.com/@careerpower"],
            ["Guidely", "Mains GA and clerk-specific sets", "youtube.com/@guidely"],
          ]}
        />
        <Note>Prefer teachers who show sectional timing. A two-hour untimed puzzle class will not help a 20-minute prelims section.</Note>
      </Section>

      <Section id="stats" title="Past stats">
        <Note>
          IBPS cutoffs are state-wise, not one national number. Figures below are rounded public reports for orientation. The scorecard PDF is the only official source. “Selected” means provisionally allotted, which is close to vacancies after reserve lists.
        </Note>
        <DataTable
          headers={["Cycle", "Applied (approx)", "Prelims appeared", "Vacancies", "What selection looked like"]}
          rows={[
            ["IBPS Clerk 2023 (CSA-XIII)", "~40 lakh+", "high 20s lakh", "~4,500", "State prelims cutoffs often ~75–85/100 in competitive states"],
            ["IBPS Clerk 2024", "~35–40 lakh", "high 20s lakh", "~6,000+", "Same pattern: Andhra, Telangana, UP, Bihar cutoffs diverge by 8–12 marks"],
            ["IBPS Clerk 2025", "similar scale", "not reproduced here", "higher than 2024", "Prelims still qualifying only"],
            ["CRP CSA-XVI 2026", "applications closed", "exam 10–11 Oct", "~11,663 revised", "Cutoff not out"],
          ]}
        />
        <p className="text-muted">
          A useful prelims target in a high-cutoff state is the mid-80s with sectional clearance, not a perfect paper. Mains clerk cutoffs (out of 200) have recently clustered by state; general-category final cutoffs in larger states often land in a broad 70–90 band depending on vacancies and paper difficulty. SBI Clerk prelims cutoffs are also state-wise and are usually published with the result on the SBI careers portal — recent general cutoffs in big states have sat roughly in the 60s to high-70s out of 100, and they move every year.
        </p>
      </Section>
    </Shell>
  );
}
