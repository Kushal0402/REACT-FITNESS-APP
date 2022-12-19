import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import TopBannerImage from '../util/TopBannerImage.png'


const TopBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '200px', xs: '40px' },
      ml: { sm: '50px' }
    }}
      position="relative" p="20px">
      <Typography color="rgb(159, 43, 104)"
        fontWeight="600" fontSize="35px"
        mb={2}>
        Stay Fit
      </Typography>
      <Typography fontWeight="600"
        sx={{
          fontSize: { lg: '45px', sm: '40px' }
        }}
        mb={2}>
        Work dirty, <br /> Eat Clean
      </Typography>
      <Button variant='contained'
        color='secondary' href='#exercises'>
        Start working out
      </Button>
      <Typography fontWeight={700}
        fontSize={100}
        sx={{
          opacity: '0.1',
          display: { lg: 'block', xs: 'none' }
        }} mb={2}
      >
        Exercises
      </Typography>
      <img src={TopBannerImage}
        className="hero-banner-img"
        alt='banner'
      ></img>
    </Box>
  )
}

export default TopBanner