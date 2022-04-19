import React from "react"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  heroImage: {
    height: 'auto',
    maxHeight: '400px',
    maxWidth: '100%',
    padding: theme.spacing(3)
  },
  heading: {
    fontSize: "1.2rem",
    fontWeight: "600",
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
  text: {
    fontSize: "1rem",
    fontWeight: "400",
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
 },
 card: {
   margin: theme.spacing(2),
   backgroundColor: '#303030 !important',
   // backgroundColor: '#101012 !important',
   [theme.breakpoints.down('lg')]: {
     padding: theme.spacing(2),
   }
   // borderRadius: theme.spacing(.5),
 }
}));

export default function HeroImage(props) {
  const classes = useStyles({});

  return (
    <Grid container justifyContent="center">
      <Grid item xl={3} lg={1} md={1} sm={12} xs={12}>
        &nbsp;
      </Grid>


      <Grid item xl={6} lg={9} md={9} sm={12} xs={12}>
        <Paper square={false} elevation={0} variant="elevation" className={classes.card}>

          <Grid container justifyContent="center" alignItems="center">
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Box display='flex' justifyContent='center' >
                <img
                  className={classes.heroImage}
                  src="/graphic-hor.png"
                  alt="The three soufthfact products stacked on top to each other"
                  loading="lazy"
                />
              </Box>
            </Grid>
          </Grid>

        </Paper>
      </Grid>

      <Grid item xl={3} lg={1} md={1} sm={12} xs={12}>
        &nbsp;
      </Grid>
    </Grid>
  );
}
