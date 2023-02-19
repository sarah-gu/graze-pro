
import { Crops } from "./Crops";
import { Figures } from "./Figures";
import { Header } from "./Header";
import { SidebarHistory } from "./SidebarHistory";
import { useQuery } from "../../convex/_generated/react";
import { useMutation } from "../../convex/_generated/react";


export const Data = () => { 
    // const data = useQuery("listSimulations") || [];
    // const sendSimulation = 
    const listItems = [{time: "02/01/23", cowhealth:"81%", grasshealth: "89%", numberpaddocks:"3", rotationtime:"1 day"}];
    return ( 
        <div className="w-screen h-screen flex flex-col"> 
            <div className="flex flex-row flex-grow">
                <SidebarHistory /> 
                <div className = "flex flex-col flex-grow">
                    <div className="p-2 page-heading">Simulation History</div>
                    
                    <div className='flex flex-row justify-between mb-8'>
                        <div className="basis-3/5">  <Figures/></div>

                        <div className="basis-2/5"><Crops/></div>
                    </div>
                    <div className="flex flex-row justify-between mx-9 mb-3 font-bold">
                        <div >Date</div>
                        <div>Cow Health</div>
                        <div>Grass Health</div>
                        <div>Rotation Time</div>
                    </div>
                    <div className="flex flex-col mb-2 mx-6 bg-gray-100 h-12 p-3 rounded-lg">
                        <div className="flex flex-row justify-between">
                            <div >02/19/23</div>
                            <div>92%</div>
                            <div>79%</div>
                            <div>3 days</div>
                        </div>
                    </div>
                    <div className="flex flex-col mb-2  mx-6 bg-gray-100 h-12 p-3 rounded-lg">
                        <div className="flex flex-row justify-between">
                            <div >02/12/23</div>
                            <div>84%</div>
                            <div>91%</div>
                            <div>4 days</div>
                        </div>
                    </div>
                    <div className="flex flex-col mb-2  mx-6 bg-gray-100 h-12 p-3 rounded-lg">
                        <div className="flex flex-row justify-between">
                            <div >02/06/23</div>
                            <div>90%</div>
                            <div>95%</div>
                            <div>4 days</div>
                        </div>
                    </div>
                    <div className="flex flex-col mb-2  mx-6 bg-gray-100 h-12 p-3 rounded-lg">
                        <div className="flex flex-row justify-between">
                            <div >02/01/23</div>
                            <div>85%</div>
                            <div>82%</div>
                            <div>3 days</div>
                        </div>
                    </div>
                    <div className="flex flex-col mb-2  mx-6 bg-gray-100 h-12 p-3 rounded-lg">
                        <div className="flex flex-row justify-between">
                            <div >01/29/23</div>
                            <div>87%</div>
                            <div>80%</div>
                            <div>3 days</div>
                        </div>
                    </div>
             </div> 
            </div>
        </div>
    ); 
}