import React from "react";
import "./index.css";
import "./App.css";
import FoopieList from "./components/FoopieList";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Selections from "./components/Selections";
import Footer from "./components/Footer";

function App() {
  return (
    <session className="foopieStore">
      <Navbar />
      <Hero />
      <About />
      <Selections />
      <FoopieList />
      <Footer />
    </session>
  );
}

export default App;
