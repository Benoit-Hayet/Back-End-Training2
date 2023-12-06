import React, { useEffect, useState } from "react";
import axios from "axios";

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
      <h2>Movies</h2>
      {postMovie.map((item, i) => (
        <div key={i}>
          <p>{item.title}</p>
          <p>{item.release_year}</p>
          {item.image_url && <img src={item.image_url} alt={item.title} />}
        </div>
      ))}
    </div>
  );
}

export default Movies;
