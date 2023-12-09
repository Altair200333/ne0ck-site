import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

// Define your theme config
const config: ThemeConfig = {
  initialColorMode: "dark", // Set the initial color mode to dark
  useSystemColorMode: false, // Disable the use of system color mode preference
};

// Extend the theme with new configuration
const customTheme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg:
          props.colorMode === "dark"
            ? "linear-gradient(60deg, #121022, #1e2039, #343561)"
            : "gray.100",
        "background-attachment": "fixed",
        color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
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

const MyApp = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <title>Ne0ck</title>
        <meta charSet="utf-8" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
