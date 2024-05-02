import { create } from "zustand";

type TTaskCardStore = {
  draggingCard: string | null;
  setDraggingCard: (projectId: string | null) => void;
};

export const useTaskCardStore = create<TTaskCardStore>((set) => ({
  draggingCard: null,
  setDraggingCard: (projectId: string | null) => set({ draggingCard: projectId }),
}));
