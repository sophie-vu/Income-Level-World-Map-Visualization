import React from "react";
import { VectorMap } from "react-jvectormap";
import styled from "@emotion/styled";
import { getCode } from "./CountryList";
/**
 * Functional code for the map component. Doesn't have the code to display the income levels yet. 
*/
class Map extends React.Component {
  state = {
    countriesCodesArray: [],
    countriesNamesArray: [],
    data: {},
    color: "#00000"
  };

  getCountriesCodesList = () => {
    const { countriesNamesArray } = this.state;
    for (let name in countriesNamesArray) {
      console.log(name);
    }
    const list = countriesNamesArray.map(name => getCode(name));
    this.setState(
      {
        countriesCodesArray: list
      },
      () => this.makeMapDataStructure()
    );
    console.log("test")
  };

  // getCountriesNamesList = () => {
  //   const { countriesCodesArray } = this.state;
  //   const list = countriesCodesArray.map(code => getName(code));
  //   console.log(list);
  //   this.setState(
  //     {
  //       countriesNamesArray: list
  //     },
  //     () => this.makeMapDataStructure()
  //   );
  // };

  makeMapDataStructure = () => {
    const { countriesCodesArray } = this.state;
    let obj = {};
    //{CN: 5, MX: 5, TX: 5}
    for (let countryCode in countriesCodesArray) {
      obj[countryCode] = "test"
    }
    console.log(obj)
    this.setState({
      data: obj
    });
  };

  render() {
    const { countriesCodesArray, data, title, titleSet, color } = this.state;
    // console.log(data)
    return (
      <div>
        <VectorMap
          map = {"world_mill"}
          backgroundColor = "transparent"
          zoomOnScroll = {false}
          containerStyle = {{
            width: "100%",
            height: "520px"
          }}
          containerClassName = "map"
          regionStyle = {{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer"
            },
            selectedHover: {}
          }}
          regionsSelectable={false}
          series = {{
            regions: [
              {
                values: data,
                scale: ["#146804", color], 
                normalizeFunction: "polynomial"
              }
            ]
          }}
        />
      </div>
    );
  }
}

export default Map;

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