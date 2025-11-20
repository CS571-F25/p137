import { HashRouter, Routes, Route } from "react-router";
import Navigationbar from "./components/Navigationbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Missions from "./pages/Missions";
import MissionSummary from "./pages/MissionSummary";
import Favorites from "./pages/Favorites";

function App() {
  return <HashRouter>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/missions/:id" element={<MissionSummary />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </HashRouter>
}

export default App
