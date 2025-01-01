"use client";

import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiTailwindcss, SiMongodb, SiFlutter, SiDart, SiFirebase, SiGo, SiSwift, SiJavascript, SiMysql, SiGooglecloud, SiDocker } from "react-icons/si";
import TypewriterText from "./TypewriterText";

const techStack = [
    { icon: SiFlutter, name: "Flutter" },
    { icon: SiDart, name: "Dart" },
    { icon: SiSwift, name: "Swift" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiJavascript, name: "Javascript" },
    { icon: SiGo, name: "Go" },
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiTailwindcss, name: "TailwindCSS" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiMysql, name: "MySQL" },
    { icon: SiFirebase, name: "Firebase" },
    { icon: SiGooglecloud, name: "Google Cloud" },
    { icon: SiDocker, name: "Docker" },
];

export default function TechStack() {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section id="tech-stack" className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 md:mb-16 text-center hover-gradient"
                >
                    <TypewriterText text="Tech Stack" />
                </motion.h2>

                <div className="max-w-5xl mx-auto">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
                    >
                        {techStack.map((tech) => (
                            <motion.div
                                key={tech.name}
                                variants={item}
                                className="group relative"
                            >
                                <div className="relative bg-background/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-4 md:p-6 hover:border-primary/30 transition-all duration-500 h-full">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                                    
                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 flex items-center justify-center">
                                            <tech.icon className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-secondary transition-colors duration-300" />
                                        </div>
                                        <h3 className="text-sm md:text-base font-medium gradient-text">
                                            {tech.name}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 