import { Home } from "../icons/Home";
import { Profile } from "../icons/Profile";
import Image from "next/image";

export const Sidebar = () => {
    return (
        <div className="flex flex-col w-48 text-slate-800 bg-green-300 p-4 rounded-r-xl justify-between ">
            <div className="flex flex-col gap-6 ">
                <h1 className="text-[32px] pt-6 pb-8">GrazePro</h1>

                <div className="flex flex-row gap-2 bg-white p-4 w-64 rounded-full">
                    <div className="w-6 h-6"><Home /></div>
                    <span>Home</span>
                </div>    
                <div className="flex flex-row gap-2 p-4 ">
                    <div className="w-6 h-6"><Profile /></div>
                    <span>Profile</span>
                </div>   
            </div>
 
            <div className="bg-white rounded-xl w-14 h-50 relative">
                <Image src="/images/small.png" width="50" height="50" alt="logo"/>
           </div>
        </div>
    );
}