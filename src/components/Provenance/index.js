import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

import nakedMan from "../../images/logo.webm";
// import bg7 from "../../images/backgroundpage2-1.png";
import bg7 from "../../images/nightskymain4.jpg";
import {
  AboutAnimation,
  HeadingFramer,
  LeftCardFramer,
  RightCardFramer,
} from "./ProvenanceFramer";

import { useAnimation } from "framer-motion";
import { useScroll } from "../UseScroll";
const Div = styled(motion.div)`
  display: flex;
  justify-content: center;
  background: url(${bg7});
  background-attachment: fixed;
  background-position: center bottom;
  background-repeat: no-repeat;
  min-height: 100vh;
  height: max-content;
  position: relative;
  background-size: cover;
  padding-top: 100px;
`;
const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  justify-content: center;
  align-items: space-between;
`;
const HeadingContainer = styled(motion.div)`
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
const BodyContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  max-width: 100vw;
  min-width: 90vw;
  min-height: 60vh;
  margin: 0px 40px;
  padding-bottom: 300px;
  @media (max-width: 1040px) {
    padding-bottom: 0px;
  }
`;
const BodyContainer2 = styled(motion.div)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  max-width: 100vw;
  min-width: 90vw;
  min-height: 60vh;
  margin: 0px 40px;
`;
const StudioHeading = styled(motion.h2)`
  font-weight: bolder;
  color: #36e9e9;
  text-shadow: 1px 1px 2px #000;
  // margin-bottom: 0px;
  margin-top: 10px;
  font-family: "Playfair Display", serif;
  font-size: 3rem;
`;
const StudioWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 40vw;
  min-width: 550px;
  height: max-content;
  font-family: "Poppins", sans-serif;
  padding: 30px 45px;
  font-weight: 500;
  @media (max-width: 768px) {
    width: 80vw;
    min-width: 50px;
  }
  @media (max-width: 550px) {
    width: 80vw;
    min-width: 50px;
  }
`;
const Video = styled(motion.video)`
  height: 55vh;
  width: 400px;
  scale: 2;
  z-index: 100;
  position: relative;
  margin-top: 55px;
  // margin-bottom: 155px;

  @media (max-width: 1024px) {
    margin-top: 150px;
    margin-bottom: 150px;
    transform: translateY(0px);
    transform: translateX(0px);
    opacity: 1;
  }
`;
const StoryText = styled(motion.p)`
  font-size: 1rem;
  text-align: justify;
  text-justify: inter-word;
  color: white;
  margin: 0px;
  font-family: "Arial", sans-serif;
