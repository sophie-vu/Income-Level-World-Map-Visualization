import React from "react";
import Map from "./components/WorldMap.js";
import FetchCountry from "./components/FetchCountry.js"

const App = () => {
  // Renders the World Map component and the World Bank API data.
  return (
    <div>
      <Map />
      <br></br>
      <FetchCountry/>
    </div>
  );
};

export default App;