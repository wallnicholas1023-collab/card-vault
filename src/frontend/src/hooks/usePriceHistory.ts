import { createActor } from "@/backend";
import { getPriceHistory } from "@/lib/backend-client";
import type { PriceEntry } from "@/types/cards";
import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";

export function usePriceHistory(cardId: number) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<PriceEntry[]>({
    queryKey: ["price-history", cardId],
    queryFn: async () => {
      if (!actor) return [];
      return getPriceHistory(actor, cardId);
    },
    enabled: !!actor && !isFetching && !!cardId,
  });
}
