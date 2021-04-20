import React from "react"
import Wrapper from "../components/wrapper"
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
    letterSpacing: '0.00938em',
    paddingTop: theme.spacing(1),
  },
  title: {
    justifyContent: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(0),
  },
}))

export default function Contact() {
  const classes = useStyles({});

    return (
      <Wrapper>
        <Grid container className={classes.container}>
          <Grid item xs={12} className={classes.title}>
            <Box fontWeight="fontWeightBold" py={0} display='flex' justifyContent='flex-start' >
              <Typography variant="h3">
                Contact
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} className={classes.content}>
            <Box>
              If you have any questions, comments, or concerns please send an email to <a href='mailto:info@southfact.com'>info@southfact.com</a>
            </Box>
          </Grid>
        </Grid>
      </Wrapper>
    )
}