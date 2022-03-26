import "./App.css";
import { makeServer } from "./server";
import BlitheRoute from "./route/BlitheRoute";
import { useLocation } from "react-router-dom";



// Call make Server
makeServer();

function App() {

  return (
    <div className="App">
      <BlitheRoute/>
    </div>
  );
}

export default App;
