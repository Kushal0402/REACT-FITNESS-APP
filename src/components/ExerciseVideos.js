import React from 'react'
import { Typography, Box, Stack } from '@mui/material';


const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return 'loading...';
  return (
    <Box sx={{ mt: { lg: '200px', xs: '20px' } }}
      p='20px'>
      <Typography variant='h4' mb="33px">
        Watch <span
          style={{
            color: 'purple',
            textTransform: 'capitalize',
            fontWeight: '700'
          }}>{name}</span> exercise on Youtube
      </Typography>
      <Stack justifyContent="flex-start"
        flexWrap="wrap" alignItems="center"
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '110px', xs: '0px' }
        }}>
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoID}`}
            target="_blank"
            rel="noreferrer">
            <img src={item.video.thumbnails[0].url}
              alt={item.video.title} />
            <Box>
             <Typography variant='h6' color='black'>
               {item.video.title} 
             </Typography>
             <Typography variant='h6' color='black'>
               {item.video.channelName} 
             </Typography>
            </Box>  
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos