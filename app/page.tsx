import Image from "next/image";
import Link from "next/link";
import { PiHouseLight, PiGithubLogoLight } from "react-icons/pi";

export default function Home() {
  return (
    <div className="flex flex-col p-8 fixed w-full bottom-32 justify-center items-center ">
      <Image className="rounded-full" src={"/profile-picture.jpeg"} width={150} height={150} alt="profile-picture"></Image>

      <span className=" font-extrabold text-neutral-300 text-3xl text-center mt-5 btn-shine">FE Dev Portfolio</span>

      <p className="text-neutral-300 text-center mt-3 md:max-w-md lg:max-w-lg">Welcome to my portfolio website! This site is built using Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>

      <div className="flex justify-center gap-x-5 fixed bottom-20">
        <div className="border border-neutral-600 rounded-lg p-2 text-neutral-600">
          <Link href={"/dashboard"}>
            <span>
              <PiHouseLight />
            </span>
          </Link>
        </div>
        <div className="border border-neutral-600 rounded-lg p-2 text-neutral-600">
          <Link href={"/dashboard"}>
            <span>
              <PiGithubLogoLight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
