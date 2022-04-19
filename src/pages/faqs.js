import React from "react"
import { graphql } from "gatsby"
import { makeStyles } from '@mui/styles';
import Wrapper from "../components/wrapper"
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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
  question: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightBold,
  },
  answer: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
  },
  questionandanswer: {
    marginBottom: theme.spacing(3)
  }
}))

export default function Faqs({ data }) {
  const { allMarkdownRemark } = data
  const classes = useStyles();

  const FAQAccordion = allMarkdownRemark.edges.map ((edge, i) => {
    const questionTag= edge.node.frontmatter.question.toLowerCase().replace(/ /g,'-').replace('?','');
    return (
      <Accordion key={i} className={classes.questionandanswer}>
        <AccordionSummary
          expandIcon={<UnfoldMoreIcon />}
          aria-controls={questionTag}
          id={questionTag}
        >
          <Typography className={classes.question}>{i + 1}. {edge.node.frontmatter.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.answer}>
            {edge.node.frontmatter.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
  )});

  return (
    <Wrapper>
      <Grid container className={classes.container}>
        <Grid item xs={12} >
          <Box fontWeight="fontWeightBold" py={0} >
            <Typography variant="h3">
              Frequently Asked Questions (FAQS)
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} >
          <Box width='100%' mt={4} >
            {FAQAccordion}
          </Box>
        </Grid>
      </Grid>
    </Wrapper>
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