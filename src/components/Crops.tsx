import Image from 'next/image'
export const Crops = () => { 
    return ( 
        <div className="flex flex-col h-full mr-4">
             <div className="p-2 text-lg">Crops</div>
             <div className="bg-gray-100 h-full rounded-lg m-2 p-8 centered relative">
                <Image width="350" height="350" src="/images/pichart.png" alt="Logo"></Image>
             </div>
        </div>
    ); 
}