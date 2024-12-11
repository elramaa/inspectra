import { sinopsisCerpen } from "../constant";
import { motion, useMotionValue } from "motion/react";

const DRAG_BUFFER = 50;

export default function CardSlider({ className, bookIndex, setBookIndex }) {
  const dragX = useMotionValue(0);

  function handleDragStart() {}

  function handleDragEnd() {
    const x = dragX.get();
    if (x <= DRAG_BUFFER && bookIndex < sinopsisCerpen.length - 1) {
      setBookIndex((i) => i + 1);
    } else if (x >= DRAG_BUFFER && bookIndex > 0) {
      setBookIndex((i) => i - 1);
    }
  }

  return (
    <div className="relative h-[80vh] w-[90vw] lg:w-[32.5vw] appearance-none">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          left: `-${100 * bookIndex}%`,
        }}
        transition={{
          type: "spring",
          mass: 3,
          stiffness: 400,
          damping: 50,
        }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        className={`absolute left-0 w-auto grid auto-cols-[90vw] lg:auto-cols-[32.5vw] grid-flow-col ${className}`}
      >
        {sinopsisCerpen.map(({ title, author, content }, index) => (
          <Card
            key={index}
            title={title}
            author={author}
            content={content}
            index={index}
            currentIndex={bookIndex}
          />
        ))}
      </motion.div>
    </div>
  );
}

function Card({ title, author, content, index, currentIndex }) {
  function styledAnimation() {
    if (index < currentIndex) {
      return {
        opacity: 0.5,
        x: -50,
        rotateY: -40,
        rotateZ: -10,
        filter: "blur(4px)",
      };
    } else if (index > currentIndex) {
      return {
        opacity: 0.5,
        x: 50,
        rotateY: 40,
        rotateZ: 10,
        filter: "blur(4px)",
      };
    }
    return {};
  }

  return (
    <motion.div
      style={{
        perspective: 500,
        ...styledAnimation(),
      }}
      className={`w-[90vw] lg:w-[32.5vw] h-full text-center rounded-2xl px-8 py-8 shadow-black shadow-lg bg-gradient-to-br ${
        (index + 1) & 1
          ? "from-blue-200 to-blue-100"
          : "from-green-200 to-green-100"
      }`}
    >
      <h3 className="font-bold text-2xl">{title}</h3>
      <span className="block font-extralight">{author}</span>
      <p className="max-sm:text-sm text-justify pt-8">{content}</p>
    </motion.div>
  );
}
