import React from "react";
import Link from "next/link";
import {
  SiMysql,
  SiPython,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiFlask,
  SiHtml5,
  SiJavascript,
  SiGithub,
  SiStreamlit,
  SiAnaconda,
} from "react-icons/si";
import Title from "./Title";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "UsedCarPricePredictor",
      tech: [
        SiPython,
        SiNumpy,
        SiPandas,
        SiScikitlearn,
        SiFlask,
        SiHtml5,
        SiJavascript,
        SiGithub,
      ],
      link: "https://github.com/kunalch204/UsedCarPricePredictor",
      cover: "/profile-1.JPG",
      background: "bg-blue-500",
    },
    {
      title: "TechLeaderClassifer",
      tech: [
        SiPython,
        SiNumpy,
        SiPandas,
        SiScikitlearn,
        SiFlask,
        SiHtml5,
        SiJavascript,
        SiGithub,
      ],
      link: "https://github.com/kunalch204/TechLeaderClassifer",
      cover: "/profile-2.JPG",
      background: "bg-green-500",
    },
    {
      title: "KunalAssistant",
      tech: [SiPython, SiStreamlit, SiGithub],
      link: "https://github.com/kunalch204/KunalAssistant",
      cover: "/profile-3.JPG",
      background: "bg-orange-500",
    },
    {
      title: "SafeRLHumanFeedback",
      tech: [SiPython, SiNumpy, SiPandas, SiScikitlearn, SiAnaconda, SiGithub],
      link: "https://github.com/kunalch204/SafeRLHumanFeedback",
      cover: "/profile-4.JPG",
      background: "bg-purple-500",
    },
  ];

  return (
    <div className="py-10 px-5 sm:px-0">
      <Title
        text="Projects"
        className="flex flex-col items-center justify-center"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => (
          <Link href={project.link} key={index}>
            <div className={`block p-5 rounded-md ${project.background}`}>
              <DirectionAwareHover
                imageUrl={project.cover}
                className="w-full space-y-5 cursor-pointer"
              >
                <h1 className="text-xl font-bold">{project.title}</h1>
                <div className="flex justify-center space-x-2 mt-3">
                  {project.tech.map((TechIcon, techIndex) => (
                    <TechIcon key={techIndex} className="text-2xl" />
                  ))}
                </div>
              </DirectionAwareHover>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
