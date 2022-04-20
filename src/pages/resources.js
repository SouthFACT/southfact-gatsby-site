import React from "react"
import Wrapper from "../components/wrapper"
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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

export default function Resources() {
  const classes = useStyles({});

  return (
    <Wrapper>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.title}>
          <Box fontWeight="fontWeightBold" py={0} display='flex' justifyContent='flex-start' >
            <Typography variant="h3">
              Resources
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.content}>
          <Box>
            Information about Resources will be coming soon. Please check back another time.
          </Box>
        </Grid>
      </Grid>
    </Wrapper>
  )
}