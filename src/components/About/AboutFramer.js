import { show } from "framer-motion";
import { Variants } from "framer-motion";
export const AboutAnimation = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: { y: 0, opacity: 1 },
};
export const StaggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};
export const FadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      bounce: 0.5,
      duration: 1,
      ease: "easeInOut",
    },
  },
};
export const FadeUpCard = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      bounce: 0.5,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const VideoAnimate = {
  hidden: {
    x: 30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.5,
      bounce: 0.5,
      ease: "easeInOut",
    },
  },
};
