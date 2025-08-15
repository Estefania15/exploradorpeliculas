import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Contact from "./pages/Contact";
import Popular from "./pages/Popular"; // ⬅️ NUEVO

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} /> {/* ⬅️ NUEVO */}
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
