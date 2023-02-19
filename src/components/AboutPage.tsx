import { useRef, useState } from "react";
import { useMutation, useQuery } from "../../convex/_generated/react";
import Image from "next/image"; 
import { UploadProfilePic } from "./UploadProfilePic";
import { SidebarAbout} from "./SidebarAbout";
import { FarmInfo } from "./FarmInfo";

export const AboutPage = () => {
    
    return (

      <div className="w-screen h-screen flex flex-row"> 
        <SidebarAbout /> 
        <div className="p-2 page-heading">About</div>
        <div className="flex flex-row">
          <div className="basis-1/2 centered-all">

            <Image width="1000" height="1000" src="/images/rotate.gif" alt="Logo"></Image>
          </div>
          <div className="basis-1/2 centered-all m-20 p-20">
            
            <div >
              The farming practice of rotational grazing entails transferring livestock across paddocks, so that only select paddocks are grazed at any given time, while others remain unused. In contrast, continuous grazing maintains one paddock and disregards the need for resting periods for the forage. During our exploration of these techniques, we identified an optimization challenge in determining the optimal timing for paddock switching that would promote cattle health and grass regrowth. To tackle this issue, we developed a simulation model, GrazePro.
            </div>
          </div>
        </div>
    </div>
    );
}