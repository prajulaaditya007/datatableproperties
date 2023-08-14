import React from "react";
import "./App.css";
import DataTableApp from "./Apps/DataTableApp/DataTableApp";
import FilterTableApp from "./Apps/FilterTableApp/FilterTableApp";

function App() {
  return (
    <div className="App">
      <h4>Created Apps</h4>
      <div>
        <DataTableApp />
      </div>
      <div>
        <FilterTableApp />
      </div>
    </div>
  );
}

export default App;
