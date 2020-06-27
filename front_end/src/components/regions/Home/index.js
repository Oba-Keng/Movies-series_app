import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <div className="App">
        <h3>Demo Streaming</h3>
        <button classname="btn btn-primary">Log in</button>
        <button classname="btn btn-primary">Start your free trial</button>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  background: blue;
  color: white;
  height: 4rem;

  h3 {
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
