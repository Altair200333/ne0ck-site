import React, { useMemo, useState } from "react";
import { Stack, Text, HStack, Flex, GridItem, Box } from "@chakra-ui/react";
import { PiGlobeHemisphereWestBold } from "react-icons/pi";
import { LuMove3D } from "react-icons/lu";
import { MdOutlineGames } from "react-icons/md";
import { FaDesktop } from "react-icons/fa";
import { TbDeviceMobile } from "react-icons/tb";
import { GiSandSnake } from "react-icons/gi";
import { useIsLargeScreen } from "@/utils/hooks";
import { isDefined } from "@/utils/utils";

const CARD_WIDTH_PX = 170;
const CARD_HEIGHT_PX = 50;
const CARDS_GAP_PX = 12;

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

type GridLocation = {
  i: number;
  j: number;
  colSpan: number;
  rowSpan: number;
};

type CardGridItem = CardDefinition &
  GridLocation & {
    isSelected: boolean;
  };

/**
 * Compute default raw grid definition
 */
const computeDefaultGrid = (
  items: CardDefinition[],
  params: { isLargeScreen: boolean },
) => {
  const { isLargeScreen } = params || {};
  const cols = isLargeScreen ? 3 : 2;
  const rows = Math.ceil(items.length / cols);

  const grid: CardGridItem[] = items.map((card, index) => {
    const targetCol = index % cols;
    const targetRow = Math.floor(index / cols);

    return {
      ...card,
      i: targetCol,
      j: targetRow,
      colSpan: 1,
      rowSpan: 1,
      isSelected: false,
    };
  });

  return { grid, cols, rows };
};

const findNearestFreeCell = (
  card: CardGridItem,
  occupationMatrix: boolean[][],
) => {
  if (card.isSelected) {
    return { i: card.i, j: card.j };
  }

  // If current cell free – stay put
  if (!occupationMatrix[card.j][card.i]) {
    return { i: card.i, j: card.j };
  }

  const rowsCount = occupationMatrix.length;
  const colsCount = occupationMatrix[0].length;

  /**
   * 1D scan line that finds the closest free index in the direction
   */
  const searchLine = (
    start: number,
    length: number,
    isFree: (idx: number) => boolean,
  ) => {
    let bestIdx: number | null = null;
    let bestDist = Number.POSITIVE_INFINITY;
    for (let idx = 0; idx < length; idx++) {
      if (!isFree(idx)) {
        continue;
      }
      const dist = Math.abs(idx - start);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = idx;
      }
    }
    return { idx: bestIdx, dist: bestDist } as const;
  };

  const rowResult = searchLine(
    card.i,
    colsCount,
    (col) => !occupationMatrix[card.j][col],
  );
  const colResult = searchLine(
    card.j,
    rowsCount,
    (row) => !occupationMatrix[row][card.i],
  );

  if (
    isDefined(rowResult.idx) &&
    (rowResult.dist <= colResult.dist || !isDefined(colResult.idx))
  ) {
    return { i: rowResult.idx, j: card.j };
  }
  if (isDefined(colResult.idx)) {
    return { i: card.i, j: colResult.idx };
  }

  // fallback direct search by
  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < colsCount; col++) {
      if (!occupationMatrix[row][col]) {
        return { i: col, j: row };
      }
    }
  }
  return { i: card.i, j: card.j };
};

const markAsSelected = (
  card: CardGridItem,
  params: {
    rowSpan: number;
    colSpan: number;
  },
) => {
  card.i = 0;
  card.isSelected = true;
  card.colSpan = params.colSpan;
  card.rowSpan = params.rowSpan;
};

const useCardsGrid = (params: {
  isLargeScreen: boolean;
  selectedCardTitle: string | null;
}) => {
  const { isLargeScreen, selectedCardTitle } = params;

  return useMemo(() => {
    const selectedCardColSpan = isLargeScreen ? 3 : 2;
    const selectedCardRowSpan = isLargeScreen ? 2 : 3;

    // original "untouched" grid with raw definitions
    const { grid: originalGrid, cols } = computeDefaultGrid(CONTENT_CARDS, {
      isLargeScreen,
    });

    const selectedCard = originalGrid.find(
      (card) => card.title === selectedCardTitle,
    );

    if (!selectedCard) {
      return originalGrid; // fast exist, dont recompute the grid
    }

    markAsSelected(selectedCard, {
      colSpan: selectedCardColSpan,
      rowSpan: selectedCardRowSpan,
    });

    const newColsCount = Math.max(cols, selectedCard.i + selectedCard.colSpan);

    const selectedCardVirtualCellsCount =
      selectedCard.colSpan * selectedCard.rowSpan;
    const virtualCellsCount =
      originalGrid.length - 1 + selectedCardVirtualCellsCount;
    const newRowsCount = Math.ceil(virtualCellsCount / newColsCount);

    const occupationMatrix: boolean[][] = Array.from(
      { length: newRowsCount },
      () => Array.from({ length: newColsCount }, () => false),
    );

    const occupyCardSpace = (card: CardGridItem) => {
      for (let i = 0; i < card.colSpan; i++) {
        for (let j = 0; j < card.rowSpan; j++) {
          occupationMatrix[card.j + j][card.i + i] = true;
        }
      }
    };

    occupyCardSpace(selectedCard);

    // calculate nearest placement and occupy the space
    const newGrid = originalGrid.map((card) => {
      const { i, j } = findNearestFreeCell(card, occupationMatrix);

      card.i = i;
      card.j = j;
      occupationMatrix[j][i] = true;

      return card;
    });

    return newGrid;
  }, [isLargeScreen, selectedCardTitle]);
};

const About: React.FC = () => {
  const isLargeScreen = useIsLargeScreen();
  const [selectedCardTitle, setSelectedCardTitle] = useState<string | null>(
    null,
  );

  const toggleSelectedCard = (card: CardDefinition) => {
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
      <Text color={"white"} fontWeight={500} fontSize={"lg"}></Text>
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
