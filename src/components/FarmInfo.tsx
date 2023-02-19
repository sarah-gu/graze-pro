

export const FarmInfo = () => {
    return (
        <div className = "col-span-2 w-100 ml-5">
            <div className="p-2 text-lg page-heading">Profile</div>
            <h1 className="left-align">
                Address
            </h1>
            <h2 className="left-align">
                1543 Dripping Springs Rd, Dendron VA 23839
            </h2>
            <h1 className="left-align">
                Total Hectares
            </h1>
            <h2 className="left-align">
                1,024
            </h2>
            <h1 className="left-align">
                Climate Type
            </h1>
            <ul className="left-align  ml-8">
                <li> - Humid </li>
                <li> - Subtropical </li>
            </ul>
            <h1 className="left-align">
                Type of Cattle
            </h1>
            <ul className="left-align ml-8">
                <li> - Black Angus, Red Angus </li>
                <li> - Charolais </li>
                <li> - Horned and Polled Hereford </li>
            </ul>
            <h1 className="left-align">
                Vegetation
            </h1>
            <ul className="left-align  ml-8">
                <li> - Alfalfa </li>
                <li> - Birdsfoot trefoil </li>
                <li> - Clovers </li>
                <li> - Shrubs </li>
            </ul>

        </div> 
    );
}