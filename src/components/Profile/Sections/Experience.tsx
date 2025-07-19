import React from "react";
import { Box } from "@chakra-ui/react";
import ExperienceInfo from "./ExperienceInfo";
import { EXPERIENCE_INFO } from "@/data/static-data";

const Experience: React.FC = () => {
  return (
    <Box>
      {EXPERIENCE_INFO.map((item) => (
        <ExperienceInfo item={item} key={`${item.title}-${item.company}`} />
      ))}
    </Box>
  );
};

export default Experience;
