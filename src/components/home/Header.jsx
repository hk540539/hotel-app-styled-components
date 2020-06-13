import React from "react";
import Hero from "../globals/Hero";
import homeImg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Buttons";

const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting="Welcome to "
        title="Beachwalk resort"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At porro saepe incidunt dolor? Id, necessitatibus."
      >
        <PrimaryBtn t="1rem">View Details</PrimaryBtn>
      </Banner>
    </Hero>
  );
};

export default Header;
