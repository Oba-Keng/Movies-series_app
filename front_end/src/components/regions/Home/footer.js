import React from "react";
import Categories from "../Categories";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <Categories />
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
