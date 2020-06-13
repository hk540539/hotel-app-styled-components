import React from "react";
import styled from "styled-components";
import {
  setColor,
  setRem,
  setLetterSpacing,
  setBorder,
  media,
  setFont,
} from "../../helperCss";

const Title = ({ className, title, center }) => {
  return <h3 className={className}>{title}</h3>;
};

export default styled(Title)`
  font-size: ${setRem(36)};
  text-transform: capitalize;
  ${setLetterSpacing(5)};
  ${setFont.slanted};
  text-align: ${(props) => (props.center ? "center" : "left")};
`;
