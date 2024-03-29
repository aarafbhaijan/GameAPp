import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export default function SkeletonColor() {
  return (
    <Box
      sx={{
        bgcolor: "#121212",
        p: 8,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Skeleton
        className="glass h-[30%]"
        sx={{ bgcolor: "grey.900", width: "100%", height: "100%" }}
        variant="rectangular"
        width={210}
        height={118}
      />
    </Box>
  );
}
