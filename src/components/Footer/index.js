import React from "react";
import { BottomContainer,Button,Container,Div,Heading,LeftText,MidContainer,RightText,TopContainer,} from "./FooterElements";

const Footer = () => {
  return (
    <Div>
      <Container>
        <TopContainer>
          <Heading></Heading>
        </TopContainer>
        <MidContainer>
          <Button>Join Discord</Button>
        </MidContainer>
        <BottomContainer>
          <LeftText>2022 Bluxe. All Rights Reserved</LeftText>
          {/* <RightText>Privacy policy </RightText> */}
        </BottomContainer>
      </Container>
    </Div>
  );
};

export default Footer;
