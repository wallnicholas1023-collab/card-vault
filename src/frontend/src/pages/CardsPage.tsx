import { ConditionBadge } from "@/components/shared/ConditionBadge";
import { GainLossBadge } from "@/components/shared/GainLossBadge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useCards, useDeleteCard } from "@/hooks/useCards";
import type { Condition, SportCard } from "@/types/cards";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowDownUp,
  ArrowUpDown,
  ChevronDown,
  ChevronUp,
  Eye,
  Pencil,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

type SortKey =
  | "playerName"
  | "year"
  | "purchasePrice"
  | "currentValue"
  | "gainLoss"
  | "dateAdded";

type SortDir = "asc" | "desc";

const SPORT_OPTIONS = [
  "All",
  "Basketball",
  "Baseball",
  "Football",
  "Soccer",
  "Hockey",
  "Other",
] as const;

const CONDITION_OPTIONS: Array<"All" | Condition> = [
  "All",
  "Mint",
  "NearMint",
  "Excellent",
  "Good",
  "Fair",
  "Poor",
];

const CURRENT_YEAR = new Date().getFullYear();

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(n);
}

function formatDate(ts: number) {
  const ms = Number(ts) > 1e15 ? Number(ts) / 1_000_000 : Number(ts);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(ms));
}

interface SortHeaderProps {
  label: string;
  sortKey: SortKey;
  activeSortKey: SortKey;
  dir: SortDir;
  onSort: (key: SortKey) => void;
  className?: string;
}

function SortHeader({
  label,
  sortKey,
  activeSortKey,
  dir,
  onSort,
  className = "",
}: SortHeaderProps) {
  const isActive = activeSortKey === sortKey;
  const Icon = isActive
    ? dir === "asc"
      ? ChevronUp
      : ChevronDown
    : ArrowUpDown;
  return (
    <button
      type="button"
      onClick={() => onSort(sortKey)}
      className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-150 group ${className}`}
      data-ocid={`cards.sort.${sortKey}`}
    >
      {label}
      <Icon
        className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-primary" : "opacity-40 group-hover:opacity-70"}`}
        strokeWidth={2.5}
      />
    </button>
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
  "w-16",
] as const;
const SKEL_KEYS = [
  "player",
  "sport",
  "team",
  "year",
  "cond",
  "purchase",
  "current",
  "gain",
  "actions",
] as const;

function SkeletonRow() {
  return (
    <tr className="border-b border-border/60">
      {SKEL_KEYS.map((k, i) => (
        <td key={k} className="px-4 py-3">
          <Skeleton className={`h-4 ${SKEL_WIDTHS[i]} rounded`} />
        </td>
      ))}
    </tr>
  );
}

