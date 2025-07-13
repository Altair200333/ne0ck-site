import { ProjectShortInfo } from "@/types/common";
import { Stack, Text } from "@chakra-ui/react";
import React from "react";

const ProjectInfo: React.FC<{
  item: ProjectShortInfo;
  onClick?: () => void;
}> = ({ item, onClick }) => {
  const { title, description } = item;
  return (
    <Stack
      onClick={onClick}
      gap={1}
      _hover={{ backgroundColor: "#424461" }}
      p={4}
      borderRadius={"12px"}
      transition={"0.2s ease-in-out"}
      cursor={"pointer"}
    >
      <Text fontWeight={500} fontSize={"lg"}>
        {title}
      </Text>
      <Text color={"gray.100"}>{description}</Text>
    </Stack>
  );
};

export default ProjectInfo;
