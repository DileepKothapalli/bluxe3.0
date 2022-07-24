export const ShoeFramer = {
    hidden:{
        opacity:0,
        scale:0.1,
    },
    visible: {
        opacity:1,
        y: 0,
        x:0,
        scale:1,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 1.8,
          delay:0.2
        }
      }
}