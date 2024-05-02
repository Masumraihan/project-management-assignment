import { TTask } from "@/shcemas/taskSchemas";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type TTaskStore = {
  tasks: TTask[];
  addTasks: (tasks: TTask) => void;
  removeTask: (taskId: string) => void;
  updateTask: (task: TTask) => void;
};

export const useTaskStore = create<TTaskStore>()(
  devtools(
    persist(
      (set) => ({
        tasks: [],
        addTasks: (tasks: TTask) => set((state) => ({ tasks: [...state.tasks, tasks] })),
        removeTask: (taskId: string) =>
          set((state) => ({ tasks: state.tasks.filter((task) => task.id !== taskId) })),
        updateTask: (task: TTask) =>
          set((state) => ({ tasks: state.tasks.map((t) => (t.id === task.id ? task : t)) })),
      }),
      { name: "tasks" },
    ),
  ),
);
