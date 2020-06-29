import React from "react";
import styled from "styled-components";
import NavBar from "./navBar";

export default function Footer() {
  return (
    <React.Fragment>
      <FooterContainer>
        <NavBar />
        <a className="icon">
          <i className="fa fa-facebook"></i>
        </a>
        <a className="icon" href="#">
          <i className="fa fa-twitter"></i>
        </a>
      </FooterContainer>
    </React.Fragment>
  );
}

const FooterContainer = styled.footer`
  // background-color: $primary !important
  background: black;
  height: 4rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 35%;
`;
