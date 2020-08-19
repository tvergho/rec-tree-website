import React from 'react';
import 'styles/global.scss';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffeae4',
      main: '#ffb7b2',
      dark: '#ca8783',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica Neue',
      'Helvetica',
      'sans-serif',
    ].join(','),
  },
});

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
