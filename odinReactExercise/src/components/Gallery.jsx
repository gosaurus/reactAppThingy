import { useState } from "react";
import { sculptureList } from "../assets/data";

export default function Gallery(){
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    let sculpture = sculptureList[index];

    const handleNextClick = () => {
        setIndex(index + 1);
    };

    const handleShowMore = () => {
        setShowMore(!showMore)
    };

    return (
        <div>
            <button onClick={handleNextClick}>Next</button>
            <h1>{sculpture.name}</h1>
            <button onClick={handleShowMore}>Show more</button>
            {showMore && <p>{sculpture.description}</p>}
        </div>
    )
}