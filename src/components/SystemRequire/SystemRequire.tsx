"use client";
import React from "react";
import { SiPlaystation5 } from "react-icons/si";
import { SiPlaystation3 } from "react-icons/si";
import { SiPlaystation4 } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { SiMacos } from "react-icons/si";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaLinux } from "react-icons/fa";
import { LiaXbox } from "react-icons/lia";
import { DiAndroid } from "react-icons/di";
import { FaPlaystation } from "react-icons/fa6";
import { TbBrandXbox } from "react-icons/tb";
import { FaApple } from "react-icons/fa";
import { PiAppleLogoDuotone } from "react-icons/pi";
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
  requirements: Requirements;
}
interface ChildProps {
  plats: PlatsInfo[] | undefined;
}
const SystemRequire = ({ plats }: ChildProps) => {
  // console.log(plats[0].requirements_en.minimum);

  return (
    <div className="text-[grey] flex flex-col gap-10 items-center  w-full h-[100vh]">
      <div className="flex gap-5 w-full flex-wrap justify-center ">
        <label className="md:text-xl text-lg uppercase self-center p-2  text-center text-white font-bold block w-full glass">
          Systems
        </label>
        {plats?.map((plat) => {
          let message;
          switch (plat.platform.name) {
            case "PC":
              message = <FaWindows />;
              break;
            case "PlayStation 5":
              message = <SiPlaystation5 />;
              break;
            case "Xbox One":
              message = <FaXbox />;
              break;
            case "Xbox Series S/X":
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
            case "Linux":
              message = <FaLinux />;
              break;
            case "Xbox 360":
              message = <LiaXbox />;
              break;
            case "Android":
              message = <DiAndroid />;
              break;
            case "PlayStation":
              message = <FaPlaystation />;
              break;
            case "Apple Macintosh":
              message = <FaApple />;
              break;
            case "iOS":
              message = <PiAppleLogoDuotone />;
              break;
            case "Xbox":
              message = <TbBrandXbox />;
              break;
          }
          return (
            <h1 className="md:text-5xl text-5xl glass text-white p-3 justify-self-start  ">
              {message ? message : null}
            </h1>
          );
        })}
      </div>
      <div className="w-full">
        {plats && (
          <h1 className="glass text-2xl text-white p-3 uppercase text-center font-bold mb-4 jus">
            System Requirements
          </h1>
        )}
        <div className="flex w-full gap-3 justify-center h-fit">
          {plats &&
            plats?.map((plat) => {
              return (
                <div>
                  {/* <h1>{plat.requirements_en.minimum!=null?plat.requirements_en.minimum:''}</h1> */}
                  {plat.requirements?.minimum && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: plat.requirements.minimum,
                      }}
                    />
                  )}
                </div>
              );
            })}

          {plats &&
            plats?.map((plat) => {
              return (
                <div>
                  {plat.requirements?.recommended && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: plat.requirements.recommended,
                      }}
                    />
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SystemRequire;
