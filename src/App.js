import Navbar from "./component/navbar/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./component/navbar/body/Body.jsx";

function App() {
  return (
    <div className="backgroung-color">
      <BrowserRouter>
        <Navbar />
        <Body />
      </BrowserRouter>
    </div>
  );
}

export default App;
