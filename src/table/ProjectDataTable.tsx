"use client";
import ProjectTableAction from "@/components/ui/ProjectTableAction";
import { TProject } from "@/types";
import { DownOutlined } from "@ant-design/icons";
import type { TableColumnsType } from "antd";
import { Dropdown, Space, Table } from "antd";

const columns: TableColumnsType<TProject> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "description",
    dataIndex: "name",
  },
  {
    title: "Team Member",
    dataIndex: "teamMembers",
  },
  {
    title: "Action",
    dataIndex: "action",
    render: (_, data) => {
      return <ProjectTableAction data={data} />;
    },
  },
];

const ProjectDataTable = ({ data, loading }: { data: TProject[]; loading: boolean }) => {
  return <Table loading={loading} columns={columns} dataSource={data} pagination={false} />;
};

export default ProjectDataTable;
