import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#d0f1ff',
      main: '#9dbfff',
      dark: '#6b8fcc',
      contrastText: '#363b42',
    },
    secondary: {
      light: '#f6e8ff',
      main: '#c3b6f4',
      dark: '#9286c1',
      contrastText: '#363b42',
    },
  },
});

export default theme
