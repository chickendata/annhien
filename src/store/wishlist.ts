"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type WishlistState = {
  ids: string[];
  toggle: (slug: string) => void;
  has: (slug: string) => boolean;
  clear: () => void;
};

export const useWishlist = create<WishlistState>()(
  persist(
    (set, get) => ({
      ids: [],
      toggle: (slug) =>
        set((state) => ({
          ids: state.ids.includes(slug)
            ? state.ids.filter((s) => s !== slug)
            : [...state.ids, slug],
        })),
      has: (slug) => get().ids.includes(slug),
      clear: () => set({ ids: [] }),
    }),
    { name: "tocgia-wishlist" },
  ),
);
