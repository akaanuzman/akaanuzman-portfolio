"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import About from "@/components/About";
import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";
import TypewriterText from "@/components/TypewriterText";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RocketLoader from "@/components/RocketLoader";

export default function Home() {
  const [showContent, setShowContent] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const handleGetStarted = () => {
    setIsLoading(true);
    setShowContent(false);
    setTimeout(() => {
      setHasStarted(true);
      setIsLoading(false);
      setShowContent(true);
    }, 5000);
  };

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href?.startsWith('#')) return;

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  return (
    <>
      {hasStarted && <Header />}
      <main className="bg-base-100 relative min-h-screen overflow-hidden">
        <AnimatePresence>
          {isLoading && <RocketLoader onLoadingComplete={handleLoadingComplete} />}
        </AnimatePresence>

        <div className="animated-bg">
          <div className="animated-shape shape-1"></div>
          <div className="animated-shape shape-2"></div>
          <div className="animated-shape shape-3"></div>
        </div>

        <div className="corner-shape"></div>

        <motion.div
          className="content-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <section className="min-h-screen flex flex-col justify-center container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-3xl mx-auto"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold mb-6 hover-gradient"
              >
                <TypewriterText text="Hi, I'm Kaan Uzman" />
              </motion.h1>
              <div className="space-y-4 mb-12">
                <motion.p
                  variants={scaleIn}
                  className="text-xl md:text-2xl text-base-content/80 gradient-text hover-gradient"
                >
                  A passionate Frontend Developer specializing in mobile and web development.
                </motion.p>
                <motion.p
                  variants={scaleIn}
                  className="text-xl md:text-2xl text-base-content/80 gradient-text hover-gradient"
                >
                  Building elegant solutions to complex problems.
                </motion.p>
              </div>
              {!hasStarted ? (
                <motion.div
                  variants={fadeInUp}
                  className="flex justify-center"
                >
                  <motion.button
                    onClick={handleGetStarted}
                    className="btn btn-primary btn-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  variants={fadeInUp}
                  className="flex gap-4"
                >
                  {/* <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link href="#projects" onClick={handleNavigation} className="btn btn-primary">
                      View My Work
                    </Link>
                  </motion.div> */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link href="#projects" onClick={handleNavigation} className="btn btn-outline">
                      View My Work
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </section>
          {hasStarted && (
            <>
              <TechStack />
              <About />
              <Projects />
              <Experience />
              {/* <Contact /> */}
            </>
          )}
        </motion.div>
      </main>
      {hasStarted && <Footer />}
    </>
  );
}
