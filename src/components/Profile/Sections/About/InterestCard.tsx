import React from "react";
import { Text, Flex, GridItem, Box } from "@chakra-ui/react";
import { CardGridItem } from "./useCardsGrid";

export const CARD_WIDTH_PX = 170;
export const CARD_HEIGHT_PX = 50;
export const CARDS_GAP_PX = 12;

const CARD_BACKGROUND = "#424461";

const InterestCard: React.FC<{
  card: CardGridItem;
  toggleSelected: () => void;
}> = ({ card, toggleSelected }) => {
  const { i, j, isSelected, title, icon, colSpan, rowSpan } = card;
  const top = j * (CARD_HEIGHT_PX + CARDS_GAP_PX);
  const left = i * (CARD_WIDTH_PX + CARDS_GAP_PX);

  const width = isSelected
    ? `${CARD_WIDTH_PX * colSpan + CARDS_GAP_PX * (colSpan - 1)}px`
    : `${CARD_WIDTH_PX}px`;
  const height = isSelected
    ? `${CARD_HEIGHT_PX * rowSpan + CARDS_GAP_PX * (rowSpan - 1)}px`
    : `${CARD_HEIGHT_PX}px`;

  return (
    <GridItem
      position={"absolute"}
      top={0}
      left={0}
      transform={`translate(${left}px, ${top}px)`}
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
        <Text mx="auto" my="auto" w="fit-content" userSelect={"none"}>
          {title}
        </Text>
      </Flex>
    </GridItem>
  );
};
export default InterestCard;
