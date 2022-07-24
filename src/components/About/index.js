import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Studio from "../Provenance/index";
import BluxeStudio from "../BluxeStudio/index";

export const Div = styled.div`

  text-align: center;
  background-size: 100vw 100vh;
  position: relative;
  height: max-content;
  z-index: 1;
  min-height: 100vh;
  font-family: "Encode Sans Expanded", sans-serif;
  overflow-x: hidden;
  overflow-y: hidden;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;

const About = () => {
  return (
    <Div id="about">
      <Studio></Studio>
      <BluxeStudio /> 
    </Div>
  );
};

export default About;
