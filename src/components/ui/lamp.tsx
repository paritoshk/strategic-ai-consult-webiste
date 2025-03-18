"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden w-full bg-black",
        className
      )}
      style={{ height: '100vh' }}
    >
      {/* Light beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] rounded-full bg-white/30 blur-[120px] opacity-70"></div>
      
      {/* White line */}
      <motion.div 
        initial={{ width: '10rem', opacity: 0.5 }}
        animate={{ width: '30rem', opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute top-20 h-px bg-white/80 z-10" 
      />

      {/* Content */}
      <div className="relative z-20 mt-20">
        {children}
      </div>
    </div>
  );
};

export function LampDemo() {
  return (
    <div className="h-screen w-full bg-black" style={{ position: 'relative', overflow: 'hidden' }}>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mt-8 bg-gradient-to-br from-white to-gray-300 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl font-serif"
        >
          Strategic Matter <br /> AI Consulting
        </motion.h1>
      </LampContainer>
    </div>
  );
}
