import { z } from "zod";

export const addTaskSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  description: z.string({ required_error: "Description is required" }),
  priority: z.string({ required_error: "Priority is required" }),
  project: z.string({ required_error: "Project is required" }),
  deadline: z.any({ required_error: "Deadline is required" }),
  assignedMembers: z.array(z.string(), {
    required_error: "Assigned members is required",
  }),
});
export type TTask = z.infer<typeof addTaskSchema> & {
  id: string;
  status: "TODO" | "IN_PROGRESS" | "DONE";
};
