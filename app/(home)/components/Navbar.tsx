import { cn } from "@/lib/utils";
import React from "react";

import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      Link: "https://www.linkedin.com/in/kunalch/",
      Label: "LinkedIn",
      Icon: SiLinkedin, 
    },
    {
      Link: "https://github.com/kunalch204",
      Label: "GitHub",
      Icon: SiGithub, 
    },
    {
      Link: "mailto:chopraku@oregonstate.edu",
      Label: "Email",
      Icon: SiGmail, 
    },
  ];

  return (
    <nav
      className={cn(
        "py-10 flex justify-between items-center animate-move-down",
        className
      )}
    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-blue-500">
        Kunal Chopra
      </h1>

      <div className="flex items-center gap-5">
        {socials.map((social) => {
          const { Link, Label, Icon } = social;
          return (
            <a
              key={Label}
              href={Link}
              aria-label={Label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
