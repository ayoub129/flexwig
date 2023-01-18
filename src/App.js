import React from "react";
import "./App.css"
import { Route, Routes , BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Lerarenonderzoek from "./pages/Lerarenonderzoek";
import Overflexwijs from "./pages/Overflexwijs";
import Regulieronderwijs from "./pages/Regulieronderwijs";
import Speciaalonderwijs from "./pages/Speciaalonderwijs";
import Voorleraren from "./pages/Voorleraren";
import Voorscholen from "./pages/Voorscholen";
import Werkenbijflexwijs from "./pages/Werkenbijflexwijs";
import Werkenbij from "./pages/Werkenbij";
import Werkenbijid from "./pages/Werkenbijid";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="lerarenonderzoek" element={<Lerarenonderzoek />} />
        <Route path="Overflexwijs" element={<Overflexwijs />} />
        <Route path="Regulieronderwijs" element={<Regulieronderwijs />} />
        <Route path="Voorleraren" element={<Voorleraren />} />
        <Route path="Speciaalonderwijs" element={<Speciaalonderwijs />} />
        <Route path="Voorscholen" element={<Voorscholen />} />
        <Route path="Werkenbijflexwijs" element={<Werkenbijflexwijs />} />
        <Route path="Werkenbij" element={<Werkenbij />} />
        <Route path="Werkenbijid/:id" element={<Werkenbijid />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;