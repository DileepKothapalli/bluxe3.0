import React, { useEffect, useRef, useState } from "react";
import {
  BodyContainer,
  Bullet,
  Container,
  Div,
  HalfDivl,
  HalfDivR,
  Heading,
  Logo,
  TextDiv,
  TextDivl,
  TextDivR,
  TextL,
  TextP,
  TextR,
  TopContainer,
} from "./BluxeStudioElements";
import logo from "../../images/bluxestudio1.png";
import { useScroll } from "../UseScroll.js";
import {
  BluxeStudioHeadingAnimate,
  HeadingFramer,
  LeftCardFramer,
  LeftDivAnimate,
  RightCardFramer,
  RightDivAnimate,
  StaggerContainer,
} from "./BluxeStudioFramer";

const BluxeStudio = () => {
  return (
    <Div>
      <Container
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <TopContainer>
          <Logo
            // variants={HeadingFramer}
            // animate={controls}
            // transition={{
            //   duration: 0.1,
            //   bounce: 1.3,
            //   ease: "easeInOut",
            // }}

            variants={HeadingFramer}
            src={logo}
          />
        </TopContainer>
        <BodyContainer>
          <HalfDivl
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={LeftCardFramer}
          >
            <TextDivl>
              <TextL>
                Our signature NFT wearable collection consists of 500 pair of
                shoes. All shoes are individually curated and can be worn by
                various avatar based projects in metaverse.
                <br></br>
                <br></br>
                Holding Bluxe NFT doubles as our business partnership and will
                be eligible for all rewards and events. All holders will get
                exclusive access to Bluxe Store which will offer hosts of
                benefits and offerings.
              </TextL>
            </TextDivl>
          </HalfDivl>
          <HalfDivR
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={RightCardFramer}
          >
            <TextDivR>
              <Heading>
                Benefits of Bluxe membership
                <br /> include:
              </Heading>
              <TextDiv>
                <Bullet></Bullet>
                <TextP>Ownership of underlying artwork and IP</TextP>
              </TextDiv>{" "}
              <TextDiv>
                <Bullet></Bullet>
                <TextP>
                  Each NFT can be quantipulated at Bluxe store to be worn in
                  metaverse.
                </TextP>
              </TextDiv>{" "}
              <TextDiv>
                <Bullet></Bullet>
                <TextP>Exclusive access to your Bluxe animation file.</TextP>
              </TextDiv>{" "}
              <TextDiv>
                <Bullet></Bullet>
                <TextP>
                  Curated presales and mint pass for high potential future
                  wearable collections.
                </TextP>
              </TextDiv>{" "}
              <TextDiv>
                <Bullet></Bullet>
                <TextP>Holders only raffles, games and events .</TextP>
              </TextDiv>{" "}
              <TextDiv>
                <Bullet></Bullet>
                <TextP>
                  Invite to annual fashion festival for holders and IRL events.
                </TextP>
              </TextDiv>
            </TextDivR>
          </HalfDivR>
        </BodyContainer>
      </Container>
    </Div>
  );
};

export default BluxeStudio;
