import React from "react";
import styled from "styled-components";
import NavBar from "./navBar";

export default function Footer() {
  return (
    <FooterContainer>
      <NavBar />
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background: black;
  height: 4rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 35%;
`;
