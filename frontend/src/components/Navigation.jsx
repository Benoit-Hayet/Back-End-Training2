import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";
import Logo from "../assets/logo/Logo.gif";

export default function App() {
  const [openNavColorSecond, setOpenNavColorSecond] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" dark bgColor="black" style={{ height: "100px" }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href="#"></MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNavColorSecond(!openNavColorSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColorSecond} navbar id="navbarColor02">
            <MDBNavbarNav
              className="me-auto mb-4 mb-lg-0"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <MDBNavbarItem className="active" style={{ marginRight: "15px" }}>
                <MDBNavbarLink
                  aria-current="page"
                  href="/Home"
                  style={{ color: "white" }}
                >
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem style={{ marginRight: "15px" }}>
                <MDBNavbarLink href="/Movies" style={{ color: "white" }}>
                  Movies
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem style={{ marginRight: "15px" }}>
                <img src={Logo} className="d-block w-50 mx-auto" alt="..." />
              </MDBNavbarItem>
              <MDBNavbarItem style={{ marginRight: "15px" }}>
                <MDBNavbarLink href="#" style={{ color: "white" }}>
                  Forum
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem style={{ marginRight: "15px" }}>
                <MDBNavbarLink href="/login" style={{ color: "white" }}>
                  <MDBIcon fas icon="user-alt" />
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
