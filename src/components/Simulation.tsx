import grazing from "./grazing.html";

export const Simulation = () => {
    return (
        <div className="centered bg-green-300 rounded-lg m-5" dangerouslySetInnerHTML= { {__html: grazing } }/>
    ); 
}