"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiGlobe, FiSmartphone } from "react-icons/fi";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import { SiFlutter, SiFirebase, SiNodedotjs, SiMongodb, SiDart, SiNextdotjs, SiJavascript, SiTypescript, SiReact, SiTailwindcss } from "react-icons/si";
import { IconType } from "react-icons";
import TypewriterText from "./TypewriterText";

type TechTag = "Flutter" | "Dart" | "Firebase" | "Node.js" | "MongoDB" | "Next.js" | "Javascript" | "Typescript" | "React" | "Tailwind";

const techIcons: Record<TechTag, IconType> = {
  Flutter: SiFlutter,
  Dart: SiDart,
  Firebase: SiFirebase,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  "Next.js": SiNextdotjs,
  Javascript: SiJavascript,
  Typescript: SiTypescript,
  React: SiReact,
  Tailwind: SiTailwindcss,
};

interface Project {
  title: string;
  description: string;
  image: string;
  platforms: {
    web: string;
    playStore: string;
    appStore: string;
  };
  tags: TechTag[];
}

const projects: Project[] = [
  {
    title: "Anytime",
    description: "With anytime, Turkey's first career platform suitable for flexible working, job and internship opportunities that allow you to work whenever and wherever you want are at your fingertips! You can apply for job opportunities on anytime by selecting the days and hours you want to work, and enjoy the flexibility of working in jobs that will help you advance your career or earn additional income.",
    image: "/images/anytime.png",
    platforms: {
      web: "https://anytime.com.tr",
      playStore: "https://play.google.com/store/apps/details?id=com.singularitysoftware.anytime",
      appStore: "https://apps.apple.com/tr/app/anytime-esnek-%C3%A7al%C4%B1%C5%9Fma-i-%C5%9F-bul/id1615656130?l=tr"
    },
    tags: ["Flutter", "Dart", "Firebase", "Node.js", "Next.js", "Typescript", "React", "Tailwind"]
  },
  {
    title: "Halısahavar",
    description: "Halısahavar is a mobile application designed to meet all the needs of players on the football field. It allows users to find missing players, discover nearby football fields, find opponents based on skill level, and participate in tournaments. The app simplifies organizing games, ensuring no player is left out, and offers a competitive experience by matching teams and players. With a broad network of football enthusiasts, it aims to make every match more exciting and accessible.",
    image: "/images/halisahavar.jpeg",
    platforms: {
      web: "https://www.halisahavar.com",
      playStore: "https://play.google.com/store/apps/details?id=com.halisahavar",
      appStore: "https://apps.apple.com/tr/app/hal%C4%B1sahavar/id1583998724"
    },
    tags: ["Flutter", "Dart", "Firebase"]
  },
  {
    title: "Kuaförüm Yanımda",
    description: "Kuaförüm Yanımda is a platform designed to simplify salon and beauty service appointments. Users can easily book appointments with nearby salons, while businesses benefit from tools to manage operations, track bookings, and enhance customer interactions. It aims to optimize service delivery with features like automated scheduling and data insights, bridging the gap between salons and their customers.",
    image: "/images/kuaforumyanimda.jpg",
    platforms: {
      web: "https://kuaforumyanimda.com/",
      playStore: "https://play.google.com/store/apps/details?id=com.tr.kuaforum_yanimda",
      appStore: "https://apps.apple.com/tr/app/kuaf%C3%B6r%C3%BCm-yan%C4%B1mda/id1516248277?l=tr"
    },
    tags: ["Flutter", "Dart", "Firebase"]
  }
];

export default function Projects() {
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-16 text-center hover-gradient"
        >
          <TypewriterText text="Projects" />
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className="group relative overflow-hidden"
            >
              <div className="relative bg-background/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Project Image */}
                  <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Title with gradient effect */}
                  <h3 className="text-2xl font-bold mb-4 gradient-text">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-foreground/80 group-hover:text-foreground transition-colors duration-500 mb-6">
                    {project.description}
                  </p>

                  {/* Platform Links */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <a
                      href={project.platforms.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300"
                    >
                      <FiGlobe className="w-5 h-5" />
                      <span>Website</span>
                    </a>
                    <a
                      href={project.platforms.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300"
                    >
                      <FaGooglePlay className="w-5 h-5" />
                      <span>Play Store</span>
                    </a>
                    <a
                      href={project.platforms.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300"
                    >
                      <FaAppStore className="w-5 h-5" />
                      <span>App Store</span>
                    </a>
                  </div>

                  {/* Tags with Icons */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => {
                      const Icon = techIcons[tag];
                      return (
                        <span
                          key={tag}
                          className="flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-primary/10 text-primary group-hover:bg-secondary/10 group-hover:text-secondary transition-colors duration-300"
                        >
                          <Icon className="w-4 h-4" />
                          {tag}
                        </span>
                      );
                    })}
                  </div>
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