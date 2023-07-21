import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import supabase  from "./config/supabaseClient"
import Auth from "./Auth"


//import { getCurrentBrowserFingerPrint } from "@rajesh896/broprint.js";

/*
  getCurrentBrowserFingerPrint().then((fingerprint) => {
  // fingerprint is your unique browser id.
  /
*/




// pages
import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"
import About from "./pages/About"
import Biodiversity from "./pages/learn/Biodiversity"
import PlanetRegen from "./pages/learn/PlanetRegen"
import SoilDev from "./pages/learn/SoilDev"
import WildPlaces from "./pages/learn/WildPlaces"
import Solar from "./pages/learn/Solar"
import Rivers from "./pages/learn/Rivers"
import Coastal from "./pages/learn/Coastal"
import Waterq from "./pages/learn/Waterq"
import Pumps from "./pages/learn/Pumps"
import Windmills from "./pages/learn/Windmills"
import Electrical from "./pages/learn/Electrical"
import RecordKeeping from "./pages/learn/RecordKeeping"
import Plumbing from "./pages/learn/Plumbing"
import Carpentry from "./pages/learn/Carpentry"
import IT from "./pages/learn/IT"
import Filtration from "./pages/learn/Filtration"
import Stoves from "./pages/learn/Stoves"


function App() {






  return (

    <BrowserRouter>

      <nav>
        <img src="/ecoops.avif" align="left" alt="Eco Ops App - biodiversity 2023" />
   
        <Link to="/">Home</Link>
        <Link to="/auth">Auth</Link>
        <Link to="/about">How to use Eco Ops</Link>
        <Link to="/create">Post a checkin</Link>
      </nav>
      <h2 className="jumbo"> 	🙞  Eco Ops 🙜  </h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<Update />} />

        <Route path="/biodiversity" element={<Biodiversity />} />
        <Route path="/planet_regen" element={<PlanetRegen />} />
        <Route path="/soildev" element={<SoilDev />} />
        <Route path="/wildplaces" element={<WildPlaces />} />
        <Route path="/rivers" element={<Rivers />} />
        <Route path="/coastal" element={<Coastal />} />
        <Route path="/waterq" element={<Waterq />} />
        <Route path="/pumps" element={<Pumps />} />
        <Route path="/windmills" element={<Windmills />} />
        <Route path="/solar" element={<Solar />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/plumbing" element={<Plumbing />} />
        <Route path="/recordkeeping" element={<RecordKeeping />} />
        <Route path="/carpentry" element={<Carpentry />} />
        <Route path="/IT" element={<IT />} />
        <Route path="/filtration" element={<Filtration />} />
        <Route path="/stoves" element={<Stoves />} />
        <Route path="/circular" element={<PlanetRegen />} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;
