import { MOBILE_BREAKPOINT_PX } from "@/constants/constants";
import { useMediaQuery } from "@chakra-ui/react";

export const useIsLargeScreen = () => {
  const [isLargeScreen] = useMediaQuery(
    [`(min-width: ${MOBILE_BREAKPOINT_PX}px)`],
    {
      fallback: [true],
    },
  );
  return isLargeScreen;
};
