"use client";
import { CardWithForm } from "@/components/SystemRequire";
import MyCarousel from "@/components/ui/AliceCarousel";
import CollapsedBreadcrumbs from "@/components/ui/BreadCrump";
import { Card } from "@/components/ui/card";
import SkeletonColor from "@/components/ui/ImagePulseate";
import { Breadcrumbs, Button, Container, Skeleton } from "@mui/material";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import Typed from "typed.js";
import RootLayout from "@/app/layout";
import SystemRequire from "@/components/SystemRequire/SystemRequire";
import Particle from "@/components/Particles/Patricles";
interface Details {
  background_image: string;
  id: number;
  dominant_color: string;
  saturated_color: string;
  description: string;
  description_raw: string;
  name: string;
  platforms: any;
}
interface Screenshot {
  id: number;
  image: string;
}
interface Requirements {
  minimum: string;
  recommended: string;
}
interface PlatName {
  name: string;
  release_at: string;
}
interface PlatsInfo {
  platform: PlatName;
  requirements_en: Requirements;
}

interface MainDetails {
  id: number;
  background_image: string;
  short_screenshots: Screenshot[];
  platforms: PlatsInfo[] | undefined;
}
const GamePage = (props: any) => {
  const id = props.params.gameId;

  var [details, setDetails] = useState<Details | null>(null);
  const [loading, setLoading] = useState(true);
  const [screenShots, setScreenShots] = useState([]);
  const [loadingScreenShots, setLoadingScreenShots] = useState(true);

  const [hideDesc, setHideDesc] = useState(true);

  const el = useRef(null);
  const el2 = useRef(null);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const key = "bade7e318e0545a4a034f3b3d23f12bc";
        const api = `https://api.rawg.io/api/games/${id}?key=${key}`;
        const jData = await fetch(api);
        const data = await jData.json();
        setDetails(data);
      } catch {}
      setLoading(false);
    };
    const getScreenShots = async () => {
      try {
        const key = "bade7e318e0545a4a034f3b3d23f12bc";
        const api = `https://api.rawg.io/api/games/${id}/screenshots?key=${key}`;
        const jData = await fetch(api);
        const data = await jData.json();
        setScreenShots(data.results);
        console.log("screenshots", data);
      } catch {}
      setLoadingScreenShots(false);
    };
    getDetails();
    getScreenShots();
  }, []);
  useEffect(() => {
    if (details?.name && details.description) {
      const typed = new Typed(el.current, {
        strings: [
          `Welcome to PixelPlayToon here we've ${details.name}`,
          details.description,
        ],
        typeSpeed: 1,
        shuffle: true,
      });
      const typed2 = new Typed(el2.current, {
        strings: ["PIXELPLAYTOON Presents....", details.name.toUpperCase()],
        typeSpeed: 30,
        showCursor: false,
      });

      return () => {
        typed.destroy(); // Cleanup Typed instance
        typed2.destroy(); // Cleanup Typed instance
      };
    }
  }, [details]);
  if (loading)
    return (
      <div className="flex text-white min-w-screen max-w-screen min-h-screen max-h-screen justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  if (!details)
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <span className="text-xl">No Data Found!</span>
      </div>
    );
  return (
    <div
      className={`min-h-[130vh] max-h-fit bg-${details.dominant_color} min-w-screen min-w-screen relative  bg-cover bg-center max-h-fit mb-15`}
      style={{
        backgroundImage: `url(${details.background_image})`,
      }}
    >
       
      <div className="absolute inset-0 bg-[#181717] opacity-50"></div>
      <div className="absolute inset-0 bg-black opacity-75  items-center justify-center"></div>
      <div className="bg-[inherit] opacity-75 ">
      <Particle/>
        {/* Nested content here */}
        <Container className="">
          <div className="py-4 "></div>
          <div className="flex xl:justify-between  max-w-screen min-w-screen gap-10 xl:flex-row flex-col">
            <div className=" min-h-fit xl:w-[40vw] lg:w-[70vw] w-[90vw]  xl:justify-normal justify-self-center  text-lg ">
              {!loadingScreenShots ? (
                <MyCarousel images={screenShots} />
              ) : (
                <SkeletonColor />
              )}
              <h1
                ref={el2}
                className="text-white text-2xl  h-fit  glass p-3  m-2 ml-0"
              ></h1>

              <div
                className={`text-[#9e9999] font-thin md:text-2xl text-lg  ${
                  hideDesc ? "line-clamp-4" : "line-clamp-none"
                } cursor-pointer md:line-clamp-none bg-inherit`}
              >
                <h1
                  className=" max-h-fit"
                  ref={el}
                  onMouseDown={() => {
                    setHideDesc(!hideDesc);
                  }}
                ></h1>
              </div>
            </div>
            <SystemRequire plats={details.platforms} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default GamePage;
