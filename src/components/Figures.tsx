import { Figure } from "./Figure";


export const Figures = () => { 
    return ( 
        <div className="col-span-3 ml-5">
             <div className="p-2 text-lg">Figures</div>
            <div className="grid grid-cols-3 gap-2">
                <Figure figure="Worked Hectares" number="323 ha"/>
                <Figure figure="Water Usage" number="15,028 L"/>
                <Figure figure="Fertilizer Usage" number="987 kg"/>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <Figure figure="Fuel Consumed" number="4,230 L"/>
                <Figure figure="Working time" number="450 Lh"/>
                <Figure figure="Crop yield" number="1,983 k"/>
            </div>
            

        </div>
    ); 
}