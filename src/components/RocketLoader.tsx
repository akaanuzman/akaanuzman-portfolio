import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface RocketLoaderProps {
    onLoadingComplete: () => void;
}

const RocketLoader = ({ onLoadingComplete }: RocketLoaderProps) => {
    const [progress, setProgress] = useState(0);
    const [dots, setDots] = useState<Array<{ x: number; y: number; size: number; angle: number }>>([]);

    useEffect(() => {
        // Generate random dots within radar area
        const generatePoint = () => {
            const angle = Math.random() * 360;
            const distance = Math.random() * 90; // 0-90% of radar radius
            const size = 20 + Math.random() * 10; // 20-30px size
            return {
                x: Math.cos(angle * Math.PI / 180) * distance,
                y: Math.sin(angle * Math.PI / 180) * distance,
                size,
                angle
            };
        };

        // Initial dots
        const initialDots = Array.from({ length: 3 }, generatePoint);
        setDots(initialDots);

        // Update dots periodically
        const dotsInterval = setInterval(() => {
            setDots(prev => {
                const newDots = prev.map(() => generatePoint());
                return newDots;
            });
        }, 500); // Update every 500ms

        // Progress timer
        const duration = 5000;
        const interval = 50;
        const steps = duration / interval;
        let currentStep = 0;

        const progressTimer = setInterval(() => {
            currentStep++;
            setProgress((currentStep / steps) * 100);

            if (currentStep >= steps) {
                clearInterval(progressTimer);
                onLoadingComplete();
            }
        }, interval);

        return () => {
            clearInterval(progressTimer);
            clearInterval(dotsInterval);
        };
    }, [onLoadingComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-base-100/95 backdrop-blur-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Enhanced Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[200%] h-32 opacity-20"
                        style={{
                            background: `linear-gradient(90deg, 
                                transparent,
                                hsl(var(--primary)),
                                hsl(var(--secondary)),
                                hsl(var(--accent)),
                                transparent
                            )`,
                            top: `${20 + i * 15}%`,
                            left: '-100%',
                            filter: 'blur(20px)',
                        }}
                        animate={{ x: ['0%', '100%'] }}
                        transition={{
                            duration: 10 - i,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: i * 0.2
                        }}
                    />
                ))}
            </div>

            <div className="relative w-full h-screen max-w-6xl mx-auto flex flex-col items-center justify-center">
                {/* Rocket Animation Section - Top Third */}
                <div className="relative w-full h-60">
                    <motion.div
                        className="absolute top-1/2 -translate-y-1/2 rocket-container"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 5, ease: 'linear' }}
                    >
                        <div className="relative w-40 h-40">
                            {/* Enhanced Smoke Trail */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2">
                                {[...Array(15)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute"
                                        style={{
                                            width: `${100 + i * 20}px`,
                                            height: `${20 + i * 2}px`,
                                            right: `${i * 15}px`,
                                            background: `linear-gradient(90deg, 
                                                transparent,
                                                hsl(var(--primary) / ${0.1 - i * 0.005}),
                                                hsl(var(--secondary) / ${0.1 - i * 0.005}),
                                                hsl(var(--accent) / ${0.1 - i * 0.005})
                                            )`,
                                            borderRadius: '50%',
                                            filter: `blur(${8 + i * 2}px)`,
                                        }}
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.8, 0.3, 0.8],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                            delay: i * 0.1,
                                        }}
                                    />
                                ))}
                            </div>

                            <motion.div
                                animate={{
                                    y: [-5, 5, -5],
                                    rotate: [-2, 2, -2],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="relative z-10"
                            >
                                <Image
                                    src="/rocket.png"
                                    alt="Rocket"
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-contain transform rotate-90"
                                />
                            </motion.div>

                            {/* Particle Effects */}
                            {[...Array(30)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute"
                                    style={{
                                        width: `${2 + Math.random() * 4}px`,
                                        height: `${2 + Math.random() * 4}px`,
                                        borderRadius: '50%',
                                        background: `linear-gradient(90deg, 
                                            hsl(var(--primary)),
                                            hsl(var(--secondary)),
                                            hsl(var(--accent))
                                        )`,
                                        right: '0',
                                        top: '50%',
                                    }}
                                    initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                                    animate={{
                                        x: -Math.random() * 200 - 100,
                                        y: (Math.random() - 0.5) * 100,
                                        scale: 0,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        duration: 1 + Math.random(),
                                        repeat: Infinity,
                                        delay: i * 0.1,
                                        ease: 'easeOut',
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Radar Loading Section - Bottom Two-Thirds */}
                <div className="relative mt-20">
                    {/* Radar Container */}
                    <div className="relative w-96 h-96">
                        {/* Radar Circles */}
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute inset-0 rounded-full border border-primary/20"
                                style={{
                                    transform: `scale(${0.25 + i * 0.25})`,
                                }}
                            />
                        ))}

                        {/* Rotating Radar Line */}
                        <motion.div
                            className="absolute inset-0"
                            style={{
                                background: `conic-gradient(
                                    from 0deg,
                                    transparent 0deg,
                                    hsl(var(--primary) / 0.3) 30deg,
                                    transparent 60deg
                                )`,
                                borderRadius: '50%',
                            }}
                            animate={{
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        />

                        {/* Random Gradient Dots with Location Pins */}
                        {dots.map((dot, i) => (
                            <motion.div
                                key={`${i}-${dot.x}-${dot.y}`}
                                className="absolute"
                                style={{
                                    width: dot.size,
                                    height: dot.size,
                                    left: `calc(50% + ${dot.x}%)`,
                                    top: `calc(50% + ${dot.y}%)`,
                                    transform: `translate(-50%, -50%) rotate(${dot.angle}deg)`,
                                }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: [0, 1, 1],
                                    opacity: [0, 1, 1],
                                }}
                                transition={{
                                    duration: 0.2,
                                    ease: 'easeOut',
                                }}
                            >
                                <div className="relative w-full h-full">
                                    {/* Glowing Background */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full"
                                        style={{
                                            background: `radial-gradient(circle, 
                                                hsl(var(--primary) / 0.5),
                                                hsl(var(--secondary) / 0.3),
                                                transparent
                                            )`,
                                            filter: 'blur(4px)',
                                        }}
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.7, 1, 0.7],
                                        }}
                                        transition={{
                                            duration: 0.2,
                                            ease: 'easeOut',
                                        }}
                                    />
                                    
                                    {/* Location Pin Icon */}
                                    <svg
                                        className="absolute inset-0 w-full h-full text-primary drop-shadow-lg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        stroke="none"
                                    >
                                        <path d="M12 0C7.802 0 4 3.403 4 7.602C4 11.8 7.469 16.812 12 24C16.531 16.812 20 11.8 20 7.602C20 3.403 16.199 0 12 0ZM12 11C10.343 11 9 9.657 9 8C9 6.343 10.343 5 12 5C13.657 5 15 6.343 15 8C15 9.657 13.657 11 12 11Z" />
                                    </svg>
                                </div>
                            </motion.div>
                        ))}

                        {/* Progress Text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <motion.div
                                className="text-5xl font-bold gradient-text"
                                animate={{
                                    scale: [1, 1.05, 1],
                                    filter: [
                                        'brightness(1)',
                                        'brightness(1.2)',
                                        'brightness(1)',
                                    ],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                {Math.round(progress)}%
                            </motion.div>
                            <motion.div
                                className="text-lg text-base-content/60 mt-2"
                                animate={{
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                {Math.ceil((100 - progress) * 0.05)}s remaining
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default RocketLoader; 