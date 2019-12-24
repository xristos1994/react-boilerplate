import { createMuiTheme } from '@material-ui/core/styles';

// const fontSize = 20; // px
// // Tell Material-UI what's the font-size on the html element.
// // 16px is the default font-size used by browsers.
// const htmlFontSize = 30;
// const coef = fontSize / 14;

export const theme = createMuiTheme({
  // typography: {
  //   pxToRem: size => `${(size / htmlFontSize) * coef}rem`
  // },
  palette: {
    common: { black: '#000', white: '#fff' },
    background: { paper: '#fff', default: '#fafafa' },
    primary: {
      light: 'rgba(118, 90, 187, 1)',
      main: 'rgba(93, 50, 199, 1)',
      dark: 'rgba(62, 18, 167, 1)',
      contrastText: '#fff',
    },
    secondary: {
      light: 'rgba(168, 115, 193, 1)',
      main: 'rgba(145, 49, 190, 1)',
      dark: 'rgba(112, 16, 156, 1)',
      contrastText: '#fff',
    },
    error: {
      light: 'rgba(241, 106, 106, 1)',
      main: 'rgba(255, 0, 0, 1)',
      dark: 'rgba(196, 0, 0, 1)',
      contrastText: '#fff',
    },
    success: {
      light: 'rgba(86, 214, 66, 1)',
      main: 'rgba(0, 163, 0, 1)',
      dark: 'rgba(0, 115, 0, 1)',
      contrastText: '#fff',
    },
    warning: {
      light: 'rgba(255, 186, 99, 1)',
      main: 'rgba(255, 137, 52, 1)',
      dark: 'rgba(198, 90, 0, 1)',
      contrastText: '#fff',
    },
    info: {
      light: 'rgba(255, 255, 82, 1)',
      main: 'rgba(255, 215, 0, 1)',
      dark: 'rgba(199, 166, 0, 1)',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },
});
