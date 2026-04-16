import { Minus, TrendingDown, TrendingUp } from "lucide-react";

interface GainLossBadgeProps {
  purchasePrice: number;
  currentValue: number;
  showAmount?: boolean;
  className?: string;
}

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(n);
}

export function GainLossBadge({
  purchasePrice,
  currentValue,
  showAmount = false,
  className = "",
}: GainLossBadgeProps) {
  const diff = currentValue - purchasePrice;
  const pct = purchasePrice > 0 ? (diff / purchasePrice) * 100 : 0;
  const isGain = diff > 0;
  const isLoss = diff < 0;

  const colorClass = isGain
    ? "badge-gain"
    : isLoss
      ? "badge-loss"
      : "bg-muted text-muted-foreground border-border";

  const Icon = isGain ? TrendingUp : isLoss ? TrendingDown : Minus;

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold border ${colorClass} ${className}`}
    >
      <Icon className="w-3 h-3" strokeWidth={2.5} />
      {isGain ? "+" : ""}
      {pct.toFixed(2)}%
      {showAmount && (
        <span className="ml-1 opacity-80">
          {isGain ? "+" : ""}
          {formatCurrency(diff)}
        </span>
      )}
    </span>
  );
}
