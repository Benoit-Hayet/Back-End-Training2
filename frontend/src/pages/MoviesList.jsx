import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import Sidebar from "../components/SideBar";

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
      <Navigation/>
      <Sidebar/>
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
