import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

const CustomCursor = () => {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-amber-500/20 blur-xl pointer-events-none z-50 mix-blend-screen"
      animate={{ x: x - 16, y: y - 16 }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
    />
  );
};

export default CustomCursor;
