import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Textarea } from "@/components/ui/textarea";
import { useCard, useUpdateCard } from "@/hooks/useCards";
import type { Condition, UpdateCardInput } from "@/types/cards";
import { useNavigate, useParams } from "@tanstack/react-router";
import { ArrowLeft, Edit, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const SPORTS = [
  "Basketball",
  "Baseball",
  "Football",
  "Soccer",
  "Hockey",
  "Other",
] as const;
const CONDITIONS: Condition[] = [
  "Mint",
  "NearMint",
  "Excellent",
  "Good",
  "Fair",
  "Poor",
];
const CONDITION_LABELS: Record<Condition, string> = {
  Mint: "Mint",
  NearMint: "Near Mint",
  Excellent: "Excellent",
  Good: "Good",
  Fair: "Fair",
  Poor: "Poor",
};

interface FormState {
  playerName: string;
  sport: string;
  team: string;
  year: string;
  condition: Condition | "";
  purchasePrice: string;
  notes: string;
}

interface FormErrors {
  playerName?: string;
  sport?: string;
  team?: string;
  year?: string;
  condition?: string;
  purchasePrice?: string;
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.playerName.trim()) errors.playerName = "Player name is required";
  if (!form.sport) errors.sport = "Sport is required";
  if (!form.team.trim()) errors.team = "Team is required";
  const yearNum = Number(form.year);
  if (!form.year || Number.isNaN(yearNum) || yearNum < 1800 || yearNum > 2030)
    errors.year = "Year must be between 1800–2030";
  if (!form.condition) errors.condition = "Condition is required";
  const purchaseNum = Number(form.purchasePrice);
  if (!form.purchasePrice || Number.isNaN(purchaseNum) || purchaseNum < 0)
    errors.purchasePrice = "Enter a valid purchase price";
  return errors;
}

function EditSkeleton() {
  return (
    <div
      className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-6"
      data-ocid="edit_card.loading_state"
    >
      <Skeleton className="h-6 w-32" />
      <Skeleton className="h-10 w-64" />
      <div className="rounded-xl border p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
        </div>
        <Skeleton className="h-10" />
        <Skeleton className="h-10" />
        <Skeleton className="h-20" />
      </div>
    </div>
  );
}

