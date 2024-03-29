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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RootLayout from "@/app/layout";
import SystemRequire from "@/components/SystemRequire/SystemRequire";

const GamePage = () => {
  interface Details {
    background_image: string;
    id: number;
    dominant_color: string;
    saturated_color: string;
    description: string;
    description_raw: string;
    name: string;
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
  let id = parseInt(usePathname().slice(14));
  ///
  const url = usePathname();
  const currPage = parseInt(url.split("")[12]);

  var [details, setDetails] = useState<Details | null>(null);
  const [mainDetails, setMainDetails] = useState<MainDetails | null>(null);
  const [noData, setNodata] = useState(false);
  const [loading, setLoading] = useState(true);
  const [noData1, setNodata1] = useState(false);
  const [loading1, setLoading1] = useState(true);
  const [hideDesc, setHideDesc] = useState(true);
  // console.log(details);
  // if (mainDetails) setMainDetails(mainDetails[0]);
  console.log(mainDetails);

  const el = useRef(null);
  const el2 = useRef(null);

  useEffect(() => {
    const getMainData = async () => {
      const key = "bade7e318e0545a4a034f3b3d23f12bc";
      const api = `https://api.rawg.io/api/games?key=${key}&id=${id}&page=${currPage}&platforms=4`;
      try {
        const res = await fetch(api, { next: { revalidate: 10 } });
        const { results } = await res.json();
        // setMainDetails(results);
        setMainDetails({
          ...results.filter((data: MainDetails) => data.id === id)[0],
        });
        setLoading1(false);
      } catch {
        setNodata1(true);
      }
    };
    const getDetails = async () => {
      try {
        const key = "bade7e318e0545a4a034f3b3d23f12bc";
        const api = `https://api.rawg.io/api/games/${id}?key=${key}`;
        const jData = await fetch(api);
        const data = await jData.json();
        setDetails(data);
        setLoading(false);
      } catch {
        setLoading(false);
        setNodata(true);
      }
    };
    getDetails();
    getMainData();
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
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      if (audio.paused) {
        audio.play();
        setIsMuted(false);
      } else {
        audio.muted = !audio.muted;
        setIsMuted(audio.muted);
      }
    }
  };
  return (
    <>
      {(details?.name && !loading && (
        <div
          className={`min-h-[130vh] bg-${details.dominant_color} min-w-screen min-w-screen relative  bg-cover bg-center max-h-fit `}
          style={{
            backgroundImage: `url(${details.background_image})`,
          }}
        >
          <div className="absolute inset-0 bg-[#181717] opacity-50"></div>
          <div className="absolute inset-0 bg-black opacity-75  items-center justify-center"></div>
          <div className="bg-[inherit] opacity-75 ">
            {/* Nested content here */}
            <Container>
              <div className="py-4 ">
                {/* <audio ref={audioRef} loop>
                  <source
                    src={`https://rr3---sn-5hnekn7l.googlevideo.com/videoplayback?expire=1711332582&ei=hogAZqGVELKq0u8PmKCNyAI&ip=46.246.8.32&id=o-ANAgY4bS29yeBdC9UrorM4B20CWYtACh4P3VLyOx3mu7&itag=599&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&vprv=1&svpuc=1&mime=audio%2Fmp4&gir=yes&clen=1345795&dur=349.413&lmt=1699779541800031&keepalive=yes&fexp=51141542&c=ANDROID&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgM_ZB0737kGcNie4mMGJTc4kYtr5LvKFf7FdvG4aLY6sCIQC0Rk54z6BSkRwYKf7vYa_2ST1wD4gz06CXpHbP5Dmtrg%3D%3D&redirect_counter=1&cm2rm=sn-5golk7e&req_id=82718ded1aafa3ee&cms_redirect=yes&cmsv=e&mh=hZ&mip=182.48.224.241&mm=34&mn=sn-5hnekn7l&ms=ltu&mt=1711310294&mv=D&mvi=3&pl=0&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=ALClDIEwRgIhAKF63v1p3twWte2uNdT4Ag8o8MvHsZjbLfPVMFzCrPW_AiEAoFXns1W3hNIEu2-ROjQXX4mBvlgtHkyhqkZgr3Liw4c%3D`}
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
                {details.name && (
                  <Button
                    className="text-white button-centered "
                    onClick={toggleMute}
                    variant="outlined"
                  >
                    Start {isMuted ? "Music" : "Stop Music"}
                  </Button>
                )} */}
              </div>
              <div className="flex xl:justify-between  max-w-screen min-w-screen gap-10 xl:flex-row flex-col">
                <div className=" xl:w-[40vw] lg:w-[70vw] w-[90vw] min-w-[] xl:justify-normal justify-self-center  text-lg ">
                  {mainDetails && !loading1 ? (
                    <MyCarousel images={mainDetails.short_screenshots} />
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
                <SystemRequire plats={mainDetails?.platforms} />
              </div>
            </Container>
          </div>
        </div>
      )) ||
        (loading && !noData ? (
          <div className="text-center bg-[#161616] text-4xl w-screen text-white flex justify-center items-center h-screen">
            <div className="loading loading-bars loading-lg text-white"></div>
          </div>
        ) : (
          <div className="text-center bg-[#161616] text-4xl w-screen text-[red] flex justify-center items-center h-screen">
            <h1>No data Found</h1>
          </div>
        ))}
      {/* <RootLayout /> */}
    </>
  );
};

export default GamePage;
