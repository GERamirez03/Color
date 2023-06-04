import React from 'react';
import { Link, Redirect, useParams } from "react-router-dom";

function ColorDetails({ colors }) {

    const { color } = useParams();

    const colorObj = colors.filter(colorObj => colorObj.name === color)[0];

    if (!colorObj) return <Redirect to="/colors"/>;

    const styles = {
        backgroundColor: colorObj.hex,
    };

    return (
        <div className="ColorDetails" style={styles}>
            <h1>{colorObj.name}</h1>
            <Link to={"/colors"}>Back</Link>
        </div>
    );
}

export default ColorDetails;