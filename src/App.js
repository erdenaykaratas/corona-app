import Header from "./components/header/Header.js";
import React, { useState } from "react";
import Cards from "./components/cards/Cards.js";
import Countries from "./components/countries/Countries.js"
import AllData from "./components/allData/AllData.js"
import Continents from "./components/continent/Continents.js";

function App() {
  const [key, setKey] = useState(1)
  return (
    <div>
      <Header onMenuChange = {(_key) => {setKey(_key)}} />

      <div className="md:container md:mx-auto p-8 h-screen page-content">
        {key === 1 && <Countries />}
        {key === 2 && <AllData />}
        {key === 3 && <Continents />}
        </div>
    </div>
  );
}

export default App;
