import { Section } from "@/types/common";
import { Stack } from "@chakra-ui/react";
import SectionPicker from "./SectionPicker";
import React from "react";

const ProfileSectionsSelector: React.FC = () => {
  return (
    <Stack spacing={5}>
      <SectionPicker section={Section.PROJECTS} />
      <SectionPicker section={Section.EXPERIENCE} />
      <SectionPicker section={Section.ABOUT} />
    </Stack>
  );
};

export default ProfileSectionsSelector;
