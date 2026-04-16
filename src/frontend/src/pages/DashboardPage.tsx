import { ConditionBadge } from "@/components/shared/ConditionBadge";
import { GainLossBadge } from "@/components/shared/GainLossBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCards } from "@/hooks/useCards";
import {
  usePortfolioHistory,
  usePortfolioStats,
} from "@/hooks/usePortfolioStats";
import type { PortfolioSnapshot, SportCard } from "@/types/cards";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  CreditCard,
  DollarSign,
  PlusCircle,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { motion } from "motion/react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

function formatDateFromTs(ts: number) {
  // Motoko timestamps are in nanoseconds; JS Date uses ms
  const ms = ts > 1e12 ? ts / 1_000_000 : ts;
  return new Date(ms).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

// ─── Stat Card ────────────────────────────────────────────────────────────────

interface StatCardProps {
  label: string;
  value: React.ReactNode;
  sub?: React.ReactNode;
  icon: React.ReactNode;
  delay?: number;
  ocid: string;
}

function StatCard({ label, value, sub, icon, delay = 0, ocid }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.4, 0, 0.2, 1] }}
      data-ocid={ocid}
    >
      <Card className="shadow-subtle hover:shadow-md transition-smooth h-full">
        <CardContent className="pt-5 pb-5 px-5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                {label}
              </p>
              <div className="font-display text-2xl font-bold text-foreground leading-tight truncate">
                {value}
              </div>
              {sub && <div className="mt-2">{sub}</div>}
            </div>
            <div className="rounded-lg p-2.5 bg-primary/10 text-primary shrink-0 mt-0.5">
              {icon}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ─── Skeletons ────────────────────────────────────────────────────────────────

