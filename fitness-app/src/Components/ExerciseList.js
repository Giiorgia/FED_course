import React from 'react';
import ExerciseItem from './ExerciseItem';

const ExerciseList = ({ exercises }) => {
  return (
    <div>
      {exercises.map((exercise, index) => (
        <ExerciseItem key={index} exercise={exercise} />
      ))}
    </div>
  );
};

export default ExerciseList;