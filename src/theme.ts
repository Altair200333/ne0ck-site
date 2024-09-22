import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark", // Set the initial color mode to dark
  useSystemColorMode: false, // Disable the use of system color mode preference
};

const customTheme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg:
          props.colorMode === "dark"
            ? "linear-gradient(60deg, #1e2039, #343561)"
            : "gray.100",
        "background-attachment": "fixed",
        color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
        fontFamily: '"Inter", "Noto"',
      },
      "&::-webkit-scrollbar": {
        width: "4px",
      },
      "&::-webkit-scrollbar-track": {
        width: "6px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "white",
        borderRadius: "24px",
      },
    }),
  },
});

export default customTheme;
