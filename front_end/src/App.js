import React from "react";
import "./App.css";
import Header from "./components/regions/Home";
import Footer from "./components/regions/Home/footer";
import Bar from "./components/regions/Home/bar";
import Categories from "./components/regions/Categories";
import Content from "./components/regions/Home/content";

function App() {
  return (
    <div>
      <Header />
      <Bar />
      <Categories />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
