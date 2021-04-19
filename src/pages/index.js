import React from 'react';
import { graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '../components/card'
import Layout from "../components/layout"
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(4),
    }
  }
}));

export default function IndexPage({ data }) {
  const classes = useStyles({});
  const test = {test: "test"}
  return (
    <Layout {...test} >
      <Grid container justify="center" >
        <Grid item xs={12} className={classes.title}>
          <Box fontWeight="fontWeightBold" py={0} display='flex' justifyContent='center' >
            <Typography variant="h3" align='center'>
              {data.site.siteMetadata.title}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4} sm={12} xs={12} className={classes.tagline}>
          <Box fontWeight="fontWeightBold" py={0} display='flex' justifyContent='center' >
            <Typography variant="h5" align='center'>
              Tools to identify and quantify changes in southern forests.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container justify="center" >
        <Grid item xl={3} lg={1} md={1} sm={12} xs={12}>
          &nbsp;
        </Grid>
        <Grid item xl={2} lg={3} md={3} sm={12} xs={12}>
          <Card
          content="View recent and historical changes on a map"
          href="https://southfact.github.io/southfact-map-v2/dist/#Home"
          linkText="Forest Change Viewer"
          />
        </Grid>
        <Grid item xl={2} lg={3} md={3} sm={12} xs={12}>
          <Card
            content="Create forest change products for a specific area and time"
            href={data.site.siteMetadata.customRequestLink}
            linkText="Create Custom Requests"
          />
        </Grid>
        <Grid item xl={2} lg={3} md={3} sm={12} xs={12}>
          <Card
            content="Learn more about the tools and this site"
            linkText='About'
            href='/about'
          />
        </Grid>
        <Grid item xl={3} lg={1} md={1} sm={12} xs={12}>
          &nbsp;
        </Grid>
      </Grid>
    </Layout>
  )
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