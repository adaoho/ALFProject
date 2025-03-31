import React from "react";
import { motion } from "framer-motion";

const SlideUp = ({
  children,
  initialY = 10,
  duration = 0.3,
  className,
  ref,
}) => {
  return (
    <motion.div
      initial={{ y: initialY, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: initialY, opacity: 0 }}
      transition={{ duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
