import React from 'react';
import { Helmet } from "react-helmet"
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import customTheme from '../gatsby-theme-material-ui-top-layout/theme'

export default function Layout({children}) {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
          />
      </Helmet>
      <CssBaseline />
      {children}
    </React.Fragment>
  );
}
