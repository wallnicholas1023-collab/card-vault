export type Condition =
  | "Mint"
  | "NearMint"
  | "Excellent"
  | "Good"
  | "Fair"
  | "Poor";

export interface SportCard {
  id: number;
  owner: string;
  playerName: string;
  sport: string;
  team: string;
  year: number;
  condition: Condition;
  purchasePrice: number;
  currentValue: number;
  dateAdded: number;
  notes?: string;
}

export interface PriceEntry {
  id: number;
  cardId: number;
  estimatedValue: number;
  date: number;
  note?: string;
}

export interface PortfolioStats {
  totalCards: number;
  totalCost: number;
  totalValue: number;
  gainLoss: number;
}

export interface PortfolioSnapshot {
  date: number;
  totalValue: number;
}

export type AddCardInput = Omit<SportCard, "id" | "owner" | "dateAdded">;
export type UpdateCardInput = Partial<AddCardInput>;
