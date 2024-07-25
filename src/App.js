import "./App.css";
import Header from "../src/Header/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisteredUserChart from "./Pages/Chart/UserChart";
import MainComponent from "./MainComponent";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/chart" element={<RegisteredUserChart />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <MainComponent/> */}
    </div>
  );
}

export default App;
