import { useInView } from "react-intersection-observer";

import { useAnimation } from "framer-motion";

export const useScroll = (thresh = 0.9) => {
  const controls = useAnimation();
  const [element, view] = useInView({
    threshold: thresh,
    rootMargin: "10px 10px 10px 10px",
  });
  if (view) {
    controls.start("visible");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};
