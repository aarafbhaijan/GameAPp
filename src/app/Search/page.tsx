"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SingleCard from "../../components/SingleCard/SingleCard";
import PaginationRounded from "@/components/ui/PaginationMat";
import {
  ThemeProvider,
  createMuiTheme,
  createTheme,
  makeStyles,
} from "@mui/material/styles";
import { red, purple, green } from "@mui/material/colors";

import RootLayout from "../layout";
import { colors, Container } from "@mui/material";
import fs from "node:fs/promises";
import { usePathname, useRouter } from "next/navigation";
import YouTube from "@/components/ui/Pulseate";
import FreeSolo from "@/components/ui/MatSearch";
import GloballyCustomizedOptions from "@/components/ui/MatSearch2";

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
export default function Home() {
  var [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [games, setGames] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  let id: number = 3498;
  // console.log(games);
  console.log(search);
  const fetchGames = async () => {
    console.log(
      `https://api.rawg.io/api/games?search=${search} &key=bade7e318e0545a4a034f3b3d23f12bc`
    );

    // fs.writeFile('./page/page.tsx',page.toString())
    const key = "bade7e318e0545a4a034f3b3d23f12bc";
    const res = await fetch(
      /*to search for perticular game*/ `https://api.rawg.io/api/games?search=${search} &key=${key}`,

      { next: { revalidate: 10 } }
    );

    const { count, results } = await res.json();
    setGames(results);
    setCount(count);
    setLoading(false);
  };

  useEffect(() => {
    fetchGames();
  }, [ page, search]);

  const getPage = (page: number) => {
    // setPage(page);
  };
  const router = useRouter();
  const url = usePathname();

  return (
    <main className="  bg-[black] ">
      <Container>
        <div className="text-white w-full inline-block m-5">
          <FreeSolo
            search={search}
            setSearch={setSearch}
            fetchGames={fetchGames}
          />

          {/* <GloballyCustomizedOptions /> */}
        </div>
        <div className="flex flex-wrap gap-[1rem] p-2 md:gap-5 scroll-smooth  justify-center md:p-5">
          {games && !loading ? (
            games.map((game: Games) => {
              return (
                <SingleCard
                  game={game}
                  key={game.id}
                />
              );
            })
          ) : (
            <YouTube />
          )}
        </div>
      </Container>
    </main>
  );
}
