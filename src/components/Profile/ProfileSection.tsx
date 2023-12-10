import { SECTION_LABEL } from "@/constants/constants";
import { Section, SectionProps } from "@/types/common";
import { assertUnreachable } from "@/utils/utils";
import { Stack, Center, Text, StackProps } from "@chakra-ui/react";
import React from "react";
import About from "./Sections/About";
import Blog from "./Sections/Blog";
import Projects from "./Sections/Projects";
import Experience from "./Sections/Experience";

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

const ProfileSection: React.FC<SectionProps & StackProps> = (props) => {
  const { section, ...rest } = props;

  return (
    <Stack w="100%" h="100%" {...rest}>
      <Center w="100%">
        <Text color={"white"} fontWeight={500} fontSize={"20px"}>
          {SECTION_LABEL[section]}
        </Text>
      </Center>
      {renderSection(section)}
    </Stack>
  );
};

export default ProfileSection;
