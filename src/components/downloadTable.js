import React from "react"
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
            <TableCell onClick={createSortHandler('geographylevel')} className={classes.headertext}>
              <TableSortLabel
                 active={orderBy === 'geographylevel'}
                 direction={order}
                 onClick={createSortHandler('geographylevel')}
               >
                 State
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
            <StyledTableRow key={row.geographylevel}>
              <TableCell component='th' scope='row' align='left'>
                {row.geographylevel}
              </TableCell>
              <TableCell align='left'>{row.datatype}</TableCell>
              <TableCell align='left'><a href={row.link} >{row.link}</a>  ({row.size})</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}