import React from "react";
import { motion } from "framer-motion";

const TextReveal = ({ text, textSize }) => {
  const lines = text?.split(" ");

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 },
        },
      }}
      className={`${textSize || "text-[42px] font-semibold"} text-white w-full`}
    >
      {lines.map((word, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.2 }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextReveal;
