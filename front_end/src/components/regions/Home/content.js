import React from "react";
import styled from "styled-components";

export default function Content() {
  return (
    <React.Fragment>
      <div>
        <Button onClick={seriesList}>SERIES</Button>
        <Button>MOVIES</Button>
      </div>
    </React.Fragment>
  );
}

const seriesList = e => {
  return <div>Welcome</div>;
};

const Button = styled.button`
  font-family: sans-serif;
  font-size: 1.3rem;
  border: none;
  height: 150px;
  width: 120px;
  margin: 5px;
  color: white;
  background-color: black;
  top: 40px;
  top-margin 10px;
`;
