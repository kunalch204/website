"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiNumpy,
  SiPython,
  SiPandas,
  SiScikitlearn,
  SiPytorch,
  SiMysql,
  SiFlask,
  SiGit,
  SiJavascript,
} from "react-icons/si";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Skills() {
  const skills = [
    { text: "Python", Icon: SiPython, link: "https://www.python.org/" },
    { text: "NumPy", Icon: SiNumpy, link: "https://numpy.org/" },
    { text: "Pandas", Icon: SiPandas, link: "https://pandas.pydata.org/" },
    {
      text: "scikit-learn",
      Icon: SiScikitlearn,
      link: "https://scikit-learn.org/",
    },
    { text: "PyTorch", Icon: SiPytorch, link: "https://pytorch.org/" },
    { text: "MySQL", Icon: SiMysql, link: "https://www.mysql.com/" },
    {
      text: "Flask",
      Icon: SiFlask,
      link: "https://flask.palletsprojects.com/en/3.0.x/",
    },
    { text: "Git", Icon: SiGit, link: "https://git-scm.com/" },
    {
      text: "JavaScript",
      Icon: SiJavascript,
      link: "https://www.javascript.com/",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills"
        className="flex flex-col items-center justify-center"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
