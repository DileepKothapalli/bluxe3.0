import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  white-space: nowrap;
  color: white;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  background: linear-gradient(
    90deg,
    rgba(0, 173, 242, 1) 0%,
    rgba(7, 71, 84, 1) 100%
  );
  box-shadow: inset -2px 0 12px #96e1ff, inset -14px 0 6px #0b6f96,
    inset 4px 0 6px #0c5584;

  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    border: 0.2px solid #00adf2;
  }
`;

export const NeuBtn = styled.div`
  height: 50px;
  width: 140px;

  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  -webkit-appearance: none;
  box-shadow: -10px -10px 15px rgba(255, 255, 255, 0.5),
    10px 10px 15px rgba(70, 70, 70, 0.12);
  position: absolute;
  transform: translate (-50%, -50%);
  top: 110%;
  //   left: 50%;
  border-radius: 25px;
  border: 8px solid #ececec;
  outline: none;
  cursor: pointer;
  &:hover {
    box-shadow: -10px -10px 15px rgba(255, 255, 255, 0.5),
      10px 10px 15px rgba(70, 70, 70, 0.12),
      inset -10px -10px 15px rgba(255, 255, 255, 0.5),
      inset 10px 10px 15px rgba(70, 70, 70, 0.12);
  }
  &:after {
    color: #7a7a7a;
  }
  &:hover:after {
    color: #15e38a;
  }
`;

export const NeuBtnSwitch = styled.input.attrs((props) => ({
  type: "checkbox",
}))`
  height: 50px;
  width: 140px;

  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  -webkit-appearance: none;
  box-shadow: -10px -10px 15px rgba(255, 255, 255, 0.5),
    10px 10px 15px rgba(70, 70, 70, 0.12);
  position: absolute;
  transform: translate (-50%, -50%);
  top: 90%;
  //   left: 50%;
  border-radius: 25px;
  border: 8px solid #ececec;
  outline: none;
  cursor: pointer;
  &:checked {
    box-shadow: -10px -10px 15px rgba(255, 255, 255, 0.5),
      10px 10px 15px rgba(70, 70, 70, 0.12),
      inset -10px -10px 15px rgba(255, 255, 255, 0.5),
      inset 10px 10px 15px rgba(70, 70, 70, 0.12);
  }
  &:after {
    color: #7a7a7a;
  }
  &:checked:after {
    color: #15e38a;
  }
`;
