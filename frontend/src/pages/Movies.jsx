import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import axios from "axios";
import Navigation from "../components/Navigation";
import "../styles/Movies.css"; // Import your CSS styles

export default function Movies() {
  const [postMovie, setPostMovie] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/movies").then((response) => {
      console.log(response.data);
      setPostMovie(response.data);
    });
  }, []);

  return (
    <div className="movies-container">
      <Navigation />
      {postMovie.map((item) => (
        <MDBCard
          key={item.id}
          className="movie-card"
          style={{
            backgroundColor: "black",
            color: "white",
            boxShadow: "0 0 1px 2px white",
            margin: "5px",
          }}
        >
          <MDBCardImage src={item.image_url} position="top" alt={item.title} />
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardTitle>{item.release_year}</MDBCardTitle>
            <MDBCardText></MDBCardText>
            <MDBBtn href="#" style={{ backgroundColor: "gray" }}>
              More
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      ))}
    </div>
  );
}
