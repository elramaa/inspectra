import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Dropdown({
  data,
  className,
  selectedID,
  setSelectedID,
}) {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedID, setSelectedID] = useState(-1);
  function handleSelect(index) {
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
      <div
        className={`max-w-[90vw] max-h-40 bg-white rounded-2xl p-4 left-1/2 -translate-x-1/2 w-max absolute z-10 overflow-y-auto shadow-black/25 shadow-xl ${
          !isOpen && "hidden"
        }`}
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
      </div>
    </div>
  );
}