function StatsSkeleton() {
  return (
    <div
      className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      data-ocid="dashboard.stats.loading_state"
    >
      {["sk-a", "sk-b", "sk-c", "sk-d"].map((k) => (
        <Card key={k} className="shadow-subtle">
          <CardContent className="pt-5 pb-5 px-5">
            <Skeleton className="h-3 w-24 mb-3" />
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-3 w-20 mt-2.5" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function ChartSkeleton() {
  return (
    <Card className="shadow-subtle" data-ocid="dashboard.chart.loading_state">
      <CardHeader className="pb-2 border-b border-border">
        <Skeleton className="h-5 w-52" />
      </CardHeader>
      <CardContent className="pt-4">
        <Skeleton className="h-60 w-full rounded-lg" />
      </CardContent>
    </Card>
  );
}

function TableSkeleton() {
  return (
    <Card
      className="shadow-subtle"
      data-ocid="dashboard.top-cards.loading_state"
    >
      <CardHeader className="pb-2 border-b border-border">
        <Skeleton className="h-5 w-44" />
      </CardHeader>
      <CardContent className="p-0">
        {["sk-r1", "sk-r2", "sk-r3", "sk-r4", "sk-r5"].map((k) => (
          <div
            key={k}
            className="flex items-center gap-4 px-5 py-3 border-b border-border last:border-0"
          >
            <Skeleton className="h-3 w-5" />
            <Skeleton className="h-4 flex-1" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-5 w-16" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// ─── Chart Tooltip ────────────────────────────────────────────────────────────

interface TooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

function ChartTooltip({ active, payload, label }: TooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-lg shadow-md px-3.5 py-2.5">
      <p className="text-[11px] text-muted-foreground mb-0.5">{label}</p>
      <p className="font-display font-bold text-base text-foreground">
        {formatCurrency(payload[0].value)}
      </p>
    </div>
  );
}

// ─── Portfolio Chart ──────────────────────────────────────────────────────────

const SAMPLE_HISTORY: PortfolioSnapshot[] = [
  { date: 1704067200000, totalValue: 11200 },
  { date: 1706745600000, totalValue: 14800 },
  { date: 1709251200000, totalValue: 13500 },
  { date: 1711929600000, totalValue: 19200 },
  { date: 1714521600000, totalValue: 23700 },
  { date: 1717200000000, totalValue: 31400 },
];

interface PortfolioChartProps {
  history: PortfolioSnapshot[];
  isEmpty: boolean;
}

function PortfolioChart({ history, isEmpty }: PortfolioChartProps) {
  const source = isEmpty || history.length === 0 ? SAMPLE_HISTORY : history;
  const chartData = source.map((snap) => ({
    date: formatDateFromTs(snap.date),
    value: snap.totalValue,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card className="shadow-subtle" data-ocid="dashboard.chart.card">
        <CardHeader className="pb-3 border-b border-border">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <CardTitle className="font-display text-lg font-semibold">
                Portfolio Value Trend
              </CardTitle>
              {isEmpty && (
                <Badge
                  variant="outline"
                  className="text-[10px] text-muted-foreground"
                >
                  Sample data
                </Badge>
              )}
            </div>
            {chartData.length > 1 && (
              <span className="text-xs text-muted-foreground font-mono">
                {chartData[0]?.date} → {chartData[chartData.length - 1]?.date}
              </span>
            )}
          </div>
        </CardHeader>
        <CardContent className="pt-4 pb-3">
          <ResponsiveContainer width="100%" height={228}>
            <AreaChart
              data={chartData}
              margin={{ top: 4, right: 6, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="cvGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="oklch(0.52 0.16 142)"
                    stopOpacity={0.28}
                  />
                  <stop
                    offset="92%"
                    stopColor="oklch(0.52 0.16 142)"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="oklch(0.88 0.01 0 / 0.8)"
                vertical={false}
              />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 11, fill: "oklch(0.52 0.02 0)" }}
                axisLine={false}
                tickLine={false}
                tickMargin={8}
              />
              <YAxis
                tickFormatter={(v: number) =>
                  v >= 1000 ? `$${(v / 1000).toFixed(0)}k` : `$${v}`
                }
                tick={{ fontSize: 11, fill: "oklch(0.52 0.02 0)" }}
                axisLine={false}
                tickLine={false}
                width={50}
              />
              <Tooltip content={<ChartTooltip />} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="oklch(0.52 0.16 142)"
                strokeWidth={2.5}
                fill="url(#cvGradient)"
                dot={false}
                activeDot={{
                  r: 4,
                  strokeWidth: 0,
                  fill: "oklch(0.52 0.16 142)",
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ─── Top 5 Table ──────────────────────────────────────────────────────────────

function TopCardsTable({ cards }: { cards: SportCard[] }) {
  const top5 = [...cards]
    .sort((a, b) => b.currentValue - a.currentValue)
    .slice(0, 5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.45 }}
    >
      <Card className="shadow-subtle" data-ocid="top-cards.card">
        <CardHeader className="pb-3 border-b border-border">
          <div className="flex items-center justify-between">
            <CardTitle className="font-display text-lg font-semibold">
              Top 5 Most Valuable Cards
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              asChild
              data-ocid="top-cards.view-all-button"
              className="text-primary text-sm font-semibold hover:text-primary"
            >
              <Link to="/cards">View all →</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-b border-border">
                <TableHead className="pl-5 w-10 text-[10px] uppercase tracking-wider">
                  #
                </TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider">
                  Player / Card
                </TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider hidden sm:table-cell">
                  Condition
                </TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-right">
                  Cost
                </TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-right">
                  Value
                </TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-right pr-5">
                  G / L
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {top5.map((card, idx) => {
                const rank = idx + 1;
                return (
                  <TableRow
                    key={card.id}
                    className="cursor-pointer hover:bg-muted/40 transition-colors"
                    data-ocid={`top-cards.item.${rank}`}
                  >
                    <TableCell className="pl-5 text-xs text-muted-foreground font-mono w-10 py-4">
                      {rank}
                    </TableCell>
                    <TableCell className="py-4">
                      <Link
                        to="/cards/$cardId"
                        params={{ cardId: String(card.id) }}
                        className="block"
                      >
                        <span className="font-semibold text-sm text-foreground truncate max-w-[180px] block hover:text-primary transition-colors">
                          {card.playerName}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {card.year} · {card.sport} · {card.team}
                        </span>
                      </Link>
                    </TableCell>
                    <TableCell className="py-4 hidden sm:table-cell">
                      <ConditionBadge condition={card.condition} />
                    </TableCell>
                    <TableCell className="text-right text-sm font-mono text-muted-foreground py-4">
                      {formatCurrency(card.purchasePrice)}
                    </TableCell>
                    <TableCell className="text-right font-display font-bold text-sm text-foreground py-4">
                      {formatCurrency(card.currentValue)}
                    </TableCell>
                    <TableCell className="text-right pr-5 py-4">
                      <GainLossBadge
                        purchasePrice={card.purchasePrice}
                        currentValue={card.currentValue}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────

function EmptyState() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center py-24 px-6 text-center"
      data-ocid="dashboard.empty_state"
    >
      <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 ring-1 ring-primary/20">
        <CreditCard className="w-10 h-10 text-primary" strokeWidth={1.5} />
      </div>
      <h2 className="font-display text-2xl font-bold text-foreground mb-2">
        Your collection is empty
      </h2>
      <p className="text-muted-foreground max-w-sm text-sm leading-relaxed mb-8">
        Start tracking the value of your sports card portfolio. Add your first
        card to see live price insights, portfolio analytics, and performance
        trends.
      </p>
      <Button
        size="lg"
        onClick={() => navigate({ to: "/cards/new" })}
        data-ocid="dashboard.add-first-card-button"
        className="gap-2"
      >
        <PlusCircle className="w-4 h-4" />
        Add Your First Card
      </Button>
    </motion.div>
  );
}

// ─── Dashboard Page ───────────────────────────────────────────────────────────

export default function DashboardPage() {
  const { data: stats, isLoading: statsLoading } = usePortfolioStats();
  const { data: history, isLoading: historyLoading } = usePortfolioHistory();
  const { data: cards, isLoading: cardsLoading } = useCards();

  const isEmpty =
    !statsLoading && !cardsLoading && (!cards || cards.length === 0);
  const gainPositive = (stats?.gainLoss ?? 0) >= 0;

  return (
    <div
      className="flex flex-col gap-7 py-7 px-4 sm:px-6 max-w-7xl mx-auto w-full"
      data-ocid="dashboard.page"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground tracking-tight">
            Portfolio Dashboard
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Track the value and performance of your sports card collection
          </p>
        </div>
        <Button
          asChild
          className="gap-2 hidden sm:flex"
          data-ocid="dashboard.add-card-button"
        >
          <Link to="/cards/new">
            <PlusCircle className="w-4 h-4" />
            Add Card
          </Link>
        </Button>
      </div>

      {/* Stat cards */}
      {statsLoading ? (
        <StatsSkeleton />
      ) : !isEmpty ? (
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          data-ocid="dashboard.stats.section"
        >
          <StatCard
            ocid="dashboard.stat.total-cards"
            label="Total Cards"
            delay={0}
            value={
              <span className="tabular-nums">{stats?.totalCards ?? 0}</span>
            }
            sub={
              <span className="text-xs text-muted-foreground">
                in your collection
              </span>
            }
            icon={<CreditCard className="w-5 h-5" strokeWidth={1.8} />}
          />
          <StatCard
            ocid="dashboard.stat.total-cost"
            label="Total Cost"
            delay={0.08}
            value={formatCurrency(stats?.totalCost ?? 0)}
            sub={
              <span className="text-xs text-muted-foreground">
                purchase price
              </span>
            }
            icon={<Wallet className="w-5 h-5" strokeWidth={1.8} />}
          />
          <StatCard
            ocid="dashboard.stat.current-value"
            label="Current Value"
            delay={0.16}
            value={
              <span className="text-primary">
                {formatCurrency(stats?.totalValue ?? 0)}
              </span>
            }
            sub={
              <span className="text-xs text-muted-foreground">
                market estimate
              </span>
            }
            icon={<DollarSign className="w-5 h-5" strokeWidth={1.8} />}
          />
          <StatCard
            ocid="dashboard.stat.gain-loss"
            label="Total Gain / Loss"
            delay={0.24}
            value={
              <span
                className={
                  gainPositive
                    ? "text-[oklch(0.52_0.16_142)]"
                    : "text-destructive"
                }
              >
                {gainPositive ? "+" : ""}
                {formatCurrency(stats?.gainLoss ?? 0)}
              </span>
            }
            sub={
              stats ? (
                <GainLossBadge
                  purchasePrice={stats.totalCost}
                  currentValue={stats.totalValue}
                  showAmount={false}
                />
              ) : null
            }
            icon={<TrendingUp className="w-5 h-5" strokeWidth={1.8} />}
          />
        </div>
      ) : null}

      {/* Empty state */}
      {isEmpty && <EmptyState />}

      {/* Chart */}
      {historyLoading ? (
        <ChartSkeleton />
      ) : (
        <PortfolioChart history={history ?? []} isEmpty={isEmpty} />
      )}

      {/* Top cards table */}
      {cardsLoading ? (
        <TableSkeleton />
      ) : cards && cards.length > 0 ? (
        <TopCardsTable cards={cards} />
      ) : null}
    </div>
  );
}
