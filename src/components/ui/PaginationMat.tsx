"use client";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { colors } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { getPageFiles } from "next/dist/server/get-page-files";

interface ChildProps {
  count: number;
  page: number;
  // setPage: (page: number) => void;
  // pageUrl: number;
  onPageChange: (page: number) => void;
}

export default function PaginationRounded({
  count,
  page,
  onPageChange,
}: // setPage,
// pageUrl,
ChildProps) {
  // const router = useRouter();
  // const path = usePathname();

  console.log(`pagination ${page}`);

  // const getCurrPage = (page: number) => {
  //   if (path == "/") router.push(`/${page}`);
  //   // if (path == "/Search") router.push(`/Search/${page}`);
  // };

  return (
    <Stack spacing={2} className=" p-5 text-white w-[fit]">
      <Pagination
        sx={{
          ".MuiPaginationItem-root": {
            color: "white",
            border: "0.1px solid #6f6e6e",
            fontWeight: "600",
          },
          ".Mui-selected": {
            backgroundColor: "#4d4747",
            border: "1px solid #ffff",
          },
        }}
        className="text-white"
        count={500}
        page={page}
        onChange={(e, page) => {
          onPageChange(page);

          // window.scroll(0, 0);
        }}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
}
