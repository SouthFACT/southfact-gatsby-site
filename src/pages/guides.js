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
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    minHeight: '350px',
    backgroundColor: '#101012',
    border: '2px solid #101012',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginLeft: '0',
    },
    marginBottom: theme.spacing(6)
  },
  media: {
    width: '100%',
    height: '250px',
    border: '0px solid transparent',
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
  actions: {
    borderTop: '1px solid #303030',
  }
}))

export default function Guides({ data }) {
  const { allMarkdownRemark } = data
  const classes = useStyles();

  const videoCard = allMarkdownRemark.edges.map ((edge, i) => (
      <Card className={classes.root} key={i}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {edge.node.frontmatter.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {edge.node.frontmatter.description}
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          component='iframe'
          alt={edge.node.frontmatter.title}
          title={edge.node.frontmatter.title}
          image={edge.node.frontmatter.videoSourceURL}
        />
        <CardActions className={classes.actions}>
          <Button
            variant="outlined"
            target="_blank"
            href={edge.node.frontmatter.videoSourceURL}
            startIcon={<YouTubeIcon />}
            className={classes.cardButton}
          >
            Watch on YouTube
          </Button>
        </CardActions>
    </Card>
  ));

  return (
    <Wrapper>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.title}>
          <Box fontWeight="fontWeightBold" py={0} display='flex' justifyContent='flex-start' >
            <Typography variant="h3">
              Guides
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} >
          <Box width='100%' display='flex' justifyContent='center' directon='column' className={classes.content} >
            {videoCard}
          </Box>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export const pageQuery = graphql`
  query guidesQuery {
    allMarkdownRemark(filter: {fields: {slug: {regex: "/guides/"}}}, sort: {fields: frontmatter___order}) {
      edges {
        node {
          frontmatter {
            title
            videoSourceURL
            videoTitle
            description
            order
          }
        }
      }
    }
  }
`