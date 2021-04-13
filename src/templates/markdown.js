import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  },
  content: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.00938em'
  },
}));

export default function FaqTemplate(props) {
  const page = props.data.markdownRemark
  const classes = useStyles({});

  return (
    <Layout>
      <Grid container className={classes.container}>
        <Typography variant="h3">
          {page.frontmatter.title}
        </Typography>
         <Box className={classes.content}>
          <div dangerouslySetInnerHTML={{ __html: page.html }}  />
        </Box>
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
  query faqQuery ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`