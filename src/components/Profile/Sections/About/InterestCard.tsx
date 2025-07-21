import React, { useMemo } from "react";
import { Text, GridItem, Box, TextProps } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { CardGridItem } from "./useCardsGrid";

export const CARD_WIDTH_PX = 170;
export const CARD_HEIGHT_PX = 50;
export const CARDS_GAP_PX = 12;

const CARD_BACKGROUND = "#424461";

const useFadeAnimation = (params: {
  initialOffset: number;
  startOpacity?: number;
}) => {
  const { initialOffset = 0, startOpacity = 0 } = params;
  return useMemo(() => {
    const FADE_IN_ANIMATION = keyframes`
    from {
      opacity: ${startOpacity};
      transform: translateY(${initialOffset}px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;
    return FADE_IN_ANIMATION;
  }, [initialOffset, startOpacity]);
};

const InterestCard: React.FC<{
  card: CardGridItem;
  toggleSelected: () => void;
}> = ({ card, toggleSelected }) => {
  const { i, j, isSelected, title, icon, colSpan, rowSpan, tech } = card;
  const top = j * (CARD_HEIGHT_PX + CARDS_GAP_PX);
  const left = i * (CARD_WIDTH_PX + CARDS_GAP_PX);

  const width = isSelected
    ? `${CARD_WIDTH_PX * colSpan + CARDS_GAP_PX * (colSpan - 1)}px`
    : `${CARD_WIDTH_PX}px`;
  const height = isSelected
    ? `${CARD_HEIGHT_PX * rowSpan + CARDS_GAP_PX * (rowSpan - 1)}px`
    : `${CARD_HEIGHT_PX}px`;

  const renderIcon = () => {
    const iconSize = 24;
    const x = 10;
    const y = Math.round(CARD_HEIGHT_PX * 0.5 - iconSize / 2);

    return (
      <Box
        _groupHover={{
          transform: `translate(${x}px, ${y}px) scale(1.2)`,
          color: "var(--chakra-colors-blue-300)",
        }}
        transition={"0.2s ease-in-out"}
        position={"absolute"}
        top={0}
        left={0}
        transform={`translate(${x}px, ${y}px)`}
      >
        {icon}
      </Box>
    );
  };

  const fadeInAnimation = useFadeAnimation({
    initialOffset: 0,
    startOpacity: 0,
  });
  const fadeInSlideAnimation = useFadeAnimation({
    initialOffset: 4,
    startOpacity: 0,
  });

  const renderContent = () => {
    const textProps: TextProps = {
      my: "auto",
      w: "fit-content",
      pl: "45px",
    };

    if (!isSelected) {
      return (
        <Text
          {...textProps}
          userSelect={"none"}
          opacity={0}
          animation={`${fadeInAnimation} 0.3s ease-in-out 0.1s forwards`}
        >
          {title}
        </Text>
      );
    }

    return (
      <Box py={"9px"} w="100%" h="100%">
        <Text
          {...textProps}
          fontSize={"xl"}
          opacity={0}
          animation={`${fadeInAnimation} 0.3s ease-in-out 0.1s forwards`}
        >
          Tech stack
        </Text>
        <Text
          {...textProps}
          fontSize={"md"}
          pt={2}
          opacity={0}
          animation={`${fadeInSlideAnimation} 0.3s ease-in-out 0.1s forwards`}
        >
          {tech.join(", ")}
        </Text>
      </Box>
    );
  };

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
        boxShadow:
          "inset 0 0 0 2px rgba(66, 153, 225, 0.9), 0 0 8px rgba(66, 153, 225, 0.6)",
      }}
      className={"group"}
    >
      {renderIcon()}
      {renderContent()}
    </GridItem>
  );
};
export default InterestCard;