export default function CardsPage() {
  const navigate = useNavigate();
  const { data: cards = [], isLoading } = useCards();
  const deleteCard = useDeleteCard();

  const [search, setSearch] = useState("");
  const [sport, setSport] = useState<string>("All");
  const [condition, setCondition] = useState<string>("All");
  const [yearMin, setYearMin] = useState<string>("");
  const [yearMax, setYearMax] = useState<string>("");
  const [sortKey, setSortKey] = useState<SortKey>("dateAdded");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [deleteTarget, setDeleteTarget] = useState<SportCard | null>(null);

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    const yMin = yearMin ? Number.parseInt(yearMin, 10) : null;
    const yMax = yearMax ? Number.parseInt(yearMax, 10) : null;

    return cards
      .filter((c) => {
        if (
          q &&
          !c.playerName.toLowerCase().includes(q) &&
          !c.team.toLowerCase().includes(q)
        )
          return false;
        if (sport !== "All" && c.sport !== sport) return false;
        if (condition !== "All" && c.condition !== condition) return false;
        if (yMin !== null && c.year < yMin) return false;
        if (yMax !== null && c.year > yMax) return false;
        return true;
      })
      .sort((a, b) => {
        let av: number | string = 0;
        let bv: number | string = 0;
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
          return sortDir === "asc"
            ? av.localeCompare(bv)
            : bv.localeCompare(av);
        }
        return sortDir === "asc"
          ? (av as number) - (bv as number)
          : (bv as number) - (av as number);
      });
  }, [cards, search, sport, condition, yearMin, yearMax, sortKey, sortDir]);

  function handleDeleteConfirm() {
    if (!deleteTarget) return;
    deleteCard.mutate(deleteTarget.id, {
      onSuccess: () => {
        toast.success(`"${deleteTarget.playerName}" removed from collection`);
        setDeleteTarget(null);
      },
      onError: () => {
        toast.error("Failed to delete card. Please try again.");
      },
    });
  }

  return (
    <div className="flex flex-col gap-0 min-h-full" data-ocid="cards.page">
      {/* Page Header */}
      <div className="bg-card border-b border-border/60 px-6 py-5 shadow-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground tracking-tight">
              My Collection
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              {isLoading
                ? "Loading…"
                : `${cards.length} card${cards.length !== 1 ? "s" : ""} in your portfolio`}
            </p>
          </div>
          <Button
            onClick={() => navigate({ to: "/cards/new" })}
            className="gap-2 shrink-0"
            data-ocid="cards.add_button"
          >
            <Plus className="w-4 h-4" />
            Add Card
          </Button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-muted/30 border-b border-border/60 px-6 py-4">
        <div className="flex flex-wrap items-end gap-3">
          {/* Search */}
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <Input
              placeholder="Search by player or team…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-card border-border"
              data-ocid="cards.search_input"
            />
          </div>

          {/* Sport filter */}
          <div className="flex flex-col gap-1">
            <Label className="text-xs text-muted-foreground">Sport</Label>
            <Select value={sport} onValueChange={setSport}>
              <SelectTrigger
                className="w-36 bg-card"
                data-ocid="cards.sport_filter.select"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {SPORT_OPTIONS.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Condition filter */}
          <div className="flex flex-col gap-1">
            <Label className="text-xs text-muted-foreground">Condition</Label>
            <Select value={condition} onValueChange={setCondition}>
              <SelectTrigger
                className="w-36 bg-card"
                data-ocid="cards.condition_filter.select"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CONDITION_OPTIONS.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c === "NearMint" ? "Near Mint" : c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Year range */}
          <div className="flex flex-col gap-1">
            <Label className="text-xs text-muted-foreground">Year Range</Label>
            <div className="flex items-center gap-1.5">
              <Input
                placeholder="From"
                value={yearMin}
                onChange={(e) => setYearMin(e.target.value)}
                className="w-20 bg-card border-border text-center"
                type="number"
                min={1900}
                max={CURRENT_YEAR}
                data-ocid="cards.year_min.input"
              />
              <span className="text-muted-foreground text-sm">–</span>
              <Input
                placeholder="To"
                value={yearMax}
                onChange={(e) => setYearMax(e.target.value)}
                className="w-20 bg-card border-border text-center"
                type="number"
                min={1900}
                max={CURRENT_YEAR}
                data-ocid="cards.year_max.input"
              />
            </div>
          </div>

          {/* Sort direction toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSortDir((d) => (d === "asc" ? "desc" : "asc"))}
            className="bg-card mt-5"
            aria-label={`Sort ${sortDir === "asc" ? "descending" : "ascending"}`}
            data-ocid="cards.sort_dir.toggle"
          >
            <ArrowDownUp className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Table Area */}
      <div className="flex-1 bg-background px-6 py-4">
        <div className="rounded-xl border border-border/60 bg-card overflow-hidden shadow-subtle">
          <div className="overflow-x-auto">
            <table className="w-full text-sm" data-ocid="cards.table">
              <thead>
                <tr className="bg-muted/40 border-b border-border/60">
                  <th className="px-4 py-3 text-left">
                    <SortHeader
                      label="Player"
                      sortKey="playerName"
                      activeSortKey={sortKey}
                      dir={sortDir}
                      onSort={handleSort}
                    />
                  </th>
                  <th className="px-4 py-3 text-left hidden lg:table-cell">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Sport
                    </span>
                  </th>
                  <th className="px-4 py-3 text-left hidden md:table-cell">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Team
                    </span>
                  </th>
                  <th className="px-4 py-3 text-left">
                    <SortHeader
                      label="Year"
                      sortKey="year"
                      activeSortKey={sortKey}
                      dir={sortDir}
                      onSort={handleSort}
                    />
                  </th>
                  <th className="px-4 py-3 text-left hidden sm:table-cell">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Condition
                    </span>
                  </th>
                  <th className="px-4 py-3 text-right">
                    <SortHeader
                      label="Purchase"
                      sortKey="purchasePrice"
                      activeSortKey={sortKey}
                      dir={sortDir}
                      onSort={handleSort}
                      className="justify-end"
                    />
                  </th>
                  <th className="px-4 py-3 text-right">
                    <SortHeader
                      label="Current"
                      sortKey="currentValue"
                      activeSortKey={sortKey}
                      dir={sortDir}
                      onSort={handleSort}
                      className="justify-end"
                    />
                  </th>
                  <th className="px-4 py-3 text-right hidden sm:table-cell">
                    <SortHeader
                      label="Gain/Loss"
                      sortKey="gainLoss"
                      activeSortKey={sortKey}
                      dir={sortDir}
                      onSort={handleSort}
                      className="justify-end"
                    />
                  </th>
                  <th className="px-4 py-3 text-right">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Actions
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading &&
                  ["sk-1", "sk-2", "sk-3", "sk-4", "sk-5", "sk-6"].map((k) => (
                    <SkeletonRow key={k} />
                  ))}

                {!isLoading && filtered.length === 0 && (
                  <tr>
                    <td
                      colSpan={9}
                      className="px-4 py-16 text-center"
                      data-ocid="cards.empty_state"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
                          <Search className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-display font-semibold text-foreground text-base">
                            {cards.length === 0
                              ? "Your collection is empty"
                              : "No cards match your filters"}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {cards.length === 0
                              ? "Start tracking your sports cards by adding your first card."
                              : "Try adjusting your search or filter criteria."}
                          </p>
                        </div>
                        {cards.length === 0 && (
                          <Button
                            onClick={() => navigate({ to: "/cards/new" })}
                            className="gap-2 mt-1"
                            data-ocid="cards.empty_add_button"
                          >
                            <Plus className="w-4 h-4" />
                            Add Your First Card
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                )}

                {!isLoading &&
                  filtered.map((card, idx) => {
                    const gain = card.currentValue - card.purchasePrice;
                    const isGain = gain >= 0;
                    return (
                      <tr
                        key={card.id}
                        className="border-b border-border/40 hover:bg-muted/20 transition-colors duration-100 cursor-pointer"
                        onClick={() =>
                          navigate({
                            to: "/cards/$cardId",
                            params: { cardId: String(card.id) },
                          })
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            navigate({
                              to: "/cards/$cardId",
                              params: { cardId: String(card.id) },
                            });
                          }
                        }}
                        tabIndex={0}
                        data-ocid={`cards.item.${idx + 1}`}
                      >
                        {/* Player */}
                        <td className="px-4 py-3">
                          <div className="flex flex-col min-w-0">
                            <span className="font-semibold text-foreground truncate max-w-[160px]">
                              {card.playerName}
                            </span>
                            <span className="text-xs text-muted-foreground hidden lg:block">
                              {formatDate(card.dateAdded)}
                            </span>
                          </div>
                        </td>

                        {/* Sport */}
                        <td className="px-4 py-3 hidden lg:table-cell">
                          <span className="text-muted-foreground">
                            {card.sport}
                          </span>
                        </td>

                        {/* Team */}
                        <td className="px-4 py-3 hidden md:table-cell">
                          <span className="truncate max-w-[120px] block text-muted-foreground">
                            {card.team}
                          </span>
                        </td>

                        {/* Year */}
                        <td className="px-4 py-3">
                          <span className="font-mono text-sm text-foreground">
                            {card.year}
                          </span>
                        </td>

                        {/* Condition */}
                        <td className="px-4 py-3 hidden sm:table-cell">
                          <ConditionBadge condition={card.condition} />
                        </td>

                        {/* Purchase Price */}
                        <td className="px-4 py-3 text-right">
                          <span className="font-mono text-sm text-foreground">
                            {formatCurrency(card.purchasePrice)}
                          </span>
                        </td>

                        {/* Current Value */}
                        <td className="px-4 py-3 text-right">
                          <span className="font-mono text-sm font-semibold text-foreground">
                            {formatCurrency(card.currentValue)}
                          </span>
                        </td>

                        {/* Gain/Loss */}
                        <td className="px-4 py-3 text-right hidden sm:table-cell">
                          <div className="flex flex-col items-end gap-0.5">
                            <span
                              className={`font-mono text-sm font-semibold ${isGain ? "text-[oklch(0.52_0.16_142)]" : "text-destructive"}`}
                            >
                              {isGain ? "+" : ""}
                              {formatCurrency(gain)}
                            </span>
                            <GainLossBadge
                              purchasePrice={card.purchasePrice}
                              currentValue={card.currentValue}
                            />
                          </div>
                        </td>

                        {/* Actions */}
                        <td
                          className="px-4 py-3 text-right"
                          onClick={(e) => e.stopPropagation()}
                          onKeyDown={(e) => e.stopPropagation()}
                        >
                          <div className="flex items-center justify-end gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 text-muted-foreground hover:text-foreground hover:bg-muted"
                              onClick={() =>
                                navigate({
                                  to: "/cards/$cardId",
                                  params: { cardId: String(card.id) },
                                })
                              }
                              aria-label={`View ${card.playerName}`}
                              data-ocid={`cards.view_button.${idx + 1}`}
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 text-muted-foreground hover:text-primary hover:bg-primary/10"
                              onClick={() =>
                                navigate({
                                  to: "/cards/$cardId/edit",
                                  params: { cardId: String(card.id) },
                                })
                              }
                              aria-label={`Edit ${card.playerName}`}
                              title="Edit card"
                              data-ocid={`cards.edit_button.${idx + 1}`}
                            >
                              <Pencil className="w-3.5 h-3.5" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                              onClick={() => setDeleteTarget(card)}
                              aria-label={`Delete ${card.playerName}`}
                              data-ocid={`cards.delete_button.${idx + 1}`}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>

          {/* Footer summary */}
          {!isLoading && filtered.length > 0 && (
            <div className="px-4 py-3 bg-muted/30 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-muted-foreground">
                Showing{" "}
                <span className="font-semibold text-foreground">
                  {filtered.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-foreground">
                  {cards.length}
                </span>{" "}
                cards
              </span>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>
                  Total value:{" "}
                  <span className="font-mono font-semibold text-foreground">
                    {formatCurrency(
                      filtered.reduce((sum, c) => sum + c.currentValue, 0),
                    )}
                  </span>
                </span>
                <span>
                  Total cost:{" "}
                  <span className="font-mono font-semibold text-foreground">
                    {formatCurrency(
                      filtered.reduce((sum, c) => sum + c.purchasePrice, 0),
                    )}
                  </span>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={!!deleteTarget}
        onOpenChange={(open) => {
          if (!open) setDeleteTarget(null);
        }}
      >
        <DialogContent data-ocid="cards.delete.dialog">
          <DialogHeader>
            <DialogTitle className="font-display">Delete Card</DialogTitle>
            <DialogDescription>
              Are you sure you want to remove{" "}
              <span className="font-semibold text-foreground">
                {deleteTarget?.playerName}
              </span>{" "}
              ({deleteTarget?.year}) from your collection? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="outline"
              onClick={() => setDeleteTarget(null)}
              data-ocid="cards.delete.cancel_button"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteConfirm}
              disabled={deleteCard.isPending}
              data-ocid="cards.delete.confirm_button"
            >
              {deleteCard.isPending ? "Deleting…" : "Delete Card"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
