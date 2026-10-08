export function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-10 scroll-mt-24">
      <h2 className="text-2xl">{title}</h2>
      <div className="mt-3 space-y-3 text-ink">{children}</div>
    </section>
  );
}

export function Jump({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav className="mt-5 flex flex-wrap gap-2" aria-label="On this page">
      {items.map((item) => (
        <a key={item.href} href={item.href} className="rounded-full border border-line bg-surface px-3 py-2 text-sm hover:border-accent">
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-line bg-surface">
      <table className="w-full min-w-[36rem] text-left text-sm">
        <thead className="bg-deep text-deep-fg">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-3 py-2 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("|")} className="border-t border-line">
              {row.map((cell) => (
                <td key={cell} className="px-3 py-2 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Note({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted">{children}</p>;
}
