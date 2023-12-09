import { Section } from "@/types/common";
import AnimatedSection from "./AnimatedSection";
import React from "react";
import { Box } from "@chakra-ui/react";
import { SECTIONS } from "@/constants/constants";
import { currentSection } from "@/signals/signals";

const ProfileSectionsList: React.FC = () => {
  const renderSection = (section: Section) => {
    const isActive = section === currentSection.value;

    return (
      <Box
        position={"absolute"}
        w="100%"
        h="100%"
        left={0}
        top={0}
        key={section}
        overflowX={"hidden"}
        zIndex={isActive ? 2 : 1}
      >
        <AnimatedSection section={section} />
      </Box>
    );
  };

  return (
    <Box w="100%" maxW="700px" position={"relative"}>
      {SECTIONS.map(renderSection)}
    </Box>
  );
};

export default ProfileSectionsList;
