import React from 'react';
import { useState } from 'react';
import './App.css';
import Movies from './components/MoviesList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <Movies />
    </div>
  );
}

export default App;
