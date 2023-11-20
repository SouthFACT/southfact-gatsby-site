import React from "react"
import Wrapper from "../components/wrapper"
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';

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
            <Box fontWeight="fontWeightNormal" py={0} display='flex' justifyContent='flex-start' sx={{ width: '100%', height: '100%'}}>
              <Alert severity="warning" sx={{ width: '100%', height: '100%' }}>
                Monitoring of this sit was retried on November 10th, 2023!
              </Alert>
            </Box>
          </Grid>
        </Grid>
      </Wrapper>
    )
}