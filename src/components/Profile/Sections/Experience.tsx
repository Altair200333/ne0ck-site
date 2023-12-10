import React from "react";
import { Box } from "@chakra-ui/react";
import { EXPERIENCE_INFO } from "@/data/static-data";
import ExperienceInfo from "./ExperienceInfo";

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
