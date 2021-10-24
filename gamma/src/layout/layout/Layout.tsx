import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { LayoutProps } from './LayoutProps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100vw',
      minHeight: '100vh',
      margin: '0',
      padding: '0',
      display: 'flex',
      flexDirection: 'column',
    },
    main: {
      flex: '1 0 auto',
      backgroundColor: theme.customPalette.background,
    },
  })
);

function Layout({ children }: LayoutProps) {
  const { root, main } = useStyles();

  return (
    <section className={root}>
      <header></header>
      <main className={main}>{children}</main>
      <footer></footer>
    </section>
  );
}

export default Layout;
