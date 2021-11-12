import { Container, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { Box } from '@mui/system';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.customPalette.background,
      width: '100%',
      height: '100%',
    },
    heading: {
      color: theme.customPalette.cyan,
    },
    body: {
      color: theme.customPalette.purple,
    },
    link: {
      color: theme.customPalette.green,
    },
  })
);

function Home() {
  const { root, heading, body, link } = useStyles();

  return (
    <Box className={root}>
      <Container>
        <Typography variant="h1" marginY={3} className={heading}>
          Website under maintenance!
        </Typography>
        <Typography variant="h2" marginY={3} className={body}>
          This site is being rebuilt from scratch using Next.js and Strapi.
        </Typography>
        <Typography variant="h3" marginY={3} className={body}>
          Find out the progress{' '}
          <a
            href="https://github.com/Andrew2432/quiver"
            target="_blank"
            className={link}
            rel="noopener noreferrer"
          >
            here.
          </a>
        </Typography>
      </Container>
    </Box>
  );
}

export default Home;
