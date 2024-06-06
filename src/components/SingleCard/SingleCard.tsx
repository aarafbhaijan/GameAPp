"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";
import { FaPlaystation, FaPlus } from "react-icons/fa6";
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
import Typed from "typed.js";
import { Rating, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/lib/Store/hooks";
import { add } from "@/app/Features/cartSlice/cartSlice";

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
  rating_top: number;
  ratings: {
    id: number;
  };
  platforms: Platfroms[];
  released: string;
}
interface ChildProps {
  game: Games;
}
const SingleCard = ({ game }: ChildProps) => {
  const el = useRef(null);
  const el2 = useRef(null);
  const el3 = useRef(null);

  useEffect(() => {
    if (game) {
      const typed = new Typed(el.current, {
        strings: [`${game.name}`],
        typeSpeed: 30,
        shuffle: true,
        showCursor: false,
      });
      const typed2 = new Typed(el2.current, {
        strings: [`${game.released}`],
        typeSpeed: 30,
        showCursor: false,
        shuffle: true,
      });
      // const typed3 = new Typed(el3.current, {
      //   strings: [`${game.released}`],
      //   typeSpeed: 30,
      //   showCursor: false,
      //   shuffle: true,
      // });

      return () => {
        typed.destroy(); // Cleanup Typed instance
        typed2.destroy(); // Cleanup Typed instance
      };
    }
  }, [game]);
  const dispatch = useAppDispatch();
  // getPage()
  let items = useAppSelector((state) => state.cart.id);
  const handleAdd = (id: number) => {
    dispatch(add(id));
  };
  return (
    <>
      {game ? (
        <div
          className="z-0 md:w-[16rem] w-41 glass text-white cursor-pointer card bg-opacity-25 hover:text-[#fffff] hover:bg-[#232222] md:hover:scale-105 transition-[180ms]"
          key={game.ratings?.id}
        >
          <Link key={game.id} href={`/pages/${game.id}`}>
            <figure>
              <img src={game.background_image} alt="car!" />
            </figure>
          </Link>
          <div className="card-body ">
            <h2 className="card-title text-xl" ref={el}></h2>
            <p className=" text-sm" ref={el2}></p>
            <div className="card-actions justify-end">
              <ul className="flex flex-wrap gap-4">
                {game.platforms &&
                  game.platforms.map((platform) => {
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
                        message = <BsNintendoSwitch />;
                        break;
                      case "macOS":
                        message = <SiMacos />;
                        break;
                    }
                    return (
                      <li className="text-3xl text-white">
                        {message ? message : null}
                      </li>
                    );
                  })}
              </ul>

              <Rating name="read-only" value={game.rating_top} readOnly />
              <button
                onClick={() => {
                  handleAdd(game.id);
                }}
              >
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="card z-0 md:w-[16rem] w-40 glass text-[#f1eeee] cursor-pointer  hover:bg-[#232222] md:hover:scale-105 transition-[180ms]"
          key={1}
        >
          <figure>
            <img
              src={`https://static3.depositphotos.com/1006009/206/i/450/depositphotos_2061693-stock-photo-no-image-available-text-on.jpg`}
              alt="car!"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-xl" ref={el}></h2>
            <p className=" text-sm" ref={el2}></p>
          </div>
        </div>
      )}
    </>
  );
};
export default SingleCard;
