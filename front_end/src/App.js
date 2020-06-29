import React from "react";
import "./App.css";
import Header from "./components/regions/Home";
import Footer from "./components/regions/Home/footer";
import Bar from "./components/regions/Home/bar";
import MovieRequest from "./components/regions/Home/content";

function App() {
  return (
    <div>
      <Header />
      <Bar />
      <MovieRequest />
      <Footer />
    </div>
  );
}

export default App;
