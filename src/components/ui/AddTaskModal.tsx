import { getData } from "@/actions/utils/projects";
import { TTask, addTaskSchema } from "@/shcemas/taskSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { Button, Modal } from "antd";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import CDatePicker from "../form/CDatePicker";
import CForm from "../form/CForm";
import CInput from "../form/CInput";
import CSelect from "../form/CSelect";
import CTextArea from "../form/CTextArea";
import { TProject } from "@/types";
import { TTeamMember } from "@/types/teamMember";
import { useTaskStore } from "@/store/taskStore";
import { v4 as uuid } from "uuid";

const priorityOptions = [
  {
    label: "High",
    value: "High",
  },
  {
    label: "Medium",
    value: "Medium",
  },
  {
    label: "Low",
    value: "Low",
  },
];

type TAddTaskModalProps = {
  isShowModal: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddTaskModal = ({ isShowModal, setIsModalOpen }: TAddTaskModalProps) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // GET PROJECTS AND TEAM MEMBERS DATA
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const data = await getData();
      return data;
    },
  });

  // FORMAT DATA FOR SELECT OPTIONS
  let projectsOptions = [];
  let membersOptions = [];

  if (!isLoading) {
    projectsOptions = data?.projects?.map((project: TProject) => {
      return {
        label: project.name,
        value: project.id,
      };
    });
    membersOptions = data.teamMembers.map((member: TTeamMember) => {
      return {
        label: member.name,
        value: member.id,
      };
    });
  }

  const addTask = useTaskStore((state) => state.addTasks);

  // ADD TASK HANDLERS
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const taskData: TTask = {
      id: uuid(),
      name: data.name,
      description: data.description,
      priority: data.priority,
      project: data.project,
      deadline: data.deadline,
      assignedMembers: data.assignedMembers,
      status: "TODO",
    };
    addTask(taskData);
    alert("Task added successfully");
  };

  return (
    <>
      <Modal
        title='All New Tasks'
        centered
        open={isShowModal}
        onCancel={handleCancel}
        footer={false}
      >
        <CForm onsubmit={onSubmit} resolver={zodResolver(addTaskSchema)}>
          <CInput placeholder='Task Name' name='name' id='name' label='Task Name' type='text' />
          <CSelect
            placeholder='Select Priority'
            name='priority'
            label='Priority'
            options={priorityOptions}
          />
          <CSelect
            placeholder='Select Project'
            name='project'
            label='Project'
            options={projectsOptions}
            disabled={isLoading}
          />
          <CSelect
            placeholder='Select Members'
            name='assignedMembers'
            label='Assigned Members'
            disabled={isLoading}
            options={membersOptions}
            mode='multiple'
            allowClear
          />
          <CDatePicker name='deadline' label='Deadline' placeholder='Select Deadline' />
          <CTextArea
            name='description'
            label='Description'
            placeholder='Description'
            id='description'
          />
          <div className='flex justify-end'>
            <Button htmlType='submit'>Submit</Button>
          </div>
        </CForm>
      </Modal>
    </>
  );
};

export default AddTaskModal;
