import { Route, Routes, Link } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Home";
import SelectedRegion from "./SelectedRegion";

function App() {
  const [regions, setRegions] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<Home regions={regions} setRegions={setRegions} />}
          />
          <Route
            path="/SelectedRegion"
            // regions={regions}
            // setRegions={setRegions}
            element={<SelectedRegion />}
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
