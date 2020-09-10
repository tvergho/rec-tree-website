import React from 'react';
import 'styles/global.scss';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {
  ApolloClient, InMemoryCache, ApolloProvider, createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'node-fetch';
import * as firebase from 'firebase/app';
import firebaseConfig from '../firebaseConfig';

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

const httpLink = createHttpLink({
  uri: 'https://2y6zm2jmsjbbtia5dcaxd5v7si.appsync-api.us-east-2.amazonaws.com/graphql',
  fetch,
});

const authLink = setContext((_, { headers }) => {
  return new Promise((resolve, reject) => {
    resolve({
      headers: {
        'x-api-key': 'da2-yg2rs7rp2rhtlbi572inwrhthq',
      },
    });
  });
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      InterestedBusiness: {
        keyFields: ['email'],
      },
    },
  }),
});

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
