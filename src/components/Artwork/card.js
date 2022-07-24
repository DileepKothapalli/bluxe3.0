import React from 'react'
import styled from 'styled-components'

const Imgbx = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    transition: 0.5s ease-in-out;
    
`
const Img = styled.img`
    max-width: 120%;
    margin: 0 0 10px;
    // position: absolute;
    top: -10px;
    transition: 0.5s ease-in-out;
`
const Content = styled.div`
    position: absolute;
    bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 0.5s ease-in-out;
    opacity: 0;
    visibility: hidden;
    text-align: center;
`
const Card = styled.div`
    margin: 20px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    justify-content:space-evenly;
    height: 250px;
    width: 190px;
    backdrop-filter: blur(15px);
    border-radius: 12px;
    border: 1px solid grey;
    &:hover ${Imgbx} {
        transform: translateY(-80px);
    }
    &:hover ${Img}{
        transform: translate(-15px, -20px) rotate(-12deg) scale(1.4);
    }
    &:hover ${Content}{
        opacity: 1;
        visibility: visible;
        transform: translateY(0px);
    }
`
const Size = styled.div`
    display: inline-block;
    justify-content: center;
    align-items: center;
    padding: 05px 5px;
`
const Color = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
`
const H2 = styled.h2`
    color: #fff;
    font-weight: 600;
    font: arial;
    font-size: 22px;
    position: absolute;
    bottom: 20px;
`
const H3 = styled.h3`
    color: #fff;
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;
`
const SSpan = styled.span`
    width: content-fit;
    height: 24px;
    text-align: center;
    line-height: 22px;
    display: inline-block;
    color: #33eded ;
    background: #000;
    border: 0.125px solid grey;
    font-size: 14;
    margin: 2px 3px;
    font-weight: 500;
    transition: 0.5s;
    cursor: pointer;
    padding: 0px 5px;
    // vertical-align: center;

    &hover: {
        background: #9bdc28;
    }
`
const Cspan = styled.span`
    width: 20px;
    height: 20px;
    background: #f00;
    border-radius: 50%;
    margin: 0 5px;
    border: 2px solid #fff;
    box-sizing: border-box;
    cursor: pointer;
`
const A = styled.a`
    position: relative;
    top: 10px;
    display: inline-block;
    padding: 6px 16px;
    background: #fff;
    border-radius: 30px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #111;
    text-decoration: none;
    text-transform: uppercase;
`

const MainCard = ({shoename, shoesrc, attri1, attri2, attri3, bg }) => {
  return (
    <Card background= { bg}>
    <Imgbx>
        <Img src={shoesrc}></Img>
        <H2>{shoename}</H2>
        </Imgbx> 
        <Content>
            <Size>
                {/* <H3>Attributes:</H3> */}
                <SSpan>{attri1}</SSpan>
                <SSpan>{attri2}</SSpan>
                <SSpan>{attri3}</SSpan>    
            </Size>
            {/* <Color>
                <H3></H3>
                <Cspan>0.15 Eth</Cspan>
                {/* <Cspan>8</Cspan>
                <Cspan>9</Cspan>  
            </Color> */}
                <A href='#'> Mint</A>
        </Content>
</Card>  
  )
}

export default MainCard