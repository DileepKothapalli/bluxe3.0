import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";

import bg1 from "../../images/Blackbackground2.jpg";
import bg2 from "../../images/blacklight.jpg";
import bg3 from "../../images/blackmanbackground.jpg";
import bg4 from "../../images/blackbackground.jpg";
import bg5 from "../../images/darkpurple.jpg";
import bg6 from "../../images/lightbackground.jpg";
import bg7 from "../../images/linebackground.jpg";

// import bg from "../../images/Roadmap2.jpg";

const MovingDown = (x, y) => keyframes`
    ${
      x === y || y === 0
        ? css`
            0% {
              top: ${50}%;
            }
            4% {
              top: ${50}%;
            }
            5% {
              top: ${50}%;
            }

            100% {
              top: ${50}%;
            }
          `
        : x - y > 0
        ? css`
            0% {
              top: ${(y - x) * 50}%;
            }
            4% {
              top: ${(y - x) * 50}%;
            }
            5% {
              top: ${(y - x) * 50}%;
            }
            100% {
              top: ${50}%;
            }
          `
        : css`
            0% {
              top: ${(y - x) * 50 + 100}%;
            }
            4% {
              top: ${(y - x) * 50 + 100}%;
            }
            5% {
              top: ${(y - x) * 50 + 100}%;
            }
            100% {
              top: ${50}%;
            }
          `
    }`;

export const Div = styled(motion.div)`
  display: flex;
  justify-content: center;
  // background: #b96a59;
  background: #000;
  background-size: 100vw 100vh;
  height: max-content;
  padding-bottom: 60px;
  position: relative;
  // padding-top: 70px;
  overflow: hidden;
  overflow-x: hidden;
`;
export const Section = styled.section`
min-height: 100vh;
width: 100vw; 
// background-color: #d7936d;
background-color: #000;
position: relative;
//  background-color: #0E000E;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='345' height='345' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%231B001B' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23450045'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
`
export const Title = styled.h1`
font-size: 20px;
text-transform: capitalize;
color: green;
display: flex;
justify-content: center;
align-items: center;
margin: 1 rem auto;
text-align: center;
border-bottom: 2px solid grey;
width: fit-content;

`

// export const Container = styled.div`
// width: 80%;
// height: 200vh;
// // background-color: red;
// margin: 0 auto;
// display: flex;
// justify-content: center;
// position: relative;
// `
export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  min-height: 90vh;
  justify-content: space-evenly;
`;
export const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 2px;
 background-color: red;
 overflow: hidden;
`
export const Items = styled.ul`
list-style: none;
width: 100%;
height: 95%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
// background-color: lightblue;

&>*:nth-of-type(2n+1){
  justify-content: start;
}
&>*:nth-of-type(2n){
  justify-content: end;
}

`
export const Item = styled.li`
width: 100%;
height: 100%;
display: flex;
`
export const ItemContainer = styled.div`
width: 45%;
height: fit-content;
padding: 4px;
// border: 1px solid ivory;
// display: flex;
// align-items: center;
`
export const Box = styled.p`
// height: fit-content;
// background-color: rgba(234,54,210, 0.8);
color: ${props => props.theme.text};
padding: 2px;
position: relative;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
// border: 1px solid red;
`
export const SubTitle = styled.span`
display: block;
font-size: 14px;
// text-transform: capitalize;
color: white;
font-weight: 400;
text-align: left;
// margin: 0.5rem 0; 
`
export const Text = styled.span``;

export const ImgContainer = styled.div`
position: absolute;
top: 15.2rem;
left: 50.5%;
transform: translateX(-50%);
// width: 100%;
height: 100%;
overflow: hidden;

svg{
    width: 100%;
    height: 98%;
}
`



export const HeadingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: max-content;
  position: relative;
  // margin-top: 40px;
  //  margin: 30px 30px 40px;
  overflow-wrap: break-word;
`;

export const RoadmapHeading = styled(motion.h2)`
  font-weight: bolder;
  color: #00897d;
  text-shadow: 1px 1px 2px #000;
  // margin-bottom: 0px;
  margin-top: 100px;
  font-family: "Playfair Display", serif;
  font-size: 3rem;
`;
export const HeadingCaption = styled(motion.h2)`
  font-size: 1.625rem;
  text-shadow: 0px 0px 1px #000;
  color: #4daca4;
  margin: 20px 0px 0px;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;

export const RoadmapTextHeading = styled(motion.p)`
  font-size: 1.5rem;
  text-align: center;
  text-align: justify;
  text-justify: inter-word;
  color: #ddd;
  font-weight: 500;
  margin-bottom: 0px;

  color: ${({ mousenum }) => (mousenum === 1 && "#4daca4") || "#ddd"};
`;

