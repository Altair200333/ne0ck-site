import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { Box, Flex, Text } from "@chakra-ui/react";
import { IoArrowBack } from "react-icons/io5";
import { ProjectShortInfo } from "@/types/common";
import { useIsLargeScreen } from "@/utils/hooks";

interface ProjectPageProps {
  project: ProjectShortInfo;
  onBack: () => void;
}

const LoadingPlaceholder: React.FC = () => <Text fontSize="lg">Loading…</Text>;

/**
 * Dynamically try to import the project page. If the file does not exist,
 * fall back to the "coming-soon" page
 */
const loadProjectPage = async (id: string) => {
  try {
    return await import(`./ProjectPages/${id}`);
  } catch {
    return import("./ProjectPages/coming-soon");
  }
};

const resolveProjectPage = (id: string): React.ComponentType => {
  return dynamic(() => loadProjectPage(id), {
    ssr: false,
    loading: () => <LoadingPlaceholder />,
  });
};

const ProjectPage: React.FC<ProjectPageProps> = ({ project, onBack }) => {
  const isLargeScreen = useIsLargeScreen();

  const maxWidth = isLargeScreen ? "70%" : "95%";

  const PageComponent = useMemo(() => {
    return resolveProjectPage(project.id);
  }, [project.id]);

  return (
    <Box maxW={maxWidth}>
      <Flex align="center" gap={2} mb={4}>
        <Box
          as={IoArrowBack}
          onClick={onBack}
          cursor="pointer"
          boxSize={6}
          _hover={{ transform: "scale(1.2)" }}
          transition="transform 0.1s ease-in-out"
        />
        <Text fontSize="xl" fontWeight={600}>
          {project.title}
        </Text>
      </Flex>

      <PageComponent />
    </Box>
  );
};

export default ProjectPage;
