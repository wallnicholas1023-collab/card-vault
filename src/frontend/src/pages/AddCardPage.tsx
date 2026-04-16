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
import { Textarea } from "@/components/ui/textarea";
import { useAddCard } from "@/hooks/useCards";
import type { AddCardInput, Condition } from "@/types/cards";
import { useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Plus } from "lucide-react";
import { useState } from "react";

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
  currentValue: string;
  notes: string;
}

interface FormErrors {
  playerName?: string;
  sport?: string;
  team?: string;
  year?: string;
  condition?: string;
  purchasePrice?: string;
  currentValue?: string;
}

const DEFAULT_FORM: FormState = {
  playerName: "",
  sport: "",
  team: "",
  year: "",
  condition: "",
  purchasePrice: "",
  currentValue: "",
  notes: "",
};

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
  const valueNum = Number(form.currentValue);
  if (!form.currentValue || Number.isNaN(valueNum) || valueNum < 0)
    errors.currentValue = "Enter a valid estimated value";
  return errors;
}

export default function AddCardPage() {
  const navigate = useNavigate();
  const addCard = useAddCard();
  const [form, setForm] = useState<FormState>(DEFAULT_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormState, boolean>>
  >({});

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

    const input: AddCardInput = {
      playerName: form.playerName.trim(),
      sport: form.sport,
      team: form.team.trim(),
      year: Number(form.year),
      condition: form.condition as Condition,
      purchasePrice: Number(form.purchasePrice),
      currentValue: Number(form.currentValue),
      notes: form.notes.trim() || undefined,
    };

    await addCard.mutateAsync(input);
    navigate({ to: "/cards" });
  }

  return (
    <div
      className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-6"
      data-ocid="add_card.page"
    >
      {/* Back nav */}
      <Button
        variant="ghost"
        size="sm"
        className="gap-1.5 text-muted-foreground -ml-2"
        onClick={() => navigate({ to: "/cards" })}
        data-ocid="add_card.back_button"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Portfolio
      </Button>

      <div>
        <h1 className="font-display text-2xl font-bold text-foreground tracking-tight">
          Add New Card
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Track a new sports card in your collection
        </p>
      </div>

      <Card className="shadow-subtle border-border/60">
        <CardHeader className="pb-4 border-b border-border/40">
          <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
            <Plus className="w-4 h-4 text-primary" />
            Card Details
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-6">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5"
            data-ocid="add_card.form"
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
                  data-ocid="add_card.player_name.input"
                />
                {errors.playerName && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="add_card.player_name.field_error"
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
                    data-ocid="add_card.sport.select"
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
                    data-ocid="add_card.sport.field_error"
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
                  data-ocid="add_card.team.input"
                />
                {errors.team && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="add_card.team.field_error"
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
                  data-ocid="add_card.year.input"
                />
                {errors.year && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="add_card.year.field_error"
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
                  data-ocid="add_card.condition.select"
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
                  data-ocid="add_card.condition.field_error"
                >
                  {errors.condition}
                </p>
              )}
            </div>

            {/* Prices */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                  data-ocid="add_card.purchase_price.input"
                />
                {errors.purchasePrice && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="add_card.purchase_price.field_error"
                  >
                    {errors.purchasePrice}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="currentValue" className="text-sm font-medium">
                  Current Estimated Value ($){" "}
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="currentValue"
                  type="number"
                  step="0.01"
                  min={0}
                  placeholder="0.00"
                  value={form.currentValue}
                  onChange={(e) => setField("currentValue", e.target.value)}
                  onBlur={() => blur("currentValue")}
                  className={errors.currentValue ? "border-destructive" : ""}
                  data-ocid="add_card.current_value.input"
                />
                {errors.currentValue && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="add_card.current_value.field_error"
                  >
                    {errors.currentValue}
                  </p>
                )}
              </div>
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
                data-ocid="add_card.notes.textarea"
              />
            </div>

            {/* Mutation error */}
            {addCard.isError && (
              <div
                className="rounded-md border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
                data-ocid="add_card.error_state"
              >
                Failed to save card. Please try again.
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2 border-t border-border/40">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate({ to: "/cards" })}
                data-ocid="add_card.cancel_button"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={addCard.isPending}
                className="min-w-[120px]"
                data-ocid="add_card.submit_button"
              >
                {addCard.isPending ? (
                  <span
                    className="flex items-center gap-2"
                    data-ocid="add_card.loading_state"
                  >
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Saving…
                  </span>
                ) : (
                  "Add Card"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
