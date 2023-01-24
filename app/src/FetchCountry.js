import React, { useState, useEffect } from "react";
import axios from "axios";

function CountryData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "http://api.worldbank.org/v2/country?format=json"      );
      setData(response.data[1]);
    }
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((item, index) => (
        <li key={index}>
          {item.name} - Income Level: {item.incomeLevel.value}
          </li>
      ))}
      </ul>
    </div>
  );
}

export default CountryData;