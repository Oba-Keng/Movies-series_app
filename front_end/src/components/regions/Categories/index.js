import React from "react";
import styled from "styled-components";

function Categories() {
  return <CategoriesContainer></CategoriesContainer>;
}

const CategoriesContainer = styled.header`
  background: blue;
  color: white;

  button {
    color: white;
    background: black;
  }
`;

export default Categories;
