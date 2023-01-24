# Income-Level-World-Map-Visualization

### Technologies
* React
* axios (JS library used to make HTTP requests from Node.js)
* World Bank Group API
* emotion (JS library for styled components)
* VectorMap from "react-jvectormap" Node module (used to create custom world map)
* country-list plugin (used to map the iso2Codes to income levels)

### How to run
1. Write the following commands in the terminal:
```
git clone https://github.com/sophie-vu/Income-Level-World-Map-Visualization.git
cd Income-Level-World-Map-Visualization/app
npm i
npm start
```
2. This will open the app in the following URL: 
```
http://localhost:3000/
```
3. Hover over the countries and zoom in using the leftside features.

![image](https://user-images.githubusercontent.com/71732942/214393578-8764fb6b-14df-4373-a4ed-62531f0b5b58.png)
![image](https://user-images.githubusercontent.com/71732942/214393893-0a667651-e194-43a6-b914-db1845317c51.png)

### Contribution (~40%)
* FetchCountry.js
* WorldMap.js
* App.js

### References
* https://github.com/fannarsh/country-list/blob/master/country-list.js
* https://datahelpdesk.worldbank.org/knowledgebase/articles/898590-country-api-queries
* https://emotion.sh/docs/styled
* https://jvectormap.com/
