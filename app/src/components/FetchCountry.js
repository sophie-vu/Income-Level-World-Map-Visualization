import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";

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