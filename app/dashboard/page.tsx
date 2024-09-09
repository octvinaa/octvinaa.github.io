"use client";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, delay, motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useRef } from "react";
import { PiCodeThin } from "react-icons/pi";
import { GiPencilBrush } from "react-icons/gi";

type portfolioDataType = {
  id: number;
  thumbnail: string;
  title: string;
  desc: string;
};

function Dashboard() {
  const { data, error, isLoading } = useSWR("/api/portfolio", (url) => fetch(url).then((res) => res.json()));
  const portfolioData: portfolioDataType[] = data?.data;
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(true);

  return (
    <motion.div
      className="w-full md:max-w-fit flex flex-col gap-7"
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
      {/* Header Frontend*/}
      <div className="flex gap-3 items-center">
        <PiCodeThin className="text-6xl text-neutral-50 min-w-40 md:w-fit" />
        <div className="flex flex-col max-w-80 gap-1">
          <span className="text-lg sm:text-xl font-extrabold text-neutral-300">
            Portfolio, <span className="text-[#dcfc35] text-base">A Front-end Journey</span>
          </span>
          <span className="text-sm text-neutral-400">Check out my portfolio and explore the projects where I have crafted seamless frontend experiences!.</span>
        </div>
      </div>

      {/* Frontend Portfolio */}
      <div className="flex flex-col border-t-2 border-neutral-600 py-6">
        <motion.div
          layout
          initial={{ height: "30rem", opacity: 0 }}
          animate={{
            height: hidden ? "30rem" : "auto",
            opacity: 1,
          }}
          transition={{ duration: 0.5 }}
          onUpdate={(latest) => {
            if (latest.height !== "auto") {
              setIsAnimating(true);
            }
          }}
          onAnimationComplete={() => setIsAnimating(false)}
          className={`flex flex-col w-full bg-[--component-color] rounded-md gap-3 ${hidden ? "overflow-hidden h-[30rem] " : "overflow-visible h-auto"}`}
        >
          {/* Data */}
          {isLoading ? (
            <div className="flex items-center gap-x-3 p-4 rounded-md">
              <Skeleton className="h-[100px] w-[100px] rounded-md" />
              <div className="flex flex-col">
                <Skeleton className="w-28 rounded-md h-2" />
                <Skeleton className="w-40 rounded-md h-2 mt-1" />
                <Skeleton className="w-8 rounded-md h-2 mt-6" />
              </div>
            </div>
          ) : (
            <AnimatePresence>
              {portfolioData.map((item) => (
                <motion.div key={item.id} whileHover={{ backgroundColor: "#282828" }} className="flex items-center gap-x-3 p-4 rounded-md cursor-pointer">
                  <Image src={item.thumbnail} alt="Portfolio" width={150} height={100} className="rounded-md w-[150px] object-contain " />
                  <motion.div className="flex flex-col">
                    <motion.span className="text-sm text-neutral-400">{item.title}</motion.span>
                    <motion.span className="text-xs font-bold text-neutral-400">{item.desc}</motion.span>
                    <motion.span className="text-xs text-neutral-300 font-bold text-start mt-3">
                      <Link href="/dashboard/1">More</Link>
                    </motion.span>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
          {error && <div>{error}</div>}
        </motion.div>
        <motion.button
          initial={{ opacity: 1 }}
          animate={{ opacity: isAnimating ? 0 : 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          disabled={isAnimating}
          className="text-xs text-neutral-300 font-bold text-center mt-3 cursor-pointer"
          onClick={() => setHidden(!hidden)}
        >
          {hidden ? "Show More" : "Show Less"}
        </motion.button>
      </div>

      {/* Header Illustrator */}
      <div className="flex gap-5 items-center bg-[--component-color] rounded-md px-4 py-3">
        {/* <GiPencilBrush className="text-5xl text-neutral-50 min-w-40 md:w-fit" /> */}
        <Image src="/illustration/illustration2.png" alt="Illustration Thumbnail" width={135} height={135} className="w-[135px] h-[135px] object-cover object-left-top rounded-md" />
        <div className="flex flex-col max-w-80 gap-1">
          <span className="text-lg sm:text-xl font-extrabold text-neutral-300">
            Gallery, <span className="text-[#dcfc35] text-base">A Illustrator Journey</span>
          </span>
          <span className="text-sm text-neutral-400">Explore my vibrant anime illustrations, capturing emotion and dynamic scenes with bold, expressive artistry.</span>
          <button type="button" className="bg-[#696969] text-xs text-neutral-50 h-7 w-full rounded-md mt-4">
            <Link href="dashboard/gallery">Explore Art</Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Dashboard;
