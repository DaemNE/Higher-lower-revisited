import "./App.css";
import { NavBar } from "./components/NavBar";
import { VideoCardCurrent } from "./components/VideoCardCurrent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <VideoCardCurrent />
    </div>
  );
}

export default App;
