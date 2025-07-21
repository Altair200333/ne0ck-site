import React, { useMemo, useState } from "react";
import { Stack, Text, HStack, Box } from "@chakra-ui/react";
import { useIsLargeScreen } from "@/utils/hooks";
import { CardGridItem, useCardsGrid } from "./About/useCardsGrid";
import InterestCard, {
  CARD_HEIGHT_PX,
  CARD_WIDTH_PX,
  CARDS_GAP_PX,
} from "./About/InterestCard";

const About: React.FC = () => {
  const isLargeScreen = useIsLargeScreen();
  const [selectedCardTitle, setSelectedCardTitle] = useState<string | null>(
    null,
  );

  const toggleSelectedCard = (card: CardGridItem) => {
    if (selectedCardTitle === card.title) {
      setSelectedCardTitle(null);
    } else {
      setSelectedCardTitle(card.title);
    }
  };

  const cardsGrid = useCardsGrid({ selectedCardTitle, isLargeScreen });

  const renderContentCard = (card: CardGridItem) => {
    return (
      <InterestCard
        key={card.title}
        card={card}
        toggleSelected={() => toggleSelectedCard(card)}
      />
    );
  };

  const { columns, rows } = useMemo(() => {
    const maxCol = Math.max(...cardsGrid.map((card) => card.i));
    const maxRow = Math.max(...cardsGrid.map((card) => card.j));
    return { columns: maxCol + 1, rows: maxRow + 1 };
  }, [cardsGrid]);

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
      <Text color={"white"} fontWeight={500} fontSize={"lg"}>
        Click on the cards below
      </Text>
      <Box
        position="relative"
        w={`${CARD_WIDTH_PX * columns + CARDS_GAP_PX * (columns - 1)}px`}
        h={`${CARD_HEIGHT_PX * rows + CARDS_GAP_PX * (rows - 1)}px`}
      >
        {cardsGrid.map(renderContentCard)}
      </Box>
    </Stack>
  );
};

export default About;
