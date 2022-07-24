import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";
import bg1 from "../../images/blackbackground.jpg";
import bg2 from "../../images/blacklight.jpg";
import bg3 from "../../images/blackmanbackground.jpg";
import bg4 from "../../images/nightskymain4.jpg";
import bg5 from "../../images/darkpurple.jpg";
import bg6 from "../../images/lightbackground.jpg";
import bg7 from "../../images/linebackground.jpg";
export const Div = styled(motion.div)`
  display: flex;
  min-height: 80vh;
  background: url(${bg4});
  background-size: cover;
  background-position: center bottom;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 95vw;
  flex-direction: column;
`;

export const TopContainer = styled(motion.div)`
  display: flex;
  justify-content: center;

  margin-bottom: 50px;
  margin-top: 50px;
  @media (max-width: 550px) {
    margin-top: 50px;
  }
`;

export const BodyContainer = styled(motion.div)`
  // position: relative;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-evenly;
  align-items: center;
  max-width: 100vw;
  min-width: 90vw;
  margin: 0px 40px;
  padding-bottom: 100px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const HalfDivl = styled(motion.div)`
  display: flex;
  width: 35vw;
  min-width: 600px;
  justify-content: center;
  // padding: 30px;
  //  margin: 25px 25px 25px 25px;
  margin-top: 25px;
  // margin-left: 60px;
  // margin-right: 10px;

  @media (max-width: 1100px) {
    padding-bottom: 100px;
  }
`;

export const HalfDivR = styled(motion.div)`
  display: flex;
  text-align: start;
  width: 35vw;
  // padding: 30px;
  margin-top: 25px;
  margin-bottom: 25px;
  min-width: 400px;
  justify-content: space-evenly;
`;

export const Heading = styled(motion.h1)`
  color: rgba(256, 256, 256, 1);
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  font-size: 1.5rem;
  margin: 05px 5px 0px 50px;
`;

export const TextDiv = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 30px;
  margin: 05px 5px 0px 50px;
  font-family: "Poppins", sans-serif;
`;

export const TextDivl = styled(motion.div)`
  display: flex;
  margin: 0px 0px 0px 0px;
  font-family: "Playfair Display", serif;
  color: rgba(256, 256, 256, 1);
  text-align: justify;
  text-justify: inter-word;
  justify-content: space-evenly;
  text-indent: 50px;
  width: 45vw;
  min-width: 500px;
  max-width: 550px;
  @media (max-width: 550px) {
    width: 80vw;
    min-width: 50px;
  }
  backdrop-filter: blur(2px);
`;
export const TextDivR = styled(motion.div)`
  display: flex;
  margin: 0px 0px 0px 0px;
  font-family: "Playfair Display", serif;
  color: rgba(256, 256, 256, 1);
  text-align: justify;
  text-justify: inter-word;
  justify-content: space-evenly;
  min-width: 500px;
  max-width: 600px;
  flex-direction: column;
  text-align: start;
  width: 45vw;
  justify-content: center;
  @media (max-width: 550px) {
    width: 80vw;
    min-width: 50px;
  }
  backdrop-filter: blur(2px);
`;

export const Bullet = styled(motion.div)`
  min-height: 8px;
  min-width: 8px;
  background: rgba(256, 256, 256, 0.75);
  border-radius: 8px;
  margin: 10px 0px 0px 0px;
`;

export const TextP = styled(motion.p)`
  margin: 0px;
  font-size: 1rem;
  margin: 0px 0px 0px 10px;
  color: rgba(256, 256, 256, 0.8);
  font-weight: 400;
`;

export const Logo = styled(motion.img)`
  height: 90px;
`;

export const TextL = styled(motion.h1)`
  font-size: 1.3rem;
  margin: 05px 5px 0px 50px;
`;
