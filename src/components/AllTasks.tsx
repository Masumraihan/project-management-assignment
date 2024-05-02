"use client";
import { v4 as uuid } from "uuid";
import { TTask } from "@/shcemas/taskSchemas";
import { useTaskStore } from "@/store/taskStore";
import { Button } from "antd";
import { useState } from "react";
import AddTaskModal from "./ui/AddTaskModal";
import DropArea from "./ui/DropArea";
import TaskCard from "./ui/TaskCard";
import { useTaskCardStore } from "@/store/taskCardStore";

const AllTasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tasks = useTaskStore((state) => state.tasks);
  const todoTasks = tasks.filter((task) => task.status === "TODO");
  const inProgressTasks = tasks.filter((task) => task.status === "IN_PROGRESS");
  const doneTasks = tasks.filter((task) => task.status === "DONE");
  const taskId = useTaskCardStore((state) => state.draggingCard);
  const setDraggingCard = useTaskCardStore((state) => state.setDraggingCard);
  const updateTask = useTaskStore((state) => state.addTasks);
  const removeTask = useTaskStore((state) => state.removeTask);

  const onDropHandler = (status: "TODO" | "IN_PROGRESS" | "DONE") => {
    if (taskId) {
      const task = tasks.find((task) => task.id === taskId);
      if (task) {
        const updateTaskId = uuid();
        updateTask({ ...task, id: updateTaskId, status: status });
        removeTask(taskId);
        setDraggingCard(null);
      }
    }
  };

  return (
    <div className='p-6 space-y-6'>
      <AddTaskModal isShowModal={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className='flex justify-between bg-white p-3 rounded-md'>
        <h1 className='text-xl font-bold'>All Tasks</h1>
        <Button onClick={() => setIsModalOpen(true)}>+ Add Task</Button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        <>
          <div className='bg-gray-200 p-2 rounded-lg '>
            <h4 className='text-base font-bold'>TODO</h4>
            {todoTasks.length ? (
              todoTasks?.map((project: TTask) => {
                const onDrop = () => {
                  onDropHandler("TODO");
                };

                return (
                  <>
                    <TaskCard key={project.id} task={project} />
                    <DropArea onDrop={onDrop} />
                  </>
                );
              })
            ) : (
              <div>
                <p className='text-gray-500 text-lg font-semibold'>No tasks to do</p>
                <DropArea
                  onDrop={() => {
                    onDropHandler("TODO");
                  }}
                />
              </div>
            )}
          </div>
        </>
        <>
          <div className='bg-gray-200 p-2 rounded-lg '>
            <h4 className='text-base font-bold'>In Progress</h4>
            {inProgressTasks.length ? (
              inProgressTasks?.map((project: TTask) => {
                const onDrop = () => {
                  onDropHandler("IN_PROGRESS");
                };

                return (
                  <>
                    <TaskCard key={project.id} task={project} />
                    <DropArea onDrop={onDrop} />
                  </>
                );
              })
            ) : (
              <div>
                <p className='text-gray-500 text-lg font-semibold'>No tasks in progress</p>
                <DropArea
                  onDrop={() => {
                    onDropHandler("IN_PROGRESS");
                  }}
                />
              </div>
            )}
          </div>
        </>
        <>
          <div className='bg-gray-200 p-2 rounded-lg '>
            <h4 className='text-base font-bold'>Done</h4>
            {doneTasks.length ? (
              doneTasks?.map((project: TTask) => {
                const onDrop = () => {
                  onDropHandler("DONE");
                };

                return (
                  <>
                    <TaskCard key={project.id} task={project} />
                    <DropArea onDrop={onDrop} />
                  </>
                );
              })
            ) : (
              <div>
                <p className='text-gray-500 text-lg font-semibold'>No tasks done</p>
                <DropArea
                  onDrop={() => {
                    onDropHandler("DONE");
                  }}
                />
              </div>
            )}
          </div>
        </>
      </div>
    </div>
  );
};

export default AllTasks;
