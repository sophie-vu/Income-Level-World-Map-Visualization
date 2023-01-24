import React, { useState, useEffect } from 'react';

function CountryData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://api.worldbank.org/v2/country/br?format=json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data && data.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          {/* <p>Income Level: {item.incomeLevel.value}</p> */}
          {/* <p>Region: {item.region.value}</p> */}
        </div>
      ))}
    </div>
  );
}

export default CountryData;
