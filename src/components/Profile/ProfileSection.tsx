import { SECTION_LABEL } from "@/constants/constants";
import { Section, SectionProps } from "@/types/common";
import { assertUnreachable } from "@/utils/utils";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import About from "./Sections/About";
import Blog from "./Sections/Blog";
import Projects from "./Sections/Projects";
import Experience from "./Sections/Experience";
import BoxFitOverflow from "../Common/BoxFitOverflow";

const renderSection = (
  section: Section,
  setHeaderHidden: (hidden: boolean) => void,
) => {
  switch (section) {
    case Section.About:
      return <About />;
    case Section.Projects:
      return <Projects setSectionHeaderHidden={setHeaderHidden} />;
    case Section.Experience:
      return <Experience />;
    case Section.Blog:
      return <Blog />;
    default:
      return assertUnreachable(section);
  }
};

const ProfileSection: React.FC<SectionProps> = ({ section }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const labelRef = React.useRef<HTMLParagraphElement>(null);

  const [labelLeft, setLabelLeft] = React.useState<number>(0);
  const [isHeaderHidden, setHeaderHidden] = React.useState(false);

  const calculateLabelPosition = React.useCallback(() => {
    if (!containerRef.current || !labelRef.current) {
      return;
    }

    const labelWidth = labelRef.current.getBoundingClientRect().width;

    const containerRect = containerRef.current.getBoundingClientRect();
    const screenCenter = window.innerWidth / 2;

    const centerPos = screenCenter - labelWidth / 2;
    const targetLeft = Math.max(centerPos, containerRect.left);

    setLabelLeft(targetLeft - containerRect.left);
  }, []);

  React.useLayoutEffect(() => {
    calculateLabelPosition();
  }, [calculateLabelPosition, section]);

  React.useEffect(() => {
    window.addEventListener("resize", calculateLabelPosition);
    return () => window.removeEventListener("resize", calculateLabelPosition);
  }, [calculateLabelPosition]);

  React.useEffect(() => {
    setHeaderHidden(false);
  }, [section]);

  return (
    <Box display="flex" flexDir="column" w="100%" h="100%" minH={0}>
      {!isHeaderHidden && (
        <Box
          ref={containerRef}
          w="100%"
          flexShrink={0}
          position="relative"
          display="flex"
          alignItems="center"
          id="center"
        >
          <Text
            ref={labelRef}
            color="white"
            fontWeight={500}
            fontSize="20px"
            position="relative"
            left={`${labelLeft}px`}
            whiteSpace="nowrap"
          >
            {SECTION_LABEL[section]}
          </Text>
        </Box>
      )}
      <BoxFitOverflow flex={1} pt={4}>
        {renderSection(section, setHeaderHidden)}
      </BoxFitOverflow>
    </Box>
  );
};

export default ProfileSection;
