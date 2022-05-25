import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/";
import Cor from "./pages/corPrimaria/";
import Freq from "./pages/frequencia";
import Ingresso from "./pages/ingresso";
import Maior from "./pages/maiorNumero";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cor" element={<Cor />} />
        <Route path="/Freq" element={<Freq />} />
        <Route path="/Ingresso" element={<Ingresso />} />
        <Route path="/Maior" element={<Maior />} />
      </Routes>
    </BrowserRouter>
  );
}