export default function EditCardPage() {
  const { cardId } = useParams({ from: "/layout/cards/$cardId/edit" });
  const navigate = useNavigate();
  const cardIdNum = Number(cardId);

  const { data: card, isLoading } = useCard(cardIdNum);
  const updateCard = useUpdateCard();

  const [form, setForm] = useState<FormState>({
    playerName: "",
    sport: "",
    team: "",
    year: "",
    condition: "",
    purchasePrice: "",
    notes: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormState, boolean>>
  >({});
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (card && !initialized) {
      setForm({
        playerName: card.playerName,
        sport: card.sport,
        team: card.team,
        year: String(card.year),
        condition: card.condition,
        purchasePrice: card.purchasePrice.toFixed(2),
        notes: card.notes ?? "",
      });
      setInitialized(true);
    }
  }, [card, initialized]);

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (touched[key]) {
      const errs = validate({ ...form, [key]: value });
      setErrors((prev) => ({ ...prev, [key]: errs[key as keyof FormErrors] }));
    }
  }

  function blur(key: keyof FormState) {
    setTouched((prev) => ({ ...prev, [key]: true }));
    const errs = validate(form);
    setErrors((prev) => ({ ...prev, [key]: errs[key as keyof FormErrors] }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      Object.keys(form).map((k) => [k, true]),
    ) as Record<keyof FormState, boolean>;
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const updates: UpdateCardInput = {
      playerName: form.playerName.trim(),
      sport: form.sport,
      team: form.team.trim(),
      year: Number(form.year),
      condition: form.condition as Condition,
      purchasePrice: Number(form.purchasePrice),
      notes: form.notes.trim() || undefined,
    };

    await updateCard.mutateAsync({ id: cardIdNum, updates });
    toast.success("Card updated");
    navigate({ to: "/cards/$cardId", params: { cardId } });
  }

  if (isLoading) return <EditSkeleton />;

  if (!card) {
    return (
      <div
        className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center space-y-4"
        data-ocid="edit_card.error_state"
      >
        <p className="text-lg font-display font-semibold text-foreground">
          Card not found
        </p>
        <Button variant="outline" onClick={() => navigate({ to: "/cards" })}>
          Back to Portfolio
        </Button>
      </div>
    );
  }

  return (
    <div
      className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-6"
      data-ocid="edit_card.page"
    >
      {/* Back nav */}
      <Button
        variant="ghost"
        size="sm"
        className="gap-1.5 text-muted-foreground -ml-2"
        onClick={() => navigate({ to: "/cards/$cardId", params: { cardId } })}
        data-ocid="edit_card.back_button"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Card
      </Button>

      <div>
        <h1 className="font-display text-2xl font-bold text-foreground tracking-tight">
          Edit Card
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {card.playerName} · {card.year}
        </p>
      </div>

      {/* Value update tip */}
      <div className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 px-4 py-3.5">
        <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <div className="space-y-1 min-w-0">
          <p className="text-sm font-semibold text-foreground">
            Got a new card or recent sale price?
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            To update the{" "}
            <span className="font-medium text-foreground">
              current market value
            </span>{" "}
            of this card, use the{" "}
            <strong className="text-foreground">Add Price Entry</strong> form on
            the card detail page. This keeps a full price history so you can
            track how its value changes over time.
          </p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2 gap-1.5 text-xs h-7 border-primary/30 text-primary hover:bg-primary/10 hover:text-primary"
            onClick={() =>
              navigate({ to: "/cards/$cardId", params: { cardId } })
            }
            data-ocid="edit_card.go_to_price_entry_button"
          >
            <TrendingUp className="w-3.5 h-3.5" />
            Go to Add Price Entry
          </Button>
        </div>
      </div>

      <Card className="shadow-subtle border-border/60">
        <CardHeader className="pb-4 border-b border-border/40">
          <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
            <Edit className="w-4 h-4 text-primary" />
            Card Details
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-6">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5"
            data-ocid="edit_card.form"
          >
            {/* Player + Sport */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <Label htmlFor="playerName" className="text-sm font-medium">
                  Player Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="playerName"
                  placeholder="e.g. Michael Jordan"
                  value={form.playerName}
                  onChange={(e) => setField("playerName", e.target.value)}
                  onBlur={() => blur("playerName")}
                  className={errors.playerName ? "border-destructive" : ""}
                  data-ocid="edit_card.player_name.input"
                />
                {errors.playerName && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="edit_card.player_name.field_error"
                  >
                    {errors.playerName}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="sport" className="text-sm font-medium">
                  Sport <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={form.sport}
                  onValueChange={(v) => setField("sport", v)}
                >
                  <SelectTrigger
                    id="sport"
                    className={errors.sport ? "border-destructive" : ""}
                    data-ocid="edit_card.sport.select"
                  >
                    <SelectValue placeholder="Select sport" />
                  </SelectTrigger>
                  <SelectContent>
                    {SPORTS.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.sport && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="edit_card.sport.field_error"
                  >
                    {errors.sport}
                  </p>
                )}
              </div>
            </div>

            {/* Team + Year */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <Label htmlFor="team" className="text-sm font-medium">
                  Team <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="team"
                  placeholder="e.g. Chicago Bulls"
                  value={form.team}
                  onChange={(e) => setField("team", e.target.value)}
                  onBlur={() => blur("team")}
                  className={errors.team ? "border-destructive" : ""}
                  data-ocid="edit_card.team.input"
                />
                {errors.team && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="edit_card.team.field_error"
                  >
                    {errors.team}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="year" className="text-sm font-medium">
                  Year <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="year"
                  type="number"
                  placeholder="e.g. 1986"
                  min={1800}
                  max={2030}
                  value={form.year}
                  onChange={(e) => setField("year", e.target.value)}
                  onBlur={() => blur("year")}
                  className={errors.year ? "border-destructive" : ""}
                  data-ocid="edit_card.year.input"
                />
                {errors.year && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="edit_card.year.field_error"
                  >
                    {errors.year}
                  </p>
                )}
              </div>
            </div>

            {/* Condition */}
            <div className="space-y-1.5">
              <Label htmlFor="condition" className="text-sm font-medium">
                Condition <span className="text-destructive">*</span>
              </Label>
              <Select
                value={form.condition}
                onValueChange={(v) => setField("condition", v as Condition)}
              >
                <SelectTrigger
                  id="condition"
                  className={errors.condition ? "border-destructive" : ""}
                  data-ocid="edit_card.condition.select"
                >
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  {CONDITIONS.map((c) => (
                    <SelectItem key={c} value={c}>
                      {CONDITION_LABELS[c]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.condition && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="edit_card.condition.field_error"
                >
                  {errors.condition}
                </p>
              )}
            </div>

            {/* Purchase Price */}
            <div className="space-y-1.5">
              <Label htmlFor="purchasePrice" className="text-sm font-medium">
                Purchase Price ($) <span className="text-destructive">*</span>
              </Label>
              <Input
                id="purchasePrice"
                type="number"
                step="0.01"
                min={0}
                placeholder="0.00"
                value={form.purchasePrice}
                onChange={(e) => setField("purchasePrice", e.target.value)}
                onBlur={() => blur("purchasePrice")}
                className={errors.purchasePrice ? "border-destructive" : ""}
                data-ocid="edit_card.purchase_price.input"
              />
              {errors.purchasePrice && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="edit_card.purchase_price.field_error"
                >
                  {errors.purchasePrice}
                </p>
              )}
            </div>

            {/* Notes */}
            <div className="space-y-1.5">
              <Label htmlFor="notes" className="text-sm font-medium">
                Notes{" "}
                <span className="text-muted-foreground text-xs font-normal">
                  (optional)
                </span>
              </Label>
              <Textarea
                id="notes"
                placeholder="Card set, serial number, grading details…"
                rows={3}
                value={form.notes}
                onChange={(e) => setField("notes", e.target.value)}
                className="resize-none"
                data-ocid="edit_card.notes.textarea"
              />
            </div>

            {/* Mutation error */}
            {updateCard.isError && (
              <div
                className="rounded-md border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
                data-ocid="edit_card.error_state"
              >
                Failed to update card. Please try again.
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2 border-t border-border/40">
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  navigate({ to: "/cards/$cardId", params: { cardId } })
                }
                data-ocid="edit_card.cancel_button"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={updateCard.isPending}
                className="min-w-[130px]"
                data-ocid="edit_card.submit_button"
              >
                {updateCard.isPending ? (
                  <span
                    className="flex items-center gap-2"
                    data-ocid="edit_card.loading_state"
                  >
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Saving…
                  </span>
                ) : (
                  "Save Changes"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
