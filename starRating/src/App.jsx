import { useState } from 'react';
import './App.css';
import StarRating from './star-rating';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StarRating noOfStars={10} />
    </>
  )
}

export default App
