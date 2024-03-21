"use client";
import Link from "next/link";
import { platform } from "os";
import React, { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";
import { FaPlaystation } from "react-icons/fa6";
import { SiPlaystation5 } from "react-icons/si";
import { SiPlaystation3 } from "react-icons/si";
import { SiPlaystation4 } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { SiMacos } from "react-icons/si";
import { BsNintendoSwitch } from "react-icons/bs";
import Image from "next/image";
import no_image from "./no_image.jpg";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { usePathname, useRouter } from "next/navigation";

// import Games  from '../trending/page'
// import Platforms from '../trending/page'

interface Platfroms {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}
interface Games {
  id: number;
  name: string;
  playtime: string;
  background_image: string;
  ratings: {
    id: number;
  };
  platforms: Platfroms[];
  released: string;
}
interface ChildProps {
  game: Games;
  page: number;
  getPage: (page: number) => void;
}
const SingleCard = ({ game, page, getPage }: ChildProps) => {
  

  // getPage()
  return (
    <Link key={game.id} href={`./pages/page=${page}/${game.id}`}>
      <div
        className="card z-0 md:w-[16rem] w-40 glass text-[#f1eeee] cursor-pointer  hover:bg-[#232222] md:hover:scale-105 transition-[180ms]"
        key={game.ratings.id}
      >
        <figure>
          {game.background_image ? (
            <img src={game.background_image} alt="car!" />
          ) : (
            <Image
              src={"/./no_image.jpg"}
              width={500}
              height={300}
              alt="car!"
            />
          )}{" "}
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-xl">{game.name}</h2>
          <p className=" text-sm">{game.released}</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Download Now!</button> */}
            <ul className="flex flex-wrap gap-4">
              {game.platforms.map((platform) => {
                let message;
                switch (platform.platform.name) {
                  case "PC":
                    message = <FaWindows />;
                    break;
                  case "PlayStation 5":
                    message = <SiPlaystation5 />;
                    break;
                  case "Xbox One" || "Xbox Series S/X":
                    message = <FaXbox />;
                    break;
                  case "PlayStation 4":
                    message = <SiPlaystation4 />;
                    break;
                  case "PlayStation 3":
                    message = <SiPlaystation3 />;
                    break;
                  case "Nintendo Switch":
                    message = <SiMacos />;
                    break;
                  case "macOS":
                    message = <BsNintendoSwitch />;
                    break;
                }
                return (
                  <li className="text-3xl text-white">
                    {message ? message : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default SingleCard;
