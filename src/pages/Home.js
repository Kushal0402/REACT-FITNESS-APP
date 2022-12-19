import React, { useState } from 'react';
import { Box } from '@mui/material';
import TopBanner from '../components/TopBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <TopBanner />
      <SearchExercises setExercises={setExercises}
        setBodyPart={setBodyPart} bodyPart={bodyPart} />
      <Exercises setExercises={setExercises}
        exercises={exercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home