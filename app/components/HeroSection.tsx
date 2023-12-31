"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const url =
  "https://coding-lemon-porfolio.vercel.app/Emaas_Daniel_Resume-WebDev.pdf";

const HeroSection = () => {
  const handleDownLoadCV = () => {
    const fileName = "resume.pdf";
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <section id="hero" className="text-white min-h-[50vh]">
      <div className="grid grid-cols-1 lg:grid-cols-12 pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="col-span-7 place-self-center"
        >
          <h1 className="text-white text-center md:text-left mb-4 text-4xl lg:text-6xl font-extrabold -z-[1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
              Hello, I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Daniel",
                1000,
                "A Web Developer",
                1000,
                "A UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-slate-400 text-base sm:text-lg lg:text-xl mb-6">
            Utilizing my web development and design skills, I consistently
            deliver top-notch projects that guarantee high-quality outcomes.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-5">
            <Link
              href="#contact"
              className="w-full sm:w-max px-6 py-3 rounded-md bg-gradient-to-br 
              from-cyan-500 via-cyan-200 to-teal-500 text-black text-center"
            >
              Contact me
            </Link>
            <button
              onClick={handleDownLoadCV}
              className="w-full sm:w-max px-1 py-1 rounded-md bg-gradient-to-br 
              from-cyan-500 via-cyan-200 to-teal-500"
            >
              <span className="block bg-black rounded-md px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="col-span-5 mt-5 lg:mt-0"
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] mx-auto overflow-hidden">
            <Image
              src="/image1.png"
              alt="hero image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
