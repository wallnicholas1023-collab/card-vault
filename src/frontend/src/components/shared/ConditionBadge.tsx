import type { Condition } from "@/types/cards";

interface ConditionBadgeProps {
  condition: Condition;
  className?: string;
}

const CONDITION_CONFIG: Record<
  Condition,
  { label: string; bg: string; color: string; border: string }
> = {
  Mint: {
    label: "Mint",
    bg: "oklch(0.97 0.03 145)",
    color: "oklch(0.35 0.12 145)",
    border: "oklch(0.88 0.07 145)",
  },
  NearMint: {
    label: "Near Mint",
    bg: "oklch(0.97 0.03 175)",
    color: "oklch(0.35 0.10 175)",
    border: "oklch(0.88 0.06 175)",
  },
  Excellent: {
    label: "Excellent",
    bg: "oklch(0.96 0.04 220)",
    color: "oklch(0.35 0.12 220)",
    border: "oklch(0.87 0.07 220)",
  },
  Good: {
    label: "Good",
    bg: "oklch(0.97 0.04 80)",
    color: "oklch(0.40 0.13 75)",
    border: "oklch(0.88 0.08 80)",
  },
  Fair: {
    label: "Fair",
    bg: "oklch(0.97 0.04 50)",
    color: "oklch(0.42 0.13 48)",
    border: "oklch(0.88 0.08 50)",
  },
  Poor: {
    label: "Poor",
    bg: "oklch(0.97 0.03 25)",
    color: "oklch(0.42 0.18 25)",
    border: "oklch(0.88 0.08 25)",
  },
};

export function ConditionBadge({
  condition,
  className = "",
}: ConditionBadgeProps) {
  const cfg = CONDITION_CONFIG[condition];
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border ${className}`}
      style={{
        backgroundColor: cfg.bg,
        color: cfg.color,
        borderColor: cfg.border,
      }}
    >
      {cfg.label}
    </span>
  );
}
