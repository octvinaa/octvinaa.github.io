"use client";

import { usePathname } from "next/navigation";

function Post() {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  console.log(id);

  return <p className="text-neutral-300">Post: test</p>;
}

export default Post;
