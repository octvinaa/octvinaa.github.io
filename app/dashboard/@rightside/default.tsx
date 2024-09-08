"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type workHistoryType = {
  title: string;
  companylogo: string;
  company: string;
  date: string;
};
const workHistory: workHistoryType[] = [
  {
    title: "FE Developer",
    companylogo: "/company-logo/gallery-investasi.png",
    company: "Gallery Investasi - UHAMKA",
    date: "May 2023 - June 2023",
  },
  {
    title: "FE Developer",
    companylogo: "/company-logo/ftii-uhamka.webp",
    company: "Teknoka 8 - UHAMKA",
    date: "June 2023 - October 2023",
  },
  {
    title: "FE Developer",
    companylogo: "/company-logo/piljur.png",
    company: "PT. Pilihanmu Indonesia Jaya",
    date: "February 2024 - June 2024",
  },
  {
    title: "Illustrator",
    companylogo: "/company-logo/okutako.png",
    company: "Freelance",
    date: "2020-Present",
  },
];

function Rightside() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 1.2,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="flex flex-col sticky md:top-5 justify-center gap-8 p-6 w-full md:w-fit rounded-lg bg-[var(--component-color)] border border-neutral-600"
    >
      {/* CV Download */}
      <div className="flex flex-col gap-4">
        <span className="text-neutral-300 text-lg sm:text-xl font-extrabold">CV Download</span>
        <div className="flex max-w-80">
          <Link href={"/"} className="text-xs text-neutral-300 rounded-full max-w-72 ">
            <p>Discover my front-end expertise. Download my CV to see how I can contribute to your projects!</p>
          </Link>
        </div>
        <button type="button" className="bg-[#696969] text-xs text-neutral-50 h-7 w-full rounded-md">
          <a href="" download={""}>
            Download
          </a>
        </button>
      </div>

      {/* Work History */}
      <div className="flex flex-col gap-4">
        <span className="text-neutral-400 text-lg sm:text-xl">Work History</span>
        {workHistory.map((work, i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="flex justify-between">
              <div className="flex">
                <Image src={work.companylogo} alt="Company Logo" width={30} height={30} className="self-center me-2 object-cover h-[30px]" />
                <div className="flex flex-col text-neutral-300">
                  <span className="text-xs font-bold">{work.title}</span>
                  <span className="text-[8px]">{work.company}</span>
                </div>
              </div>
              <span className="text-neutral-300 text-[8px] italic justify-self-end">{work.date}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Rightside;
