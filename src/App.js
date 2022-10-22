import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./views/Profile";
import About from "./views/About";
import Experience from "./views/Experience";
import Work from "./views/Work";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="h-screen overflow-auto snap-y snap-mandatory scroll-smooth">
        <Profile />
        <About />
        <Experience />
        <Work />
        <Footer />
      </div>
    </div>
  );
}

export default App;
