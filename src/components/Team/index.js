import React, { useEffect, useState } from "react";
import "./TeamElements";
import {
  Card,
  CardsContainer,
  Container,
  Div,
  Heading,
  MainContainer,
  Title,
  CardWrapper,
  InnerCard,
  Image,
  Name,
} from "./TeamElements";
import DeepakJoshiAvatar from "../../images/DeepakJoshiAvatar.png";
import Bhawna from "../../images/BhawnaSingh.png";
import Prashant from "../../images/Prashant1.png";
import Dileep from "../../images/Dileep2.png";
import { CardFramer, containerFramer, HeadingFramer } from "./TeamFramer";
import { useScroll } from "../UseScroll";

const Team = () => {
  return (
    <Div id="team">
      <Container>
        <MainContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Title variants={HeadingFramer}>TEAM</Title>
          <CardWrapper>
            <CardsContainer
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={CardFramer}
            >
              <Card>
                <InnerCard>
                  <Image height="235" top="-95" left="-26" src={Bhawna}></Image>
                </InnerCard>
              </Card>
              <Name>ART SPADE</Name>
              <Heading>Chief Designer</Heading>
            </CardsContainer>{" "}
            <CardsContainer
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={CardFramer}
            >
              <Card>
                <InnerCard>
                  <Image height="210" top="-70" left="-15" src={Dileep}></Image>
                </InnerCard>
              </Card>
              <Name>Dileep</Name>
              <Heading>Developer</Heading>
            </CardsContainer>{" "}
            <CardsContainer
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={CardFramer}
            >
              <Card>
                <InnerCard>
                  <Image
                    height="210"
                    top="-70"
                    left="-15"
                    src={DeepakJoshiAvatar}
                  ></Image>
                </InnerCard>
              </Card>
              <Name>Paul</Name>
              <Heading>Founder</Heading>
            </CardsContainer>{" "}
            <CardsContainer
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={CardFramer}
            >
              <Card>
                <InnerCard>
                  <Image
                    height="210"
                    top="-70"
                    left="-15"
                    src={DeepakJoshiAvatar}
                  ></Image>
                </InnerCard>
              </Card>
              <Name>Deepak Joshi</Name>
              <Heading>Graphic Designer</Heading>
            </CardsContainer>{" "}
            <CardsContainer
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={CardFramer}
            >
              <Card>
                <InnerCard>
                  <Image
                    height="190"
                    top="-50"
                    left="-3"
                    src={Prashant}
                  ></Image>
                </InnerCard>
              </Card>
              <Name>Prashant</Name>
              <Heading>GRAPHIC DESIGNER</Heading>
            </CardsContainer>
          </CardWrapper>
        </MainContainer>
      </Container>
    </Div>
  );
};

export default Team;
