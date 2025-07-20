import React, { useState } from "react";
import {
  Stack,
  Text,
  HStack,
  Flex,
  SimpleGrid,
  GridItem,
  Box,
} from "@chakra-ui/react";
import { PiGlobeHemisphereWestBold } from "react-icons/pi";
import { LuMove3D } from "react-icons/lu";
import { MdOutlineGames } from "react-icons/md";
import { FaDesktop } from "react-icons/fa";
import { TbDeviceMobile } from "react-icons/tb";
import { AiOutlinePython } from "react-icons/ai";
import { GiSandSnake } from "react-icons/gi";

const CARD_WIDTH_PX = 170;
const CARD_HEIGHT_PX = 50;
const CARDS_GAP_PX = 12;

const CARD_BACKGROUND = "#424461";

const InterestCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  isSelected: boolean;
  toggleSelected: () => void;
}> = ({ icon, title, isSelected, toggleSelected }) => {
  const width = isSelected
    ? `${CARD_WIDTH_PX * 2 + CARDS_GAP_PX}px`
    : `${CARD_WIDTH_PX}px`;
  const height = isSelected ? `${CARD_HEIGHT_PX * 2}px` : `${CARD_HEIGHT_PX}px`;

  return (
    <GridItem
      w={width}
      h={height}
      backgroundColor={CARD_BACKGROUND}
      backgroundImage="radial-gradient(circle at center, rgba(49, 130, 206, 0.04) 0%, rgba(66, 68, 97, 0) 80%)"
      boxShadow="inset 0 0 0 2px rgba(49, 130, 206, 0.6), 0 0 4px rgba(49, 130, 206, 0.2)"
      borderRadius={"12px"}
      transition={"0.2s ease-in-out"}
      fontSize={"2xl"}
      fontWeight={500}
      color={"white"}
      cursor={"pointer"}
      alignContent={"center"}
      colSpan={isSelected ? 3 : 1}
      rowSpan={isSelected ? 2 : 1}
      onClick={toggleSelected}
      _hover={{
        backgroundColor: "#4a4c6d",
        boxShadow:
          "inset 0 0 0 2px rgba(66, 153, 225, 0.9), 0 0 8px rgba(66, 153, 225, 0.6)",
      }}
      className={"group"}
    >
      <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        w="100%"
        mx="auto"
        my="auto"
        px={4}
      >
        <Box
          _groupHover={{
            transform: "scale(1.2)",
            color: "var(--chakra-colors-blue-300)",
          }}
          transition={"0.2s ease-in-out"}
        >
          {icon}
        </Box>
        <Text mx="auto" my="auto" w="fit-content">
          {title}
        </Text>
      </Flex>
    </GridItem>
  );
};

type CardDefinition = {
  icon: React.ReactNode;
  title: string;
};

const CONTENT_CARDS: CardDefinition[] = [
  {
    icon: <PiGlobeHemisphereWestBold />,
    title: "Web",
  },
  {
    icon: <LuMove3D />,
    title: "3D",
  },
  {
    icon: <TbDeviceMobile />,
    title: "Mobile",
  },
  {
    icon: <MdOutlineGames />,
    title: "Games",
  },
  {
    icon: <FaDesktop />,
    title: "Desktop",
  },
  {
    icon: <GiSandSnake />,
    title: "Python",
  },
];

const About: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  return (
    <Stack gap={2} p={4}>
      <HStack>
        <Text color={"white"} fontWeight={500} fontSize={"xl"}>
          Hello
        </Text>
      </HStack>
      <Text color={"white"} fontWeight={500} fontSize={"lg"}>
        I am Full Stack software developer passionate about technologies and
        making cool things
      </Text>
      <br />
      <Text color={"white"} fontWeight={500} fontSize={"lg"}></Text>
      <SimpleGrid
        columns={{ sm: 2, md: 3 }}
        gap={`${CARDS_GAP_PX}px`}
        w="fit-content"
      >
        {CONTENT_CARDS.map((card) => (
          <InterestCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            isSelected={selectedCard === card.title}
            toggleSelected={() => {
              if (selectedCard === card.title) {
                setSelectedCard(null);
              } else {
                setSelectedCard(card.title);
              }
            }}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default About;
