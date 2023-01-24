import React from "react";
import { VectorMap } from "react-jvectormap";
import styled from "@emotion/styled";
const { getName } = require("country-list");
/**
 * Functional code for the map component. Doesn't have the code to display the income levels yet. 
*/
class Map extends React.Component {
  state = {
    countriesCodesArray: [],
    countriesNamesArray: [],
    // countriesIncomeLevelsArray: [],
    data: {},
    title: "",
    titleSet: false,
    color: "#48aeef"
  };

  handleChange = e => {
    this.setState({
      title: e.target.value
    });
    console.log(e.target.value);
  };

  handleFormSubmit = () => {
    this.setState({
      titleSet: true
    });
  };

  getCountriesNamesList = () => {
    const { countriesCodesArray } = this.state;
    const list = countriesCodesArray.map(code => getName(code));
    console.log(list);
    this.setState(
      {
        countriesNamesArray: list
      },
      () => this.makeMapDataStructure()
    );
  };

  // getCountriesNamesList = () => {
  //   const { countriesCodesArray } = this.state;
  //   const list = countriesCodesArray.map(code => getName(code));
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
    countriesCodesArray.forEach(countryCode => (obj[countryCode] = 5));
    this.setState({
      data: obj
    });
  };

  render() {
    const { countriesNamesArray, data, title, titleSet, color } = this.state;
    // console.log(data)
    return (
      <div>
        <Container>
          {titleSet ? (
            <h3>{title}</h3>
          ) : (
            <div>
              <h1>Income Level Visualization on a World Map</h1>
            </div>
          )}
        </Container>
        <VectorMap
          map={"world_mill"}
          backgroundColor="transparent"
          zoomOnScroll={false}
          containerStyle={{
            width: "100%",
            height: "520px"
          }}
          containerClassName="map"
          regionStyle={{
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
          series={{
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