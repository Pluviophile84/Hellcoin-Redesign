"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export const HellBackground = () => {
  const { scrollYProgress } = useScroll();
  
  // 0% (Top): Charcoal -> 50%: Deep Red -> 100%: Void Black
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#1A1A1A", "#520808", "#000000"]
  );

  return (
    <motion.div
      style={{ backgroundColor }}
      className="fixed inset-0 w-full h-full -z-50 transition-colors duration-1000"
    >
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
    </motion.div>
  );
};