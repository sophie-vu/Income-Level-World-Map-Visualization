import './App.css';
import CountryData from './FetchCountry.js';
import { useEffect, useState } from 'react';
// Logic of the app / where you nest components
function App() {
  return (
    <div className="App">
        <CountryData/>
    </div>
  );
}

export default App;
