"use client";

import { UsergroupDeleteOutlined } from "@ant-design/icons";
import { TProject } from "@/types";
import { Badge } from "antd";
import moment from "moment";
import { useTaskCardStores } from "@/store/taskCardStore";
import { useTaskStore } from "@/store/taskStore";

const TaskCard: React.FC<TProject> = () => {
  const setDraggingCard = useTaskCardStores((state) => state.setDraggingCard);
  const tasks = useTaskStore((state) => state.tasks);
  console.log(tasks);
  return (
    //<div
    //  onDragStart={() => setDraggingCard(id)}
    //  onDragEnd={() => setDraggingCard(null)}
    //  key={id}
    //  draggable
    //  className='border cursor-grab active:animate-pulse active:cursor-grabbing rounded-md bg-white p-3 space-y-1 relative shadow-lg'
    //>
    //  <p className='absolute top-2 right-2 cursor-pointer'>
    //    {isMarked ? (
    //      <svg
    //        xmlns='http://www.w3.org/2000/svg'
    //        viewBox='0 0 24 24'
    //        fill='currentColor'
    //        className='w-5 h-5 text-[#e75704]'
    //      >
    //        <path
    //          fillRule='evenodd'
    //          d='M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z'
    //          clipRule='evenodd'
    //        />
    //      </svg>
    //    ) : (
    //      <svg
    //        xmlns='http://www.w3.org/2000/svg'
    //        fill='none'
    //        viewBox='0 0 24 24'
    //        strokeWidth={1.5}
    //        stroke='currentColor'
    //        className='w-5 h-5 text-[#e75704]'
    //      >
    //        <path
    //          strokeLinecap='round'
    //          strokeLinejoin='round'
    //          d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z'
    //        />
    //      </svg>
    //    )}
    //  </p>
    //  <p className='font-bold'>{title}</p>
    //  <p className='text-gray-500'>{description}</p>
    //  <div className='flex justify-between'>
    //    <div className='flex-1'>
    //      <Badge
    //        count={priority}
    //        showZero
    //        color={priority === "LOW" ? "green" : priority === "HIGH" ? "red" : "blue"}
    //      />{" "}
    //      <p className='text-gray-500 text-xs mt-1 font-bold'>
    //        Deadline : {moment(deadline).format("DD MMM")}
    //      </p>
    //    </div>
    //    <p className='flex-1 text-end'>
    //      <Badge count={assigned} showZero color='#e75704' /> <UsergroupDeleteOutlined size={23} />
    //    </p>
    //  </div>
    //</div>
    <></>
  );
};
export default TaskCard;