import styled, { css, keyframes } from "styled-components";

import bg1 from "../../images/roadmapbg.png";
import bg10 from "../../images/nightskymain4.jpg";

export const Section = styled.section`
min-height: 100vh;
max-width: 100vw; 
background : url(${bg10});
background-size: cover;
background-position: center bottom;
background-attachment: fixed; 
position: relative;
background-repeat: no-repeat;
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
  // height: 300vh;
}

overflow: hidden;

`
export const Title = styled.h1`
font-size: 20px;
text-transform: capitalize;
color: #36e9e9;
display: flex;
justify-content: center;
align-items: center;
margin: 1 rem auto;
text-align: center;
width: fit-content;
font-family: "Poppins", sans-serif;
  overflow-wrap: break-word;

`

export const Container = styled.div`
width: 80%;
// height: 200vh;

margin: 0 auto;
display: flex;
justify-content: start;
position: relative;

`

export const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 2px;
overflow: hidden;
@media screen and (max-width: 1200px) {
  // width: 80vw;
}
@media screen and (max-width: 1024px) {
  // width: 70vw;
}
@media screen and (max-width: 768px) {
  // width: 70vw;
}
@media screen and (max-width: 700px) {
display: none;
visiblity: hidden;
}
`
export const Items = styled.ul`
list-style: none;
width: 100%;
height: 95%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 2300px;


&>*:nth-of-type(2n+1){
  justify-content: start;
}
&>*:nth-of-type(2n){
  justify-content: end;
}

@media screen and (max-width: 700px) {
&>*:nth-of-type(2n+1){
  justify-content: center;
}
&>*:nth-of-type(2n){
  justify-content: center;
}
margin-top: 50px;
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
padding: 10px;
// border: 1px solid ivory;
// display: flex;
// align-items: center;

@media screen and (max-width: 1200px) {
  // width: 80vw;
}
@media screen and (max-width: 1024px) {
  // width: 70vw;
}
@media screen and (max-width: 768px) {
  // width: 70vw;
}
@media screen and (max-width: 700px) {
width: 100%
}
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
backdrop-filter: blur(3px);
`
export const SubTitle = styled.span`
display: block;
font-size: 14px;
// text-transform: capitalize;
color: white;
font-weight: 400;
font-family: "Playfair Display", serif;
color: rgba(256, 256, 256, 1);
text-align: justify;
text-justify: inter-word;
justify-content: space-evenly;
// margin: 0.5rem 0; 
font-family: "Poppins", sans-serif;
overflow-wrap: break-word;
`
export const Text = styled.span``;

export const HeadingContainer = styled.div`
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

export const RoadmapHeading = styled.h2`
  font-weight: bolder;
  color: #36e9e9;
  text-shadow: 1px 1px 2px #000;
  // margin-bottom: 0px;
  margin-top: 100px;
  font-family: "Playfair Display", serif;
  font-size: 3rem;
`;
