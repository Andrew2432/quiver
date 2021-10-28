import { ApolloProvider } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import * as React from "react";
import ClientOnly from "../components/ClientOnly/ClientOnly";
import "../styles/globals.css";
import "../styles/prism-dracula.css";
import apolloClient from "../utils/apollo/apolloClient";
import ThemeContext, { ThemeProps } from "../utils/ThemeContext";

const { useState } = React;

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<ThemeProps["theme"]>("dark");
  const value = { theme, setTheme };

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeContext.Provider value={value}>
        <ClientOnly>
          <Component {...pageProps} />
        </ClientOnly>
      </ThemeContext.Provider>
    </ApolloProvider>
  );
}

export default MyApp;
