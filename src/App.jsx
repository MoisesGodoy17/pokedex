import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import PokeGrid from "./pages/PokeGrid";
import Pokedex from "./pages/Pokedex";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PokeGrid />} />
      <Route path="/pokedex/:id" element={<Pokedex />} />
    </Routes>
  );
}

export default App;
