import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '../components/AppBar'

export default function Wrapper(props) {
  return (
    <React.Fragment>
      <AppBar />
      <Box p={2}>
        {props.children}
      </Box>
    </React.Fragment>
  )
}
