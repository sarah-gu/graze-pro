import { Simulation } from "./Simulation";

export const Display = () => {
    return (
        <div className = "flex flex-col flex-grow">
            <div className="p-2 text-lg page-heading">Simulation</div>
            <Simulation /> 
        </div> 
    );
}