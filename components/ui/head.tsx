import Head from "next/head";
import React from "react";

export const HeadMetaData: React.FC<{
  title?: string;
  metaDescription?: string;
  ogImageUrl?: string;
  pathname?: string;
}> = ({ title = "Portfolio dashboard Rifqi Favian Hibatullah", metaDescription, ogImageUrl = "/dashboard.png", pathname = "" }) => {
  const defaultTitle = "Rifqi Favian Hibatullah Portfolio";
  const baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://rifqifavianhibatullah.vercel.app/";
  const pageURL = new URL(baseURL + pathname).toString();
  return (
    <Head>
      <title>{`${title} | ${defaultTitle}`}</title>
      <meta name="description" content={metaDescription} />

      <meta property="og:url" content={pageURL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} | ${defaultTitle}`} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="localhost" />
      <meta property="twitter:url" content={pageURL} />
      <meta name="twitter:title" content={`${title} | ${defaultTitle}`}>
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
      </meta>
    </Head>
  );
};
