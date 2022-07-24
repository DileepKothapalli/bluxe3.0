export const containerFramer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const CardFramer = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
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
