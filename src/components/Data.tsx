
import { Crops } from "./Crops";
import { Figures } from "./Figures";
import { Header } from "./Header";
import { SidebarHistory } from "./SidebarHistory";
import { useQuery } from "../../convex/_generated/react";
import { useMutation } from "../../convex/_generated/react";
import Image from "next/image";


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
                    
                    <div className="flex flex-row flex-grow p-4 bg-gray-100 m-4 rounded-lg">
                        
                        <div className="basis-1/4"> 
                        <div className="page-heading-2 ml-6"> Simulation 1 </div>
                            <div className="pl-2 text-lg">Paddock number and Rotation time</div>
                            <ul>
                                <li>
                                    Time: 10 ticks
                                </li>
                                <li>
                                    Paddocks: 1-6
                                </li>
                                <li>
                                    Rotation Time: 3-7 days
                                </li>
                                <li>
                                    Optimal: 2 paddocks, 4 days
                                </li>
                            </ul>
                        </div>
                        <div className="basis-1/4 mt-7 m-10"> 
                        <div className="m-3 centered">Heat plot</div>
                            <Image width="350" height="350" src="/images/health_plot.png" alt="Logo"></Image>
                        </div>
                        <div className="basis-3/5">
                            <div className="flex flex-row justify-between mx-9 mb-3 font-bold">
                                <div >Date</div>
                                <div>Cow Health</div>
                                <div>Grass Health</div>
                                <div>Rotation Time</div>
                            </div>
                            <div className="flex flex-col mb-2 mx-6 h-12 p-3 bg-white rounded-lg">
                                <div className="flex flex-row justify-between">
                                    <div >02/19/23</div>
                                    <div>92%</div>
                                    <div>79%</div>
                                    <div>3 days</div>
                                </div>
                            </div>
                            <div className="flex flex-col mb-2  mx-6 h-12 p-3 bg-white rounded-lg">
                                <div className="flex flex-row justify-between">
                                    <div >02/12/23</div>
                                    <div>84%</div>
                                    <div>91%</div>
                                    <div>4 days</div>
                                </div>
                            </div>
                            <div className="flex flex-col mb-2  mx-6 h-12 p-3 bg-white rounded-lg">
                                <div className="flex flex-row justify-between">
                                    <div >02/06/23</div>
                                    <div>90%</div>
                                    <div>95%</div>
                                    <div>4 days</div>
                                </div>
                            </div>
                            <div className="flex flex-col mb-2  mx-6 h-12 p-3 bg-white rounded-lg">
                                <div className="flex flex-row justify-between">
                                    <div >02/01/23</div>
                                    <div>85%</div>
                                    <div>82%</div>
                                    <div>3 days</div>
                                </div>
                            </div>
                            <div className="flex flex-col mb-2  mx-6 h-12 p-3 bg-white rounded-lg">
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
            </div>
        </div>
    ); 
}