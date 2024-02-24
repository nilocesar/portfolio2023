'use client';

import { ReactNode } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { useAbout } from '../../hooks/useAbout';

export default function Template({ children }: { children: ReactNode }) {
  const { originPage, borderAnim } = useAbout();

  return (
    <AnimatePresence mode={'sync'}>
      <motion.div
        className="aboutScreen"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1, opacity: 1 }}
        transition={{ type: 'Spring', delay: originPage === 'home' ? 1 : 3 }}
      >
        <motion.div className={`drawBorder ${borderAnim ? 'activeDrawBorder' : ''}`}>
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
