'use client'
import { useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useDrag } from 'react-use-gesture';

export const Modal = ({ isOpen, onClose, children }: any) => {
    const y = useMotionValue(0);
    const opacity = useTransform(y, [0, 200], [1, 0]);
  
    const bind = useDrag(({ down, movement: [, my] }) => {
      if (my < 0) return; // Add this line
      y.set(my);
      if (!down && my > 100) onClose();
    });



  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={onClose}
          className="fixed inset-0 flex items-end justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            {...bind()}
            onClick={(e) => e.stopPropagation()}
            className="w-full h-2/3 bg-white rounded-t-lg"
            style={{ y, opacity }}
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '100%' }}
            transition={{ type: 'tween' }} // Change this line
          >
            <div className="w-16 h-1 bg-gray-300 rounded-full mx-auto my-2" />
            {/* Modal content goes here */}
            {children}
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
