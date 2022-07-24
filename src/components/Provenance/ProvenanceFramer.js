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
      duration: 1.3,
    },
  },
};

export const AboutAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: { y: 0, opacity: 1 },
};

export const LeftCardFramer = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.7,
      delay: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
  },
};

export const RightCardFramer = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.7,
    },
  },
  exit: {
    opacity: 1,
    y: 20,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.8,
    },
  },
};
