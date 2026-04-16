/**
 * Backend client — typed wrapper for all backend actor methods.
 * When the backend canister exposes these methods via bindgen,
 * swap `actor as any` references for proper actor calls.
 */

import type {
  AddCardInput,
  PortfolioSnapshot,
  PortfolioStats,
  PriceEntry,
  SportCard,
  UpdateCardInput,
} from "@/types/cards";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyActor = any;

export async function addCard(
  actor: AnyActor,
  input: AddCardInput,
): Promise<SportCard> {
  return actor.addCard(
    input.playerName,
    input.sport,
    input.team,
    BigInt(input.year),
    { [input.condition]: null },
    input.purchasePrice,
    input.currentValue,
    input.notes ? [input.notes] : [],
  );
}

export async function getCards(actor: AnyActor): Promise<SportCard[]> {
  return actor.getCards();
}

export async function getCard(
  actor: AnyActor,
  id: number,
): Promise<SportCard | null> {
  const result = await actor.getCard(BigInt(id));
  return result[0] ?? null;
}

export async function updateCard(
  actor: AnyActor,
  id: number,
  updates: UpdateCardInput,
): Promise<SportCard> {
  return actor.updateCard(
    BigInt(id),
    updates.playerName,
    updates.sport,
    updates.team,
    BigInt(updates.year ?? 0),
    { [updates.condition as string]: null },
    updates.purchasePrice,
    updates.notes ? [updates.notes] : [],
  );
}

export async function deleteCard(
  actor: AnyActor,
  id: number,
): Promise<boolean> {
  return actor.deleteCard(BigInt(id));
}

export async function addPriceEntry(
  actor: AnyActor,
  cardId: number,
  value: number,
  note?: string,
): Promise<PriceEntry> {
  return actor.addPriceEntry(BigInt(cardId), value, note ? [note] : []);
}

export async function getPriceHistory(
  actor: AnyActor,
  cardId: number,
): Promise<PriceEntry[]> {
  return actor.getPriceHistory(BigInt(cardId));
}

export async function getPortfolioStats(
  actor: AnyActor,
): Promise<PortfolioStats> {
  return actor.getPortfolioStats();
}

export async function getPortfolioHistory(
  actor: AnyActor,
): Promise<PortfolioSnapshot[]> {
  return actor.getPortfolioHistory();
}
