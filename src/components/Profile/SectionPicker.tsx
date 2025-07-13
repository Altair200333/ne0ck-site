import { SECTION_LABEL } from "@/constants/constants";
import { useProfileSection } from "@/contexts/ProfileSectionContext";
import { SectionProps } from "@/types/common";
import { HStack, Text, Box } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

const INACTIVE_COLOR = "gray.400";
const ACTIVE_COLOR = "white";
const ACTIVE_WIDTH = "100px";
const INACTIVE_WIDTH = "50px";

const SectionPicker: React.FC<SectionProps> = (props) => {
  const { section } = props;
  const { currentSection, setCurrentSection } = useProfileSection();
  const isActive = section === currentSection;

  const router = useRouter();

  const setActive = () => {
    setCurrentSection(section);
    router.push(`/${section}`);
  };

  return (
    <HStack className="group" cursor={"pointer"} onClick={setActive}>
      <Box
        width={INACTIVE_WIDTH}
        height={isActive ? "2px" : "1px"}
        background={isActive ? ACTIVE_COLOR : INACTIVE_COLOR}
        borderRadius={"5px"}
        _groupHover={{ width: ACTIVE_WIDTH }}
        {...(isActive && { width: ACTIVE_WIDTH })}
        transition={"0.2s ease-in-out"}
      />
      <Text
        color={isActive ? ACTIVE_COLOR : INACTIVE_COLOR}
        fontWeight={isActive ? 600 : 500}
      >
        {SECTION_LABEL[section]}
      </Text>
    </HStack>
  );
};

export default SectionPicker;
