import * as React from "react";
// import DrawSVGPlugin from "gsap-trial/dist/DrawSVGPlugin";

const Vector = ({ progress = 0, ...props }) => {
  
  return (
  
    <svg
      viewBox="0 0 145.8 2047"
      fill={props.fill || "none"}
      
      {...props}
    >
      <path class="cls-1"strokeWidth = "6px" d="M77.9,15.46V226.1l-.05-3.24V324.07L42.5,360v.66l35.35,35.91.45.91v252.1l35.35,35.91v.65L78.3,722l.22,1V974.18l-.13.92L43,1011v.65l35.35,35.91.45.83V1303l35.35,35.91v.65l-35.35,35.91v272.87l-35.36,35.91.13-.37v1.24L79,1721l-.13-.29v304.92" stroke="#36e9e9"/>

    </svg>
    
   
    
   

  );
};

export default Vector;
