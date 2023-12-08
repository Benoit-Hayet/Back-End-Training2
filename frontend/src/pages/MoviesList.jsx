import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from '../assets/Logo.gif'
import Navigation from "../components/Navigation";

function Movies() {
  const [postMovie, setPostMovie] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/movies").then((response) => {
      console.log(response.data);
      setPostMovie(response.data);
    });
  }, []);

  return (
    <div>
      <img src={Logo} alt="logo" />
      <Navigation/>
      {postMovie.map((item, films) => (
        <div key={films}>
          <p>{item.title}</p>
          <p>{item.release_year}</p>
          {item.image_url && <img src={item.image_url} alt={item.title} />}
        </div>
      ))}
    </div>
  );
}

export default Movies;
