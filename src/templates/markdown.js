import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Typography from '@material-ui/core/Typography';
import { MDXRenderer } from "gatsby-plugin-mdx"
//import { TinaCMS } from 'tinacms'
//import { remarkForm } from 'gatsby-tinacms-remark'
//import { HtmlFieldPlugin, MarkdownFieldPlugin } from 'react-tinacms-editor'

/*const cms = new TinaCMS()

cms.plugins.add(HtmlFieldPlugin)
cms.plugins.add(MarkdownFieldPlugin)*/

function faqTemplate(props) {
  const page = props.data.mdx
  return (
    <Layout>
      <Typography variant="h3">
        {page.frontmatter.title}
      </Typography>
      <Typography>
        <MDXRenderer>{page.body}</MDXRenderer>
      </Typography>
    </Layout>
  )
}

export default faqTemplate
//export default remarkForm(faqTemplate)

export const pageQuery = graphql`
  query faqQuery ($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      id
      body
      frontmatter {
        title
        description
      }
    }
  }
`