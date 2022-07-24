import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import iconPlus from "../../images/plus4.png";
import bg3 from "../../images/faq.png";
import bg10 from "../../images/nightskymain4.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { CardFramer, containerFramer, HeadingFramer } from "./FaqFramer";
import { useScroll } from "../UseScroll";

const Div = styled(motion.div)`
  // background: rgba(0, 0, 0, 1);
  background: url(${bg10});
  background-position: center bottom;
  text-align: center;
  background-size: cover;
  background-attachment: fixed;
  // padding-bottom: 30px;
  padding-top: 40px;
  // height: 200vh;
  overflow: hidden;
`;
const BodyContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px 0px 0px;
  // min-height: 85vh;
  // height: fit-content;
  justify-content: space-evenly;
  border-radius: 20px;
  width: 100vw;
  box-shadow: 0px 1px 24px -1px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
`;
const HeadContainer = styled(motion.div)`
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
const Heading = styled(motion.h2)`
  font-weight: bolder;
  color: #36e9e9;
  text-shadow: 1px 1px 2px #000;
  margin-bottom: 30px;
  margin-top: 30px;
  font-family: "Playfair Display", serif;
  font-size: 3rem;
`;
const TopContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  // background: red;
  // height: 70vh;
`;
const HalfDivl = styled(motion.div)`
  display: flex;
  // flex-wrap: wrap;
  // flex-direction: column;
  // position: relative;
  align-items: center;
  justify-content: center;
  // min-height: 400px;
  // min-width: 1050px;
  // max-height: 400px;
  // background: pink;
  // padding: 20px;
`;
const HalfDivr = styled(motion.div)`
  display: flex;
  flex-direction: column;
  // position: relative;
  // align-items: center;
  justify-content: center;
  min-height: 400px;
  min-width: 450px;
  // max-height: 400px;
  // background: blue;
  // padding: 20px;
`;
const QuestionsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: start;
  max-width: 1000px;
  transition: all 0.5s ease;
  margin-bottom: 100px;
  margin-top: 50px;
  @media screen and (max-width: 550px) {
    width: 500px;
  }
`;
const QuestionContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  // min-width:100vw;
  color: white;
  text-align: start;
  // max-width: 450px;

  border-bottom: 1px solid #444;
  margin: 0px 0px 20px;
  margin-left: 100px;
  transition: all 0.5s ease;
