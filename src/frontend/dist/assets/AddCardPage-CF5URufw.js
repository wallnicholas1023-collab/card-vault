import { u as useNavigate, r as reactExports, j as jsxRuntimeExports, B as Button } from "./index-DeryHgS0.js";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-BODN1vU_.js";
import { L as Label, I as Input } from "./label-DJy4BL2X.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CxcFDs4C.js";
import { T as Textarea } from "./textarea-hhYf5d_m.js";
import { f as useAddCard } from "./useCards-sQAGuqe2.js";
import { A as ArrowLeft } from "./arrow-left-H5x3VGfF.js";
import { P as Plus } from "./plus-DAJDPcCa.js";
const SPORTS = [
  "Basketball",
  "Baseball",
  "Football",
  "Soccer",
  "Hockey",
  "Other"
];
const CONDITIONS = [
  "Mint",
  "NearMint",
  "Excellent",
  "Good",
  "Fair",
  "Poor"
];
const CONDITION_LABELS = {
  Mint: "Mint",
  NearMint: "Near Mint",
  Excellent: "Excellent",
  Good: "Good",
  Fair: "Fair",
  Poor: "Poor"
};
const DEFAULT_FORM = {
  playerName: "",
  sport: "",
  team: "",
  year: "",
  condition: "",
  purchasePrice: "",
  currentValue: "",
  notes: ""
};
function validate(form) {
  const errors = {};
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
function AddCardPage() {
  const navigate = useNavigate();
  const addCard = useAddCard();
  const [form, setForm] = reactExports.useState(DEFAULT_FORM);
  const [errors, setErrors] = reactExports.useState({});
  const [touched, setTouched] = reactExports.useState({});
  function setField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (touched[key]) {
      const errs = validate({ ...form, [key]: value });
      setErrors((prev) => ({ ...prev, [key]: errs[key] }));
    }
  }
  function blur(key) {
    setTouched((prev) => ({ ...prev, [key]: true }));
    const errs = validate(form);
    setErrors((prev) => ({ ...prev, [key]: errs[key] }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      Object.keys(form).map((k) => [k, true])
    );
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    const input = {
      playerName: form.playerName.trim(),
      sport: form.sport,
      team: form.team.trim(),
      year: Number(form.year),
      condition: form.condition,
      purchasePrice: Number(form.purchasePrice),
      currentValue: Number(form.currentValue),
      notes: form.notes.trim() || void 0
    };
    await addCard.mutateAsync(input);
    navigate({ to: "/cards" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-6",
      "data-ocid": "add_card.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "gap-1.5 text-muted-foreground -ml-2",
            onClick: () => navigate({ to: "/cards" }),
            "data-ocid": "add_card.back_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
              "Back to Portfolio"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground tracking-tight", children: "Add New Card" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Track a new sports card in your collection" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-subtle border-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4 border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-semibold text-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 text-primary" }),
            "Card Details"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: handleSubmit,
              noValidate: true,
              className: "space-y-5",
              "data-ocid": "add_card.form",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "playerName", className: "text-sm font-medium", children: [
                      "Player Name ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "playerName",
                        placeholder: "e.g. Michael Jordan",
                        value: form.playerName,
                        onChange: (e) => setField("playerName", e.target.value),
                        onBlur: () => blur("playerName"),
                        className: errors.playerName ? "border-destructive" : "",
                        "data-ocid": "add_card.player_name.input"
                      }
                    ),
                    errors.playerName && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs text-destructive",
                        "data-ocid": "add_card.player_name.field_error",
                        children: errors.playerName
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "sport", className: "text-sm font-medium", children: [
                      "Sport ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: form.sport,
                        onValueChange: (v) => setField("sport", v),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            SelectTrigger,
                            {
                              id: "sport",
                              className: errors.sport ? "border-destructive" : "",
                              "data-ocid": "add_card.sport.select",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select sport" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: SPORTS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
                        ]
                      }
                    ),
                    errors.sport && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs text-destructive",
                        "data-ocid": "add_card.sport.field_error",
                        children: errors.sport
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "team", className: "text-sm font-medium", children: [
                      "Team ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "team",
                        placeholder: "e.g. Chicago Bulls",
                        value: form.team,
                        onChange: (e) => setField("team", e.target.value),
                        onBlur: () => blur("team"),
                        className: errors.team ? "border-destructive" : "",
                        "data-ocid": "add_card.team.input"
                      }
                    ),
                    errors.team && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs text-destructive",
                        "data-ocid": "add_card.team.field_error",
                        children: errors.team
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "year", className: "text-sm font-medium", children: [
                      "Year ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "year",
                        type: "number",
                        placeholder: "e.g. 1986",
                        min: 1800,
                        max: 2030,
                        value: form.year,
                        onChange: (e) => setField("year", e.target.value),
                        onBlur: () => blur("year"),
                        className: errors.year ? "border-destructive" : "",
                        "data-ocid": "add_card.year.input"
                      }
                    ),
                    errors.year && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs text-destructive",
                        "data-ocid": "add_card.year.field_error",
                        children: errors.year
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "condition", className: "text-sm font-medium", children: [
                    "Condition ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      value: form.condition,
                      onValueChange: (v) => setField("condition", v),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          SelectTrigger,
                          {
                            id: "condition",
                            className: errors.condition ? "border-destructive" : "",
                            "data-ocid": "add_card.condition.select",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select condition" })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: CONDITIONS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: CONDITION_LABELS[c] }, c)) })
                      ]
                    }
                  ),
                  errors.condition && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs text-destructive",
                      "data-ocid": "add_card.condition.field_error",
                      children: errors.condition
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "purchasePrice", className: "text-sm font-medium", children: [
                      "Purchase Price ($) ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "purchasePrice",
                        type: "number",
                        step: "0.01",
                        min: 0,
                        placeholder: "0.00",
                        value: form.purchasePrice,
                        onChange: (e) => setField("purchasePrice", e.target.value),
                        onBlur: () => blur("purchasePrice"),
                        className: errors.purchasePrice ? "border-destructive" : "",
                        "data-ocid": "add_card.purchase_price.input"
                      }
                    ),
                    errors.purchasePrice && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs text-destructive",
                        "data-ocid": "add_card.purchase_price.field_error",
                        children: errors.purchasePrice
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "currentValue", className: "text-sm font-medium", children: [
                      "Current Estimated Value ($)",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "currentValue",
                        type: "number",
                        step: "0.01",
                        min: 0,
                        placeholder: "0.00",
                        value: form.currentValue,
                        onChange: (e) => setField("currentValue", e.target.value),
                        onBlur: () => blur("currentValue"),
                        className: errors.currentValue ? "border-destructive" : "",
                        "data-ocid": "add_card.current_value.input"
                      }
                    ),
                    errors.currentValue && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs text-destructive",
                        "data-ocid": "add_card.current_value.field_error",
                        children: errors.currentValue
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "notes", className: "text-sm font-medium", children: [
                    "Notes",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs font-normal", children: "(optional)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Textarea,
                    {
                      id: "notes",
                      placeholder: "Card set, serial number, grading details…",
                      rows: 3,
                      value: form.notes,
                      onChange: (e) => setField("notes", e.target.value),
                      className: "resize-none",
                      "data-ocid": "add_card.notes.textarea"
                    }
                  )
                ] }),
                addCard.isError && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "rounded-md border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive",
                    "data-ocid": "add_card.error_state",
                    children: "Failed to save card. Please try again."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-3 pt-2 border-t border-border/40", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      onClick: () => navigate({ to: "/cards" }),
                      "data-ocid": "add_card.cancel_button",
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "submit",
                      disabled: addCard.isPending,
                      className: "min-w-[120px]",
                      "data-ocid": "add_card.submit_button",
                      children: addCard.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "flex items-center gap-2",
                          "data-ocid": "add_card.loading_state",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" }),
                            "Saving…"
                          ]
                        }
                      ) : "Add Card"
                    }
                  )
                ] })
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
export {
  AddCardPage as default
};
