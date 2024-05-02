"use client";

import { Button } from "antd";
import { useState } from "react";
import AddTaskModal from "./ui/AddTaskModal";

const column = [
  {
    title: "TODO",
    key: "TODO",
  },
  {
    title: "IN PROGRESS",
    key: "IN_PROGRESS",
  },
  {
    title: "DONE",
    key: "DONE",
  },
];

const AllTasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='p-6'>
      <AddTaskModal isShowModal={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className='flex justify-between bg-white p-3 rounded-md'>
        <h1 className='text-xl font-bold'>All Tasks</h1>
        <Button onClick={() => setIsModalOpen(true)}>+ Add Task</Button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {/*{column.map(({ title, key }) => (
        <>
          <div key={key} className='bg-gray-200 p-2 rounded-lg '>
            <h4 className='text-base font-bold'>{title}</h4>
            {isLoading ? (
              <CardLoading />
            ) : (
              projects &&
              projects?.map((project: TProject) => {
                const onDrop = () => {
                  console.log(project);
                };
                if (key === project.status) {
                  return (
                    <>
                      <ProjectCard key={project.id} {...project} />
                      <DropArea onDrop={onDrop} />
                    </>
                  );
                }
              })
            )}
          </div>
        </>
      ))}*/}
      </div>
    </div>
  );
};

export default AllTasks;
