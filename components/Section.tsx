"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Section = ({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("min-h-screen flex flex-col justify-center items-center py-24 px-6 relative z-10", className)}
    >
      {children}
    </motion.section>
  );
};