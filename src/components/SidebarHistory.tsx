import { Home } from "../icons/Home";
import { Profile } from "../icons/Profile";
import Image from "next/image";
import { History } from "../icons/History";
import Link from "next/link";
import { About } from "../icons/About";

export const SidebarHistory = () => {
    return (
        <div className="flex flex-col w-48 text-slate-800 bg-green-300 p-4 rounded-r-xl justify-between ">
            <div className="flex flex-col gap-6 ">
            <Link href="/"><h1 className="text-[32px] pt-6 pb-8">GrazePro</h1></Link>   
                <Link href="/dashboard">
                    <div className="flex flex-row gap-2 p-4">
                        <div className="w-6 h-6"><Home /></div>
                        <span>Home</span>
                    </div> 
                </Link>   
                <Link href="/profile">
                    <div className="flex flex-row gap-2 p-4 ">
                        <div className="w-6 h-6"><Profile /></div>
                        <span>Profile</span>
                    </div>  
                </Link>
                <Link href="/history">
                    <div className="flex flex-row gap-2 bg-white p-4 w-64 rounded-full ">
                        <div className="w-6 h-6"><History/></div>
                        <span>History</span>
                    </div>  
                </Link>  
                <Link href="/about">
                    <div className="flex flex-row gap-2 p-4 ">
                        <div className="w-6 h-6"><About/></div>
                        <span>About</span>
                    </div>  
                </Link>                             
            </div>
 
            <div className="bg-white rounded-xl w-10 relative">
                <Image src="/images/small.png" width="50" height="50" alt="logo"/>
           </div>
        </div>
    );
}