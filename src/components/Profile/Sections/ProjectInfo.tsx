import { ProjectShortInfo } from "@/types/common";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { PiMicrophone } from "react-icons/pi";

const ProjectInfo: React.FC<{
  item: ProjectShortInfo;
  onClick?: () => void;
}> = ({ item, onClick }) => {
  const { title, description, icon } = item;
  return (
    <Stack
      onClick={onClick}
      gap={1}
      _hover={{ backgroundColor: "#424461" }}
      p={4}
      borderRadius={"12px"}
      transition={"0.2s ease-in-out"}
      cursor={"pointer"}
      className={"group"}
    >
      <HStack>
        <Box
          _groupHover={{
            color: "var(--chakra-colors-blue-500)",
            transform: "scale(1.2) rotate(-10deg)",
          }}
          transition={"0.2s ease-in-out"}
        >
          {icon}
        </Box>
        <Text fontWeight={500} fontSize={"lg"}>
          {title}
        </Text>
      </HStack>

      <Text color={"gray.100"}>{description}</Text>
    </Stack>
  );
};

export default ProjectInfo;
