import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import Scream from "../assets/CarouselPics/Scream.jpg";
import TheShining from "../assets/CarouselPics/TheShining.jpeg";
import TheExorcist from "../assets/CarouselPics/TheExorcist.jpg";

export default function App() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src={Scream} className="d-block w-50 mx-auto" alt="..." />
        <MDBCarouselCaption></MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src={TheShining} className="d-block w-50 mx-auto" alt="..." />
        <MDBCarouselCaption></MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src={TheExorcist} className="d-block w-50 mx-auto" alt="..." />
        <MDBCarouselCaption></MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