`;

const Studio = () => {
  const { scrollY } = useViewportScroll();
  let viewportHeight = window.innerHeight;
  let viewportWidth = window.innerWidth;

  const y1 = useTransform(
    scrollY,
    [0, 1 * viewportHeight, 1.8 * viewportHeight],
    [0, 0, 0.95 * viewportHeight]
  );

  // const x1 = useTransform(
  //   scrollY,
  //   [0, 1.3 * viewportHeight, 1.8 * viewportHeight],
  //   [0, 0, -0.45 * viewportWidth]
  // );
  const [width, setWidth] = useState(0);
  const [widthControl, setWidthControl] = useState(0.45);
  const [element, controls] = useScroll(window.innerWidth > 1050 ? 0.45 : 0.2);
  useEffect(() => {
    if (window.innerWidth > 1050) {
      setWidth(1);
    } else if (window.innerWidth > 720) {
      setWidth(0.55);
      setWidthControl(0);
    } else {
      setWidth(0.2);
      setWidthControl(0);
    }
  }, [window.innerWidth]);

  return (
    <Div id="studio">
      <Container
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <HeadingContainer>
          <StudioHeading variants={HeadingFramer}>Provenance</StudioHeading>
        </HeadingContainer>
        <BodyContainer>
          <StudioWrapper
            initial="hidden"
            whileInView="visible"
            exit="exit"
            variants={LeftCardFramer}
            viewport={{
              once: true,
              amount: width,
              margin: "0px 0px -150px 0px",
            }}
          >
            <StoryText>
              Human Race started wearing clothes and footever to protect
              themselves from vagaries of nature and other predators. With the
              progress of time, these garments started to define their culture,
              tradition and became part of their identity. Fashion has become a
              form of expression and has been very closely associated with art.{" "}
              <br />
              <br />
              {/* As we head towards metaverse, profile picture and avatar based
              NFTs have already started disrupting the market with a global
              sales of 18 Billion Dollars. To cater for this huge growing space,
              Bluxe Studio is bringing luxury fashion to digital world. We
              propose to bring business opportunity through first NFT collection
              of exclusive sneakers with an aim to become iconic digital fashion
              brand. <br /> <br />
              Each pair of shoe is individually modelled, providing real value
              during times of generative art. The pricing of the first
              collection has been well thought out to build a strong and loyal
              community on ethereum chain. The utilities have been designed to
              keep the best interest of the NFT holders, who are also our
              buisness partner in our mission. */}
            </StoryText>
          </StudioWrapper>

          <Video
            initial="hidden"
            whileInView="visible"
            exit="exit"
            variants={LeftCardFramer}
            viewport={{
              once: true,
              amount: width,
              margin: "0px 0px -10px 0px",
            }}
            // style={
            //   viewportWidth > 1050 ? { translateY: y1, translateX: x1 } : {}
            // }
            style={viewportWidth > 1050 ? { translateY: y1 } : {}}
            loop
            autoPlay
            muted
          >
            <source src={nakedMan} type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
        </BodyContainer>
        <BodyContainer2>
          {/* uncomment this for the diagonal traslation of the video  and change the padding-bottom for the bodycontainer*/}
          {/* {viewportWidth > 1040 && (
            <AnimatePresence>
              <Video
                initial="hidden"
                whileInView="visible"
                variants={RightCardFramer}
                viewport={{ once: false, amount: 0.9 }}
                loop
                autoPlay
                muted
              >
                <source src={""} type="video/mp4" />
                Your browser does not support the video tag.
              </Video>
            </AnimatePresence>
          )} */}

          <StudioWrapper
            initial="hidden"
            whileInView="visible"
            exit="exit"
            variants={LeftCardFramer}
            viewport={{ once: true, amount: 1 }}
          >
            <StoryText>
              As we head towards future of fashion, we are launching our first
              NFT collection of 500 pair of shoes. Each pair of shoe is
              individually modelled, providing humane touché during the times of
              generative art. Holding of Bluxe NFT doubles as membership to our
              BLUXE Club which would be entry ticket for everything that we do.
              Now the Cinderella won’t loose her shoes because it’s an NFT.
              <br />
            </StoryText>
          </StudioWrapper>

          {/* uncomment this for vertical movement of the video  */}
          {viewportWidth > 1040 && (
            <AnimatePresence>
              <Video
                initial="hidden"
                whileInView="visible"
                variants={RightCardFramer}
                viewport={{ once: true, amount: 0.9 }}
                loop
                autoPlay
                muted
              >
                <source src={""} type="video/mp4" />
                Your browser does not support the video tag.
              </Video>
            </AnimatePresence>
          )}
        </BodyContainer2>
      </Container>
    </Div>
  );
};

export default Studio;

// function App() {

//   const [ref, inView, entry] = useInView({
//     /* Optional options */
//     threshold: 0.5,
//     triggerOnce: false
//   });

//   const variants = {
//     visible: { opacity: 1, scale: 1, y: 0 },
//     hidden: {
//       opacity: 0,
//       scale: 0.65,
//       y: 50
//     }
//   };

//   return (
//     <>
//       <motion.div className="box" style={{ y: y1, x: -50 }} />
//       <motion.div
//         className="box"
//         style={{ y: y2, x: 50, background: 'salmon' }}
//       />
//       <div style={{ height: 500 }} />
//       <div style={{ position: 'fixed', top: 0, left: 0 }}>
//         {' '}
//         {'is in view? ' + inView}
//       </div>
//       <motion.div
//         animate={inView ? 'visible' : 'hidden'}
//         variants={variants}
//         transition={{ duration: 2, ease: 'easeOut' }}
//         ref={ref}
//         className="magic"
//       />
//     </>
//   );
// }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
