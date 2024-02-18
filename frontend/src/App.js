import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home";
import { ItemView } from "./Pages/ItemView";
import { LoginSignup } from "./Pages/LoginSignup";
import { Search } from "./Pages/Search";
import { About } from "./Pages/About";
import { Footer } from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/view" element={<ItemView />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Routes>
          <Route path="/search" element={<Search />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
