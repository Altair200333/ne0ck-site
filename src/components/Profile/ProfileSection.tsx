import { SECTION_LABEL } from "@/constants/constants";
import { Section, SectionProps } from "@/types/common";
import { assertUnreachable } from "@/utils/utils";
import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";
import About from "./Sections/About";
import Blog from "./Sections/Blog";
import Projects from "./Sections/Projects";
import Experience from "./Sections/Experience";
import BoxFitOverflow from "../Common/BoxFitOverflow";

const renderSection = (section: Section) => {
  switch (section) {
    case Section.ABOUT:
      return <About />;
    case Section.PROJECTS:
      return <Projects />;
    case Section.EXPERIENCE:
      return <Experience />;
    case Section.BLOG:
      return <Blog />;
    default:
      return assertUnreachable(section);
  }
};

const ProfileSection: React.FC<SectionProps> = ({ section }) => {
  return (
    <Box display="flex" flexDir="column" w="100%" h="100%" minH={0}>
      <Center w="100%" flexShrink={0}>
        <Text color="white" fontWeight={500} fontSize="20px">
          {SECTION_LABEL[section]}
        </Text>
      </Center>
      <BoxFitOverflow flex={1} pt={4} px={2}>
        {renderSection(section)}
      </BoxFitOverflow>
    </Box>
  );
};

export default ProfileSection;
