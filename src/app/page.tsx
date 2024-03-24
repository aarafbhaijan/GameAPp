"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SingleCard from "./../components/SingleCard/SingleCard";
import PaginationRounded from "@/components/ui/PaginationMat";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red, purple, green } from "@mui/material/colors";
import Logo from "@/components/Logo/Logo";
import RootLayout from "./layout";
import { Container } from "@mui/material";
import fs from "node:fs/promises";
import { usePathname, useRouter } from "next/navigation";

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
export default function Home({ pageUrl }: ChildProps) {
  var [page, setPage] = useState(pageUrl ? pageUrl : 1);
  const [games, setGames] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  let id: number = 3498;
  // console.log(games);

  const fetchGames = async () => {
    // fs.writeFile('./page/page.tsx',page.toString())
    const key = "bade7e318e0545a4a034f3b3d23f12bc";
    const res = await fetch(
      // "https://api.rawg.io/api/games?key=bade7e318e0545a4a034f3b3d23f12bc&ordering=-rating&developers=2623",
      // `https://api.rawg.io/api/games?key=bade7e318e0545a4a034f3b3d23f12bc&dates=2019-01-01,2019-12-31&developers=18`,
      /* for date and order=added */ //`https://api.rawg.io/api/games?key=bade7e318e0545a4a034f3b3d23f12bc&page=${page}&dates=1996-10-10,2001-10-10&ordering=-added`,
      /* for date and platforms */ // `https://api.rawg.io/api/games?key=bade7e318e0545a4a034f3b3d23f12bc&page=${page}&dates=2023-09-01,2024-09-30&platforms=18,1,7`,
      /*to search for perticular game*/ // `https://api.rawg.io/api/games?search=play station &key=${key}`,
      /*PLatfrom api*/ // `https://api.rawg.io/api/platforms/playstation4/games?key=${key}`,
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
  }, [pageUrl, page]);

  const getPage = (page: number) => {
    // setPage(page);
  };
  const router = useRouter();
  const url = usePathname();

  return (
    <main className="  bg-[black] ">
      <Container>
        <Logo />
        <div className="flex flex-wrap gap-[1rem] p-2 md:gap-5 scroll-smooth  justify-center md:p-5">
          {games && !loading ? (
            games.map((game: Games) => {
              return (
                <SingleCard
                  getPage={getPage}
                  page={page}
                  game={game}
                  key={game.id}
                />
              );
            })
          ) : (
            <div className="text-center text-4xl text-white flex items-center h-screen">
              <span className="loading loading-bars loading-lg text-white"></span>
            </div>
          )}
        </div>

        {count > 1 && (
          <div className="flex justify-center">
            <ThemeProvider theme={theme}>
              <h1 className="text-white">
                {page} and {pageUrl}
              </h1>
              <PaginationRounded
                count={count}
                page={page}
                setPage={setPage}
                pageUrl={pageUrl}
              />
            </ThemeProvider>
          </div>
        )}
      </Container>
    </main>
  );
}
