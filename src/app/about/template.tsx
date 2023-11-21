'use client';

import { ReactNode } from 'react';

import { useAppContext } from 'context';
import { AnimatePresence, motion } from 'framer-motion';

export default function Template({ children }: { children: ReactNode }) {
  const { originPage, setPageCurrent } = useAppContext();
  setPageCurrent('about');

  return (
    <AnimatePresence mode={'sync'}>
      <motion.div
        className="aboutScreen"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1, opacity: 1 }}
        transition={{ type: 'Spring', delay: originPage === 'home' ? 1 : 3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
