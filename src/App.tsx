import React from "react";
import "./App.css";
import DataTableApp from "./Apps/DataTableApp/DataTableApp";

function App() {
  return (
    <div className="App">
      <h4>Created Apps</h4>
      <div>
        <DataTableApp />
      </div>
    </div>
  );
}

export default App;
