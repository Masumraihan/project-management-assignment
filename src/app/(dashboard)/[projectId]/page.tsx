import ProjectDetails from "@/components/ProjectDetails";
import React from "react";

const ProjectDetailsPage = ({ params }: { params: { projectId: string } }) => {
  return (
    <div className='w-full min-h-[calc(100vh-52px)] overflow-hidden overflow-x-auto'>
      <ProjectDetails projectId={params.projectId} />
    </div>
  );
};

export default ProjectDetailsPage;
