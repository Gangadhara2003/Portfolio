import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface ScrollAnimationProps {
    children: ReactNode;
    direction?: Direction;
    delay?: number;
    className?: string;
    threshold?: number;
    duration?: number;
    blur?: boolean;
}

const ScrollAnimation = ({
    children,
    direction = 'up',
    delay = 0,
    className = '',
    threshold = 0.1,
    duration = 0.5,
    blur = false
}: ScrollAnimationProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: threshold });

    const getVariants = () => {
        const variants = {
            hidden: {
                opacity: 0,
                y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
                x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
                scale: direction === 'none' ? 0.95 : 1,
                filter: blur ? 'blur(10px)' : 'none'
            },
            visible: {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                filter: 'blur(0px)',
                transition: {
                    duration: duration,
                    delay: delay,
                    ease: [0.25, 0.46, 0.45, 0.94] // easeOutQuad
                }
            }
        };

        return variants;
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={getVariants()}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimation;
