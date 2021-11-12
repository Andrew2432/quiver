import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { CustomPalette } from './ThemeProps';

const customTypography: TypographyOptions = {
  fontFamily: ['Hack', 'Consolas'].join(','),
  fontSize: 16,
};

const customColors: CustomPalette = {
  green: '#50fa7b',
  purple: '#bd93f9',
  background: '#282a36',
  cyan: '#8be9fd',
};

const theme = responsiveFontSizes(
  createTheme({
    typography: customTypography,
    customPalette: customColors,
  })
);

export default theme;
