"use client";
import { getData } from "@/actions/utils/projects";
import { TProject } from "@/types";
import { useQuery } from "@tanstack/react-query";
const ProjectDetails = ({ projectId }: { projectId: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const data = await getData();
      return data.projects;
    },
  });
  
  let project;
  if (!isLoading) {
    project = data?.find((project: TProject) => project.id === projectId);
  }

  return (
    <div className='p-6 space-y-6'>
      <div className='flex justify-between bg-white p-3 rounded-md'>
        <h1 className='text-xl font-bold'> {project?.name} Details </h1>
      </div>
      <div>
        <p className='text-gray-500'>{project?.teamMembers}</p>
        <p className='text-gray-500'>{project?.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
