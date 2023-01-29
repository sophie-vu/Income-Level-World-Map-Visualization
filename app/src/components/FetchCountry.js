import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";
/**
 * Calls the World Bank API and returns the data in a HTML array.
*/
function CountryData() {
  const [data, setData] = useState([]);
  useEffect(() => {
  const url = "http://api.worldbank.org/v2/country?format=json";
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json[1]);
      setData(json[1]);
    } catch (error) {
      console.log("error", error);
    }
    // axios.get("http://api.worldbank.org/v2/country?format=json");
  };
  fetchData();
}, []);
  // useEffect(() => {
  //   async function fetchData() {
  //     setData(response.data[1]);
  //   }
  //   fetchData();
  // }, []);

  const Container = styled.div`
  text-align: center;
  input {
    padding: 10px;
    border-radius: 5px;
    border-shadow: 0;
    border-style: solid;
    font-size: 16px;
    &:focus {
      outline: none;
    }
  }
`;
  // Return the formatted data in HTML
  return (
    <div>
      <Container> 
      <ul>
        {data.map((item, index) => (
        <li key={index}>
          {item.name} - {item.iso2Code} - Income Level: {item.incomeLevel.value}
          </li>
      ))}
      </ul>
      </Container>
    </div>
  );
}

export default CountryData;