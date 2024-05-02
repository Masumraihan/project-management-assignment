import { create } from "zustand";

type TTaskCardStore = {
  draggingCard: number | null;
  setDraggingCard: (projectId: number | null) => void;
};

export const useTaskCardStores = create<TTaskCardStore>((set) => ({
  draggingCard: null,
  setDraggingCard: (projectId: number | null) => set({ draggingCard: projectId }),
}));
