
import { Crops } from "./Crops";
import { Figures } from "./Figures";
import { Header } from "./Header";
import { SidebarHistory } from "./SidebarHistory";
import { useQuery } from "../../convex/_generated/react";
import { useMutation } from "../../convex/_generated/react";


export const Data = () => { 
    const data = useQuery("listSimulations") || [];
    const listItems = data.map((i) =>
    <li>{i.cowhealth}</li>
    );
    return ( 
        <div className="w-screen h-screen flex flex-col"> 
            <div className="flex flex-row flex-grow">
                <SidebarHistory /> 
                <div className = "flex flex-col flex-grow">
                    <div className="p-2 text-lg page-heading">Simulation History</div>
                    
                    <div className='grid grid-cols-5 gap-3 flex flex-col flex-grow'>
                        <Figures/>
                        <Crops/>
                    </div>
                    <div>{listItems}</div>
             </div> 
            </div>
        </div>
    ); 
}