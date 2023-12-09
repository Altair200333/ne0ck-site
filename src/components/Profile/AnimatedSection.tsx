import { currentSection } from "@/signals/signals";
import { SectionProps } from "@/types/common";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import ProfileSection from "./ProfileSection";
import React from "react";
import { Box } from "@chakra-ui/react";

const AnimatedSection: React.FC<SectionProps> = (props) => {
  const { section } = props;
  const [scope, animate] = useAnimate();

  const isActive = section === currentSection.value;

  const animateCallback = async () => {
    if (!scope.current) {
      return;
    }

    if (isActive) {
      await animate(scope.current, { x: "50vw" }, { duration: 0 });
      await animate(scope.current, { x: 0, opacity: 1 }, { duration: 0.3 });
    } else {
      await animate(scope.current, { opacity: 0 }, { duration: 0.2 });
    }
  };

  useEffect(() => {
    animateCallback();
  }, [isActive, scope]);

  return (
    <Box ref={scope}>
      <ProfileSection section={section} />
    </Box>
  );
};

export default AnimatedSection;
