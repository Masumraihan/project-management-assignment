"use client";

import { getProjects } from "@/actions/utils/projects";
import { TProject } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { UsergroupDeleteOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import moment from "moment";

const AllProjects = () => {
  const { data: projects, isFetching } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const data = await getProjects();
      const todoProjects = data?.data?.filter((project: TProject) => project.status === "TODO");
      const inProgressProjects = data?.data?.filter(
        (project: TProject) => project.status === "IN_PROGRESS",
      );
      const doneProjects = data?.data?.filter((project: TProject) => project.status === "DONE");

      return { todoProjects, inProgressProjects, doneProjects };
    },
  });

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-10 gap-10'>
      <div className='bg-gray-200 p-2 rounded-lg'>
        <h4 className='text-base font-bold'>TODO</h4>
        {projects?.todoProjects.map((project: TProject) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
      <div className='border rounded-lg'>
        <h4 className='text-xl font-bold'>In Progress</h4>
      </div>
      <div className='border rounded-lg'>
        <h4 className='text-xl font-bold'>Done</h4>
      </div>
    </div>
  );
};

const Project = ({ title, description, assigned, deadline, priority, id, isMarked }: TProject) => {
  return (
    <div key={id} className='border rounded-md bg-white p-3 space-y-1 relative'>
      <p className='absolute top-2 right-2'>
        {isMarked ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-5 h-5 text-[#e75704]'
          >
            <path
              fillRule='evenodd'
              d='M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z'
              clipRule='evenodd'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5 text-[#e75704]'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z'
            />
          </svg>
        )}
      </p>
      <p className='font-bold'>{title}</p>
      <p className='text-gray-500'>{description}</p>
      <div className='flex justify-between'>
        <div className='flex-1'>
          <Badge
            count={priority}
            showZero
            color={priority === "LOW" ? "green" : priority === "HIGH" ? "red" : "blue"}
          />{" "}
          <p className='text-gray-500 text-xs mt-1 font-bold'>
            Deadline : {moment(deadline).format("DD MMM")}
          </p>
        </div>
        <p className='flex-1 text-end'>
          <Badge count={assigned} showZero color='#e75704' /> <UsergroupDeleteOutlined size={23} />
        </p>
      </div>
    </div>
  );
};

export default AllProjects;
