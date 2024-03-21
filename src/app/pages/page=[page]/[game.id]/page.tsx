"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const GamePage = () => {
  interface Details {
    background_image: string;
    id: number;
    dominant_color: string;
    saturated_color: string;
  }

  let id = usePathname().slice(14);
  ///
  const url = usePathname();
  const currPage = parseInt(url.split("")[12]);

  const [details, setDetails] = useState<Details | null>(null);
  const [noData, setNodata] = useState(false);
  const [loading, setLoading] = useState(true);

  console.log(details);

  useEffect(() => {
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
  }, []);

  return (
    <>
      {(details && !loading && (
        <div
          className={`h-screen bg-${details.dominant_color} w-screen relative min-h-screen bg-cover bg-center`}
          style={{
            backgroundImage: `url(${details.background_image})`,
          }}
        >
          <div className="absolute inset-0 bg-[#181717] opacity-50"></div>
          <div className="absolute inset-0 bg-black opacity-75 flex items-center justify-center">
            <h1
              className={`text-${details.dominant_color} text-4xl flex flex-col text-center`}
            >
              {/* <span>Currently We are Working On this Feature</span>
              <span>Game Id:{details.id}</span> */}
            </h1>
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
