import { Spotlight } from "@/components/ui/Spotlight";
import React from "react";

export function Intro() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-relaxed">
        <br />
        I recently graduated <span className="text-yellow-400">summa cum laude</span> from Oregon State University with a degree in Computer Science.
        <br />
        I&apos;m based in Portland and passionate about applying AI to solve real-world problems.
        <br />
        Currently seeking full-time software engineering opportunities.
      </h2>
    </div>
  );
}
