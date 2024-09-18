import React, { ReactNode } from "react";
import { Metadata } from "next";
import { HeadMetaData } from "@/components/ui/head";

async function Layout({ children, leftside, rightside }: { children: ReactNode; leftside: ReactNode; rightside: ReactNode }) {
  return (
    <>
      <HeadMetaData ogImageUrl="/dashboard.png" metaDescription="Rifqi Favian Hibatullah Portfolio Dashboard" />
      <main className="flex flex-col justify-center items-start gap-12 md:flex-row p-6 w-full lg:w-fit mx-auto">
        {leftside}
        {children}
        {rightside}
      </main>
    </>
  );
}

export default Layout;
