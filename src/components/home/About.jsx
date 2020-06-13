import React from "react";
import { Section } from "../globals/Section";
import Title from "../globals/Title";
import aboutImg from "../../images/aboutBcg.jpeg";
import {
  setColor,
  setBorder,
  setRem,
  setLetterSpacing,
  media,
} from "../../helperCss";
import { PrimaryBtn } from "../globals/Buttons";
import styled from "styled-components";
const About = () => {
  return (
    <Section>
      <AboutCenter>
        <div className="about-img">
          <img src={aboutImg} alt="about-us" />
        </div>
        <div className="about-info">
          <Title title="About us"></Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            architecto nisi nam natus! Quas asperiores provident est deserunt,
            aliquid et dicta optio, fugit cumque delectus facilis nobis, ratione
            doloribus enim?
          </p>
          <PrimaryBtn>read more</PrimaryBtn>
        </div>
      </AboutCenter>
    </Section>
  );
};

const AboutCenter = styled.div`
  .about-img,
  .about-info {
    padding: ${setRem(30)};
  }

  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor })}
    }
  }
  .about-info {
    p {
      ${setLetterSpacing(3)};
    }
  }
  width: 90vw;
  margin: 0 auto;
  ${media.large`
  .about-img,
  .about-info {
    padding: ${setRem(0)};
  }
 width:100vw;
 max-width:1170px;
 display:grid;
 grid-template-columns: 1fr 1fr;
 grid-column-gap:${setRem(32)};
  .about-img,.about-info {
      align-self:center;
  }
  .about-info{
      width:80%
  }
  `}
`;
export default About;
