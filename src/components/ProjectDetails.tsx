"use client";
import { getData } from "@/actions/utils/projects";
import { useTaskStore } from "@/store/taskStore";
import { TProject } from "@/types";
import { useQuery } from "@tanstack/react-query";
const ProjectDetails = ({ projectId }: { projectId: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const data = await getData();
      return data;
    },
  });

  let project;
  if (!isLoading) {
    project = data?.projects?.find((project: TProject) => project.id === projectId);
  }

  const tasks = useTaskStore((state) => state.tasks);
  const filterTasks = tasks.filter((task) => task.project === projectId);

  return (
    <div className='p-6 space-y-6'>
      <div className='flex justify-between bg-white p-3 rounded-md'>
        <h1 className='text-xl font-bold'> {project?.name} Details </h1>
      </div>
      <div>
        <p className='text-gray-500'>{project?.teamMembers}</p>
        <p className='text-gray-500'>{project?.description}</p>
      </div>
      <div>
        <h1>Tasks</h1>
        {filterTasks.length ? (
          filterTasks.map((task) => (
            <div key={task.id}>
              <p>{task.name}</p>
              <p>{task.description}</p>
              <p>{task.status}</p>
            </div>
          ))
        ) : (
          <p>No tasks found</p>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
