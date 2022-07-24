export const containerFramer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.02,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const CardFramer = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "easeinout",
    },
  },
  exit: {
    opacity: 0,
    y: -40,
  },
};

export const HeadingFramer = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.3,
    },
  },
};
