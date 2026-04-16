import { createActor } from "@/backend";
import {
  addCard,
  deleteCard,
  getCards,
  updateCard,
} from "@/lib/backend-client";
import type { AddCardInput, SportCard, UpdateCardInput } from "@/types/cards";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useCards() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<SportCard[]>({
    queryKey: ["cards"],
    queryFn: async () => {
      if (!actor) return [];
      return getCards(actor);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCard(id: number) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<SportCard | null>({
    queryKey: ["cards", id],
    queryFn: async () => {
      if (!actor) return null;
      const { getCard } = await import("@/lib/backend-client");
      return getCard(actor, id);
    },
    enabled: !!actor && !isFetching && !!id,
  });
}

export function useAddCard() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: AddCardInput) => addCard(actor, input),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["cards"] }),
  });
}

export function useUpdateCard() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, updates }: { id: number; updates: UpdateCardInput }) =>
      updateCard(actor, id, updates),
    onSuccess: (_data, { id }) => {
      qc.invalidateQueries({ queryKey: ["cards"] });
      qc.invalidateQueries({ queryKey: ["cards", id] });
    },
  });
}

export function useDeleteCard() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteCard(actor, id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["cards"] });
      qc.invalidateQueries({ queryKey: ["portfolio", "stats"] });
      qc.invalidateQueries({ queryKey: ["portfolio", "history"] });
    },
  });
}
