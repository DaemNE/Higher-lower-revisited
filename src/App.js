import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Hiscores } from "./components/Hiscores";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { VideoCardCurrent } from "./components/VideoCardCurrent";

function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/higher-lower"} element={<VideoCardCurrent />}></Route>
          <Route path={"/hiscores"} element={<Hiscores />}></Route>
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
