import React, {FunctionComponent, PropsWithChildren} from 'react'
interface FigureProps {
    figure: string,
    number: string
}
export const Figure= ({ figure, number }:FigureProps) => { 
    return ( 
        <div className="bg-gray-100 rounded-lg m-2 justify-center flex flex-col flex-grow">
             
            <div className="text-md p-3 centered pt-16">{figure} </div>
            <div className="figures-num p-3 centered pb-16"> {number} </div>
        </div>
    ); 
}