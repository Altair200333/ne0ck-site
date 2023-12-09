import { Section } from "@/types/common";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import React from "react";
import { Box } from "@chakra-ui/react";

const ProfileSectionsList: React.FC = () => {
  const sections = [Section.ABOUT, Section.EXPERIENCE, Section.PROJECTS];
  const ref = useRef<HTMLDivElement>(null);

  const renderSection = (section: Section) => {
    return (
      <Box
        position={"absolute"}
        w="100%"
        h="100%"
        left={0}
        top={0}
        key={section}
        overflowX={"hidden"}
      >
        <AnimatedSection section={section} />
      </Box>
    );
  };

  return (
    <Box w="100%" maxW="600px" position={"relative"} ref={ref}>
      {sections.map(renderSection)}
    </Box>
  );
};

export default ProfileSectionsList;
