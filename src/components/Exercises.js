import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../util/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastExercise = currentPage * 9;
  const indexOfFirstExercise = indexOfLastExercise - 9;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);


  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1500, behavior: 'smooth' });
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exerciseData = [];

      if (bodyPart === 'all') {
        const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
          exerciseOptions);
      }

      else {
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions);
      }

      setExercises(exerciseData);
    }

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id="exercises"
      sx={{
        mt: { lg: '110px' },
      }}
      mt="50px"
      p="20px">
      <Stack direction="row"
        sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap="wrap"
        justifyContent="center">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems="center">
        {exercises.length > 9 &&
          (
            <Pagination color='standard' shape='rounded'
              defaultPage={1} count={Math.ceil(exercises.length / 9)}
              page={currentPage} onChange={paginate} size="large" />
          )}
      </Stack>
    </Box>
  )
}

export default Exercises