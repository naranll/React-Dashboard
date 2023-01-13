import Header from "./component/Header";
import SideMenu from "./component/SideMenu";
import Home from "./component/Home";
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
