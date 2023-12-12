import { Box, Flex, Stack, useMediaQuery } from "@chakra-ui/react";
import ProfileSectionsList from "./ProfileSectionsList";
import ProfileSectionsSelector from "./ProfileSectionsSelector";
import ShortBio from "./ShortBio";
import React from "react";

const ProfileNavigation: React.FC = () => {
  return (
    <Flex
      flexDirection={"column"}
      maxW={"300px"}
      minH={"250px"}
      maxH={"500px"}
      h="40%"
      justifyContent={"space-between"}
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

  if (isLargeScreen) {
    return (
      <Flex flexDirection={"row"}>
        <ProfileNavigation />
        <Box w="100%" display={"flex"} justifyContent={"center"}>
          <ProfileSectionsList />
        </Box>
      </Flex>
    );
  }

  return (
    <Stack spacing={10}>
      <ProfileNavigation />
      <Box w="100%" h="100%" display={"flex"} justifyContent={"center"}>
        <ProfileSectionsList />
      </Box>
    </Stack>
  );
};

export default ProfilePage;
