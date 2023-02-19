import { Home } from "../icons/Home";
import { Profile } from "../icons/Profile";

export const Sidebar = () => {
    return (
        <div className="flex flex-col gap-8 w-16 text-gray-200 bg-emerald-900 justify-center items-center">
            <div><Home /> </div>
            <div><Profile /> </div>
        </div>
    );
}