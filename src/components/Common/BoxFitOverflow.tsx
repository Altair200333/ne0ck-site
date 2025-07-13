import { Box, BoxProps } from "@chakra-ui/react";
import { forwardRef } from "react";

export type BoxFitOverflowProps = BoxProps;

const BoxFitOverflow = forwardRef<HTMLDivElement, BoxFitOverflowProps>(
  ({ children, ...rest }, ref) => (
    <Box
      w="100%"
      h="100%"
      overflow="hidden"
      position="relative"
      minH={0}
      {...rest}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        overflow="auto"
        ref={ref}
      >
        {children}
      </Box>
    </Box>
  ),
);

BoxFitOverflow.displayName = "BoxFitOverflow";

export default BoxFitOverflow;
