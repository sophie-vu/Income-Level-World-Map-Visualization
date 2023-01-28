const data = require("./data.json");

/** Precompute name and code lookups. */
var nameMap = {}
var codeMap = {}
// console.log(data)
for (let obj in data[1]) {
  console.log(data[1][obj])
  mapCodeAndName(data[1][obj])
}

function mapCodeAndName (country) {
  nameMap[country.name] = country.code
  codeMap[country.incomeLevel] = country.incomeLevel
}

function getCode (name) {
  return nameMap[name.toLowerCase()]
}

function getName (code) {
  console.log(code.toString())
  console.log(codeMap[code.toLowerCase()])
  return codeMap[code.toLowerCase()]
}

function getNames () {
  return data.map(function (country) {
    return country.name
  })
}

function getCodes () {
  return data.map(function (country) {
    return country.code
  })
}

function getCodeList () {
  return codeMap
}

function getNameList () {
  return nameMap
}

export { getName };