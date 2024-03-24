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
  setPage: (page: number) => void;
  pageUrl: number;
}

export default function PaginationRounded({
  count,
  page,
  setPage,
  pageUrl,
}: ChildProps) {
  const router = useRouter();

  const getCurrPage = (page: number) => {
    router.push(`/${page}`);
  };

  return (
    <Stack spacing={2} className=" p-5 text-white w-[fit]">
      <Pagination
        sx={{
          ".css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root": {
            color: "white",
            border: "0.1px solid #6f6e6e",
          },
          ".css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":
            {
              backgroundColor: "#4d4747",
              border: "1px solid #ffff",
            },
          ".css-1v2lvtn-MuiPaginationItem-root": {
            color: "white",
            fontWeight: "600",
          },
        }}
        className="text-white"
        count={500}
        onChange={(e, page) => {
          getCurrPage(page);
          setPage(page);
          window.scroll(0, 0);
        }}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
}
