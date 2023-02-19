
import { Crops } from "./Crops";
import { Figures } from "./Figures";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Data = () => { 
    return ( 
        <div className="bg-gray-100 w-screen h-screen flex flex-col"> 

            <Header />
            <div className="flex flex-row flex-grow">
                <Sidebar /> 
                <div className = "flex flex-col flex-grow bg-stone-200">
                <div className="p-2 text-lg">Simulation History</div>
                
                <div className='grid grid-cols-5 gap-3'>
                    <Figures/>
                    <Crops/>
                </div>
             </div> 
            </div>
        </div>
    ); 
}