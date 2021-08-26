import React from 'react';
import './App.css';
import SearchBar from "./components/searchbar/SearchBar";
import DATA from "./DATA.json";
function App() {
  return (
    <div className="App">
      
      <SearchBar placeholder="search..." data={DATA} />
    </div>
  );
}

export default App;
