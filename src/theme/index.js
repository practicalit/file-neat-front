import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { sessionStorage } from 'utils';

import palette from './palette';

const mode = sessionStorage.getItem('themeMode') || 'light';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: palette[mode],
    layout: {
      contentWidth: 1140,
    },
    typography: {
      fontFamily: 'Lato',
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    overrides: {
      MuiButton: {
        containedSecondary: {
          color: 'white',
        },
      },
    },
  }),
);

export default theme;
