import React from "react"
import { graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../components/layout"
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    width: '50%',
    minHeight: '350px',
    backgroundColor: '#101012',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginLeft: '0',
    },
    marginBottom: theme.spacing(6)
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
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
    flexDirection: "column",
  },
  cardButton: {
    justifyContent: 'flex-start'
  }
}))

export default function CaseStudies({ data }) {
  const { allMarkdownRemark } = data
  const classes = useStyles();

  const videoCard = allMarkdownRemark.edges.map ((edge, i) => (
      <Card className={classes.root} key={i}>
        <CardMedia
          className={classes.media}
          alt={edge.node.frontmatter.title}
          title={edge.node.frontmatter.title}
          image={edge.node.frontmatter.linkImage.publicURL}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Case study: {edge.node.frontmatter.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {edge.node.frontmatter.description}
          </Typography>
        </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          href={edge.node.fields.slug}
          className={classes.cardButton}
        >
          Learn more
        </Button>
      </CardActions>
    </Card>
  ));

  return (
    <Layout>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.title}>
          <Box fontWeight="fontWeightBold" py={0} display='flex' justifyContent='flex-start' >
            <Typography variant="h3">
              Case Studies
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} >
          <Box width='100%' display='flex' justifyContent='center' directon='column' className={classes.content} >
            {videoCard}
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
  query caseStudiesQuery {
    allMarkdownRemark(filter: {fields: {slug: {regex: "/case-studies/"}}}, sort: {fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            title
            description
            linkImage {
              publicURL
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`