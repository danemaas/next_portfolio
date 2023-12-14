"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const PROJECT_DATA = [
  {
    id: 1,
    title: "Basic HTML/CSS & JavaScript Portfolio",
    description: "My first portfolio project using only HTML/CSS & JS",
    image: "/portfolio.png",
    projectLink: "https://danemaas.github.io/myPortfolio/",
    gitLink: "https://github.com/danemaas/myPortfolio",
    tag: ["all", "web"],
  },
  {
    id: 2,
    title: "Curated by Maria(Ecommerce Static Website)",
    description: "My first static website project using only HTML/CSS & JS",
    image: "/curated.jpg",
    projectLink: "https://danemaas.github.io/miniProject1/",
    gitLink: "https://github.com/danemaas/miniProject1",
    tag: ["all", "web"],
  },
  {
    id: 3,
    title: "Nukt - Streaming Website",
    description:
      "A streaming website created using ReactJS, Firebase, Stripe, TMDB & Youtube API",
    image: "/nukt.png",
    projectLink: "https://nukt-stream-team.vercel.app/",
    gitLink: "https://github.com/danemaas/Nukt-Stream-",
    tag: ["all", "web"],
  },
  {
    id: 4,
    title: "SocialHub - Social Media Platform",
    description:
      "A social media platform created using ReactJS, TypeScript, Appwrite, TailwindCSS, React Query",
    image: "/socialhub.png",
    projectLink: "https://social-hub-versiond.vercel.app/sign-in",
    gitLink: "https://github.com/danemaas/SocialHub",
    tag: ["all", "web"],
  },
  {
    id: 5,
    title: "Dotion - Note-Taking Web App",
    description:
      "A note-taking web application created using Next.JS, React, Convex and TailwindCSS",
    image: "/dotion.png",
    projectLink: "https://dotion-note-taking-app.vercel.app/",
    gitLink: "https://github.com/danemaas/Dotion",
    tag: ["all", "web"],
  },
  {
    id: 6,
    title: "D'Estate - Real Estate Website",
    description:
      "A real estate website using MERN(jwt & redux toolkit) and TailwindCSS",
    image: "/d-estate.png",
    projectLink: "https://d-estate-m.onrender.com/",
    gitLink: "https://github.com/danemaas/D-Estate",
    tag: ["all", "web"],
  },
];

const TAGS = ["all", "web", "mobile"];

const ProjectSection = () => {
  const [activeTag, setActiveTag] = useState("all");
  const filteredProjects = PROJECT_DATA.filter((project) =>
    project.tag.includes(activeTag)
  );

  return (
    <section className="text-white flex flex-col gap-5">
      <h2 className="text-4xl font-extrabold">My Projects</h2>
      <div className="flex justify-center items-center gap-5">
        {TAGS.map((tag) => (
          <ProjectTag
            key={tag}
            name={tag}
            onClick={() => setActiveTag(tag)}
            isSelected={activeTag === tag}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            imgUrl={project.image}
            title={project.title}
            description={project.description}
            projectLink={project.projectLink}
            gitLink={project.gitLink}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
