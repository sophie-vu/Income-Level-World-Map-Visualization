const data = require("./data.json");

/** Precompute name and code lookups. */
var nameMap = {}
var codeMap = {}
for (let obj in data) {
  mapCodeAndName(data[obj])
}

function mapCodeAndName (country) {
  nameMap[country.name] = country.incomeLevel
  // console.log("INCOME LEVEL", country.incomeLevel.value)
  codeMap[country.incomeLevel.value] = country.name
  // console.log("NAME", country.name)
}

function getName (code) {
  return codeMap[code.toLowerCase()]
}

function getCode (name) {
  return nameMap[name.toLowerCase()]
}

function getNames () {
  return data.map(function (country) {
    return country.name
  })
}

function getCodes () {
  return data.map(function (country) {
    return country.incomeLevel.value
  })
}

function getCodeList () {
  return codeMap
}

function getNameList () {
  return nameMap
}

export { getCode };