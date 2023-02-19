import grazing from './grazing.html'

export const Simulation = () => {
    return (
        <div dangerouslySetInnerHTML={ {__html: grazing } }/>
    ); 
}