import * as React from 'react';
import Spinner from 'react-bootstrap/Spinner';

import ThemeContext from './ThemeContext';

const { useContext } = React;

function PageLoading() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh !important',
        width: '100vw !important',
      }}
    >
      <Spinner
        animation="border"
        variant={theme === 'light' ? 'dark' : 'light'}
        role="status"
      />
    </div>
  );
}

export default PageLoading;
