"use client";
import { getData } from "@/actions/utils/projects";
import ProjectDataTable from "@/table/ProjectDataTable";
import { useQuery } from "@tanstack/react-query";

const AllProjects = () => {
  // GET PROJECTS AND TEAM MEMBERS DATA
  const { data, isLoading } = useQuery({
    queryKey: ["all-projects"],
    queryFn: async () => {
      const data = await getData();
      return data.projects;
    },
  });

  return (
    <div className='p-6 space-y-6'>
      <div className='flex justify-between bg-white p-3 rounded-md'>
        <h1 className='text-xl font-bold'>All Tasks</h1>
      </div>
      <div>
        <ProjectDataTable data={data} loading={isLoading} />
      </div>
    </div>
  );
};

export default AllProjects;
