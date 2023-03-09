import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function ProductDescription() {
  return (
    <Box p={2}>
    <Typography variant="h5" gutterBottom>
      Product Name
    </Typography>
    <Typography variant="h6" gutterBottom>
      99.99 EGP
    </Typography>
    <Typography variant="body1" gutterBottom>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      et nulla porta, eleifend sapien ac, aliquam orci. Aenean a
      tortor mauris. Nullam aliquet diam vel metus volutpat
      imperdiet.
    </Typography>
    <Button variant="contained" color="primary" size="large">
      Join pool
    </Button>
    <Box mt={2}>
      <Typography variant="h6" gutterBottom>
        Safe Payments
      </Typography>
      <img src="https://via.placeholder.com/50x50" alt="Logo 1" />
      <img src="https://via.placeholder.com/50x50" alt="Logo 2" />
      <img src="https://via.placeholder.com/50x50" alt="Logo 3" />
    </Box>
  </Box>
  )
}

export default ProductDescription