import { Stack, Text } from "@chakra-ui/react";
import React from "react";

const ShortBio: React.FC = () => {
  return (
    <Stack>
      <Text fontSize={"30px"} fontWeight={600}>
        Mike Petrenko
      </Text>
      <Text fontSize={"20px"} color={"gray.200"} fontWeight={500}>
        Software Engineer
      </Text>
    </Stack>
  );
};

export default ShortBio;
