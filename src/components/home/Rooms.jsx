import React, { useState } from "react";
import Room from "./Room";
import styled from "styled-components";
import {
  setColor,
  setBorder,
  setRem,
  setLetterSpacing,
  media,
} from "../../helperCss";
import Title from "../globals/Title";
import { Section } from "../globals/Section";
import roomsData from "./rooms-data";

const Rooms = () => {
  const [rooms] = useState(roomsData);
  return (
    <div>
      <Section color={setColor.lightGrey}>
        <Title title="our rooms " center />
        <RoomsCenter>
          {rooms.map((room) => {
            return <Room key={room.id} room={room} />;
          })}
        </RoomsCenter>
      </Section>
    </div>
  );
};

// const RoomsCenter = styled.div`
//   width: 90vw;
//   margin: 0 auto;
//   ${media.tablet`
//   display:grid;
//   grid-template-columns:1fr 1fr;
//   grid-column-gap:${setRem(32)}`};
//   ${media.large`
//    width:100vw;
//    max-width:1170px;
//   `};
//   ${media.large`
//    grid-template-columns:repeat(3,1fr);

//   `}
// `;

const RoomsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  ${media.large`
   width:100vw;
   max-width:1170px;
  `};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-column-gap: ${setRem(45)};
`;
export default Rooms;
