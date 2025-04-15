import { getImageUrl } from "../utils.jsx";

export function ListItems({people}) {
    const scientists = people.map(person => 
        <li key={person.id}>
            <img src={getImageUrl(person)} />
            <p>
                <b>{person.name}</b> {`${person.profession} known for ${person.accomplishment}`}
            </p>
        </li>
    );

    return (
        <ul>
            {scientists}
        </ul>
    )
};
