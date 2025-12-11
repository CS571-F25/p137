import { HashRouter, Routes, Route } from "react-router";
import Navigationbar from "./components/Navigationbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Missions from "./pages/Missions";
import PotD from "./pages/PotD";
import CountdownPage from "./pages/Countdown";

function App() {
  return <HashRouter>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/pictureoftheday" element={<PotD />} />
        <Route path="/countdown" element={<CountdownPage />} />
      </Routes>
    </HashRouter>
}

export default App
