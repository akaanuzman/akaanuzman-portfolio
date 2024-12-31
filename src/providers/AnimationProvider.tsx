"use client";

import { motion, AnimatePresence } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";

export default function AnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        <motion.div
          key="page-transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
} 