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
/**
 * In this example, we are using the axios library to make a GET request to the World Bank API. The endpoint we are using is for retrieving all countries income levels. The response is then stored in the data state variable, and we are using the map function to iterate through the response and print out each item in the JSON format.

You will need to provide your own API key if you want to use the World Bank API.

Note: Depending on your use case and the amount of data returned, it may be more appropriate to paginate the data and display it in a more user-friendly way.
It's also worth noting that this is a simple example and in a real-world scenario, you would also need to handle errors, loading states, and other concerns.
 */