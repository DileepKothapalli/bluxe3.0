import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import shoe1 from "../../images/shoe1.png";
import shoe2 from "../../images/shoe2.png";
import shoe3 from "../../images/shoe3.png";
import shoe6 from "../../images/21.png";
import shoe8 from "../../images/shoe8.png";
import shoe9 from "../../images/20.png";
import shoe11 from "../../images/22.png";
import shoe12 from "../../images/19.png";

import MainCard from "./card";
import styled, { css, keyframes } from "styled-components";
import bg from "../../images/bg3.png";
import bg10 from "../../images/nightskymain4.jpg";
import { CardFramer, containerFramer, HeadingFramer } from "./ArtworkFramer";
import { useScroll } from "../UseScroll";

export const Div = styled(motion.div)`
  min-height: 110vh;
  background: url(${bg10});
  background-size: cover;
  background-position: center bottom;
  background-attachment: fixed;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  overflow-x: hidden;
`;
export const HeadingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: max-content;
  position: relative;
  overflow-wrap: break-word;
`;
export const RoadmapHeading = styled(motion.h2)`
  font-weight: bolder;
  color: #36e9e9;
  text-shadow: 1px 1px 2px #000;
  margin-bottom: 30px;
  margin-top: 100px;
  font-family: "Playfair Display", serif;
  font-size: 3rem;
`;
export const Container = styled(motion.div)`
  width: 100vw;
  @media screen and (max-width: 1200px) {
    // width: 80vw;
  }
  @media screen and (max-width: 1024px) {
    // width: 70vw;
  }
  @media screen and (max-width: 768px) {
    // width: 70vw;
  }
  @media screen and (max-width: 550px) {
    // width: 55vw;
  }
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0px 20px;
  overflow-x: hidden;
`;
export const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  min-width: 100px;
  max-width: 230px;
  // width:max-content;
  margin: 10px 40px;
  align-items: center;
  justify-content: space-evenly;
`;
const Artwork = () => {
  return (
    <Div
      id="artwork"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <HeadingContainer>
        <RoadmapHeading variants={HeadingFramer}>Artwork</RoadmapHeading>
      </HeadingContainer>

      <Container>
        <CardContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={CardFramer}
        >
          <MainCard
            shoename="Green Forest"
            bg="#c4e5c9"
            shoesrc={shoe8}
            attri1="Green"
            attri2="Green"
            attri3="Green"
          />
        </CardContainer>

        <CardContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={CardFramer}
        >
          <MainCard
            shoename="Green Forest"
            bg="#d1e5f8"
            shoesrc={shoe12}
            attri1="Green"
            attri2="Green"
            attri3="Green"
          />
        </CardContainer>

        <CardContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={CardFramer}
        >
          <MainCard
            shoename="Green Forest"
            bg="#eff57c"
            shoesrc={shoe1}
            attri1="Green"
            attri2="Green"
            attri3="Green"
          />
        </CardContainer>

        <CardContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={CardFramer}
        >
          <MainCard
            shoename="Green Forest"
            bg="#c8c3f8"
            shoesrc={shoe11}
            attri1="Green"
            attri2="Green"
            attri3="Green"
          />
        </CardContainer>
        <CardContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={CardFramer}
        >
          <MainCard
            shoename="Green Forest"
            bg="#d4ebd0"
            shoesrc={shoe2}
            attri1="Green"
            attri2="Green"
            attri3="Green"
          />
        </CardContainer>

        <CardContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={CardFramer}
        >
          <MainCard
            shoename="Green Forest"
            bg="#f3ced5"
            shoesrc={shoe6}
            attri1="Green"
            attri2="Green"
            attri3="Green"
          />
        </CardContainer>

        <CardContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={CardFramer}
        >
          <MainCard
            shoename="Green Forest"
            bg="#88dbd3"
            shoesrc={shoe3}
            attri1="Green"
            attri2="Green"
            attri3="Green"
          />
        </CardContainer>

        <CardContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={CardFramer}
        >
          <MainCard
            shoename="Green Forest"
            bg="#f7c391"
            shoesrc={shoe9}
            attri1="Green"
            attri2="Green"
            attri3="Green"
          />
        </CardContainer>
      </Container>
    </Div>
  );
};

export default Artwork;
