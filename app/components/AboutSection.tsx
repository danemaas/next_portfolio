"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const tabs = ["skills", "education", "certifications"];
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc ms-5">
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>ReactJS</li>
        <li>NextJS</li>
        <li>Node.JS/Express</li>
        <li>MongoDB</li>
        <li>Firebase</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc ms-5 flex flex-col gap-3">
        <li>
          <p>KodeGo Bootcamp - Full Stack Web Development</p>
          <p className="text-slate-400 text-sm">August 2023 - November 2023</p>
        </li>
        <li>
          <p>Ateneo de Naga University - BS Computer Science</p>
          <p className="text-slate-400 text-sm">
            July 2010 - March 2014(stopped)
          </p>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc ms-5 flex flex-col gap-3">
        <li>
          <p>Responsive Web Design - FreeCodeCamp.com</p>
          <p className="text-slate-400 text-sm">August 21, 2023</p>
        </li>
        <li>
          <p>JavaScript Algorithm and Data Structures - FreeCodeCamp.com</p>
          <p className="text-slate-400 text-sm">November 23, 2023</p>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handeTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white min-h-[100vh]">
      <div className="md:grid md:grid-cols-2 gap-8 items-center pt-[12rem] px-4">
        <div className="hidden md:block relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] mx-auto overflow-hidden">
          <Image
            src="/image2.png"
            alt="about image"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col h-full mt-4 md:mt-0">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base md:text-lg text-justify">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, MongoDB,
            NextJS, TypeScript, HTML, CSS, and Git. I am a quick learner and I
            am always looking to expand my knowledge and skill set. I am a team
            player and I am excited to work with others to create amazing
            applications.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {tabs.map((item) => (
              <TabButton
                key={item}
                selectTab={() => handeTabChange(item)}
                active={tab === item}
              >
                {item}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
