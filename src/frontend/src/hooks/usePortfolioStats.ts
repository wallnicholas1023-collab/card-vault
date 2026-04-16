import { createActor } from "@/backend";
import { getPortfolioHistory, getPortfolioStats } from "@/lib/backend-client";
import type { PortfolioSnapshot, PortfolioStats } from "@/types/cards";
import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";

export function usePortfolioStats() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<PortfolioStats>({
    queryKey: ["portfolio", "stats"],
    queryFn: async () => {
      if (!actor)
        return { totalCards: 0, totalCost: 0, totalValue: 0, gainLoss: 0 };
      return getPortfolioStats(actor);
    },
    enabled: !!actor && !isFetching,
  });
}

export function usePortfolioHistory() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<PortfolioSnapshot[]>({
    queryKey: ["portfolio", "history"],
    queryFn: async () => {
      if (!actor) return [];
      return getPortfolioHistory(actor);
    },
    enabled: !!actor && !isFetching,
  });
}
