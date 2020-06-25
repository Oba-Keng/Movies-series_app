import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <h1 className="App">Demo Streaming</h1>
      <button classname="btn btn-primary">Log in</button>{" "}
      <button classname="btn btn-primary">Start your free trial</button>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  background: blue;
  color: white;

  button {
    color: white;
    background: black;
  }
`;
