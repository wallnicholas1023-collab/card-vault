import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type UserId = Principal;
export type Timestamp = bigint;
export interface SportCard {
    id: bigint;
    purchasePrice: number;
    owner: UserId;
    team: string;
    year: bigint;
    currentValue: number;
    sport: string;
    notes?: string;
    playerName: string;
    dateAdded: Timestamp;
    condition: Condition;
}
export interface PortfolioStats {
    totalValue: number;
    totalCards: bigint;
    gainLoss: number;
    totalCost: number;
}
export interface PortfolioSnapshot {
    totalValue: number;
    date: Timestamp;
}
export interface PriceEntry {
    id: bigint;
    date: Timestamp;
    note?: string;
    estimatedValue: number;
    cardId: bigint;
}
export enum Condition {
    Fair = "Fair",
    Good = "Good",
    Mint = "Mint",
    Poor = "Poor",
    NearMint = "NearMint",
    Excellent = "Excellent"
}
export interface backendInterface {
    addCard(playerName: string, sport: string, team: string, year: bigint, condition: Condition, purchasePrice: number, currentValue: number, notes: string | null): Promise<bigint>;
    addPriceEntry(cardId: bigint, estimatedValue: number, note: string | null): Promise<bigint>;
    deleteCard(id: bigint): Promise<boolean>;
    getCard(id: bigint): Promise<SportCard | null>;
    getCards(): Promise<Array<SportCard>>;
    getPortfolioHistory(): Promise<Array<PortfolioSnapshot>>;
    getPortfolioStats(): Promise<PortfolioStats>;
    getPriceHistory(cardId: bigint): Promise<Array<PriceEntry>>;
    updateCard(id: bigint, playerName: string, sport: string, team: string, year: bigint, condition: Condition, purchasePrice: number, notes: string | null): Promise<boolean>;
}
