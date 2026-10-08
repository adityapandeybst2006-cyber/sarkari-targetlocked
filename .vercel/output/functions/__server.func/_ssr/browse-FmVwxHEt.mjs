import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Shell } from "./shell-BpjkosH4.mjs";
import { n as Route$2 } from "./router-CDUS_MJy.mjs";
import { n as filterUpdates, r as kindLabel, t as examLabel } from "./content-oMKd4Vbf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/browse-FmVwxHEt.js
var import_jsx_runtime = require_jsx_runtime();
var kinds = [
	"all",
	"job",
	"admit",
	"result",
	"key"
];
var exams = [
	"all",
	"ssc-cgl",
	"bank-clerk"
];
function Browse() {
	const search = Route$2.useSearch();
	const navigate = Route$2.useNavigate();
	const rows = filterUpdates(search);
	function setFilter(next) {
		navigate({ search: {
			...search,
			...next
		} });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-3xl",
			children: "Updates"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 max-w-2xl text-muted",
			children: ["Filter by what you need and which exam. The header search lands here too.", search.q ? ` Showing matches for “${search.q}”.` : ""]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
				label: "Type",
				children: kinds.map((kind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: search.kind === kind,
					onClick: () => setFilter({ kind }),
					children: kind === "all" ? "All types" : kindLabel[kind]
				}, kind))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
				label: "Exam",
				children: exams.map((exam) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: search.exam === exam,
					onClick: () => setFilter({ exam }),
					children: exam === "all" ? "Both exams" : examLabel[exam]
				}, exam))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-6 text-sm text-muted",
			children: [
				rows.length,
				" update",
				rows.length === 1 ? "" : "s"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 grid gap-3",
			children: rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "rounded-xl border border-dashed border-line bg-surface p-6 text-muted",
				children: "Nothing matches. Clear a filter or try “admit”, “cutoff”, or “IBPS”."
			}) : rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-xl border border-line bg-surface p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: kindLabel[item.kind] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: examLabel[item.exam] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-auto normal-case tracking-normal",
								children: item.date
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 text-xl",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-good",
						children: item.status
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted",
						children: item.summary
					})
				]
			}, item.id))
		})
	] });
}
function FilterRow({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "w-12 text-xs font-semibold uppercase tracking-wide text-muted",
			children: label
		}), children]
	});
}
function Chip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: active ? "rounded-full bg-deep px-3 py-2 text-sm font-semibold text-deep-fg" : "rounded-full border border-line bg-surface px-3 py-2 text-sm text-ink hover:border-accent",
		children
	});
}
//#endregion
export { Browse as component };
