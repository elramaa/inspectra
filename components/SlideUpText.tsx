import { motion } from "motion/react";

const parentVariants = {
  show: {
    staggerChildren: 0.3,
    transition: {
      duration: 2,
    },
  },
};

const charVariants = {
  init: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
};

export default function SlideUpText({ text }: { text: string }) {
  return (
    <motion.span
      className=""
      variants={parentVariants}
      initial="init"
      whileInView="show"
      viewport={{ once: true }}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={charVariants}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
