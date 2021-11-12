import { ApolloProvider } from '@apollo/client';
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { createGenerateClassName, StylesProvider } from '@mui/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import '../styles/prism-dracula.css';
import apolloClient from '../utils/apollo/apolloClient';
import createEmotionCache from '../utils/cache/createEmotionCache';
import ClientOnly from '../utils/components/ClientOnly/ClientOnly';
import theme from '../utils/theme/theme';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <ApolloProvider client={apolloClient}>
      <CacheProvider value={emotionCache}>
        <StylesProvider generateClassName={generateClassName}>
          <Head>
            <title>My page</title>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css"
            ></link>
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ClientOnly>
              <Component {...pageProps} />
            </ClientOnly>
          </ThemeProvider>
        </StylesProvider>
      </CacheProvider>
    </ApolloProvider>
  );
}

export default MyApp;
