import { Box, Flex } from "@chakra-ui/react";
import ProfileSectionsList from "./ProfileSectionsList";
import ProfileSectionsSelector from "./ProfileSectionsSelector";
import ShortBio from "./ShortBio";
import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <Flex flexDirection={"row"}>
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
      <Box w="100%" display={"flex"} justifyContent={"center"}>
        <ProfileSectionsList />
      </Box>
    </Flex>
  );
};

export default ProfilePage;
