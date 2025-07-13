import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { Box, Flex, Text } from "@chakra-ui/react";
import { IoArrowBack } from "react-icons/io5";
import { ProjectShortInfo } from "@/types/common";
import { ProjectId } from "@/data/static-data";

interface ProjectPageProps {
  project: ProjectShortInfo;
  onBack: () => void;
}

const PAGES: Record<string, () => Promise<{ default: React.FC }>> = {
  [ProjectId.TradingAgent]: () => import("./ProjectPages/trading-agent"),
  [ProjectId.OpenVibrance]: () => import("./ProjectPages/open-vibrance"),
};

const ProjectPage: React.FC<ProjectPageProps> = ({ project, onBack }) => {
  const PageComponent = useMemo(() => {
    const page = PAGES[project.id];
    if (!page) {
      return dynamic(() => import("./ProjectPages/coming-soon"), {
        ssr: false,
      });
    }
    return dynamic(page, {
      ssr: false,
      loading: () => <Text fontSize="lg">Loading…</Text>,
    });
  }, [project.id]);

  return (
    <Box>
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