`;
const Rotate = (x) => keyframes`
${
  x === 1
    ? css`
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(135deg);
        }
      `
    : css`
        from {
          transform: rotate(135deg);
        }
        to {
          transform: rotate(0deg);
        }
      `
}
}`;
const QuestionDiv = styled(motion.div).attrs((props) => props)`
  overflow-wrap: break-word;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  min-height: 20px;
  // width:45vw;

  max-width: 450px;
  position: relative;
  &:hover {
    transform: scale(1.01);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  text-align: justify;
  text-justify: inter-word;
  transition: all 0.5s ease-in-out;
  margin-right: 50px;
  border: none;
  @media (max-width: 801px) {
    // 400px;
  }
`;
const Question = styled(motion.h2)`
  padding: 10px 0px 25px;
  margin-bottom: 10px;
  width: 70vw;
  max-width: 400px;
  font-size: 1.5rem;
  text-shadow: 0px 0px 1px #000;
  font-family: "Poppins", sans-serif;
  color: ${({ mouse }) => (mouse === 1 && "#4daca4") || "#fff"};
`;
const Icon = styled(motion.img)`
  height: 35px;
  margin: -15px 3px 0px 3px;
  animation: ${(props) => Rotate(props.direction)} 0.5s ease-in-out;

  transform: rotate(
    ${({ direction }) => (direction === 1 && "135deg") || "0deg"}
  );
`;
const FadeIn = (x, mouse) => keyframes`

${
  mouse === 1
    ? css`
        from {
          opacity: 0;
          height: 0;
        }
        to {
          opacity: 1;
          height: ${x}px;
        }
      `
    : css`
        from {
          opacity: 1;
          height: ${x}px;
        }
        to {
          opacity: 0;
          height: 0px;
        }
      `
}
`;
const Answer = styled(motion.h2)`
  font-size: 1.125rem;
  color: #bbb;
  overflow-wrap: break-word;
  display: none;
  font-family: "Poppins", sans-serif;
  display: ${({ mouse }) => (mouse === 1 && "block") || "none"};
  animation: ${(props) => FadeIn(props.x, props.mouse)} 0.2s ease-in-out;
  margin-bottom: 20px;
  width: 450px;
  margin-left: 100px;
`;
const BottomContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BottomHeading = styled(motion.h1)`
  font-size: 1.875rem;
  color: #fff;
  margin-bottom: 20px;
`;
const Input = styled(motion.textarea)`
  max-width: 600px;
  // width: 600px;
  min-width: 400px;
  height: 100px;
  border: none;
  outline: none;
  border-radius: 10px;
  background: #fff;
  padding: 5px;
  &: focus {
    padding-left: 5px;
    outline: none;
  }
  @media (max-width: 550px) {
    max-width: 80vw;
    width: 80vw;
    min-width: 50px;
  }
`;
const SubmitButton = styled(motion.button)`
  width: 100px;
  height: 40px;
  border: none;
  margin: 20px 0px 10px 0px;
  background: #fff;
  border-radius: 50px;
  &:hover {
    background: #00897d;
    transform: scale(1.04);
  }
`;
const Faq = () => {
  const [mouse1, setMouse1] = useState(0);
  const [mouse2, setMouse2] = useState(0);
  const [mouse3, setMouse3] = useState(0);
  const [mouse4, setMouse4] = useState(0);
  const [mouse5, setMouse5] = useState(0);
  const [mouse6, setMouse6] = useState(0);
  const [mouse7, setMouse7] = useState(0);
  const [mouse8, setMouse8] = useState(0);

  function handleMouseEnter1() {
    if (mouse1) {
      setMouse1(0);
    } else {
      setMouse1(1);
    }
    setMouse2(0);
    setMouse3(0);
    setMouse4(0);
    setMouse5(0);
    setMouse6(0);
    setMouse7(0);
    setMouse8(0);
  }
  function handleMouseEnter2() {
    setMouse1(0);
    if (mouse2) {
      setMouse2(0);
    } else {
      setMouse2(1);
    }
    setMouse3(0);
    setMouse4(0);
    setMouse5(0);
    setMouse6(0);
    setMouse7(0);
    setMouse8(0);
  }
  function handleMouseEnter3() {
    setMouse1(0);
    setMouse2(0);
    if (mouse3) {
      setMouse3(0);
    } else {
      setMouse3(1);
    }
    setMouse4(0);
    setMouse5(0);
    setMouse6(0);
    setMouse7(0);
    setMouse8(0);
  }
  function handleMouseEnter4() {
    setMouse1(0);
    setMouse2(0);
    setMouse3(0);
    if (mouse4) {
      setMouse4(0);
    } else {
      setMouse4(1);
    }
    setMouse5(0);
    setMouse6(0);
    setMouse7(0);
    setMouse8(0);
  }
  function handleMouseEnter5() {
    setMouse1(0);
    setMouse2(0);
    setMouse3(0);
    setMouse4(0);
    if (mouse5) {
      setMouse5(0);
    } else {
      setMouse5(1);
    }

    setMouse6(0);
    setMouse7(0);
    setMouse8(0);
  }
  function handleMouseEnter6() {
    setMouse1(0);
    setMouse2(0);
    setMouse3(0);
    setMouse4(0);
    setMouse5(0);
    if (mouse6) {
      setMouse6(0);
    } else {
      setMouse6(1);
    }
    setMouse7(0);
    setMouse8(0);
  }
  function handleMouseEnter7() {
    setMouse1(0);
    setMouse2(0);
    setMouse3(0);
    setMouse4(0);
    setMouse5(0);
    setMouse6(0);
    if (mouse7) {
      setMouse7(0);
    } else {
      setMouse7(1);
    }
    setMouse8(0);
  }
  function handleMouseEnter8() {
    setMouse1(0);
    setMouse2(0);
    setMouse3(0);
    setMouse4(0);
    setMouse5(0);
    setMouse6(0);
    setMouse7(0);
    if (mouse8) {
      setMouse8(0);
    } else {
      setMouse8(1);
    }
  }

  return (
    <Div id="faq">
      <BodyContainer>
        <HeadContainer>
          <Heading> FAQ</Heading>
        </HeadContainer>
        <TopContainer>
          <HalfDivl>
            <QuestionsContainer>
              <QuestionDiv variants={CardFramer} onClick={handleMouseEnter1}>
                <QuestionContainer>
                  <Question mouse={mouse1}>What is Bluxe?</Question>
                  <Icon src={iconPlus} direction={mouse1} />
                </QuestionContainer>
                <Answer x="67" mouse={mouse1}>
                  Bluxe is digital fashion studio. Providing wearables to the 40
                  billion dollars metaverse industry. We will be inclusive and
                  exclusive part of the future of fashion.
                </Answer>
              </QuestionDiv>
              <QuestionDiv
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={CardFramer}
                onClick={handleMouseEnter2}
              >
                <QuestionContainer>
                  <Question mouse={mouse2}>
                    What is Bluxe NFT collection?
                  </Question>
                  <Icon src={iconPlus} direction={mouse2} />
                </QuestionContainer>
                <Answer x="67" mouse={mouse2}>
                  Bluxe studio is launching its first sneakers collections of
                  1500 shoes to be worn by avatars in metaverse. Each NFT
                  doubles as Bluxe super membership club which would offer
                  various events, exclusive merchandiseand raffles.
                </Answer>
              </QuestionDiv>
              <QuestionDiv
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={CardFramer}
                onClick={handleMouseEnter3}
              >
                <QuestionContainer>
                  <Question mouse={mouse3}>What is price of shoes?</Question>
                  <Icon src={iconPlus} direction={mouse3} />{" "}
                </QuestionContainer>
                <Answer x="45" mouse={mouse3}>
                  The sale would take place in two phases. The price in phase 1
                  of sale will be 0.1 eth and price of phase 2 will be 0.15 eth.
                </Answer>
              </QuestionDiv>
              <QuestionDiv
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={CardFramer}
                onClick={handleMouseEnter4}
              >
                <QuestionContainer>
                  <Question mouse={mouse4}>
                    {" "}
                    How to get whitelisted for Bluxe NFT?{" "}
                  </Question>
                  <Icon src={iconPlus} direction={mouse4} />
                </QuestionContainer>
                <Answer x="80" mouse={mouse4}>
                  To get whitelisted connect your wallet on Bluxe studio
                  webpage. Your wallet should have a balance of more than 0.11
                  eth and submit your email id. Whitelist willl have 2000 spots
                  in total. First 500 spots will be based entry because early
                  bird must get rewarded.
                </Answer>
              </QuestionDiv>
              <QuestionDiv
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={CardFramer}
                onClick={handleMouseEnter5}
              >
                <QuestionContainer>
                  <Question mouse={mouse5}>What is Bluxe?</Question>
                  <Icon src={iconPlus} direction={mouse5} />
                </QuestionContainer>
                <Answer x="67" mouse={mouse5}>
                  Bluxe is digital fashion studio. Providing wearables to the 40
                  billion dollars metaverse industry. We will be inclusive and
                  exclusive part of the future of fashion.
                </Answer>
              </QuestionDiv>
              <QuestionDiv
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={CardFramer}
                onClick={handleMouseEnter6}
              >
                <QuestionContainer>
                  <Question mouse={mouse6}>
                    What is Bluxe NFT collection ?
                  </Question>
                  <Icon src={iconPlus} direction={mouse6} />
                </QuestionContainer>
                <Answer x="67" mouse={mouse6}>
                  Bluxe studio is launching its first sneakers collections of
                  1500 shoes to be worn by avatars in metaverse. Each NFT
                  doubles as Bluxe super membership club which would offer
                  various events, exclusive merchandiseand raffles.
                </Answer>
              </QuestionDiv>
              <QuestionDiv
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={CardFramer}
                onClick={handleMouseEnter7}
              >
                <QuestionContainer>
                  <Question mouse={mouse7}>What is price of shoes ?</Question>
                  <Icon src={iconPlus} direction={mouse7} />{" "}
                </QuestionContainer>
                <Answer x="45" mouse={mouse7}>
                  The sale would take place in two phases. The price in phase 1
                  of sale will be 0.1 eth and price of phase 2 will be 0.15 eth.
                </Answer>
              </QuestionDiv>
              <QuestionDiv
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={CardFramer}
                onClick={handleMouseEnter8}
              >
                <QuestionContainer>
                  <Question mouse={mouse8}>
                    {" "}
                    How to get whitelisted for Bluxe NFT ?
                  </Question>
                  <Icon src={iconPlus} direction={mouse8} />
                </QuestionContainer>
                <Answer x="80" mouse={mouse8}>
                  To get whitelisted connect your wallet on Bluxe studio
                  webpage. Your wallet should have a balance of more than 0.11
                  eth and submit your email id. Whitelist will have 2000 spots
                  in total. First 500 spots will be based entry because early
                  bird must get rewarded.
                </Answer>
              </QuestionDiv>
            </QuestionsContainer>
          </HalfDivl>
          {/* <HalfDivr><QuestionsContainer> */}
          {/* <QuestionDiv onClick={handleMouseEnter5}>
            <QuestionContainer>
              <Question mouse={mouse5}>What is Bluxe?</Question>
              <Icon src={iconPlus} direction={mouse5} />
            </QuestionContainer>
            <Answer x="67" mouse={mouse5}>
              Bluxe is digital fashion studio. Providing wearables to the 40
              billion dollars metaverse industry. We will be inclusive and
              exclusive part of the future of fashion.
            </Answer>
          </QuestionDiv>
          <QuestionDiv onClick={handleMouseEnter6}>
            <QuestionContainer>
              <Question mouse={mouse6}>What is Bluxe NFT collection ?</Question>
              <Icon src={iconPlus} direction={mouse6} />
            </QuestionContainer>
            <Answer x="67" mouse={mouse6}>
              Bluxe studio is launching its first sneakers collections of 1500
              shoes to be worn by avatars in metaverse. Each NFT doubles as
              Bluxe super membership club which would offer various events,
              exclusive merchandiseand raffles.
            </Answer>
          </QuestionDiv>
          <QuestionDiv onClick={handleMouseEnter7}>
            <QuestionContainer>
              <Question mouse={mouse7}>What is price of shoes ?</Question>
              <Icon src={iconPlus} direction={mouse7} />{" "}
            </QuestionContainer>
            <Answer x="45" mouse={mouse7}>
              The sale would take place in two phases. The price in phase 1 of
              sale will be 0.1 eth and price of phase 2 will be 0.15 eth.
            </Answer>
          </QuestionDiv>
          <QuestionDiv onClick={handleMouseEnter8}>
            <QuestionContainer>
              <Question mouse={mouse8}>
                {" "}
                How to get whitelisted for Bluxe NFT ?
              </Question>
              <Icon src={iconPlus} direction={mouse8} />
            </QuestionContainer>
            <Answer x="80" mouse={mouse8}>
              To get whitelisted connect your wallet on Bluxe studio webpage.
              Your wallet should have a balance of more than 0.11 eth and submit
              your email id. Whitelist will have 2000 spots in total. First 500
              spots will be based entry because early bird must get rewarded.
            </Answer>
          </QuestionDiv> */}
          {/* </QuestionsContainer></HalfDivr> */}
        </TopContainer>
        {/* <BottomContainer>
          <BottomHeading >
            Ask A Question
          </BottomHeading>
          <Input  />
          <SubmitButton>Submit</SubmitButton>
        </BottomContainer> */}
      </BodyContainer>
    </Div>
  );
};

export default Faq;
