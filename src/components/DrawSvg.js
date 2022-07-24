import React, {useLayoutEffect, useRef} from 'react'
import styled, { keyframes } from 'styled-components'
import Vector from '../Icons/Vector'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


const VectorContainer = styled.div`
position: absolute;
top: 0.5rem;
left: 50%;
transform: translateX(-50%);
width: 100%;
height: 100%;
overflow: hidden;

svg{
    width: 100%;
    height: 98%;
}
`
const Bounce = keyframes`
from { transform: translateX(-50%) scale(0.5); }
to { transform: translateX(-50%) scale(1);}
`

const Ball = styled.div`
position: absolute;
top: 2px;
left: 50%;
transform: translateX(-50%);
width: 1.5rem;
height: 1.5rem;
border-radius: 50%;
background-color: ${props => props.theme.text};
animation: ${Bounce} 0.5s linear infinite alternate;
`

const DrawSvg = () => {
const ref = useRef(null);
const ballRef = useRef(null);

gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  let element = ref.current;
  let svg = document.getElementsByClassName("cls-1")[0];

  const length = svg.getTotalLength();
//   console.log(length);
// Start positioning of svg drawing
  svg.style.strokeDasharray = length;
// Hide svgbefore scrolling start
  svg.style.strokeDashoffset = length;

    let t1 = gsap.timeline({
        scrollTrigger:{
            trigger: element,
            start: "top center",
            end:"bottom bottom",
            onUpdate: (self) => {

                const draw = length * self.progress;
        
                // also reverse the drawing when scroll goes up
                svg.style.strokeDashoffset = length - draw;
            },
            onToggle : self =>{
                if(self.isActive){
                    // console.log("Scrolling is active");
                    ballRef.current.style.display ='none';
                }else{
                    // console.log("Scrolling is active");
                    ballRef.current.style.display = 'inline-block';
                }
            }
        }
    })

//   console.log(length);


  return () => {
    if (t1) t1.kill();
  };
}, [])
  return (
      <>
      <Ball ref={ballRef}/>
    <VectorContainer ref={ref}>
        <Vector />
    </VectorContainer>
    </>
  )
}

export default DrawSvg