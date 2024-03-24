"use client";
import { CardWithForm } from "@/components/SystemRequire";
import MyCarousel from "@/components/ui/AliceCarousel";
import { Card } from "@/components/ui/card";
import { Container } from "@mui/material";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import Typed from "typed.js";

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
  interface MainDetails {
    id: number;
    background_image: string;
    short_screenshots: Screenshot[];
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
    if (details) {
      const typed = new Typed(el.current, {
        strings: [
          `Welcome to PixelPlayToon here we've ${details.name}`,
          details.description,
        ],
        typeSpeed: 1,
        shuffle: true,
      });
      const typed2 = new Typed(el2.current, {
        strings: ["PixelPlayToon Presents....", details.name.toUpperCase()],
        typeSpeed: 30,
        showCursor: false,
      });

      return () => {
        typed.destroy(); // Cleanup Typed instance
        typed2.destroy(); // Cleanup Typed instance
      };
    }
  }, [details]);
  return (
    <>
      {(details && !loading && (
        <div
          className={`min-h-[120vh] bg-${details.dominant_color} max-w-screen relative min-h-screen bg-cover bg-center `}
          style={{
            backgroundImage: `url(${details.background_image})`,
          }}
        >
          <div className="absolute inset-0 bg-[#181717] opacity-50"></div>
          <div className="absolute inset-0 bg-black opacity-75  items-center justify-center"></div>
          <div className="bg-[inherit] opacity-75 ">
            {/* Nested content here */}
            <Container>
              <div className="flex justify-between max-w-screen min-w-screen">
                <div className=" xl:w-[50vw] lg:w-[80vw] w-[90vw] min-w-[] p-10 text-lg">
                  {mainDetails && (
                    <MyCarousel images={mainDetails.short_screenshots} />
                  )}
                  <h1 ref={el2} className="text-white text-2xl  h-fit m-0"></h1>

                  <div
                    className={`text-[#9e9999] font-thin md:text-2xl text-lg  ${
                      hideDesc ? "line-clamp-4" : "line-clamp-none"
                    } cursor-pointer md:line-clamp-none bg-inherit`}
                  >
                    <h1
                      className="min-h-[50%]"
                      ref={el}
                      onMouseDown={() => {
                        setHideDesc(!hideDesc);
                      }}
                    ></h1>
                  </div>
                </div>
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
    </>
  );
};

export default GamePage;
