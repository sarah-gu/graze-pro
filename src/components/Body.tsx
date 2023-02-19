import { Display } from "./Display";
import { Header } from "./Header";
import { SidebarHome } from "./SidebarHome";

export const Body = () => { 
    return ( 
        <div className="w-screen h-screen flex flex-row"> 
            <SidebarHome /> 

            <div className="flex flex-col z-10">
                <Display /> 
            </div>
        </div>
    ); 
}