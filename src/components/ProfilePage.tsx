import { useRef, useState } from "react";
import { useMutation, useQuery } from "../../convex/_generated/react";
import Image from "next/image"; 
import { UploadProfilePic } from "./UploadProfilePic";
import { SidebarProfile } from "./SidebarProfile";
import { FarmInfo } from "./FarmInfo";

export const ProfilePage = () => {
    
    return (

      <div className="w-screen h-screen flex flex-row"> 
        <SidebarProfile /> 
        
        <div className="grid grid-cols-5 gap-3">
        <FarmInfo/>
        <UploadProfilePic/>
        </div>
    </div>
    );
}