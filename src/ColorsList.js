import React from 'react';
import { Link } from "react-router-dom";

function ColorsList({ colors }) {
    return (
        <div className="ColorsList">
            <ul>
                {colors.map(color => (
                    <li><Link to={`/colors/${color.name}`}>{color.name}</Link></li>
                ))}
            </ul>
            <Link to={"/colors/new"}>Add New Color</Link>
        </div>
    )
}

export default ColorsList;