import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Shell } from "./shell-BpjkosH4.mjs";
import { i as updates, r as kindLabel, t as examLabel } from "./content-oMKd4Vbf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D2eDomgd.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const spotlight = updates.filter((item) => [
		"cgl-admit",
		"ibps-admit",
		"cgl-job",
		"ibps-job"
	].includes(item.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-widest text-accent",
					children: "Exam lock, not a notice dump"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 max-w-xl text-4xl text-ink sm:text-5xl",
					children: "Know the paper before the admit card drops."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-lg text-muted",
					children: "TargetLocked covers the live pipeline for SSC CGL and Bank Clerk — jobs, hall tickets, keys, results — and the syllabus, pattern, roadmap, channels, and past cutoffs that generic result sites leave out."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: "10,731",
						label: "SSC CGL posts"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: "~11.6k",
						label: "IBPS Clerk posts"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: "Live",
						label: "Both admit cards"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: "10–11 Oct",
						label: "IBPS prelims"
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10 grid gap-4 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExamCard, {
				to: "/exams/ssc-cgl",
				kicker: "Graduate",
				title: "SSC CGL 2026",
				body: "Tier-1 is underway through 30 Oct. Pattern, full syllabus, 16-week roadmap, channels, and three years of applicants and UR cutoffs."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExamCard, {
				to: "/exams/bank-clerk",
				kicker: "Banking",
				title: "Bank Clerk",
				body: "IBPS CRP CSA-XVI prelims this weekend, plus SBI Clerk. Prelims and mains pattern, state cutoffs, and a clerk-specific roadmap."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "What moved"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/browse",
					search: {
						q: "",
						kind: "all",
						exam: "all"
					},
					className: "text-sm font-semibold text-accent",
					children: "Search all updates"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3",
				children: spotlight.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
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
									className: "ml-auto normal-case tracking-normal text-good",
									children: item.status
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 text-xl",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-muted",
							children: item.summary
						})
					]
				}, item.id))
			})]
		})
	] });
}
function Stat({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-deep px-4 py-4 text-deep-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-display text-2xl text-accent",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sm text-deep-fg/75",
			children: label
		})]
	});
}
function ExamCard({ to, kicker, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "block rounded-xl border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-accent",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-widest text-accent",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 text-2xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: body
			})
		]
	});
}
//#endregion
export { Home as component };
