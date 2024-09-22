import { Box, Flex, Stack, StackProps, useMediaQuery } from "@chakra-ui/react";
import ProfileSectionsList from "./ProfileSectionsList";
import ProfileSectionsSelector from "./ProfileSectionsSelector";
import ShortBio from "./ShortBio";
import React from "react";

const ProfileNavigation: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      maxW="300px"
      minH="250px"
      maxH="500px"
      h="40%"
      justifyContent="space-between"
    >
      <ShortBio />
      <ProfileSectionsSelector />
    </Flex>
  );
};

const ProfilePage: React.FC = () => {
  const [isLargeScreen] = useMediaQuery("(min-width: 800px)", {
    fallback: true,
  });

  const Container = isLargeScreen ? Flex : Stack;
  const containerProps: StackProps = isLargeScreen
    ? { flexDirection: "row" }
    : { spacing: 10 };

  return (
    <Container {...containerProps}>
      <ProfileNavigation />
      <Box
        w="100%"
        display="flex"
        justifyContent="center"
        h={isLargeScreen ? "auto" : "100%"}
      >
        <ProfileSectionsList />
      </Box>
    </Container>
  );
};

export default ProfilePage;
