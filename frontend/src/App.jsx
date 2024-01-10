import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Movies from './pages/Movies';
import Home from './pages/Home';

function App() {


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