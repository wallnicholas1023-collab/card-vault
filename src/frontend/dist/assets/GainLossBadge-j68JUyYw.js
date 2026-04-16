import { d as createLucideIcon, j as jsxRuntimeExports, T as TrendingUp } from "./index-DeryHgS0.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = createLucideIcon("minus", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
];
const TrendingDown = createLucideIcon("trending-down", __iconNode);
const CONDITION_CONFIG = {
  Mint: {
    label: "Mint",
    bg: "oklch(0.97 0.03 145)",
    color: "oklch(0.35 0.12 145)",
    border: "oklch(0.88 0.07 145)"
  },
  NearMint: {
    label: "Near Mint",
    bg: "oklch(0.97 0.03 175)",
    color: "oklch(0.35 0.10 175)",
    border: "oklch(0.88 0.06 175)"
  },
  Excellent: {
    label: "Excellent",
    bg: "oklch(0.96 0.04 220)",
    color: "oklch(0.35 0.12 220)",
    border: "oklch(0.87 0.07 220)"
  },
  Good: {
    label: "Good",
    bg: "oklch(0.97 0.04 80)",
    color: "oklch(0.40 0.13 75)",
    border: "oklch(0.88 0.08 80)"
  },
  Fair: {
    label: "Fair",
    bg: "oklch(0.97 0.04 50)",
    color: "oklch(0.42 0.13 48)",
    border: "oklch(0.88 0.08 50)"
  },
  Poor: {
    label: "Poor",
    bg: "oklch(0.97 0.03 25)",
    color: "oklch(0.42 0.18 25)",
    border: "oklch(0.88 0.08 25)"
  }
};
function ConditionBadge({
  condition,
  className = ""
}) {
  const cfg = CONDITION_CONFIG[condition];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border ${className}`,
      style: {
        backgroundColor: cfg.bg,
        color: cfg.color,
        borderColor: cfg.border
      },
      children: cfg.label
    }
  );
}
function formatCurrency(n) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format(n);
}
function GainLossBadge({
  purchasePrice,
  currentValue,
  showAmount = false,
  className = ""
}) {
  const diff = currentValue - purchasePrice;
  const pct = purchasePrice > 0 ? diff / purchasePrice * 100 : 0;
  const isGain = diff > 0;
  const isLoss = diff < 0;
  const colorClass = isGain ? "badge-gain" : isLoss ? "badge-loss" : "bg-muted text-muted-foreground border-border";
  const Icon = isGain ? TrendingUp : isLoss ? TrendingDown : Minus;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: `inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold border ${colorClass} ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3 h-3", strokeWidth: 2.5 }),
        isGain ? "+" : "",
        pct.toFixed(2),
        "%",
        showAmount && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 opacity-80", children: [
          isGain ? "+" : "",
          formatCurrency(diff)
        ] })
      ]
    }
  );
}
export {
  ConditionBadge as C,
  GainLossBadge as G
};
