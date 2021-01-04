// import { render } from "@testing-library/react";
import "./App.css";
import Client from "./Client";
import Country from "./Country";
import Mapp from "./Mapp";
import Graph from "./Graph";
// import Mapp from "./Mapp";
// import Map from "./Map";
function App() {
  return (
    <div className="App">
      <center>
        <div className="go">
          <center>
            <h2>Covid Tracker</h2>
          </center>
        </div>
        <div className="bye">
          <center>
            <Client />
          </center>
        </div>
        <div className="bye2">
          <Country />
        </div>
      </center>
      <Mapp />
      <Graph />
    </div>
  );
}

export default App;
