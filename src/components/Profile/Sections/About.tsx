import React from "react";
import { ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";

const About: React.FC = () => {
  return (
    <Stack>
      <Text color={"white"} fontWeight={500}>
        I am software developer with experience of working with different
        technologies such as:
      </Text>

      <UnorderedList spacing={1}>
        <ListItem>Web development (TS, Node, Nest.js, Next.js, React)</ListItem>
        <ListItem>3D (C#/C++ and OpenGL/DirectX/Unity)</ListItem>
        <ListItem>Mobile development (Androind Java/Flutter)</ListItem>
        <ListItem>Game development (Unity, blender)</ListItem>
        <ListItem>Python (side projects + ML at university)</ListItem>
      </UnorderedList>
    </Stack>
  );
};

export default About;
