import React, { useState } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import ColorsList from "./ColorsList";
import ColorForm from "./ColorForm";
import ColorDetails from "./ColorDetails";

function App({ colors }) {
  const [colorsArr, setColorsArr] = useState(colors);

  const addColor = color => {
    let newColor = { ...color, key: color.hex }
    setColorsArr(colorsArr => [newColor, ...colorsArr])
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path="/colors">
            <ColorsList colors={colorsArr}/>
          </Route>

          <Route exact path="/colors/new">
            <ColorForm addColor={addColor}/>
          </Route>

          <Route path="/colors/:color">
            <ColorDetails colors={colorsArr}/>
          </Route>

          <Redirect to="/colors"/>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  colors: [
    {
      name: "red",
      hex: "#ff0000",
      key: "#ff0000"
    },
    {
      name: "green",
      hex: "#00ff00",
      key: "#00ff00"
    },
    {
      name: "blue",
      hex: "#0000ff",
      key: "#0000ff"
    },
  ]
}

export default App;
