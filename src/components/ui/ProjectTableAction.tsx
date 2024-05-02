"use client";
import { TProject } from "@/types";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const items = [
  { key: "viewDetails", label: "View Details" },
  { key: "update", label: "Update" },
  { key: "delete", label: "Delete" },
];
const ProjectTableAction = ({ data }: { data: TProject }) => {
  const router = useRouter();
  const handleActions = (key: string) => {
    switch (key) {
      case "viewDetails":
        router.push(`/${data.id}`);
        break;
      case "update":
        toast.warning("This is static mock data it can not be updated");
        break;
      case "delete":
        toast.warning("This is static mock data it can not be deleted");
        break;
      default:
        break;
    }
  };

  return (
    <Space size='middle'>
      <Dropdown
        trigger={["click"]}
        menu={{
          items,
          onClick: (e) => {
            handleActions(e.key);
          },
        }}
      >
        <a>
          <DownOutlined />
        </a>
      </Dropdown>
    </Space>
  );
};

export default ProjectTableAction;
