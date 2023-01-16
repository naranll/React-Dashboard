import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import "./styles/mainPage.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainPage">
        <SideMenu />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
