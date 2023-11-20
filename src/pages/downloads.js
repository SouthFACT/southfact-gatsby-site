import React from "react"
import Wrapper from "../components/wrapper"
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DownloadTable from '../components/downloadTable';
import DownloadLinks from '../components/downloadLinks';
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
}));

const sortByDescProperty = (property) => {
   return function(a,b){
      if(a[property] > b[property])
         return 1;
      else if(a[property] < b[property])
         return -1;
      return 0;
   }
};

const sortByAscProperty = (property) => {
   return function(a,b){
      if(a[property] < b[property])
         return 1;
      else if(a[property] > b[property])
         return -1;
      return 0;
   }
};

export default function Dowload() {
  const classes = useStyles({});
  const data = DownloadLinks;
  // const dataSorted = data.sort(sortByDescProperty('geographylevel'));
  const [downloads, setdDownloads] = React.useState(data);
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('');

  const handleRequestSort = (name) => {
     const isAsc = orderBy === name && order === 'asc';
     setOrder(isAsc ? 'desc' : 'asc');
     setOrderBy(name);
   };

   const handleColumnClick = (name) => {
     handleRequestSort(name)
     if (order === 'asc') setdDownloads(downloads.sort(sortByAscProperty(name)));
     if (order === 'desc') setdDownloads(downloads.sort(sortByDescProperty(name)));
   };

  return (
    <Wrapper>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.title}>
          <Box fontWeight="fontWeightBold" py={0} display='flex' justifyContent='flex-start' >
            <Typography variant="h3">
              Data Downloads
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.content}>
          <Box fontWeight="fontWeightNormal" py={0} display='flex' justifyContent='flex-start' sx={{ width: '100%', height: '100%'}}>
            <Alert severity="warning" sx={{ width: '100%', height: '100%' }}>
              Latest change data processing was retried on November 10th, 2023!
            </Alert>
          </Box>
        </Grid>
      </Grid>
    </Wrapper>
  )
}