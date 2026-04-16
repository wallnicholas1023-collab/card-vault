import { createActor } from "@/backend";
import { ConditionBadge } from "@/components/shared/ConditionBadge";
import { GainLossBadge } from "@/components/shared/GainLossBadge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useCard, useDeleteCard } from "@/hooks/useCards";
import { usePriceHistory } from "@/hooks/usePriceHistory";
import { addPriceEntry } from "@/lib/backend-client";
import type { PriceEntry } from "@/types/cards";
import { useActor } from "@caffeineai/core-infrastructure";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Calendar,
  DollarSign,
  Edit,
  PlusCircle,
  Tag,
  Trash2,
  Trophy,
} from "lucide-react";
import { useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "sonner";

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(n);
}

function formatDate(ts: number) {
  return new Date(ts).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatShortDate(ts: number) {
  return new Date(ts).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

// Custom chart tooltip
function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border/60 rounded-lg shadow-md px-3 py-2 text-xs">
      <p className="font-medium text-foreground">{label}</p>
      <p className="text-primary font-mono font-semibold mt-0.5">
        {formatCurrency(payload[0].value)}
      </p>
    </div>
  );
}

interface PriceEntryFormProps {
  cardId: number;
}

function PriceEntryForm({ cardId }: PriceEntryFormProps) {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  const [value, setValue] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const num = Number(value);
    if (!value || Number.isNaN(num) || num < 0) {
      setError("Enter a valid positive value");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await addPriceEntry(actor, cardId, num, note.trim() || undefined);
      qc.invalidateQueries({ queryKey: ["price-history", cardId] });
      qc.invalidateQueries({ queryKey: ["cards", cardId] });
      qc.invalidateQueries({ queryKey: ["cards"] });
      setValue("");
      setNote("");
      toast.success("Price entry added");
    } catch {
      setError("Failed to add price entry. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3"
      data-ocid="price_entry.form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label htmlFor="pe-value" className="text-sm font-medium">
            Estimated Value ($) <span className="text-destructive">*</span>
          </Label>
          <Input
            id="pe-value"
            type="number"
            step="0.01"
            min={0}
            placeholder="0.00"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={error ? "border-destructive" : ""}
            data-ocid="price_entry.value.input"
          />
          {error && (
            <p
              className="text-xs text-destructive"
              data-ocid="price_entry.value.field_error"
            >
              {error}
            </p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="pe-note" className="text-sm font-medium">
            Note{" "}
            <span className="text-muted-foreground text-xs font-normal">
              (optional)
            </span>
          </Label>
          <Input
            id="pe-note"
            placeholder="e.g. PSA graded, auction sale"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            data-ocid="price_entry.note.input"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          type="submit"
          size="sm"
          disabled={loading}
          className="gap-1.5"
          data-ocid="price_entry.submit_button"
        >
          {loading ? (
            <span
              className="flex items-center gap-2"
              data-ocid="price_entry.loading_state"
            >
              <span className="w-3.5 h-3.5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Adding…
            </span>
          ) : (
            <>
              <PlusCircle className="w-3.5 h-3.5" />
              Add Entry
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function DetailSkeleton() {
  return (
    <div
      className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6"
      data-ocid="card_detail.loading_state"
    >
      <Skeleton className="h-6 w-32" />
      <Skeleton className="h-28 rounded-xl" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {["a", "b", "c", "d"].map((k) => (
          <Skeleton key={k} className="h-20 rounded-xl" />
        ))}
      </div>
      <Skeleton className="h-64 rounded-xl" />
    </div>
  );
}

export default function CardDetailPage() {
  const { cardId } = useParams({ from: "/layout/cards/$cardId" });
  const navigate = useNavigate();
  const cardIdNum = Number(cardId);

  const {
    data: card,
    isLoading: cardLoading,
    isError: cardError,
  } = useCard(cardIdNum);
  const { data: history = [], isLoading: histLoading } =
    usePriceHistory(cardIdNum);
  const deleteCard = useDeleteCard();

  const sortedAsc = [...history].sort((a, b) => a.date - b.date);
  const chartData = sortedAsc.map((entry) => ({
    date: formatShortDate(entry.date),
    value: entry.estimatedValue,
  }));
  const sortedHistory = [...history].sort((a, b) => b.date - a.date);

  async function handleDelete() {
    await deleteCard.mutateAsync(cardIdNum);
    toast.success("Card deleted");
    navigate({ to: "/cards" });
  }

  if (cardLoading) return <DetailSkeleton />;

  if (cardError || !card) {
    return (
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center space-y-4"
        data-ocid="card_detail.error_state"
      >
        <p className="text-lg font-display font-semibold text-foreground">
          Card not found
        </p>
        <p className="text-sm text-muted-foreground">
          This card may have been removed or the link is invalid.
        </p>
        <Button variant="outline" onClick={() => navigate({ to: "/cards" })}>
          Back to Portfolio
        </Button>
      </div>
    );
  }

  return (
    <div
      className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6"
      data-ocid="card_detail.page"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="gap-1.5 text-muted-foreground -ml-2"
          onClick={() => navigate({ to: "/cards" })}
          data-ocid="card_detail.back_button"
        >
          <ArrowLeft className="w-4 h-4" />
          Portfolio
        </Button>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5"
            onClick={() =>
              navigate({ to: "/cards/$cardId/edit", params: { cardId } })
            }
            data-ocid="card_detail.edit_button"
          >
            <Edit className="w-3.5 h-3.5" />
            Edit
          </Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 text-destructive border-destructive/30 hover:bg-destructive/5"
                data-ocid="card_detail.delete_button"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent data-ocid="card_detail.dialog">
              <AlertDialogHeader>
                <AlertDialogTitle>Delete this card?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently remove{" "}
                  <span className="font-semibold text-foreground">
                    {card.playerName} ({card.year})
                  </span>{" "}
                  and all its price history. This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel data-ocid="card_detail.cancel_button">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  onClick={handleDelete}
                  data-ocid="card_detail.confirm_button"
                >
                  {deleteCard.isPending ? "Deleting…" : "Delete Card"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {/* Hero card */}
      <div className="rounded-xl bg-card border border-border/60 shadow-subtle p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="secondary" className="text-xs">
                {card.sport}
              </Badge>
              <ConditionBadge condition={card.condition} />
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground tracking-tight">
              {card.playerName}
            </h1>
            <p className="text-sm text-muted-foreground">
              {card.year} · {card.team}
            </p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1.5">
            <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
              Current Value
            </p>
            <p className="text-3xl font-display font-bold text-foreground">
              {formatCurrency(card.currentValue)}
            </p>
            <GainLossBadge
              purchasePrice={card.purchasePrice}
              currentValue={card.currentValue}
              showAmount
            />
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          {
            icon: DollarSign,
            label: "Purchase Price",
            value: formatCurrency(card.purchasePrice),
            key: "purchase",
          },
          {
            icon: Tag,
            label: "Est. Value",
            value: formatCurrency(card.currentValue),
            key: "value",
          },
          {
            icon: Trophy,
            label: "Condition",
            value: card.condition === "NearMint" ? "Near Mint" : card.condition,
            key: "condition",
          },
          {
            icon: Calendar,
            label: "Date Added",
            value: formatDate(card.dateAdded),
            key: "date",
          },
        ].map(({ icon: Icon, label, value, key }) => (
          <div
            key={key}
            className="rounded-xl bg-card border border-border/60 shadow-subtle p-4 space-y-1.5"
            data-ocid={`card_detail.${key}.card`}
          >
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Icon className="w-3.5 h-3.5" />
              <span className="text-xs font-medium uppercase tracking-wide">
                {label}
              </span>
            </div>
            <p className="font-display text-base font-bold text-foreground truncate">
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Notes */}
      {card.notes && (
        <Card className="border-border/60 shadow-subtle">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-foreground leading-relaxed">
              {card.notes}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Price History Chart */}
      <Card
        className="border-border/60 shadow-subtle"
        data-ocid="card_detail.chart.card"
      >
        <CardHeader className="pb-4 border-b border-border/40">
          <CardTitle className="text-base font-semibold text-foreground">
            Price History
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-5">
          {histLoading ? (
            <Skeleton
              className="h-48 w-full"
              data-ocid="card_detail.chart.loading_state"
            />
          ) : chartData.length < 2 ? (
            <div
              className="h-48 flex flex-col items-center justify-center text-center gap-2"
              data-ocid="card_detail.chart.empty_state"
            >
              <p className="text-sm text-muted-foreground">
                Add at least two price entries to see the chart.
              </p>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={220}>
              <LineChart
                data={chartData}
                margin={{ top: 4, right: 12, left: 8, bottom: 4 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="oklch(0.92 0.004 264)"
                />
                <XAxis
                  dataKey="date"
                  tick={{
                    fontSize: 11,
                    fill: "oklch(0.55 0.02 264)",
                  }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  tickFormatter={(v: number) =>
                    v >= 1000 ? `$${(v / 1000).toFixed(0)}k` : `$${v}`
                  }
                  tick={{
                    fontSize: 11,
                    fill: "oklch(0.55 0.02 264)",
                  }}
                  tickLine={false}
                  axisLine={false}
                  width={52}
                />
                <Tooltip content={<ChartTooltip />} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="oklch(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: "oklch(var(--primary))", r: 3 }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>

      {/* Price Log */}
      <Card
        className="border-border/60 shadow-subtle"
        data-ocid="card_detail.price_log.card"
      >
        <CardHeader className="pb-4 border-b border-border/40">
          <CardTitle className="text-base font-semibold text-foreground">
            Price Log
            <span className="ml-2 text-xs text-muted-foreground font-normal">
              ({history.length} {history.length === 1 ? "entry" : "entries"})
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-5 space-y-4">
          {/* Add entry form */}
          <div className="rounded-lg bg-muted/40 border border-border/40 p-4">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Add Price Entry
            </p>
            <PriceEntryForm cardId={cardIdNum} />
          </div>

          {/* Entry list */}
          {histLoading ? (
            <div
              className="space-y-2"
              data-ocid="card_detail.price_log.loading_state"
            >
              {["a", "b", "c"].map((k) => (
                <Skeleton key={k} className="h-12 w-full rounded-lg" />
              ))}
            </div>
          ) : sortedHistory.length === 0 ? (
            <div
              className="py-8 text-center text-sm text-muted-foreground"
              data-ocid="card_detail.price_log.empty_state"
            >
              No price entries yet. Add your first entry above.
            </div>
          ) : (
            <div className="space-y-1.5" data-ocid="card_detail.price_log.list">
              {sortedHistory.map((entry: PriceEntry, idx: number) => (
                <div
                  key={entry.id}
                  className="flex items-center justify-between rounded-lg border border-border/40 bg-card px-4 py-3 gap-3"
                  data-ocid={`card_detail.price_log.item.${idx + 1}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">
                      {formatDate(entry.date)}
                    </span>
                    {entry.note && (
                      <span className="text-xs text-muted-foreground truncate">
                        {entry.note}
                      </span>
                    )}
                  </div>
                  <span className="font-display font-bold text-sm text-foreground whitespace-nowrap">
                    {formatCurrency(entry.estimatedValue)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
