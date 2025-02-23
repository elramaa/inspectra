import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "motion/react";

const variants = {
  popup: {
    init: {
      scaleY: 0,
      translateX: "-50%",
      transformOrigin: "top",
    },
    show: (isOpen: boolean) => ({
      scaleY: isOpen ? 1 : 0,
      transition: {
        duration: 0.7,
      },
    }),
  },
  button: {
    init: {
      rotateX: 0,
    },
    show: (isOpen: boolean) => ({
      rotateX: isOpen ? 180 : 0,
      transition: {
        duration: 2,
      },
    }),
  },
};

export default function Dropdown({
  data,
  className,
  selectedID,
  setSelectedID,
}: {
  data: { title: string }[];
  className?: string;
  selectedID: number;
  setSelectedID: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedID, setSelectedID] = useState(-1);
  function handleSelect(index: number) {
    setSelectedID(index);
    setIsOpen(false);
  }
  return (
    <div className={`max-w-[90vw] relative ${className}`}>
      <button
        className="flex items-center text-white gap-2 cursor-pointer text-shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedID !== -1 ? (
          <span>{data[selectedID].title}</span>
        ) : (
          <span>Select</span>
        )}
        <FaChevronDown
          className={`${isOpen && "rotate-180"}`}
          style={{
            filter: "drop-shadow(0px 1px 3px black)",
          }}
        />
      </button>
      <motion.div
        className={`max-w-[90vw] max-h-40 bg-white rounded-2xl p-4 left-1/2 -translate-x-1/2 w-max absolute z-10 overflow-y-auto shadow-black/25 shadow-xl`}
        variants={variants.popup}
        initial="init"
        animate="show"
        custom={isOpen}
      >
        {data.map(({ title }, index) => (
          <button
            key={index}
            className={`w-full ${
              selectedID === index ? "bg-neutral-400" : "hover:bg-neutral-300"
            }`}
            onClick={() => handleSelect(index)}
          >
            {`${index + 1}. ${title}`}
          </button>
        ))}
      </motion.div>
    </div>
  );
}
