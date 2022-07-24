import styled from "styled-components";
import { motion } from "framer-motion";
import bg1 from "../../images/Blackbackground2.jpg";
import bg2 from "../../images/blacklight.jpg";
import bg3 from "../../images/blackmanbackground.jpg";
import bg4 from "../../images/blackbackground.jpg";
import bg5 from "../../images/darkpurple.jpg";
import bg6 from "../../images/lightbackground.jpg";
import bg7 from "../../images/linebackground.jpg";

export const Div = styled(motion.div)`
  // background: rgba(0, 0, 0, 1);
  // background: url(${bg4});
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

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: max-content;
  justify-content: space-evenly;
  position: relative;
  align-items: space-evenly;
`;

export const TopContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const HeadContainer = styled(motion.div)`
  display: flex;
  align-items: center;
`;
export const HeadingLogo = styled.img`
  width: 130px;
  height: auto;
  margin-top: 10px;
  margin-right: -10px;
`;
export const HeadingLogoW = styled.img`
  width: 80px;
  height: auto;
  margin-left: -20px;
  margin-bottom: 10px;
`;
export const Heading = styled.h1`
  text-shadow: 1px 1px 1px #222;
  font-size: 2.5rem;
  margin-top: 0px;
  margin-right: 15px;
  justify-content: center;
  text-align: center;
  font-family: "Encode Sans Expanded", sans-serif;
  color: #00897b;
  color: #00564d;
  color: white;
  height: 40px;
`;

export const CaptionDiv = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
`;
export const Caption = styled(motion.h1)`
  text-shadow: 1px 1px 1px #222;
  font-size: 1.5rem;
  max-width: 950px;
  justify-content: center;
  text-align: center;
  color: #aaa;
`;
export const Skill = styled.p`
  font-size: 1.375rem;
  color: #4daca4;
`;
export const Rarity = styled.p`
  color: #888;
  margin-top: -20px;
  font-size: 1rem;
`;

export const CardsWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  text-justify: inter-word;
`;
export const HalfContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 800px;
  text-align: justify;
  text-justify: inter-word;
  flex-wrap: wrap;
`;

export const CardsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 0px 30px;
  flex: 1;
  height: 350px;
`;

export const Cards = styled(motion.div)`
  display: flex;
  min-height: 200px;
  min-width: 200px;
  background: white;
  justify-content: center;
`;

export const Video = styled(motion.video)`
  height: 200px;
  width: 200px;
  position: relative;
`;
