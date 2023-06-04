import React from 'react';

import { useParams } from "react-router-dom";


function DogDetails({ dogs }) {

    const { name } = useParams();

    const dog = dogs.filter(dog => dog.name.toLowerCase() === name)[0];

    return (
        <div className="DogDetails">
            <div>
                <p>{dog.name}, Age {dog.age}</p>
                <img src={dog.src} alt={dog.name}/>
                <ul>
                    {dog.facts.map(fact => <li>{fact}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default DogDetails;