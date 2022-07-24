import styled from "styled-components";
import bg2 from "../../images/teambg.png";
import bg10 from "../../images/nightskymain4.jpg";
import { AnimatePresence, motion } from "framer-motion";

export const Div = styled(motion.div)`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  padding-top: 10px;
  min-height: 100vh;
  height: max-content;
  // background: #000;
  background: url(${bg10});
  background-attachment: fixed;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
`;
export const Title = styled(motion.h1)`
  margin: 80px 0px 100px 0px;
  font-weight: bolder;
  color: #36e9e9;
  text-shadow: 1px 1px 2px #000;
  font-family: "Playfair Display", serif;
  font-size: 3rem;
`;
export const Name = styled(motion.p)`
  margin: 0px;
  margin-top: 70px;
  margin-left: 180px;
  text-transform: uppercase;
  position: absolute;
  font-size: 1.75rem;
  // text-shadow: 0px 0px 1px #000;
  color: #fff;
  text-align: center;
  font-family: "Poppins", sans-serif;
  opacity: 0;
  visiblity: hidden;
`;
export const Heading = styled(motion.p)`
  margin: 0px;
  margin-top: 110px;
  margin-left: 180px;
  // text-shadow: 1px 1px 20px black;
  font-size: 1rem;
  color: rgba(256, 256, 256, 0.75);
  position: absolute;
  opacity: 0;
  visiblity: hidden;
`;
export const Container = styled(motion.div)`
  display: flex;
`;
export const MainContainer = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 10px 0px 0px 0px;
`;
export const CardWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  // background: red;
  justify-content: space-evenly;
  width: 85vw;
`;
export const InnerCard = styled(motion.div)`
  border-radius: 140px 140px 20px 20px;
  background: grey;
  // rgba(242, 142, 139);
  max-height: 140px;
  margin: 10px;
  width: 180px;
  display: inline;

  // @media screen and (max-width: 350px) {
  //   max-width:100vw;
  // }
`;
export const Image = styled(motion.img)`
  pointer-events: none;
  transition: 0.5s;
  max-height: ${(props) => props.height}px;
  max-width: ${(props) => props.height}px;
  margin-top: ${(props) => props.top}px;
  margin-left: ${(props) => props.left}px;
  z-index: 5;
`;
export const Card = styled(motion.div)`
  display: flex;
  height: 160px;
  width: 200px;
  margin: 15px 0px;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 350px) {
    max-width: 100vw;
  }
`;
export const CardsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: space-evenly;
  width: 340px;
  margin: 0px 0px 50px 0px;
  &:hover ${Card} {
    width: 340px;
  }

  &:hover ${InnerCard} {
    transition: 1.2s l;
    width: 340px;
    border-radius: 10px 10px 10px 10px;
  }
  &:hover ${Image} {
    transform: translatex(-65px);
    transition: 0.7s;
  }
  &:hover ${Heading} {
    opacity: 1;
    visiblity: visible;
    // transition: 0.2s;
    transition-delay: 0.5s;
  }
  &:hover ${Name} {
    opacity: 1;
    visiblity: visible;

    transition-delay: 0.5s;
  }
  @media screen and (max-width: 350px) {
    max-width: 100vw;
  }
`;
