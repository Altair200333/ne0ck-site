import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import ProjectInfo from "./ProjectInfo";
import { ProjectShortInfo } from "@/types/common";
import ProjectPage from "./ProjectPage";
import { PROJECTS_INFO } from "@/data/projects-definitions";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  const [openedProject, setOpenedProjectImpl] = useState<
    ProjectShortInfo | undefined
  >(undefined);

  const setOpenedProject = (project?: ProjectShortInfo) => {
    setOpenedProjectImpl(project);
  };

  if (openedProject) {
    return (
      <ProjectPage
        project={openedProject}
        onBack={() => setOpenedProject(undefined)}
      />
    );
  }

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      {PROJECTS_INFO.map((item) => (
        <ProjectInfo
          key={item.title}
          item={item}
          onClick={() => setOpenedProject(item)}
        />
      ))}
    </Box>
  );
};

export default Projects;
