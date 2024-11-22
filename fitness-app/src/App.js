// // src/App.js
// import React, { useState } from 'react';
// import SearchBar from './Components/SearchBar';
// import ExerciseList from './Components/ExerciseList';

// const exercisesData = {
//   'chest': [
//     { name: 'Push-ups', description: 'A classic exercise for the chest.' },
//     { name: 'Bench Press', description: 'A barbell exercise for the chest.' },
//   ],
//   'back': [
//     { name: 'Pull-ups', description: 'A bodyweight exercise for the back.' },
//     { name: 'Deadlifts', description: 'A barbell exercise for the back.' },
//   ],
//   // Add more muscle groups and exercises as needed
// };

// const App = () => {
//   const [exercises, setExercises] = useState([]);

//   const handleSearch = (muscleGroup) => {
//     const filteredExercises = exercisesData[muscleGroup] || [];
//     setExercises(filteredExercises);
//   };

//   return (
//     <div>
//       <h1>Fitness App</h1>
//       <SearchBar onSearch={handleSearch} />
//       {<ExerciseList exercises={exercises} />}
//     </div>
//   );
// };

// export default App;

// src/App.js
import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import ExerciseList from './Components/ExerciseList';

const API_KEY = 'FxFPZ8SyUtJvVlDfBhEwOw==GB017hfqZfdEKKf5'; // Replace with your actual API key
const API_URL = 'https://api.api-ninjas.com/v1/exercises';

const App = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (muscleGroup) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}?muscle=${muscleGroup}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': API_KEY,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setExercises(data);
    } catch (err) {
      setError('Failed to fetch exercises. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="AppName">Fitness App</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ExerciseList exercises={exercises} />
      )}
    </div>
  );
};

export default App;