import React from 'react';
import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css';
import Movies from './pages/MoviesList';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path = "/Home" element={<Home/>} />
      <Route path = "*" element={<Home/>} />
      <Route path = "/movies" element={<Movies/>} />
    </Routes>
    </BrowserRouter>
          </div>
     
      )
    }
  
export default App;
