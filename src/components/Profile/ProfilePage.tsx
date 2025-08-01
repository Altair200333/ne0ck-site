import { Flex, Stack, StackProps } from "@chakra-ui/react";
import ProfileSectionsSelector from "./ProfileSectionsSelector";
import ShortBio from "./ShortBio";
import React, { useState } from "react";
import { Section } from "@/types/common";
import { ProfileSectionProvider } from "@/contexts/ProfileSectionContext";
import ProfileSection from "./ProfileSection";
import { useIsLargeScreen } from "@/utils/hooks";

interface ProfileNavigationProps {
  isLargeScreen: boolean;
}

const ProfileNavigation: React.FC<ProfileNavigationProps> = () => {
  return (
    <Flex
      flexDirection="column"
      maxW="300px"
      justifyContent="flex-start"
      alignItems="flex-start"
      gap={10}
    >
      <ShortBio />
      <ProfileSectionsSelector />
    </Flex>
  );
};

interface ProfilePageProps {
  initialSection?: Section;
}

const FALLBACK_SECTION = Section.About;

const ProfilePage: React.FC<ProfilePageProps> = ({ initialSection }) => {
  const isLargeScreen = useIsLargeScreen();

  const Container = isLargeScreen ? Flex : Stack;
  const containerProps: Partial<StackProps> = isLargeScreen
    ? { flexDirection: "row", h: "100%", gap: 20 }
    : { h: "100%", gap: 10 };

  const [currentSection, setCurrentSection] = useState<Section>(
    initialSection || FALLBACK_SECTION,
  );

  return (
    <ProfileSectionProvider
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    >
      <Container {...containerProps}>
        <ProfileNavigation isLargeScreen={isLargeScreen} />
        <ProfileSection section={currentSection} />
      </Container>
    </ProfileSectionProvider>
  );
};

export default ProfilePage;
