"use client";

import Link from "next/link";
import { LayoutGrid, XSquare } from "lucide-react";
import NavLink from "./NavLink";
import { useState } from "react";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-black text-white">
      <div className="container mx-auto flex justify-between items-center px-10 py-5">
        <Link href="/">DanEmaas</Link>
        {navOpen ? (
          <XSquare
            onClick={() => setNavOpen(!navOpen)}
            className="block md:hidden cursor-pointer"
          />
        ) : (
          <LayoutGrid
            onClick={() => setNavOpen(!navOpen)}
            className="block md:hidden cursor-pointer"
          />
        )}
        {/* mobile screens menu */}
        <nav
          id="navbar"
          className={`block absolute left-0 right-0 p-10 z-10 bg-black md:hidden md:w-auto ${
            navOpen
              ? "translate-y-[8rem] origin-top transition-all duration-300 ease-in-out"
              : "-translate-y-[8rem] origin-bottom transition-all duration-300 ease-in-out"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-5">
            {navLinks.map((navLink) => (
              <li key={navLink.title}>
                <NavLink link={navLink.path} title={navLink.title} />
              </li>
            ))}
          </ul>
        </nav>

        {/* larger screens menu */}
        <nav id="navbar" className={`hidden md:block md:w-auto`}>
          <ul className="flex flex-col md:flex-row items-center gap-3">
            {navLinks.map((navLink) => (
              <li key={navLink.title}>
                <NavLink link={navLink.path} title={navLink.title} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
