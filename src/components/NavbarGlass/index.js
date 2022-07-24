import { Link } from "react-router-dom";
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavContainer,
  NavMenu,
  NavItem,
  Logo,
  MobileIcon,
  NavLinks,
  NavLinksh,
  LogoDiv,
  ButtonDIv,
  NeuButton,
} from "../NavbarGlass/NavbarGlassElements";

import logo from "../../images/BLUXElogo.png";

const NavbarGlass = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [displayAccount, setDisplayAccount] = useState(null);

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
    let ans = newAccount.toString();
    let final = ans.substr(1, 7) + "...";
    setDisplayAccount(final);
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
    <Nav>
      <NavContainer>
        <LogoDiv>
          <NavLinksh
            to="home"
            duration={500}
            spy={true}
            exact="true"
            offset={-60}
          >
            <Logo src={logo}></Logo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
          </NavLinksh>
        </LogoDiv>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="home"
              duration={500}
              spy={true}
              exact="true"
              offset={0}
            >
              HOME
            </NavLinks>{" "}
          </NavItem>
          <NavItem>
            <NavLinks
              to="about"
              duration={500}
              spy={true}
              exact="true"
              offset={0}
            >
              ABOUT US
            </NavLinks>{" "}
          </NavItem>
          <NavItem>
            <NavLinks
              to="artwork"
              duration={500}
              spy={true}
              exact="true"
              offset={10}
            >
              ARTWORK
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="roadmap"
              duration={500}
              spy={true}
              exact="true"
              offset={10}
            >
              ROADMAP
            </NavLinks>{" "}
          </NavItem>

          <NavItem>
            <NavLinks
              to="team"
              duration={500}
              spy={true}
              exact="true"
              offset={20}
            >
              TEAM
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="faq"
              duration={500}
              spy={true}
              exact="true"
              offset={20}
            >
              FAQ
            </NavLinks>
          </NavItem>
          <NavItem></NavItem>
        </NavMenu>
        <ButtonDIv>
          {!defaultAccount && (
            <NeuButton onClick={connectWalletHandler}>Connect Wallet</NeuButton>
          )}
          {defaultAccount && <NeuButton on="on">Connected</NeuButton>}
        </ButtonDIv>
      </NavContainer>
    </Nav>
  );
};

export default NavbarGlass;
/* Group 13 */
