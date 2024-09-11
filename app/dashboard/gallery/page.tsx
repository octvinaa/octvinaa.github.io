"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";
import useSWR from "swr";
import { Skeleton } from "@/components/ui/skeleton";

function Gallery() {
  const { data, isLoading, error } = useSWR("/api/illustration", (url) => fetch(url).then((res) => res.json()));

  const image: string[] = data?.data;
  return (
    <motion.div
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
      className="w-fit"
    >
      <div className="flex items-center mb-4 gap-x-3">
        <Link href="/dashboard">
          <IoMdArrowBack className="text-4xl text-neutral-300 border border-neutral-600 w-6 h-6 p-1 rounded-full" />
        </Link>
        <span className="text-base text-neutral-400">Gallery</span>
      </div>
      <motion.div className="columns-2 gap-3 sm:columns-3 [&>img:not(:first-child)]:mt-4 md:[&>img:not(:first-child)]:mt-3">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => <Skeleton key={index} className="w-44 h-60 object-contain rounded-md mt-4" />)
          : image?.map((item, index) => <Image key={index} src={item} alt="Illustration Thumbnail" width={200} height={135} className="object-contain rounded-md" />)}
      </motion.div>
    </motion.div>
  );
}

export default Gallery;
