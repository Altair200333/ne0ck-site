import { SECTION_LABEL } from "@/constants/constants";
import { useProfileSection } from "@/contexts/ProfileSectionContext";
import { SectionProps } from "@/types/common";
import { HStack, Text, Box } from "@chakra-ui/react";
import React from "react";

const SectionPicker: React.FC<SectionProps> = (props) => {
  const { section } = props;
  const { currentSection, setCurrentSection } = useProfileSection();
  const isActive = section === currentSection;

  const inactiveColor = "gray.400";
  const activeWidth = "100px";
  const inActiveWidth = "50px";

  const setActive = () => {
    setCurrentSection(section);
  };

  return (
    <HStack role="group" cursor={"pointer"} onClick={setActive}>
      <Box
        width={inActiveWidth}
        height={isActive ? "2px" : "1px"}
        background={isActive ? "white" : inactiveColor}
        borderRadius={"5px"}
        _groupHover={{ width: activeWidth }}
        {...(isActive && { width: activeWidth })}
        transition={"0.2s ease-in-out"}
      />
      <Text
        color={isActive ? "white" : inactiveColor}
        fontWeight={isActive ? 600 : 500}
      >
        {SECTION_LABEL[section]}
      </Text>
    </HStack>
  );
};

export default SectionPicker;
