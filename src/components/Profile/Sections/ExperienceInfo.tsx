import { ExperienceItem } from "@/types/common";
import { formatDateRange } from "@/utils/utils";
import { ListItem, Stack, UnorderedList, Text } from "@chakra-ui/react";
import React from "react";

const ExperienceInfo: React.FC<{ item: ExperienceItem }> = ({ item }) => {
  const { title, company, startDate, endDate, details } = item;
  const period = formatDateRange(startDate, endDate);

  return (
    <Stack
      spacing={2}
      _hover={{
        backgroundColor: "#424461",
      }}
      p={3}
      borderRadius={"12px"}
      transition={"0.2s ease-in-out"}
    >
      <Text fontWeight={500} fontSize={"lg"}>
        {title} at {company}
      </Text>
      <Text fontSize={"sm"} color={"gray.300"}>
        {period}
      </Text>
      <UnorderedList spacing={1} pl={3}>
        {details.map((detail, index) => (
          <ListItem key={index} color={"gray.100"}>
            {detail}
          </ListItem>
        ))}
      </UnorderedList>
    </Stack>
  );
};

export default ExperienceInfo;
