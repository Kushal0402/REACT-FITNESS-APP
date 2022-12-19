import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box mt="80px" width='100%'>
      <Stack gap='40px' alignItems='center'
        px='40px' pt='24px'>
        <Typography variant='h6' color='black'>
          MADE BY KUSHAL SHARMA
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer