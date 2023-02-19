import { useRef, useState } from "react";
import { useMutation, useQuery } from "../../convex/_generated/react";
import Image from "next/image"; 
import { UploadProfilePic } from "./UploadProfilePic";
import { SidebarProfile } from "./SidebarProfile";
import { FarmInfo } from "./FarmInfo";

export const ProfilePage = () => {
    
    return (

      <div className="flex flex-row h-screen"> 
        <SidebarProfile /> 
        
        <div className="flex flex-row justify-between gap-3 h-screen overflow-hidden">
          <div className="basis-1/2"><FarmInfo/></div>
          <div className="basis-1/2"><UploadProfilePic/></div>
        
        </div>
    </div>
    );
}