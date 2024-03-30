import React from "react";
import image from "../../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@mui/material";

const Logo = () => {
  const platforms = [
    "PC",
    "PlayStation3",
    "PlayStation4",
    "PlayStation5",
    "Xbox",
    "Xbox One",
    "Xbox Series S/X",
    "iOS",
    "Android",
    "Apple Macintosh",
    "Linux",
    "Nintendo",
    "Web",
  ];
  return (
    <Container>
      <div className="navbar sticky bg-transparent opacity-1 p-5 text-white z-50 shadow-xl border-b-[.1px] border-[#4c4a4a] ">
        <div className="flex-1 gap-0">
          <Image
            src={image}
            width={80}
            height={100}
            className="w-14"
            alt="logo"
          />
          <Link href={"/"} className="btn btn-ghost text-xl md:text-3xl">
            PixelPlayToon
          </Link>
        </div>

        <div className="md:flex-none text-xl justify-center  ">
          <ul className="text-lg menu menu-horizontal px-1 hidden md:flex ">
            <li>
              <Link href={"/Search"}>Search</Link>
            </li>
            <li>
              <details>
                <summary>Platforms</summary>
                <ul className="p-2 m-3 border-2 shadow-sm  border-[#202020] text-[white] bg-transparent rounded-t-none glass">
                  {platforms.map((platform) => (
                    <li className="w-fit p-2 h-10 overflow-hidden scroll-smooth ">
                      <button>{platform}</button>
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
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-black glass text-white ">
                  {/* Sidebar content here */}
                  <li>
                    <Link href={"./Search"}>Search</Link>
                  </li>
                  <li>
                    <details>
                      <summary>Platforms</summary>
                      <ul className="p-2 m-3 border-2 shadow-sm  border-[#202020] text-[white] bg-black rounded-t-none">
                        {platforms.map((platform) => (
                          <li className="w-fit p-2 h-10 overflow-hidden scroll-smooth ">
                            <button>{platform}</button>
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
