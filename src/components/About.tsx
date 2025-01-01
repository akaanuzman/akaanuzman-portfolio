"use client";

import { motion } from "framer-motion";
import { FiMonitor, FiSmartphone, FiServer, FiCloud } from "react-icons/fi";
import TypewriterText from "./TypewriterText";

const services = [
  {
    icon: FiMonitor,
    title: "Web Development",
    description: "Building responsive and performant web applications using modern technologies like React, Next.js, and TypeScript."
  },
  {
    icon: FiSmartphone,
    title: "Mobile Development",
    description: "Creating cross-platform mobile applications with Flutter and native solutions for iOS and Android."
  },
  {
    icon: FiServer,
    title: "Backend Development",
    description: "Developing robust and scalable backend solutions using Node.js, Go, and various database technologies."
  },
  {
    icon: FiCloud,
    title: "Cloud Solutions",
    description: "Implementing cloud-native solutions and DevOps practices using modern cloud platforms and tools."
  }
];

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="about" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 md:mb-16 text-center hover-gradient"
        >
          <TypewriterText text="What I Do" />
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group relative overflow-hidden"
            >
              <div className="relative bg-background/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-4 md:p-6 lg:p-8 hover:border-primary/30 transition-all duration-500 h-full">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with glow effect */}
                  <div className="mb-4 md:mb-6 relative">
                    <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <service.icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary group-hover:text-secondary transition-colors duration-500" />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  </div>
                  
                  {/* Title with gradient effect */}
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4 gradient-text">
                    {service.title}
                  </h3>
                  
                  {/* Description with fade-in effect */}
                  <p className="text-sm md:text-base text-foreground/80 group-hover:text-foreground transition-colors duration-500">
                    {service.description}
                  </p>
                </div>

                {/* Hover line effect */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 