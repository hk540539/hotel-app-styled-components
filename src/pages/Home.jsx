import React from "react";
import Header from "../components/home/Header";
import About from "../components/home/About";
import Rooms from "../components/home/Rooms";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Rooms />
    </React.Fragment>
  );
};

export default Home;
