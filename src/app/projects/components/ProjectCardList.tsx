"use client";

import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";
import Title from "@/components/ui/Title";
import { useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Badge } from "@radix-ui/themes";
import { bricolage_grotesque } from "@/utils/fonts";

const ProjectCardList = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  return (
    <div className="w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-4 pb-8">
      <Title title="Proof of Work" />

      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
        {data.slice(0, visibleProjects).map((project: Project, idx: number) => (
          <ProjectCard
            key={idx}
            // logo={project.logo}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            source={project.source}
          />
        ))}
      </div>
      {visibleProjects < data.length && (
        <Badge
          color="gray"
          variant="solid"
          highContrast
          onClick={loadMoreProjects}
          className={`text-xs max-sm:text-[10px] flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 mt-6 ${bricolage_grotesque}`}
        >
          <span>Load More</span>
          <span className="!ml-[-3px] mt-[1px]">
            <ChevronDownIcon className="h-3 w-3 dark:!text-black !text-white  shrink-0 text-muted-foreground transition-transform duration-200" />
          </span>
        </Badge>
      )}
    </div>
  );
};

export default ProjectCardList;

const data: Project[] = [
  {
    // logo: "/campusconnect.png",
    title: "CampusConnect",
    description:
      "A full-stack social network for college students to connect, chat, and participate in events. It supports real-time messaging and notifications, and features a responsive UI deployed using Docker.",
    techStack: [
      "React.js",
      "ShadCN",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Tailwind CSS",
      "Framer Motion",
      "Docker",
    ],
    link: "https://peer-connect-v1-cl.onrender.com/", // add live demo link if any
    source: "", // add GitHub link if public
  },
  {
    // logo: "/smart-photo-drive.png",
    title: "Smart Photo Drive",
    description:
      "An AI-powered web app that allows users to upload photos and automatically retrieve all images containing their face using facial recognition. Features include full-stack development with a RESTful Flask API.",
    techStack: ["React.js", "JavaScript", "HTML", "CSS", "Flask"],
    link: "https://smartdrive.ccstiet.com/", // add live demo if any
    source: "https://github.com/CCS-Smart-Photo-Drive", // add GitHub link if available
  },
  {
    // logo: "/storeit.png",
    title: "StoreIt",
    description:
      "A full-stack cloud storage web application enabling users to securely upload, manage, and retrieve files. Features secure user authentication and optimized performance using SSR and SSG with Next.js.",
    techStack: ["Next.js", "React.js", "JavaScript", "Tailwind CSS", "HTML"],
    link: "https://store-it-lake.vercel.app/sign-in", // add GitHub link if any
    source: "https://github.com/Anchal0410/StoreIt", // add deployed URL if any
  },
  // {
  //   logo: "/flick-ai.png",
  //   title: "Flick.AI",
  //   description:
  //     "An AI-Powered tool with 200+ users designed to refine your tweets with full customizations and make them stand out—because GPT just doesn’t get it.",
  //   techStack: [
  //     "Next.js",
  //     "TypeScript",
  //     "Google Gemini",
  //     "Prisma",
  //     "PostgreSQL",
  //     "NextAuth",
  //     "Tailwind CSS",
  //   ],
  //   link: "https://flick-ai.fardeen.tech/",
  //   source: "https://github.com/Fardeen26/flick-ai",
  // },

  // {
  //   logo: "/anon-4.png",
  //   title: "GhostGram - SaaS platform",
  //   description:
  //     "GhostGram is an anonymous messaging platform that lets users securely send and receive messages through unique, authenticated links.",
  //   techStack: [
  //     "Next.js",
  //     "Typescript",
  //     "Gemini",
  //     "MongoDB",
  //     "NextAuth",
  //     "Nodemailer",
  //     "Tailwind CSS",
  //     "Shadcn",
  //   ],
  //   link: "https://ghostgram.fardeen.tech",
  //   source: "https://github.com/Fardeen26/ghostgram",
  // },
  // {
  //   logo: "/chat-icon.png",
  //   title: "The Chat Haven",
  //   description:
  //     "The Chat Haven is a chat application that allows users to create & join room and send & receive messages in real-time.",
  //   techStack: [
  //     "Next.js",
  //     "Node.js",
  //     "WebSockets",
  //     "TypeScript",
  //     "Tailwind CSS",
  //   ],
  //   link: "https://chathaven.fardeen.tech",
  //   source: "https://github.com/Fardeen26/chat-app",
  // },
  // {
  //   logo: "/credit-buddy.svg",
  //   title: "Credit Buddy",
  //   description:
  //     "Credit Buddy simplifies credit card queries with AI-powered insights, offering quick and reliable solutions for users to manage their finances better and make informed decisions effortlessly.",
  //   techStack: ["Next.js", "Puppeteer", "Google Gemini", "TypeScript"],
  //   link: "https://credit-buddy.fardeen.tech",
  //   source: "https://github.com/Fardeen26/gen-ai",
  // },
  // {
  //   logo: "/codify.png",
  //   title: "Codify",
  //   description:
  //     "Codify transforms your source code into stunning, shareable images with customizable themes, fonts, and backgrounds—perfect for developers and tutorials.",
  //   techStack: ["Next.js", "TypeScript", "Shadcn", "Tailwind CSS"],
  //   link: "https://codify.fardeen.tech",
  //   source: "https://github.com/Fardeen26/Codify",
  // },
  // {
  //   logo: "/memehub.png",
  //   title: "MemeHub",
  //   description:
  //     "MemeHub is a meme generator that allows users to create and share memes with a user-friendly interface and a wide range of templates.",
  //   techStack: [
  //     "Next.js",
  //     "Typescript",
  //     "framer-motion",
  //     "Tailwind CSS",
  //     "Magic UI",
  //   ],
  //   link: "https://www.memehub.mom/",
  //   source: "https://github.com/Fardeen26/meme-generator",
  // },
];
