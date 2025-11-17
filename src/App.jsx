import { useEffect, useState } from "react";

import Header from "./components/Header";
import Search from "./components/Search";
import FeaturedHero from "./components/FeaturedHero";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewsDetails from "./pages/NewsDetails";

function App() {
  console.log(import.meta.env.VITE_API_KEY);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/news/:id" element={<NewsDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
