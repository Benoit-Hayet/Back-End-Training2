import React, { useEffect, useState } from "react";
import axios from "axios";

function Movies() {
  const [postMovie, setPostMovie] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/movies").then((data) => {
      console.log(data);
      setPostMovie(data?.data);
    });
  }, []);

  return (
    <div>
      Movies
      {postMovie.map((item, i) => {
        return (
          <div key={i}>
            <p>{item?.title}{item?.release_year}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Movies;
