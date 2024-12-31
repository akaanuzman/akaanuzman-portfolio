"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
    text: string;
    className?: string;
}

export default function TypewriterText({ text, className = '' }: TypewriterTextProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100);

            return () => clearTimeout(timeout);
        } else {
            setIsTypingComplete(true);
        }
    }, [currentIndex, text]);

    const letters = displayedText.split('');

    return (
        <div className={`${className} inline-block`}>
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                    }}
                    style={{ display: 'inline-block', whiteSpace: 'pre' }}
                    className="gradient-text"
                >
                    {letter}
                </motion.span>
            ))}
            {isTypingComplete && (
                <motion.span
                    className="inline-block ml-1"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0],
                        y: [0, -10, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                >
                    <span className="gradient-text">.</span>
                </motion.span>
            )}
        </div>
    );
} 