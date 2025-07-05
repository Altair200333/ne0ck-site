import { useProfileSection } from "@/contexts/ProfileSectionContext";
import { SectionProps } from "@/types/common";
import { useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import ProfileSection from "./ProfileSection";
import React from "react";
import { Box } from "@chakra-ui/react";

const AnimatedSection: React.FC<SectionProps> = (props) => {
  const { section } = props;
  const [scope, animate] = useAnimate();
  const [isHidden, setIsHidden] = useState(true); // prevent reload / remount flicker and animation

  const { currentSection } = useProfileSection();
  const isActive = section === currentSection;

  useEffect(() => {
    const animateCallback = async () => {
      if (!scope.current) {
        return;
      }

      if (isActive) {
        await animate(scope.current, { x: "50vw" }, { duration: 0 });
        setIsHidden(false);
        await animate(scope.current, { x: 0, opacity: 1 }, { duration: 0.3 });
      } else {
        await animate(scope.current, { opacity: 0 }, { duration: 0.3 });
        setIsHidden(true);
      }
    };

    animateCallback();
  }, [isActive, scope, animate]);

  return (
    <Box ref={scope}>
      <ProfileSection section={section} opacity={!isHidden ? 1 : 0} />
    </Box>
  );
};

export default AnimatedSection;
