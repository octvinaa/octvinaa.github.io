"use client";
import useSWR from "swr";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function Dashboard() {
  const { data, error } = useSWR("/api/portfolio", (url) => fetch(url).then((res) => res.json()));
  console.log(data);

  return (
    <motion.div
      className=" w-full md:max-w-96 flex flex-col gap-7"
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
    >
      {/* Header */}
      <div className="flex gap-3 items-center">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="text-6xl text-neutral-50" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M66.56,91.07,22.25,128l44.31,36.93A4,4,0,0,1,64,172a3.94,3.94,0,0,1-2.56-.93l-48-40a4,4,0,0,1,0-6.14l48-40a4,4,0,0,1,5.12,6.14Zm176,33.86-48-40a4,4,0,1,0-5.12,6.14L233.75,128l-44.31,36.93a4,4,0,1,0,5.12,6.14l48-40a4,4,0,0,0,0-6.14ZM161.37,36.24a4,4,0,0,0-5.13,2.39l-64,176a4,4,0,0,0,2.39,5.13A4.12,4.12,0,0,0,96,220a4,4,0,0,0,3.76-2.63l64-176A4,4,0,0,0,161.37,36.24Z"></path>
        </svg>
        <div className="flex flex-col max-w-80 gap-1">
          <span className="text-lg sm:text-xl font-extrabold text-neutral-300">
            Portfolio, <span className="text-[#dcfc35] text-">A Front-end Journey</span>
          </span>
          <span className="text-sm text-neutral-400">Check out my portfolio and explore the projects where I have crafted seamless frontend experiences!.</span>
        </div>
      </div>

      {/* Frontend Portfolio */}
      <div className="flex flex-col border-t-2 border-neutral-600 py-6">
        <div className="flex flex-col w-full bg-[--component-color] rounded-md gap-3">
          <motion.div whileHover={{ backgroundColor: "#282828" }} className="flex items-center gap-x-3 p-4 rounded-md cursor-pointer">
            <Image src="/profile-picture.jpeg" alt="Portfolio" width={100} height={100} className="rounded-md"></Image>
            <div className="flex flex-col">
              <span className="text-xs text-neutral-400">Pilih Jurusan Website.</span>
              <span className="text-xs font-bold text-neutral-400">Build a website Pilih Jurusan</span>
              <span className="text-xs text-neutral-300 font-bold text-start mt-3">
                <a href="/dashboard/0asvfda"></a>More
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Dashboard;
