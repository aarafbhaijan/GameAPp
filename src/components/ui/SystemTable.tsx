import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
  plat: PlatsInfo;
}
export default function ControlledAccordions({ plat }: ChildProps) {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  let logo;
  switch (plat.platform.name) {
    case "PC":
      logo = <FaWindows />;
      break;
    case "PlayStation 5":
      logo = <SiPlaystation5 />;
      break;
    case "Xbox One":
      logo = <FaXbox />;
      break;
    case "Xbox Series S/X":
      logo = <FaXbox />;
      break;
    case "PlayStation 4":
      logo = <SiPlaystation4 />;
      break;
    case "PlayStation 3":
      logo = <SiPlaystation3 />;
      break;
    case "Nintendo Switch":
      logo = <BsNintendoSwitch />;
      break;
    case "macOS":
      logo = <SiMacos />;
      break;
    case "Linux":
      logo = <FaLinux />;
      break;
    case "Xbox 360":
      logo = <LiaXbox />;
      break;
    case "Android":
      logo = <DiAndroid />;
      break;
    case "PlayStation":
      logo = <FaPlaystation />;
      break;
    case "Apple Macintosh":
      logo = <FaApple />;
      break;
    case "iOS":
      logo = <PiAppleLogoDuotone />;
      break;
    case "Xbox":
      logo = <TbBrandXbox />;
      break;
    case "PS Vita":
      logo = <SiPlaystationvita />;
      break;
    case "Web":
      logo = <GiSpiderWeb />;
      break;
    case "Wii U":
      logo = <SiWiiu />;
      break;
    case "Nintendo 3DS":
      logo = <SiNintendo3Ds />;
      break;
  }

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="z-5 w-full ">
      <Accordion
        className="glass card bg-inherit gap-2 text-white font-bold flex flex-col "
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          className="text-white flex  gap-2 mx-3"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          
        >
          <Typography className="text-5xl" sx={{ width: "23%" }}>
            {logo}
          </Typography>
          <Typography sx={{ width: "33%" }}>{plat.platform.name}</Typography>
          <Typography className="text-white " sx={{ width: "43%", gap: "15%" }}>
            See Requirements!
          </Typography>
          {/* <Typography sx={{ color: "text.secondary" }}> </Typography> */}
        </AccordionSummary>
        <AccordionDetails className="">
          <Typography>
            <div className="text-black">
              <label htmlFor="" className="text-[white]  font-bold">
                Minimum System
              </label>
              {plat.requirements.minimum ? (
                <div
                  className="text-[#bbb8b8]"
                  dangerouslySetInnerHTML={{
                    __html: plat.requirements.minimum,
                  }}
                />
              ) : (
                <h1 className="text-[#a7a4a4] w-fit">No Requirements Found!</h1>
              )}
            </div>
          </Typography>
          <Typography>
            <div>
              <label htmlFor="" className="text-white font-bold">
                Recommended System
              </label>
              {plat.requirements.recommended ? (
                <div
                  className="text-[#bbb8b8]"
                  dangerouslySetInnerHTML={{
                    __html: plat.requirements.recommended,
                  }}
                />
              ) : (
                <h1 className="text-[#a7a4a4]">No Requirements Found!</h1>
              )}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
