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
        maxW="700px"
        left="50%"
        top={0}
        transform="translateX(-50%)"
        key={section}
        overflow={"hidden"}
        zIndex={isActive ? 2 : 1}
        display={isActive ? "block" : "none"}
      >
        <AnimatedSection section={section} />
      </Box>
    );
  };

  return (
    <Box w="100%" overflowX={"auto"} position={"relative"} >
      {SECTIONS.map(renderSection)}
    </Box>
  );
};

export default ProfileSectionsList;
