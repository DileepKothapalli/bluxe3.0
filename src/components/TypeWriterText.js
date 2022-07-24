import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
// import Button from './ButtonElements';

const Title = styled.h2`
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
width: 95%;
color: ivory;
align-self: flex-start;
padding-top:  5px ;
padding-left: 20px;
span{
    text-transform : uppercase;
    font-family:'Akaya Telivigala',cursive;
}
.text-1{
    color: #bb77b7;
}
.text-2{
    color: #7898ff;
}
.text-3{
    color: #77d477;
}
`
const SubTitle = styled.h3`
    font-size: 1.2rem ;
    text-transform: capitalize;
    color: rgba(255,255,240, 0.6);
    font-weight: 400;
    margin-bottom: 1rem;
    width: 95%;
    align-self: flex-start;
    padding-top: 10px;
    padding-left: 20px;
`

const TypeWriterText = () => {
  return (
    <><Title>  Much more than a  <Typewriter
        options={{ autoStart: true, loop: true,
 }}
        onInit={(typewriter) => {
            typewriter.typeString('<span class="text-1">JPEG</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-2">NFT</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-3">ART</span>')
            .pauseFor(2000)
            .deleteAll()
            .start()
        }}
        /></Title>
    {/* <SubTitle>
    Let's Kick In The Digital Disruption...
    </SubTitle> */}
    {/* <Button text="Explore" link="#about" />  */}
    </>
  )
}

export default TypeWriterText