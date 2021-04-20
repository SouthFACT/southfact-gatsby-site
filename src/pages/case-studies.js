import React from "react"
import { graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Wrapper from "../components/wrapper"
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
    minHeight: '300px',
    backgroundColor: '#101012',
    marginBottom: theme.spacing(6),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(4),
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
    },
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
  },
  cardDescription: {
    minHeight: '125px',
    [theme.breakpoints.down('xs')]: {
      minHeight: '25px'
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '25px'
    },
    [theme.breakpoints.down('md')]: {
      minHeight: '125px'
    },
    [theme.breakpoints.down('lg')]: {
      minHeight: '125px'
    },
    [theme.breakpoints.down('xl')]: {
      minHeight: '125px'
    }
  }
}))

export default function CaseStudies({ data }) {
  const { allMarkdownRemark } = data
  const classes = useStyles();


  const caseStudyCard = allMarkdownRemark.edges.map ((edge, index) => {
    return (
      <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={edge.node.frontmatter.title}>
        <Card className={classes.root} key={index}>
          <CardMedia
            className={classes.media}
            alt={edge.node.frontmatter.title}
            title={edge.node.frontmatter.title}
            image={edge.node.frontmatter.linkImage.publicURL}
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {edge.node.frontmatter.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.cardDescription}>
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
      </Grid>
    )});

  return (
    <Wrapper>
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
            <Grid
                 container
                 spacing={2}
                 direction="row"
                 justify="flex-start"
                 alignItems="flex-start"
             >
            {caseStudyCard}
          </Grid>
          </Box>
        </Grid>
      </Grid>
    </Wrapper>
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