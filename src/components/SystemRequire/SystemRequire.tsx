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
import { SiPlaystationvita } from "react-icons/si";
import { GiSpiderWeb } from "react-icons/gi";

import { SiWiiu } from "react-icons/si";
import ControlledAccordions from "../ui/SystemTable";
import { SiNintendo3Ds } from "react-icons/si";
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
  return (
    <div className="text-[grey]  flex flex-col gap-10 items-center  w-full min-h-[100vh] max-h-fit">
      <div className="flex gap-5 w-fit flex-wrap justify-center ">
        <label className="md:text-xl card text-lg uppercase self-center   text-center text-white font-bold block w-full glass">
          Platforms
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
              message = <BsNintendoSwitch />;
              break;
            case "macOS":
              message = <SiMacos />;
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
            case "PS Vita":
              message = <SiPlaystationvita />;
              break;
            case "Web":
              message = <GiSpiderWeb />;
              break;
            case "Wii U":
              message = <SiWiiu />;
              break;
            case "Nintendo 3DS":
              message = <SiNintendo3Ds />;
              break;
          }
          return (
            <h1 className="md:text-5xl card text-5xl glass text-white p-3 justify-self-start  ">
              {message ? message : null}
            </h1>
          );
        })}
      </div>
      <div className="w-full ">
        {plats && (
          <h1 className="glass card text-2xl text-white p-3 uppercase text-center font-bold mb-4 jus">
            System Requirements
          </h1>
        )}
        <div className="w-full min-h-[100vh] max-h-fit">
          {plats?.map((plat) => (
            <ControlledAccordions plat={plat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemRequire;
