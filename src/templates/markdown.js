import React from "react"
import { graphql } from "gatsby"
import Wrapper from "../components/wrapper"
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  },
  content: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
    paddingTop: theme.spacing(1),
  },
  title: {
    justifyContent: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(0),
  }
}));

export default function FaqTemplate(props) {
  const page = props.data.markdownRemark
  const classes = useStyles({});

  return (
    <Wrapper>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.title}>
          <Box fontWeight="fontWeightBold" py={0} display='flex' justifyContent='flex-start' >
          <Typography variant="h3">
            {page.frontmatter.title}
          </Typography>
        </Box>
      </Grid>
        <Box className={classes.content}>
          <div dangerouslySetInnerHTML={{ __html: page.html }}  />
        </Box>
      </Grid>
    </Wrapper>
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