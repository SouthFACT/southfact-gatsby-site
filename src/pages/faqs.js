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
    border: '0px solid transparent'
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
  faqlist: {
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: 1.5,
    paddingTop: theme.spacing(1),
  },
  faqAnswers: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  questions: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    lineHeight: 1.5,
    paddingTop: theme.spacing(1),
  },
  titleAnswers: {
    paddingTop: theme.spacing(2),
  },
  answers: {
    fontSize: '1rem',
    fontWeight: 'normal',
    lineHeight: 1.5,
    paddingTop: theme.spacing(1),
  }
}))

export default function Faqs({ data }) {
  const { allMarkdownRemark } = data
  const classes = useStyles();

  const FAQList = allMarkdownRemark.edges.map ((edge, i) => {
    const questionHREF = '#' + edge.node.frontmatter.question.toLowerCase().replace(/ /g,'-').replace('?','');
    return (
     <div key={i} className={classes.faqlist}>
       <a href={questionHREF} >{i + 1}. {edge.node.frontmatter.question}</a>
     </div>
  )});

  const FAQAnwers = allMarkdownRemark.edges.map ((edge, i) => {
    const questionID = edge.node.frontmatter.question.toLowerCase().replace(/ /g,'-').replace('?','');
    return (
      <div key={i} className={classes.faqAnswers}>
        <div id={questionID} className={classes.questions}>
          {i + 1}. {edge.node.frontmatter.question}
        </div>
        <div className={classes.faqAnswers}>
          {edge.node.frontmatter.answer}
        </div>
      </div>
  )});

  return (
    <Layout>
      <Grid container className={classes.container}>
        <Grid item xs={12} >
          <Box fontWeight="fontWeightBold" py={0} >
            <Typography variant="h3">
              Frequently Asked Questions (FAQS)
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} >
          <Box width='100%' mt={4} display='flex'className={classes.content} >
            {FAQList}
          </Box>
        </Grid>
        <Grid item xs={12} >
          <Box fontWeight="fontWeightBold" borderTop={4} borderColor="grey.800" mt={6} py={0} display='flex' justifyContent='flex-start' >
            <Typography variant="h3" className={classes.titleAnswers}>
              FAQ Answers
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} >
          <Box width='100%'display='flex' justifyContent='center' directon='column' className={classes.content} >
            {FAQAnwers}
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
  query faqsQuery {
    allMarkdownRemark(filter: {fields: {slug: {regex: "/faq/"}}}, sort: {fields: frontmatter___order}) {
      edges {
        node {
          frontmatter {
            title
            question
            answer
            order
          }
        }
      }
    }
  }
`