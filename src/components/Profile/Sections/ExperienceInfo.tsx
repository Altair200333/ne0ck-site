import { ExperienceItem } from "@/types/common";
import { formatDateRange } from "@/utils/utils";
import { Box, Stack, Text } from "@chakra-ui/react";
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
    >
      <Text fontWeight={500} fontSize={"lg"}>
        {title} at {company}
      </Text>
      <Text fontSize={"sm"} color={"gray.300"}>
        {period}
      </Text>
      <Box as="ul" pl={3} display="flex" flexDirection="column" gap={1}>
        {details.map((detail, index) => (
          <Box as="li" key={index} color="gray.100" listStyleType="disc">
            {detail}
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default ExperienceInfo;
