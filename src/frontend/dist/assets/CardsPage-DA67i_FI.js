import { d as createLucideIcon, j as jsxRuntimeExports, c as cn, u as useNavigate, r as reactExports, B as Button, S as Skeleton } from "./index-DeryHgS0.js";
import { C as ConditionBadge, G as GainLossBadge } from "./GainLossBadge-j68JUyYw.js";
import { R as Root, C as Content, a as Close, T as Title, D as Description, P as Portal, O as Overlay, b as Trash2 } from "./index-D7q2iiE-.js";
import { I as Input, L as Label } from "./label-DJy4BL2X.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, C as ChevronUp, e as ChevronDown } from "./select-CxcFDs4C.js";
import { d as useCards, e as useDeleteCard } from "./useCards-sQAGuqe2.js";
import { u as ue } from "./index-Bf4B3rpB.js";
import { P as Plus } from "./plus-DAJDPcCa.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "m21 8-4-4-4 4", key: "1c9v7m" }],
  ["path", { d: "M17 4v16", key: "7dpous" }]
];
const ArrowDownUp = createLucideIcon("arrow-down-up", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
];
const ArrowUpDown = createLucideIcon("arrow-up-down", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
const Pencil = createLucideIcon("pencil", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { "data-slot": "dialog", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
const SPORT_OPTIONS = [
  "All",
  "Basketball",
  "Baseball",
  "Football",
  "Soccer",
  "Hockey",
  "Other"
];
const CONDITION_OPTIONS = [
  "All",
  "Mint",
  "NearMint",
  "Excellent",
  "Good",
  "Fair",
  "Poor"
];
const CURRENT_YEAR = (/* @__PURE__ */ new Date()).getFullYear();
function formatCurrency(n) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format(n);
}
function formatDate(ts) {
  const ms = Number(ts) > 1e15 ? Number(ts) / 1e6 : Number(ts);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(ms));
}
function SortHeader({
  label,
  sortKey,
  activeSortKey,
  dir,
  onSort,
  className = ""
}) {
  const isActive = activeSortKey === sortKey;
  const Icon = isActive ? dir === "asc" ? ChevronUp : ChevronDown : ArrowUpDown;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: () => onSort(sortKey),
      className: `flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-150 group ${className}`,
      "data-ocid": `cards.sort.${sortKey}`,
      children: [
        label,
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Icon,
          {
            className: `w-3.5 h-3.5 shrink-0 ${isActive ? "text-primary" : "opacity-40 group-hover:opacity-70"}`,
            strokeWidth: 2.5
          }
        )
      ]
    }
  );
}
const SKEL_WIDTHS = [
  "w-36",
  "w-20",
  "w-24",
  "w-12",
  "w-20",
  "w-24",
  "w-24",
  "w-16",
  "w-16"
];
const SKEL_KEYS = [
  "player",
  "sport",
  "team",
  "year",
  "cond",
  "purchase",
  "current",
  "gain",
  "actions"
];
function SkeletonRow() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border/60", children: SKEL_KEYS.map((k, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: `h-4 ${SKEL_WIDTHS[i]} rounded` }) }, k)) });
}
function CardsPage() {
  const navigate = useNavigate();
  const { data: cards = [], isLoading } = useCards();
  const deleteCard = useDeleteCard();
  const [search, setSearch] = reactExports.useState("");
  const [sport, setSport] = reactExports.useState("All");
  const [condition, setCondition] = reactExports.useState("All");
  const [yearMin, setYearMin] = reactExports.useState("");
  const [yearMax, setYearMax] = reactExports.useState("");
  const [sortKey, setSortKey] = reactExports.useState("dateAdded");
  const [sortDir, setSortDir] = reactExports.useState("desc");
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  function handleSort(key) {
    if (sortKey === key) {
      setSortDir((d) => d === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }
  const filtered = reactExports.useMemo(() => {
    const q = search.toLowerCase().trim();
    const yMin = yearMin ? Number.parseInt(yearMin, 10) : null;
    const yMax = yearMax ? Number.parseInt(yearMax, 10) : null;
    return cards.filter((c) => {
      if (q && !c.playerName.toLowerCase().includes(q) && !c.team.toLowerCase().includes(q))
        return false;
      if (sport !== "All" && c.sport !== sport) return false;
      if (condition !== "All" && c.condition !== condition) return false;
      if (yMin !== null && c.year < yMin) return false;
      if (yMax !== null && c.year > yMax) return false;
      return true;
    }).sort((a, b) => {
      let av = 0;
      let bv = 0;
      switch (sortKey) {
        case "playerName":
          av = a.playerName;
          bv = b.playerName;
          break;
        case "year":
          av = a.year;
          bv = b.year;
          break;
        case "purchasePrice":
          av = a.purchasePrice;
          bv = b.purchasePrice;
          break;
        case "currentValue":
          av = a.currentValue;
          bv = b.currentValue;
          break;
        case "gainLoss":
          av = a.currentValue - a.purchasePrice;
          bv = b.currentValue - b.purchasePrice;
          break;
        case "dateAdded":
          av = a.dateAdded;
          bv = b.dateAdded;
          break;
      }
      if (typeof av === "string" && typeof bv === "string") {
        return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
      }
      return sortDir === "asc" ? av - bv : bv - av;
    });
  }, [cards, search, sport, condition, yearMin, yearMax, sortKey, sortDir]);
  function handleDeleteConfirm() {
    if (!deleteTarget) return;
    deleteCard.mutate(deleteTarget.id, {
      onSuccess: () => {
        ue.success(`"${deleteTarget.playerName}" removed from collection`);
        setDeleteTarget(null);
      },
      onError: () => {
        ue.error("Failed to delete card. Please try again.");
      }
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0 min-h-full", "data-ocid": "cards.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border/60 px-6 py-5 shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground tracking-tight", children: "My Collection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: isLoading ? "Loading…" : `${cards.length} card${cards.length !== 1 ? "s" : ""} in your portfolio` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: () => navigate({ to: "/cards/new" }),
          className: "gap-2 shrink-0",
          "data-ocid": "cards.add_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
            "Add Card"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/30 border-b border-border/60 px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[200px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Search by player or team…",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            className: "pl-9 bg-card border-border",
            "data-ocid": "cards.search_input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Sport" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: sport, onValueChange: setSport, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "w-36 bg-card",
              "data-ocid": "cards.sport_filter.select",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: SPORT_OPTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Condition" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: condition, onValueChange: setCondition, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "w-36 bg-card",
              "data-ocid": "cards.condition_filter.select",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: CONDITION_OPTIONS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c === "NearMint" ? "Near Mint" : c }, c)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Year Range" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "From",
              value: yearMin,
              onChange: (e) => setYearMin(e.target.value),
              className: "w-20 bg-card border-border text-center",
              type: "number",
              min: 1900,
              max: CURRENT_YEAR,
              "data-ocid": "cards.year_min.input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: "–" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "To",
              value: yearMax,
              onChange: (e) => setYearMax(e.target.value),
              className: "w-20 bg-card border-border text-center",
              type: "number",
              min: 1900,
              max: CURRENT_YEAR,
              "data-ocid": "cards.year_max.input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          size: "icon",
          onClick: () => setSortDir((d) => d === "asc" ? "desc" : "asc"),
          className: "bg-card mt-5",
          "aria-label": `Sort ${sortDir === "asc" ? "descending" : "ascending"}`,
          "data-ocid": "cards.sort_dir.toggle",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownUp, { className: "w-4 h-4" })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-background px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 bg-card overflow-hidden shadow-subtle", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-ocid": "cards.table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/40 border-b border-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SortHeader,
            {
              label: "Player",
              sortKey: "playerName",
              activeSortKey: sortKey,
              dir: sortDir,
              onSort: handleSort
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left hidden lg:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Sport" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left hidden md:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Team" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SortHeader,
            {
              label: "Year",
              sortKey: "year",
              activeSortKey: sortKey,
              dir: sortDir,
              onSort: handleSort
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left hidden sm:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Condition" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SortHeader,
            {
              label: "Purchase",
              sortKey: "purchasePrice",
              activeSortKey: sortKey,
              dir: sortDir,
              onSort: handleSort,
              className: "justify-end"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SortHeader,
            {
              label: "Current",
              sortKey: "currentValue",
              activeSortKey: sortKey,
              dir: sortDir,
              onSort: handleSort,
              className: "justify-end"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-right hidden sm:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SortHeader,
            {
              label: "Gain/Loss",
              sortKey: "gainLoss",
              activeSortKey: sortKey,
              dir: sortDir,
              onSort: handleSort,
              className: "justify-end"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Actions" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
          isLoading && ["sk-1", "sk-2", "sk-3", "sk-4", "sk-5", "sk-6"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonRow, {}, k)),
          !isLoading && filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "td",
            {
              colSpan: 9,
              className: "px-4 py-16 text-center",
              "data-ocid": "cards.empty_state",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-6 h-6 text-muted-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-base", children: cards.length === 0 ? "Your collection is empty" : "No cards match your filters" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: cards.length === 0 ? "Start tracking your sports cards by adding your first card." : "Try adjusting your search or filter criteria." })
                ] }),
                cards.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    onClick: () => navigate({ to: "/cards/new" }),
                    className: "gap-2 mt-1",
                    "data-ocid": "cards.empty_add_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                      "Add Your First Card"
                    ]
                  }
                )
              ] })
            }
          ) }),
          !isLoading && filtered.map((card, idx) => {
            const gain = card.currentValue - card.purchasePrice;
            const isGain = gain >= 0;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-b border-border/40 hover:bg-muted/20 transition-colors duration-100 cursor-pointer",
                onClick: () => navigate({
                  to: "/cards/$cardId",
                  params: { cardId: String(card.id) }
                }),
                onKeyDown: (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigate({
                      to: "/cards/$cardId",
                      params: { cardId: String(card.id) }
                    });
                  }
                },
                tabIndex: 0,
                "data-ocid": `cards.item.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground truncate max-w-[160px]", children: card.playerName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground hidden lg:block", children: formatDate(card.dateAdded) })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 hidden lg:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: card.sport }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 hidden md:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[120px] block text-muted-foreground", children: card.team }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm text-foreground", children: card.year }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 hidden sm:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ConditionBadge, { condition: card.condition }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm text-foreground", children: formatCurrency(card.purchasePrice) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm font-semibold text-foreground", children: formatCurrency(card.currentValue) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right hidden sm:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: `font-mono text-sm font-semibold ${isGain ? "text-[oklch(0.52_0.16_142)]" : "text-destructive"}`,
                        children: [
                          isGain ? "+" : "",
                          formatCurrency(gain)
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      GainLossBadge,
                      {
                        purchasePrice: card.purchasePrice,
                        currentValue: card.currentValue
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: "px-4 py-3 text-right",
                      onClick: (e) => e.stopPropagation(),
                      onKeyDown: (e) => e.stopPropagation(),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            variant: "ghost",
                            size: "icon",
                            className: "h-7 w-7 text-muted-foreground hover:text-foreground hover:bg-muted",
                            onClick: () => navigate({
                              to: "/cards/$cardId",
                              params: { cardId: String(card.id) }
                            }),
                            "aria-label": `View ${card.playerName}`,
                            "data-ocid": `cards.view_button.${idx + 1}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5" })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            variant: "ghost",
                            size: "icon",
                            className: "h-7 w-7 text-muted-foreground hover:text-primary hover:bg-primary/10",
                            onClick: () => navigate({
                              to: "/cards/$cardId/edit",
                              params: { cardId: String(card.id) }
                            }),
                            "aria-label": `Edit ${card.playerName}`,
                            title: "Edit card",
                            "data-ocid": `cards.edit_button.${idx + 1}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-3.5 h-3.5" })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            variant: "ghost",
                            size: "icon",
                            className: "h-7 w-7 text-muted-foreground hover:text-destructive hover:bg-destructive/10",
                            onClick: () => setDeleteTarget(card),
                            "aria-label": `Delete ${card.playerName}`,
                            "data-ocid": `cards.delete_button.${idx + 1}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                          }
                        )
                      ] })
                    }
                  )
                ]
              },
              card.id
            );
          })
        ] })
      ] }) }),
      !isLoading && filtered.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 bg-muted/30 border-t border-border/60 flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          "Showing",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: filtered.length }),
          " ",
          "of",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: cards.length }),
          " ",
          "cards"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Total value:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-semibold text-foreground", children: formatCurrency(
              filtered.reduce((sum, c) => sum + c.currentValue, 0)
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Total cost:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-semibold text-foreground", children: formatCurrency(
              filtered.reduce((sum, c) => sum + c.purchasePrice, 0)
            ) })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!deleteTarget,
        onOpenChange: (open) => {
          if (!open) setDeleteTarget(null);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-ocid": "cards.delete.dialog", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "Delete Card" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogDescription, { children: [
              "Are you sure you want to remove",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: deleteTarget == null ? void 0 : deleteTarget.playerName }),
              " ",
              "(",
              deleteTarget == null ? void 0 : deleteTarget.year,
              ") from your collection? This action cannot be undone."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "gap-2 sm:gap-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                onClick: () => setDeleteTarget(null),
                "data-ocid": "cards.delete.cancel_button",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "destructive",
                onClick: handleDeleteConfirm,
                disabled: deleteCard.isPending,
                "data-ocid": "cards.delete.confirm_button",
                children: deleteCard.isPending ? "Deleting…" : "Delete Card"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
export {
  CardsPage as default
};
