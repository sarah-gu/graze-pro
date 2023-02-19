import { Display } from "./Display";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Body = () => { 
    return ( 
        <div className="w-screen h-screen flex flex-row"> 
            <Sidebar /> 

            <div className="flex flex-col z-10">
                <Display /> 
            </div>
        </div>
    ); 
}