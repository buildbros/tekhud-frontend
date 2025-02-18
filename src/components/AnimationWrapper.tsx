import React from "react";
import { motion } from "framer-motion";
import { AnimationProps } from "../types/types";

const AnimationWrapper = ({
  children,
  initial,
  animate,
  transition,
}: AnimationProps) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}>
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
