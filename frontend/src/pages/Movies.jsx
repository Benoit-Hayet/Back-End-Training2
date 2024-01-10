import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import "../styles/Movies.css"; // Import your CSS styles

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
      <Navigation />
      <div className="movies-container">
        {postMovie.map((item) => (
          <div key={item.id} className="movie-card">
            <h2>{item.title}</h2>
            <p>{item.release_year}</p>
            {item.image_url && <img src={item.image_url} alt={item.title} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;