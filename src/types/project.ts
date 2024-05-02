export type TProjectStatus = "TODO" | "IN_PROGRESS" | "DONE";
export type TProjectPriority = "LOW" | "MEDIUM" | "HIGH";
export type TProject = {
  id: number;
  title: string;
  description: string;
  status: TProjectStatus;
  assigned: number;
  deadline: string;
  isMarked?: boolean;
  priority: TProjectPriority;
};
