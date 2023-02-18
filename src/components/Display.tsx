import { Simulation } from "./Simulation";

export const Display = () => {
    return (
        <div className = "flex flex-col flex-grow bg-stone-200">
            <div className="p-2 text-lg">Dashboard</div>
            <div className="flex h-[50%] bg-green-300 m-8 mt-2 rounded-xl">
                
            </div>
            <Simulation /> 
        </div> 
    );
}