import styled from "styled-components";
import {
  setColor,
  setRem,
  setLetterSpacing,
  setBorder,
  media,
} from "../../helperCss";

export const Section = styled.section`
  padding: ${setRem(64)} 0;
  background: ${(props) => props.color};
`;
