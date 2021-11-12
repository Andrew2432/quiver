import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useBlogPostStyle = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      color: theme.customPalette.cyan,
    },
  })
);

export default useBlogPostStyle;
