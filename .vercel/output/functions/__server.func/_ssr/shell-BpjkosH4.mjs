import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, b as Link, p as useRouterState, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, i as Search, r as Target, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-BpjkosH4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		to: "/browse",
		label: "Jobs",
		search: {
			q: "",
			kind: "job",
			exam: "all"
		}
	},
	{
		to: "/browse",
		label: "Admit cards",
		search: {
			q: "",
			kind: "admit",
			exam: "all"
		}
	},
	{
		to: "/browse",
		label: "Results",
		search: {
			q: "",
			kind: "result",
			exam: "all"
		}
	},
	{
		to: "/browse",
		label: "Answer keys",
		search: {
			q: "",
			kind: "key",
			exam: "all"
		}
	},
	{
		to: "/exams/ssc-cgl",
		label: "SSC CGL",
		search: void 0
	},
	{
		to: "/exams/bank-clerk",
		label: "Bank Clerk",
		search: void 0
	}
];
function Shell({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-line bg-deep text-deep-fg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "flex items-center gap-2 font-display text-lg font-semibold tracking-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, {
									className: "size-5 text-accent",
									"aria-hidden": true
								}), "TargetLocked"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "ml-6 hidden items-center gap-1 lg:flex",
								"aria-label": "Primary",
								children: links.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									search: item.search,
									className: "rounded-md px-2.5 py-2 text-sm text-deep-fg/80 hover:bg-white/10 hover:text-deep-fg",
									activeOptions: { exact: item.to !== "/browse" },
									children: item.label
								}, item.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "ml-auto hidden w-full max-w-xs md:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBox, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "ml-auto inline-flex size-11 items-center justify-center rounded-md hover:bg-white/10 lg:hidden",
								"aria-expanded": open,
								"aria-controls": "mobile-nav",
								onClick: () => setOpen((v) => !v),
								children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Menu"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-white/10 px-4 py-2 md:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBox, {})
					}),
					open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						id: "mobile-nav",
						className: "border-t border-white/10 px-3 py-2 lg:hidden",
						"aria-label": "Mobile",
						children: links.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							search: item.search,
							className: "block rounded-md px-3 py-3 text-base hover:bg-white/10",
							children: item.label
						}, item.label))
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto max-w-6xl px-4 py-8",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-line px-4 py-8 text-center text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium text-ink",
					children: "TargetLocked"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-1 max-w-xl",
					children: "Jobs, admit cards, results, and answer keys for SSC CGL and Bank Clerk, plus the syllabus, pattern, and past numbers Sarkari-style lists skip. Figures marked as compiled are rounded public reports — confirm every date on the official site."
				})]
			})
		]
	});
}
function SearchBox() {
	const navigate = useNavigate();
	const [q, setQ] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		role: "search",
		className: "flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-deep-fg ring-1 ring-white/15",
		onSubmit: (event) => {
			event.preventDefault();
			navigate({
				to: "/browse",
				search: {
					q,
					kind: "all",
					exam: "all"
				}
			});
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
			className: "size-4 shrink-0 text-deep-fg/70",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value: q,
			onChange: (event) => setQ(event.target.value),
			placeholder: "Search updates",
			"aria-label": "Search updates",
			className: "w-full bg-transparent text-sm outline-none placeholder:text-deep-fg/50"
		})]
	});
}
//#endregion
export { Shell as t };
