import React from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '../components/AppBar'

export default function Wrapper({children}) {
  return (
    <React.Fragment>
        <AppBar />
        <Box p={2}>
          {children}
        </Box>
  </React.Fragment>
  )
}
