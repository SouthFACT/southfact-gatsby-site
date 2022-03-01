import React from "react"
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroImage: {
    height: 'auto',
    maxHeight: '375px',
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
   [theme.breakpoints.down('md')]: {
     padding: theme.spacing(2),
   }
   // borderRadius: theme.spacing(.5),
 }
}));

export default function HeroImage(props) {
  const classes = useStyles({});

  return (
    <Grid container justify="center">
      <Grid item xl={3} lg={1} md={1} sm={12} xs={12}>
        &nbsp;
      </Grid>


      <Grid item xl={6} lg={9} md={9} sm={12} xs={12}>
        <Paper square={false} elevation={0} variant="elevation" className={classes.card}>

          <Grid container justify="center" alignItems="center">
            <Grid item xl={5} lg={4} md={4} sm={12} xs={12}>
              <Box display='flex' justifyContent='center' >
                <img
                  className={classes.heroImage}
                  src="img/stacked-products.png"
                  alt="The three soufthfact products stacked on top to each other"
                  loading="lazy"
                />
              </Box>
            </Grid>
            <Grid item xl={7} lg={8} md={8} sm={12} xs={12}>
              <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item xs={12}>
                  <div className={classes.heading}>
                    Shortwave Infrared Band Differencing (SWIR)
                  </div>
                  <div className={classes.text}>
                    Identify drastic vegetation changes, particularly forest harvesting.
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className={classes.heading}>
                    Normalized Difference Vegetation Index (NDVI)
                  </div>
                  <div className={classes.text}>
                    Assess the change in vegetation health and productivity.
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className={classes.heading}>
                    Normalized Difference Moisture Index (NDMI)
                  </div>
                  <div className={classes.text}>
                    Detect subtle changes in vegetation moisture conditions.
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </Paper>
      </Grid>

      <Grid item xl={3} lg={1} md={1} sm={12} xs={12}>
        &nbsp;
      </Grid>
    </Grid>
  )
}
