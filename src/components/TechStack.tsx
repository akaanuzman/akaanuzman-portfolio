"use client";

import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiTailwindcss, SiMongodb, SiFlutter, SiDart, SiFirebase, SiGo, SiSwift, SiJavascript, SiMysql, SiGooglecloud, SiDocker, SiGit, SiGithub, SiAwsamplify, SiAwsorganizations } from "react-icons/si";
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
        <section className="py-20">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold mb-16 text-center hover-gradient"
                >
                    <TypewriterText text="Tech Stack" />
                </motion.h2>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-5 gap-6"
                >
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            variants={item}
                            className="group relative bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative flex flex-col items-center justify-center space-y-4">
                                <tech.icon className="w-12 h-12 text-primary group-hover:text-secondary transition-colors duration-300" />
                                <span className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                                    {tech.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
} 