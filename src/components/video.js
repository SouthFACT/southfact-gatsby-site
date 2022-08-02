import React from "react"
import Box from '@mui/material/Box';

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <Box width="100%" className="video">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </Box>
)
export default Video