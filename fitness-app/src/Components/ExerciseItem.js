// src/components/ExerciseItem.js
import React from 'react';

const ExerciseItem = ({ exercise }) => {
  return (
    <div className='ExerciseCard'>
      <h3 className='ExerciseTitle'>{exercise.name}</h3>
      <p>{exercise.instructions}</p>
    </div>
  );
};

export default ExerciseItem;