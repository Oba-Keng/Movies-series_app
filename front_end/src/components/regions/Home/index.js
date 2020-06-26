import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <h1 className="App">
        Demo Streaming
        <button classname="btn btn-primary"></button>
        <button classname="btn btn-primary"></button>
      </h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  background: blue;
  color: white;
  height: 4rem;

  h1 {
    top: 25%;
  }

  button {
    color: white;
    background: black;
    float: right;
    height: 20px;
    width: 80px;
  }
`;