export const RoadmapP = styled(motion.p)`
  font-size: 1rem;
  text-align: center;
  text-align: justify;
  text-justify: inter-word;
  color: #bbb;
  font-weight: 500;
  flex: 1;
  display: none;
  min-width: 500px;
  display: ${({ mousenum }) => (mousenum === 1 && "block") || "none"};
  max-width: 500px;
  @media (max-width: 550px) {
    max-width: 90vw;
    min-width: 50px;
  }
`;
export const BodyContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0px 30px;
  justify-content: space-evenly;
  max-width: 100vw;
  &>*:nth-of-type(2n+1){
    justify-content: start;
  }
  &>*:nth-of-type(2n){
    justify-content: end;
  }
`;

export const RoadmapWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  font-family: "Poppins", sans-serif;
  overflow-wrap: break-word;

  &>*:nth-of-type(2n+1){
    justify-content: start;
  }
  &>*:nth-of-type(2n){
    justify-content: end;
  }
  @media (max-width: 550px) {
    max-width: 90vw;
    min-width: 50px;
  }
`;

export const RoadmapDot = styled(motion.div)`
  max-height: 8px;
  max-width: 8px;
  border-radius: 8px;
  padding: 8px;
  background-color: #aaa;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -150%);
  box-shadow: 1px 1px 10px #000;
`;
export const RoadmapDotFixed = styled(motion.div)`
  max-height: 8px;
  max-width: 8px;
  border-radius: 8px;
  padding: 8px;
  background-color: #f3f2c9;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 10px #000;
`;

export const RoadmapDiv = styled(motion.div).attrs((props) => props)`
  height: max-content;
  background-color: rgb(80, 80, 80);
  background-color: transparent;
  display: flex;
  max-width: 70vw;
  align-items: space-between;
  justify-content: space-between;

  &:hover ${RoadmapDot} {
    background-color: #00897d;
    z-index: 2;
    animation: ${(props) => MovingDown(props.x, props.y)} 1s ease-in-out;
  }
  &:hover ${RoadmapDotFixed} {
    transition-delay: 1.01s;
    background-color: #00adf2;
  }
  @media (max-width: 550px) {
    max-width: 80vw;
    min-width: 50px;
  }
`;

export const RoadmapLine = styled(motion.div)`
  height: 100%;
  width: 4px;
  background: #bbb;
  opacity: 1;
  margin-right: 50px;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const RoadmapLineTop = styled(motion.div)`
  height: 100%;
  width: 4px;
  background: linear-gradient(
    180deg,
    rgba(192, 192, 192, 0) 0%,
    rgba(192, 192, 192, 0) 49%,
    rgba(192, 192, 192, 1) 49%,
    rgba(192, 192, 192, 1) 100%
  );
  opacity: 1;
  margin-right: 50px;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const RoadmapLineBottom = styled(motion.div)`
  height: 100%;
  width: 4px;
  background: #fff;
  opacity: 1;
  margin-right: 50px;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
  background: linear-gradient(
    180deg,
    rgba(192, 192, 192, 1) 0%,
    rgba(192, 192, 192, 1) 50%,
    rgba(192, 192, 192, 0) 50%,
    rgba(192, 192, 192, 0) 100%
  );
`;
export const RoadmapLineB = styled(motion.div)`
  height: 100%;
  width: 4px;
  background: black;
  opacity: 1;
  margin-right: 50px;
  position: relative;
  @media (max-width: 700px) {
  }
`;

export const RoadmapCardRight = styled(motion.button)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  border-radius: 10px;
  min-height: 65px;
  height: max-content;
  margin: 10px;
  width: 90vh;
  max-width: 550px;
  padding: 10px;
  border: 1px solid #aaa;
  position: relative;
  &:hover {
    transform: scale(1.01);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  &:active {
    border: 1px solid #aaa;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    text-align: start;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media (max-width: 550px) {
    max-width: 90vw;
    min-width: 50px;
  }

  border: ${({ mousenum }) => (mousenum === 1 && "none") || ""};
`;
export const RoadmapCardDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const RoadmapH2 = styled(motion.h2)`
  font-size: 1.25rem;
  text-shadow: 0px 0px 1px #000;
  margin-right: 30px;
  margin: 0px;
  color: white;
  width: 100px;
  text-align: left;
  @media (max-width: 700px) {
  }
`;

export const Video = styled(motion.video)`
  // height: 500px;
  width: 450px;
  scale: 2;
  position: relative;
  @media (max-width: 1200px) {
    margin-bottom: 30px;
  }
`;
