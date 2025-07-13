import { ExperienceItem } from "@/types/common";
import { formatDateRange } from "@/utils/utils";
import { Stack, Text, ListRoot, ListItem } from "@chakra-ui/react";
import React from "react";

const ExperienceInfo: React.FC<{ item: ExperienceItem }> = ({ item }) => {
  const { title, company, startDate, endDate, details } = item;
  const period = formatDateRange(startDate, endDate);

  return (
    <Stack
      gap={2}
      _hover={{ backgroundColor: "#424461" }}
      p={3}
      borderRadius={"12px"}
      transition={"0.2s ease-in-out"}
      id="stack"
    >
      <Text fontWeight={500} fontSize={"lg"}>
        {title} at {company}
      </Text>
      <Text fontSize={"sm"} color={"gray.300"}>
        {period}
      </Text>
      <ListRoot gap={1} px={4}>
        {details.map((detail, index) => (
          <ListItem key={index} color="gray.100">
            {detail}
          </ListItem>
        ))}
      </ListRoot>
    </Stack>
  );
};

export default ExperienceInfo;
