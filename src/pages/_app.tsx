import { ChakraProvider, Box } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import 'focus-visible/dist/focus-visible';

import customTheme from "styles/customTheme";
import "styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={customTheme}>
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
    </ChakraProvider>
  );
};

export default MyApp;
