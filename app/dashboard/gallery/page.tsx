"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";

const image = [
  "/illustration/illustration1.png",
  "/illustration/illustration2.png",
  "/illustration/illustration3.png",
  "/illustration/illustration4.png",
  "/illustration/illustration5.png",
  "/illustration/illustration6.png",
  "/illustration/illustration7.png",
  "/illustration/illustration8.png",
];

function Gallery() {
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
          <IoMdArrowBack className="text-2xl text-neutral-300" />
        </Link>
        <span className="text-base text-neutral-400">Gallery</span>
      </div>
      <motion.div className="columns-2 gap-3 sm:columns-3 [&>img:not(:first-child)]:mt-4 md:[&>img:not(:first-child)]:mt-3">
        {image.map((item, index) => (
          <Image key={index} src={item} alt="Illustration Thumbnail" width={200} height={135} className="object-contain rounded-md" />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Gallery;
