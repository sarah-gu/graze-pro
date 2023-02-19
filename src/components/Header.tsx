import Image from "next/image"; 
import { Home } from "../icons/Home";
import { Profile } from "../icons/Profile";
export const Header = () => {
    return (
        <div className="flex flex-row justify-between items-center bg-green-300 h-32">
            <div className="flex flex-row p-3">

            </div>
            <div className="flex flex-row bg-white rounded-lg items-center gap-4 px-4 mr-4">
                <div className="h-10 w-10">   <Home /> </div>
                <div className="h-10 w-10">   <Profile /> </div>
                <div className="h-10 w-10 rounded-full bg-gray-500 m-2"></div>
                <div>Welcome</div>
            </div>
        </div>
    );
}