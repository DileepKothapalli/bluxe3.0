import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import { ethers } from "ethers";
import { motion } from "framer-motion";

import shoevideo1 from "../../images/shoewb.webm";
import Instagram from "../../Icons/Instagram.js";
import Twitter from "../../Icons/Twitter.js";
import Discord from "../../Icons/Discord.js";
import bg10 from "../../images/nightskymain4.jpg";
import { HeadingFramer } from "../Provenance/ProvenanceFramer";
import { ShoeFramer } from "./MainpageFramer";

const Div = styled(motion.div)`
  background-color: rgba(0, 0, 0, 1);
  background: url(${bg10});
  display: flex;
  min-height: 100vh;
  height: max-content;
  background-size: cover;
  background-position: center bottom;
  background-attachment: fixed;
  background-repeat: no-repeat;
  font-family: "Playfair Display", serif;
  font-weight: bold;
  align-items: center;
  // justify-content: center;
  padding-top: 15vh;
`;
const MainContainer = styled(motion.div)`
  display: flex;
  position: relative;
  max-width: 100vw;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: max-content;
`;
const IconsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  //  background-color: blue;
  align-items: center;
  justify-content: center;
  width: fit-content;
  // height: 40px;
  position: fixed;
  padding: 5px 5px;
  margin-top: 0px;
  margin-left: 25px;
  z-index: 10;
`;
const Icons = styled(motion.a)`
  position: relative;
  padding: 5px 5px;
  top: 12%;
`;
const Video = styled(motion.video)`
  height: 350px;
  width: 350px;
  max-width: 100vw;
  margin: 0 auto;
  position: absolute;
  bottom: 0px;
  // background: red;
`;
const TopContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;
const HalfDivl = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  // min-width: 550px;
  max-height: 400px;
  // background: blue;
`;

const Home = () => {
  // const [scrollPosition, setScrollPosition] = useState(0);

  const [email_id, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [defaultAccount, setDefaultAccount] = useState("");
  const [userBalance, setUserBalance] = useState("");
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [check, setcheck] = useState(null);

  const addEmail = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
    setErrorMessage(null);
    connectWalletHandler();

    if (email_id === "") {
      return;
    }

    if (!defaultAccount) {
      setErrorMessage("Connect Wallet");
      console.log("This is it");
      return;
    }
    if (userBalance < 0) {
      setErrorMessage("Recharge your Account");
      console.log("This is ");
      return;
    } else {
      setcheck(!check);
    }
    Axios.post("http://localhost:8080/insert", {
      email_id: email_id,
      account: defaultAccount,
      balance: userBalance,
    });
  };
  const checkHandler = () => {
    setcheck(!check);
  };
  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangeHandler(result[0]);
          setConnButtonText("Connected");
        });
    } else {
      setErrorMessage("Install Metamask");
    }
  };
  const accountChangeHandler = (newAccount) => {
    setDefaultAccount(newAccount);

    getUserBalance(newAccount.toString());
  };
  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };
  const chainChangedHandler = () => {
    window.location.reload();
  };
  window.ethereum.on("accountChanged", accountChangeHandler);
  window.ethereum.on("chainChanged", chainChangedHandler);

  return (
    <Div id="home">
      <IconsContainer>
        <Icons href="#">
          <Instagram />
        </Icons>{" "}
        <Icons href="#">
          <Discord />
        </Icons>{" "}
        <Icons href="#">
          <Twitter />
        </Icons>
      </IconsContainer>
      <MainContainer>
        <TopContainer>
          <HalfDivl
            initial="hidden"
            whileInView="visible"
            variants={ShoeFramer}
            viewport={{ once: false, amount: 0.8 }}
          >
            <Video id="hero-lightpass" loop autoPlay muted>
              <source src={shoevideo1} type="video/mp4" />
              Your browser does not support the video tag.
            </Video>
          </HalfDivl>
        </TopContainer>
      </MainContainer>
    </Div>
  );
};

export default Home;
