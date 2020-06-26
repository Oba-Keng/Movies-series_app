import React from "react";
import styled from "styled-components";

export default function Bar() {
  return <BarContainer>Popular Titles</BarContainer>;
}

const BarContainer = styled.footer`
  background: grey;
  height: 4rem;
  color: white;
`;
