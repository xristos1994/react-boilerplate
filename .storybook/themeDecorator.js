import React from 'react';
import theme from 'theme';
import { ThemeProvider } from '@material-ui/styles';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
