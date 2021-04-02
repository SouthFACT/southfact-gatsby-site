import React from "react"
import Layout from "../components/layout"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  anchorTag: {
    color: 'gold',
  },
}));

export default function Contact() {
  const classes = useStyles();
    return (
      <Layout>
        <Typography variant="h3">
          Contact
        </Typography>
        <Typography variant="h5">
          If you have any questions, comments, or concerns please send an email to <a className={classes.anchorTag} href='mailto:info@southfact.com'>info@southfact.com</a> 
        </Typography>
      </Layout>
    )
}