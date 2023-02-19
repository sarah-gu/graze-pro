
import Image from "next/image";
import Link from "next/link";
export const Landing = () =>{
    return (
        <>

            <div className="md:-left-[28rem] -left-40 -top-40 md:-top-[28rem] bg-green-300 absolute opacity-60 dark:opacity-30 rounded-full w-96 h-96 md:w-[48rem] md:h-[48rem] " />
            <div className="md:-right-[28rem] -right-40 -bottom-40 md:-bottom-[28rem] bg-green-300 absolute opacity-60 dark:opacity-30 rounded-full w-96 h-96 md:w-[48rem] md:h-[48rem]" />
            <div className="absolute inset-0 backdrop-blur-[50px]" />
            <div className="h-screen w-screen flex justify-center items-center flex-row gap-48 px-72 z-20">
                <div className="flex flex-col text-slate-800 z-20 gap-6">
                    <div className="text-[96px] font-bold transition ease-in-out">GrazePro</div>
                    <div className="text-[24px]">Enabling farmers to sustainably optimize their resources. </div>
                    <button className="text-[18px] hover:bg-green-400 bg-green-300 text-slate-800 h-12 w-32"><Link href="/dashboard">Login</Link></button>
                </div>
                <div className="animate-[bounce_8s_infinite]">
                    <Image width="500" height="500" src="/images/grazepro.png" alt="Logo"></Image>

                </div>
            </div>
        </>

    )
}