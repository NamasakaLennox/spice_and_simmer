import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home";
import { ItemView } from "./Pages/ItemView";
import { LoginSignup } from "./Pages/LoginSignup";
import { Search } from "./Pages/Search";
import { About } from "./Pages/About";
import { Footer } from "./Components/Footer/Footer";
import { DisplayRecipe } from "./Components/DisplayRecipe/DisplayRecipe";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view" element={<ItemView />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipe/:id" element={<DisplayRecipe />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
