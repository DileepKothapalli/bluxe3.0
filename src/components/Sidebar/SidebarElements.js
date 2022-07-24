import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
export const Icon = styled.div`
  position: absolute;
  top: 2.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #00adf2;
    transition: 0.2s ease-in-out;
  }
`;

export const Sidebtnwrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #00adf2;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
export const Button = styled.button`
  position: relative;
  display: flex;
  height: 50px;
  width: 150px;
  color: #2846ed;
  color: white;
  align-items: center;
  text-align: center;
  justify-content: center;

  border-radius: 100px;
  background: linear-gradient(to right, #4b4b4b, #111111);
  box-shadow: 7px 0px 7px #171717 inset;
  box-shadow: -7px 0px -7px #494949 inset;

  border: none;
  z-index: 10;

  & > li {
    cursor: pointer;
    list-style-type: none;
    outline: none;
    text-decoration: none;
    color: white;
    padding-left: 15px;
    padding-right: 20px;
    font-size: 1.25rem;
  }
`;
export const ButtonDIv = styled.div`
  display: flex;
  @media screen and (max-width: 1025px) {
    display: none;
  }
`;
export const NavLinksBtn = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  margin: 10px;
  height: 50px;
  width: 150px;

  &.active {
    border-bottom: 3px solid white;
  }
  color: #004c7a;
  background-color: #ddd;
  border-radius: 50px;
`;
