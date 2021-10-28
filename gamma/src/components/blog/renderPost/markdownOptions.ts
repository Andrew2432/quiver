import { Typography } from '@mui/material';
import { MarkdownToJSX } from 'markdown-to-jsx';
import Code from '../../../utils/components/Code/Code';

const markdownOptions: MarkdownToJSX.Options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        variant: 'h1',
      },
    },
    Code: {
      component: Code,
    },
  },
};

export default markdownOptions;
