import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./views/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
