import { ChakraProvider, Box } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import "focus-visible/dist/focus-visible";

import customTheme from "styles/customTheme";
import "styles/globals.css";
import { Provider as AnalyticsContextProvider } from "components/AnalyticsContext";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={customTheme}>
      <AnalyticsContextProvider>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
        </Head>
        <Box margin="0 auto" transition="0.5s ease-out">
          <Box as="main">
            <Component {...pageProps} />
          </Box>
        </Box>
      </AnalyticsContextProvider>
    </ChakraProvider>
  );
};

export default MyApp;
