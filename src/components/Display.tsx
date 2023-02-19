import { Simulation } from "./Simulation";

export const Display = () => {
    return (
        <div className = "flex flex-col flex-grow bg-stone-200">
            <div className="p-2 text-lg">Dashboard</div>
            <Simulation /> 
        </div> 
    );
}