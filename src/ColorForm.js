import React, { useState } from 'react';

import { useHistory } from "react-router-dom";

function ColorForm({ addColor }) {

    const INITIAL_STATE = { name: "", hex: "#000000" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const history = useHistory();

    const handleSubmit = evt => {
        evt.preventDefault();
        addColor(formData);
        // setFormData(INITIAL_STATE);
        // HANDLE REDIRECT UPON SUBMITTING COLOR!
        history.push("/colors");
    };

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    return (
        <div className="ColorForm">
            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                
                <label htmlFor="hex">Color: </label>
                <input
                    type="color"
                    id="hex"
                    name="hex"
                    value={formData.hex}
                    onChange={handleChange}
                />

                <button>Add Color</button>

            </form>
        </div>
    )
}

export default ColorForm;