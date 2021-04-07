import React from "react"
import Layout from "../components/layout"
import Typography from '@material-ui/core/Typography';

export default function Contact() {
    return (
      <Layout>
        <Typography variant="h3">
          Contact
        </Typography>
        <Typography variant="h5">
          If you have any questions, comments, or concerns please send an email to <a href='mailto:info@southfact.com'>info@southfact.com</a> 
        </Typography>
      </Layout>
    )
}