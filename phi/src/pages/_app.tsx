import * as React from 'react';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import ThemeContext, { ThemeProps } from '../utils/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/prism-dracula.css';
import '../styles/globals.css';

const { useState } = React;

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<ThemeProps['theme']>('dark');
  const value = { theme, setTheme };

  /*
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
   */

  return (
    <SWRConfig
      value={{
        refreshInterval: 60000,
      }}
    >
      <ThemeContext.Provider value={value}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </SWRConfig>
  );
}

export default MyApp;
