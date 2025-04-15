import { people } from "../assets/data.jsx";
import { ListItems } from "./listItems.jsx";

function Scientists() {
    const chemists = people.filter(person => 
        person.profession === "chemist");
    
    const otherScientists = people.filter(person => 
        person.profession !== "chemist");

    console.log(chemists);
    console.log(otherScientists);

    return (
        <div>
            <h1>Chemists</h1>
            <ListItems people={chemists}/>
            <h1>Other scientists</h1>
            <ListItems people={otherScientists}/>
        </div>
    )
};

export default Scientists;

