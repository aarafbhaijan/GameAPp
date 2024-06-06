"use client";
import React, { useEffect, useState } from "react";
import image from "../../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@mui/material";
import "./logo.css";
import { FaHeart, FaList } from "react-icons/fa6";
import { FaHome, FaSearch } from "react-icons/fa";
import FavModal from "./FavModal";
const Logo = () => {
  const [plats, setPlats] = useState<any>([]);
  console.log("platforms", plats);

  useEffect(() => {
    const getPlats = async () => {
      const data = await fetch(
        "https://api.rawg.io/api/platforms?key=bade7e318e0545a4a034f3b3d23f12bc"
      );
      const { results } = await data.json();
      setPlats(results);
    };
    getPlats();
  }, []);
  return (
    <Container>
      <div className="navbar  sticky bg-transparent opacity-1 p-5 text-white z-50 shadow-xl border-b-[.1px] border-[#4c4a4a] ">
        <div className="flex-1 p-[-1]">
          <Image
            src={image}
            width={80}
            height={100}
            className="w-14"
            alt="logo"
          />
          <Link
            href={"/"}
            className="btn btn-ghost text-2xl md:text-3xl uppercase"
          >
            PixelPlayToon
          </Link>
        </div>

        <div className="md:flex-none text-xl justify-center   ">
          <ul className="text-lg menu menu-horizontal px-1 hidden md:flex ">
            <li>
              <Link href={"/"}>
                <FaHome />
                Home
              </Link>
            </li>
            <li>
              <FavModal />
            </li>
            <li>
              <Link href={"/Search"}>
                <FaSearch />
                Search
              </Link>
            </li>
            <li>
              <details>
                <summary>
                  <FaList />
                  Platforms
                </summary>
                <ul className="p-2 m-3 border-2 shadow-sm  border-[#202020] text-[white] bg-transparent rounded-t-none glass h-[50vh] overflow-scroll no-bar">
                  {plats.map((plat: any) => (
                    <li className="w-fit p-2 h-10 overflow-hidden scroll-smooth ">
                      <button>{plat.name}</button>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
          <ul>
            <div className="drawer drawer-end w-20%">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content md:hidden ">
                {/* Page content here */}

                <div className="drawer-content">
                  {/* Page content here */}
                  <label
                    htmlFor="my-drawer-4"
                    className="drawer-button cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
              </div>
              <div className="drawer-side ">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-black glass text-white ">
                  {/* Sidebar content here */}
                  <li>
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link href={"/Search"}>Search</Link>
                  </li>
                  <li>
                    <details>
                      <summary>Platforms</summary>
                      <ul className="p-2 m-3 border-2 shadow-sm  border-[#202020] text-[white] bg-black rounded-t-none h-[50vh] overflow-scroll no-bar">
                        {plats.map((plat: any) => (
                          <li
                            key={plat.id}
                            className="w-[fit] p-2 h-10 overflow-hidden bg-inherit scroll-smooth "
                          >
                            <button>{plat.name}</button>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Logo;
