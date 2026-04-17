import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MorphingSquare } from '@/components/ui/morphing-square';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const LoadingScreen = ({ onLoadComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const minimumLoadTime = 2500;
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minimumLoadTime - elapsed);

      setTimeout(() => {
        setIsVisible(false);
        setTimeout(onLoadComplete, 600); // Wait for exit animation
      }, remaining);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback timeout
      const fallback = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onLoadComplete, 600);
      }, 5000);

      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallback);
      };
    }
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal"
        >
          {/* Grid background */}
          <div className="absolute inset-0 grid-bg opacity-10" />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            <h1 className="font-anton text-5xl md:text-7xl text-white tracking-tight">
              Gangadhara K S.<span className="text-golden"> Siddhanoor</span>
            </h1>

            <MorphingSquare
              className="w-8 h-8 bg-golden"
              message=""
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="font-satoshi text-sm text-sage tracking-[0.3em] uppercase"
            >
              Loading Experience
            </motion.p>
          </motion.div>

          {/* Bottom decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 2, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-golden origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
