import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    body: {
      background: "linear-gradient(60deg, #1e2039, #343561)",
      backgroundAttachment: "fixed",
      color: "whiteAlpha.900",
      fontFamily: "Inter, Noto",
      "&.light": { background: "gray.100", color: "gray.800" },
    },
    "&::-webkit-scrollbar": { width: "4px" },
    "&::-webkit-scrollbar-track": { width: "6px" },
    "&::-webkit-scrollbar-thumb": { background: "white", borderRadius: "24px" },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
