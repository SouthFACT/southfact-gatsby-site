import React from "react"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledImg = styled('img')(({ theme }) => ({
  height: 'auto',
  maxHeight: '375px',
  maxWidth: '100%',
  padding: theme.spacing(3)
}));

const StyledHeadingDiv = styled('div')(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "600",
  paddingRight: theme.spacing(3),
  paddingLeft: theme.spacing(3),
}));

const StyledTextDiv = styled('div')(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "400",
  paddingRight: theme.spacing(3),
  paddingLeft: theme.spacing(3),
}));

const styles = (theme) => ({
 card: {
   margin: theme.spacing(2),
   backgroundColor: '#303030 !important',
   [theme.breakpoints.down('lg')]: {
     padding: theme.spacing(2),
   }
   // borderRadius: theme.spacing(.5),
 }
});

export default function HeroImage(props) {
  return (
    <Grid container justifyContent="center">
      <Grid item xl={3} lg={1} md={1} sm={12} xs={12}>
        &nbsp;
      </Grid>


      <Grid item xl={6} lg={9} md={9} sm={12} xs={12}>
        <Paper square={false} elevation={0} variant="elevation" sx={theme => styles(theme).card}>

          <Grid container justifyContent="center" alignItems="center">
            <Grid item xl={5} lg={4} md={4} sm={12} xs={12}>
              <Box display='flex' justifyContent='center' >
                <StyledImg
                  src="img/stacked-products.png"
                  alt="The three soufthfact products stacked on top to each other"
                  loading="lazy"
                />
              </Box>
            </Grid>
            <Grid item xl={7} lg={8} md={8} sm={12} xs={12}>
              <Grid container spacing={3} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <StyledHeadingDiv>
                    Shortwave Infrared Band Differencing (SWIR)
                  </StyledHeadingDiv>
                  <StyledTextDiv>
                    Identify drastic vegetation changes, particularly forest harvesting.
                  </StyledTextDiv>
                </Grid>
                <Grid item xs={12}>
                  <StyledHeadingDiv>
                    Normalized Difference Vegetation Index (NDVI)
                  </StyledHeadingDiv>
                  <StyledTextDiv>
                    Assess the change in vegetation health and productivity.
                  </StyledTextDiv>
                </Grid>
                <Grid item xs={12}>
                  <StyledHeadingDiv>
                    Normalized Difference Moisture Index (NDMI)
                  </StyledHeadingDiv>
                  <StyledTextDiv>
                    Detect subtle changes in vegetation moisture conditions.
                  </StyledTextDiv>
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
  );
}
