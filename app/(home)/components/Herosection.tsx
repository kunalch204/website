"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import useTypewriter from "react-typewriter-hook";
import BlinkingCursor from "./BlinkingCursor"; 
import { MovingBorderBtn } from "@/components/ui/moving-border";

const phrases = [
  "ML Engineer",
  "Data Scientist",
  "Software Engineer",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const magicName = useTypewriter(phrases[index]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((index + 1) % phrases.length);
    }, 5000); 
    return () => clearTimeout(timer);
  }, [magicName]);

  return (
    <div className="flex flex-col justify-center items-center text-center" style={{ minHeight: '80vh' }}>
      
      <h1 className="text-5xl lg:text-8xl font-bold tracking-tight">
        Nice to meet you!{" "}
        <span className="block mt-4 lg:mt-0 lg:inline">
          I&apos;m Kunal, a <span className="text-blue-500">{magicName}</span>
        </span>
        <BlinkingCursor />
      </h1>
      <div className="mt-8">
        <Link href="mailto:chopraku@oregonstate.edu" passHref>
          <MovingBorderBtn className="px-10 py-4 text-lg font-semibold bg-transparent border-2 border-blue-500 hover:bg-blue-500 hover:text-black transition-colors duration-300 hover:scale-125 transition-all">
            Contact Me
          </MovingBorderBtn>
        </Link>
      </div>
    </div>
  );
}
