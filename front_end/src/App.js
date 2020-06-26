import React from "react";
import "./App.css";
import Header from "./components/regions/Home";
import Footer from "./components/regions/Home/footer";
import Bar from "./components/regions/Home/bar";
import Categories from "./components/regions/Categories";

function App() {
  return (
    <div>
      <Header />
      <Bar />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
