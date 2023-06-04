import React from 'react';
import "./Nav.css";

import { NavLink } from "react-router-dom";


const ACTIVE_STYLES = {
    fontWeight: "bold",
    color: "black",
};

function Nav({ dogs }) {
    // gets the dogs' names passed as props
    // click on NAVLINK of NAV component to go to dog's details pages

    return (
        <nav className="Nav">
            <ul>
            {dogs.map(dog => (
                <li><NavLink classname="DogNavLink" exact to={`/dogs/${dog.toLowerCase()}`}>{dog}</NavLink></li>
            ))}
            </ul>
        </nav>
    )
}

export default Nav;