import React, { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Landing Page of Rifqi Favian Hibatullah portfolio website.",
};

async function Layout({ children, leftside, rightside }: { children: ReactNode; leftside: ReactNode; rightside: ReactNode }) {
  return (
    <div className="flex flex-col justify-center items-start gap-12 md:flex-row p-6 w-full lg:w-fit mx-auto">
      {leftside}
      {children}
      {rightside}
    </div>
  );
}

export default Layout;
