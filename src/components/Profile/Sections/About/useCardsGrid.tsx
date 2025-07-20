import React, { useMemo } from "react";
import { PiGlobeHemisphereWestBold } from "react-icons/pi";
import { LuMove3D } from "react-icons/lu";
import { MdOutlineGames } from "react-icons/md";
import { FaDesktop } from "react-icons/fa";
import { TbDeviceMobile } from "react-icons/tb";
import { GiSandSnake } from "react-icons/gi";
import { isDefined } from "@/utils/utils";

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

export type CardGridItem = CardDefinition &
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

export const useCardsGrid = (params: {
  isLargeScreen: boolean;
  selectedCardTitle: string | null;
}) => {
  const { isLargeScreen, selectedCardTitle } = params;

  const computeNewGridSize = (
    cells: CardGridItem[],
    selectedCard: CardGridItem,
  ) => {
    const colsCount = Math.max(...cells.map((cell) => cell.i + cell.colSpan));

    const newColsCount = Math.max(
      colsCount,
      selectedCard.i + selectedCard.colSpan,
    );

    const selectedCardVirtualCellsCount =
      selectedCard.colSpan * selectedCard.rowSpan;
    const virtualCellsCount = cells.length - 1 + selectedCardVirtualCellsCount;
    const newRowsCount = Math.ceil(virtualCellsCount / newColsCount);

    return { rows: newRowsCount, cols: newColsCount };
  };

  return useMemo(() => {
    const selectedCardColSpan = isLargeScreen ? 3 : 2;
    const selectedCardRowSpan = isLargeScreen ? 2 : 3;

    // original "untouched" grid with raw definitions
    const { grid: originalGrid } = computeDefaultGrid(CONTENT_CARDS, {
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

    const { cols: newColsCount, rows: newRowsCount } = computeNewGridSize(
      originalGrid,
      selectedCard,
    );

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
