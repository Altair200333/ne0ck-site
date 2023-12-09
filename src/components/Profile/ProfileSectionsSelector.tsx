import { Stack } from "@chakra-ui/react";
import SectionPicker from "./SectionPicker";
import React from "react";
import { SECTIONS } from "@/constants/constants";

const ProfileSectionsSelector: React.FC = () => {
  return (
    <Stack spacing={5}>
      {SECTIONS.map((section) => (
        <SectionPicker section={section} key={`section-${section}`} />
      ))}
    </Stack>
  );
};

export default ProfileSectionsSelector;
