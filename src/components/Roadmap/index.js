import React, {useRef, useLayoutEffect} from 'react'
import DrawSvg from '../DrawSvg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import{ RoadmapHeading, HeadingContainer, Container, Section, SvgContainer, Items,Item, ItemContainer, Box, Title, SubTitle } from './RoadmapElement'


const RoadmapItem = ({title, subtext, subtext2, addToRef}) => {
  return(
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <Title>
            {title}
          </Title>
          <SubTitle> {subtext}</SubTitle>
          <SubTitle>{subtext2}</SubTitle>
        </Box>
      </ItemContainer>
    </Item>
  )
}


const Roadmap = () => {

const revealRefs = useRef([]);
revealRefs.current = [];
gsap.registerPlugin(ScrollTrigger);

const addToRefs = (el) => {
  
  if (el && !revealRefs.current.includes(el)) {
    revealRefs.current.push(el);
  }
}
useLayoutEffect(() => {
  let t1 = gsap.timeline();
revealRefs.current.forEach( (el, index) => {
  t1.fromTo(
    el.childNodes[0],
    {
      y: '0'
    },{
      y:'-30%',
      scrollTrigger:{
        id: `section-${index + 1}`,
        trigger: el,
        start: 'top center +=200px',
        end: 'bottom center',
        scrub: true,
        // markers: true,
      }
    }
  )
})
  return () => {
  
  };
}, [])
  return (
    <Section id="roadmap">
      <HeadingContainer>
          <RoadmapHeading>
            Roadmap
          </RoadmapHeading>
        </HeadingContainer>
      <Container>
        <SvgContainer>
          <DrawSvg/>
        </SvgContainer>
        <Items>
          {/* empty item */}
          <RoadmapItem>&nbsp;</RoadmapItem>
          <RoadmapItem addToRef={addToRefs} title ="Welcome to Bluxe Studio" subtext ="We bring to you the best fashion designers to bring luxury fashion to the metaverse. Just like IRL change outfit for your avatar and profile picture based nft with our fashion collection." subtext2 = "Bluxe collections are not just NFTs but a ticket to be buisness partner in Bluxe business. Learn more about the same on our discord channel or Bluxepaper. To reward your support to our community, we are rewarding free NFTs, whitelist spots and mystery " />
          <RoadmapItem addToRef={addToRefs} title ="Giveaways and Rewards" subtext ="Our partners at Bluxe and our community means everything to us. To acknowledge your love and efforts we will be rewarding free NFTs, whitelist spots and mystery codes to selected few. "
           subtext2= " Being part of whitelist will enable you to get access to exclusive mint price and assured NFT before anyone else. It will also increase your chance to win free mint and community access. There are only 250 spots available." />
          <RoadmapItem addToRef={addToRefs} title ="Grand Mint" subtext ="Our Mint would be grand and special.It will first open for the whitelist holders at a fixed price of 0.08 eth. Thereafter the sale would open to public at 0.085 eth with the price increasing every two hours, till the fair value of the NFTs at 0.15 eth. 
          " subtext2="At mint you'll recieve a 4000*4000 jpeg of your sneakers. After the mint the sneakers will be available in secondary market on opensea." />
          <RoadmapItem addToRef={addToRefs} title ="Opening of Bluxe Store" subtext ="At completion of the mint the Bluxe Store will be launched. Limited access to Bluxe Store will be available for everyone, while exclusive access will only be available for Bluxe NFT holders with host of activities and buisness offerings.
           " subtext2="Holders can get various resources for their shoes, order merchandise, redistribute copies and can submit ideas at the store. " />
          <RoadmapItem addToRef={addToRefs} title ="Long Term Plans" subtext ="Bluxe Studio intends to disrupt the digital fashion across platforms and establish itself as a business brand rather than a NFT collection.
          "subtext2="We encourage our community members to hold our NFTs to create long term value, therefore we have devised plans to provide value to our partners without them having to sell off their NFTs. 
          Expect collaborations with various established character based projects. " />
        
        </Items>
      </Container>
    </Section>
  )
}
export default Roadmap

// useLayoutEffect(() => {
//   let t1 = gsap.timeline();
// revealRefs.current.forEach( (el, index) => {
//   t1.fromTo(
//     el.childNodes[0],
//     {
//       y: '0'
//     },{
//       y:'-30%',
//       scrollTrigger:{
//         id: `section-${index + 1}`,
//         trigger:el,
//         start: 'top center +=200px',
//         end: 'bottom center',
//         scrub: true,
//         // markers: true,
//       }
//     }
//   )
// })
//   return () => {
  
//   };
// }, [])

