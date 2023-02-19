import Image from 'next/image'
export const Crops = () => { 
    return ( 
        <div className="col-span-2">
             <div className="p-2 text-lg">Crops</div>
             <div className="bg-gray-100 rounded-lg m-2 justify-center p-5 pb-8 pt-6 mr-5">
             <Image width="500" height="500" src="/images/pichart.png" alt="Logo"></Image>
             </div>
        </div>
    ); 
}