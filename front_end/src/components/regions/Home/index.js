import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <div className="App">
        <h3>Demo Streaming</h3>
        <Button>Log in</Button>
        <Button>Start your</Button>
      </div>
    </HeaderContainer>
  );
}

const Button = styled.button`
  margin: 3px;
  width: 60px;
  height: 20px;
  border: none;
  margin-top: -20px;
  margin-right: 50px;
`;

const HeaderContainer = styled.header`
  background: blue;
  color: white;
  height: 3rem;

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
