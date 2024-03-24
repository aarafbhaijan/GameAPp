"use client";
import React from "react";
import Page from "../page";
import { usePathname } from "next/navigation";
const page = () => {
  const url = usePathname();
  const pageUrl = parseInt(url.slice(1));
 
  

  return (
    <div>
      <Page pageUrl={pageUrl} />
    </div>
  );
};

export default page;
