import { Display } from "./Display";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Body = () => { 
    return ( 
        <div className="bg-gray-100 w-screen h-screen flex flex-col"> 

            <Header />
            <div className="flex flex-row flex-grow">
                <Sidebar /> 
                <Display /> 
            </div>
        </div>
    ); 
}