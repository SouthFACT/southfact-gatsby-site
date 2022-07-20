import React from "react"
import { makeStyles, withStyles } from '@mui/styles'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableSortLabel from '@mui/material/TableSortLabel';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles((theme) => ({
  header: {
    borderBottomColor: '#FFFFFF',
    borderBottomStyle: 'solid',
    borderBottomWidth: '2px'
  },
  headertext: {
    fontSize: '1rem'
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  }
}));

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function DownloadTabe(props) {
  const classes = useStyles({});
  const { data, sortByProperty, order, orderBy } = props

  const createSortHandler = (property) => (event) => {
    sortByProperty(property);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label='Download Data Table'>
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell onClick={createSortHandler('satellite')} className={classes.headertext}>
              <TableSortLabel
                 active={orderBy === 'satellite'}
                 direction={order}
                 onClick={createSortHandler('satellite')}
               >
                 Satellite
                 {orderBy === 'satellite' ? (
                   <span  className={classes.visuallyHidden}>
                     {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                   </span>
                 ) : null}
              </TableSortLabel>
            </TableCell>
            <TableCell onClick={createSortHandler('geographylevel')} className={classes.headertext}>
              <TableSortLabel
                 active={orderBy === 'geographylevel'}
                 direction={order}
                 onClick={createSortHandler('geographylevel')}
               >
                 Region
                 {orderBy === 'geographylevel' ? (
                   <span  className={classes.visuallyHidden}>
                     {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                   </span>
                 ) : null}
               </TableSortLabel>
            </TableCell>
            <TableCell align='left' className={classes.headertext}>
              <TableSortLabel
                 active={orderBy === 'datatype'}
                 direction={order}
                 onClick={createSortHandler('datatype')}
               >
                 Data Type
                 {orderBy === 'datatype' ? (
                   <span  className={classes.visuallyHidden}>
                     {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                   </span>
                 ) : null}
               </TableSortLabel>
            </TableCell>
            <TableCell onClick={createSortHandler('producttype')} className={classes.headertext}>
              <TableSortLabel
                 active={orderBy === 'producttype'}
                 direction={order}
                 onClick={createSortHandler('producttype')}
               >
                 Product Type
                 {orderBy === 'producttype' ? (
                   <span  className={classes.visuallyHidden}>
                     {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                   </span>
                 ) : null}
              </TableSortLabel>
            </TableCell>
            <TableCell align='left' className={classes.headertext}>
              <TableSortLabel
                 active={orderBy === 'link'}
                 direction={order}
                 onClick={createSortHandler('link')}
               >
                 Download Link
                 {orderBy === 'link' ? (
                   <span  className={classes.visuallyHidden}>
                     {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                   </span>
                 ) : null}
               </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.linktitle}>
              <TableCell align='left'>{row.satellite}</TableCell>
              <TableCell component='th' scope='row' align='left'>
                {row.geographylevel}
              </TableCell>
              <TableCell align='left'>{row.datatype}</TableCell>
              <TableCell align='left'>{row.producttype}</TableCell>
              <TableCell align='left'><a href={row.link} >{row.linktitle}</a>  ({row.size})</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}