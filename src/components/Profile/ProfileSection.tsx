import { Section, SectionProps } from "@/types/common";
import { assertUnreachable } from "@/utils/utils";
import { Box } from "@chakra-ui/react";
import React from "react";
import About from "./Sections/About";
import Blog from "./Sections/Blog";
import Projects from "./Sections/Projects";
import Experience from "./Sections/Experience";
import BoxFitOverflow from "../Common/BoxFitOverflow";

const renderSection = (section: Section) => {
  switch (section) {
    case Section.About:
      return <About />;
    case Section.Projects:
      return <Projects />;
    case Section.Experience:
      return <Experience />;
    case Section.Blog:
      return <Blog />;
    default:
      return assertUnreachable(section);
  }
};

const ProfileSection: React.FC<SectionProps> = ({ section }) => {
  return (
    <Box display="flex" flexDir="column" w="100%" h="100%" minH={0}>
      <BoxFitOverflow flex={1} pt={4}>
        {renderSection(section)}
      </BoxFitOverflow>
    </Box>
  );
};

export default ProfileSection;
