import React, { useState } from "react";
import Navbar from "./navbar";
import ItemList from "./ItemList";

const App = () => {
  const getBackground = () => {
    const localColor = localStorage.getItem("bg-color");
    if (localColor) {
      return localColor;
    } else {
      return "#ffffff";
    }
  };

  const [background, setBackground] = useState(getBackground());

  const handleColorChange = (e) => {
    setBackground(e.target.value);
    localStorage.setItem("bg-color", e.target.value);
  };

  return (
    <div style={{ backgroundColor: background, minHeight: "100vh" }}>
      <Navbar handleColorChange={handleColorChange} defaultValue={background} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 w-100">
            <ItemList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
