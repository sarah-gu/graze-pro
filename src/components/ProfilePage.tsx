import { useRef, useState } from "react";
import { useMutation, useQuery } from "../../convex/_generated/react";
import Image from "next/image"; 
import { UploadProfilePic } from "./UploadProfilePic";
import { SidebarProfile } from "./SidebarProfile";

export const ProfilePage = () => {
    
    return (

      <div className="w-screen h-screen flex flex-row"> 
        <SidebarProfile /> 

        <div className="flex flex-col z-10">
        <UploadProfilePic/>
        </div>
    </div>
    );
}