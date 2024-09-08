"use client";
import Image from "next/image";
import Link from "next/link";
import { IoMailOutline } from "react-icons/io5";
import { PiShapesThin, PiMagicWandThin, PiHouseLight, PiBookOpenTextLight } from "react-icons/pi";
import { useState } from "react";
import { motion } from "framer-motion";

const skills: string[] = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "SASS",
  "Bootstrap",
  "Javascript",
  "TypeScript",
  "JQuery",
  "React JS",
  "Next.js",
  "Framer Motion",
  "Mockoon",
  "Cypress.io",
  "Git",
  "GitHub",
  "Clip Studio Paint",
];

function Leftside() {
  const [active, setActive] = useState<boolean>(true);
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.6,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="flex flex-col sticky md:top-5 justify-center gap-8 p-6 w-full md:w-80 rounded-lg bg-[var(--component-color)] border border-neutral-600"
    >
      {/* Profile */}
      <div className="flex justify-between items-start">
        <div className="relative">
          <Image className="rounded-full" src={"/profile-picture.jpeg"} width={130} height={130} alt="profil-epicture" />
          <div className="w-3 h-3 absolute bottom-6 right-2 bg-[#dcfc35] rounded-full cursor-pointer animate-pulse" onClick={() => setActive(!active)}></div>
          <div className={`absolute flex items-center gap-2 bottom-4 -right-20  ${active && "border-[#dcfc35] border"} rounded-2xl px-2 py-1 h-max w-max mt-4 text-[10px] text-[#dcfc35]`}>
            {active && "Open to work"}
          </div>
        </div>
        <div className="flex gap-2">
          <Link href={"/"} className="bg-[var(--bg-color-secondary)] text-lg text-neutral-300 rounded-full p-2">
            <PiHouseLight />
          </Link>
          <Link href={"/"} className="bg-[var(--bg-color-secondary)] text-lg text-neutral-300 rounded-full p-2">
            <PiBookOpenTextLight />
          </Link>
        </div>
      </div>

      {/* About */}
      <div className="flex flex-col justify-center items-center md:items-start gap-3">
        <span className="font-extrabold text-neutral-300 text-center md:text-start text-lg sm:text-xl">Rifqi Favian Hibatullah</span>
        <span className=" font-bold text-neutral-300 text-center md:text-start text-xs">
          rifqifavianhibatullah@gmail.com <IoMailOutline className="inline-block" />
        </span>
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span key={i} className="bg-[var(--bg-color-secondary)] flex-auto font-bold text-[10px] text-center py-1 px-2 text-neutral-300 rounded-lg">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Bio */}
      <div className="flex flex-col gap-4">
        <span className="text-neutral-300 text-lg sm:text-xl font-extrabold">Bio</span>
        <p className="text-neutral-300 text-xs">
          Hi, Im Rifqi Favian Hibatullah. Im a Front-end Developer and 2D Artist, based in Indonesia. Im an active student currently studying at Muhammadiyah University Prof. dr Hamka, I have morethan
          one year of experience in front-end development and 2D art.
        </p>
        <div className="flex flex-wrap md:flex-nowrap gap-y-2 justify-between">
          <span className="text-neutral-300 text-xs font-semibold flex items-center gap-1">
            <PiShapesThin className="text-lg" /> More than 1 years experience.
          </span>
          <span className="text-neutral-300 text-xs font-semibold flex items-center gap-1">
            <PiMagicWandThin className="text-lg" /> 8 Projects.
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default Leftside;
