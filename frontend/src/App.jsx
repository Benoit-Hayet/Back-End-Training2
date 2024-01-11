import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Movies from './pages/Movies';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {


  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path = "/Home" element={<Home/>} />
      <Route path = "*" element={<Home/>} />
      <Route path = "/movies" element={<Movies/>} />
      <Route path = "/login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
          </div>
     
      )
    }
  
export default App;