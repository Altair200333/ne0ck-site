import { SECTION_LABEL } from "@/constants/constants";
import { SectionProps } from "@/types/common";
import { Stack, Center, Text } from "@chakra-ui/react";
import React from "react";

const ProfileSection: React.FC<SectionProps> = (props) => {
  const { section } = props;

  return (
    <Stack w="100%" h="100%">
      <Center w="100%">
        <Text color={"gray.300"} fontWeight={500} fontSize={"24px"}>
          {SECTION_LABEL[section]}
        </Text>
      </Center>
      <Text color={"gray.300"} fontWeight={400} fontSize={"24px"}>
        This will be section content
      </Text>
    </Stack>
  );
};

export default ProfileSection;
