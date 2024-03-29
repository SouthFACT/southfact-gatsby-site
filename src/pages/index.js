import React, { useContext } from 'react';
import { graphql } from 'gatsby'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '../components/card'
import HeroImage from '../components/heroImage';
import Wrapper from "../components/wrapper"
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import {NavDispatchContext } from "../context/NavContextProvider"

const styles = (theme) => ({
  button: {
    textTransform: "none",
  },
  title: {
    justifyContent: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(0),
  },
  tagline: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(4),
    }
  },
  fullWidthHeight: {
    width: "100%",
    height: "100%"
  }
});

export default function IndexPage({ data }) {
  const dispatch = useContext(NavDispatchContext)

  const handleAboutClick = (event) => {
    dispatch({ type: 'TAB_LEARN'});
  };

  return (
    <Wrapper>
      <Grid container justifyContent="center" >
      <Grid item xs={12} >
          <Box fontWeight="fontWeightBold" py={0} display='flex' justifyContent='center' >
          </Box>
        </Grid>
        <Grid item xs={12} sx={theme => styles(theme).title}>
          <Box fontWeight="fontWeightBold" py={0} display='flex' justifyContent='center' >
            <Typography variant="h3" align='center'>
              {data.site.siteMetadata.title}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4} sm={12} xs={12} sx={theme => styles(theme).tagline}>
          <Box fontWeight="fontWeightBold" py={0} display='flex' justifyContent='center' >
            <Typography variant="h5" align='center'>
              Tools to identify and quantify changes in southern forests.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <HeroImage />

      <Grid container justifyContent="center" >
        <Grid item xl={1} lg={0} md={0} sm={12} xs={12}>
          &nbsp;
        </Grid>
        <Grid item xl={3} lg={4} md={4} sm={12} xs={12} my={2} >
          <Box sx={theme => styles(theme).fullWidthHeight}>
            <Alert sx={theme => styles(theme).fullWidthHeight} severity="warning">
              The Forest Change Viewer was retried on November 10th, 2023!
            </Alert>
          </Box>
        </Grid>
        <Grid item xl={3} lg={4} md={4} sm={12} xs={12}>
          <Card
            content="Create forest change products for a specific area and time"
            href={data.site.siteMetadata.customRequestLink}
            target="_blank"
            linkText="Create Custom Requests"
          />
        </Grid>
        <Grid item xl={3} lg={4} md={4} sm={12} xs={12}>
          <Card
            content="Learn more about the tools and this site"
            linkText='About'
            href='/about'
            isGatsbyLink={true}
            onClick={handleAboutClick}
          />
        </Grid>
        <Grid item xl={1} lg={0} md={0} sm={12} xs={12}>
          &nbsp;
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
        title
        customRequestLink
      }
    }
  }
`
