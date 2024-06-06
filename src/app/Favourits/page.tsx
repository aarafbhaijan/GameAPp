"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import SingleCard from "../../components/SingleCard/SingleCard";
import PaginationRounded from "@/components/ui/PaginationMat";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red, purple, green } from "@mui/material/colors";

import RootLayout from "../layout";
import { Container } from "@mui/material";
import fs from "node:fs/promises";
import { usePathname, useRouter } from "next/navigation";
import YouTube from "@/components/ui/Pulseate";
import { useSearchParams } from "next/navigation";
import Particle from "@/components/Particles/Patricles";

export interface Platfroms {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}
export interface Games {
  id: number;
  name: string;
  playtime: string;
  background_image: string;
  rating_top: number;
  ratings: {
    id: number;
  };
  short_screenshots: string;
  platforms: Platfroms[];
  released: string;
}
interface Components {
  title: string;
  href: string;
  description: string;
}
interface ChildProps {
  pageUrl: number;
}
const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const HomeContainer = () => {
  return (
    <Suspense fallback={null}>
      <Favourits />
    </Suspense>
  );
};
export default HomeContainer;

function Favourits() {
  const [games, setGames] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  let id: number = 0;
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const page = searchParams.get("page") || "1";
  console.log(`Home Page ${page}`);
  const fetchGames = async () => {
    const key = "bade7e318e0545a4a034f3b3d23f12bc";
    const res = await fetch(
      /* normal */ `https://api.rawg.io/api/games?key=${key}&id=${id}&page=${page}&platforms=4`,
      { next: { revalidate: 10 } }
    );

    const { count, results } = await res.json();
    setGames(results);
    setCount(count);
    setLoading(false);
  };

  useEffect(() => {
    fetchGames();
    console.log("searchParams", searchParams.getAll("name"));
  }, [page]);

  console.log(games);

  return (
    <main className="  bg-[black] ">
      <Particle />
      <Container>
        <div className="flex flex-wrap gap-[1rem] p-2 md:gap-5 scroll-smooth max-w-screen  justify-center md:p-5">
          {!loading ? (
            games.map((game: Games) => {
              return <SingleCard game={game} key={game.id} />;
            })
          ) : (
            <YouTube />
          )}
        </div>

        {count > 1 && (
          <div className="flex justify-center">
            <ThemeProvider theme={theme}>
              <PaginationRounded
                count={count}
                page={parseInt(page)}
                onPageChange={(page) => {
                  router.push(pathName + "?page=" + page);
                }}
              />
            </ThemeProvider>
          </div>
        )}
      </Container>
    </main>
  );
}
