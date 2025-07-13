import React from "react";
import { Stack, Text, ListRoot, ListItem } from "@chakra-ui/react";

const About: React.FC = () => {
  return (
    <Stack gap={2} p={4}>
      <Text color={"white"} fontWeight={500}>
        I am software developer with experience of working with different
        technologies such as:
      </Text>

      <ListRoot gap={1} px={4}>
        <ListItem>
          Web development (React, Node, JS/TS, Nest.js, Next.js)
        </ListItem>
        <ListItem>3D (C#/C++ and OpenGL/DirectX/Unity)</ListItem>
        <ListItem>Mobile development (Android Java / Flutter)</ListItem>
        <ListItem>Game development (Unity, Blender)</ListItem>
        <ListItem>Python (ML - machine detection, side projects)</ListItem>
      </ListRoot>
    </Stack>
  );
};

export default About;
