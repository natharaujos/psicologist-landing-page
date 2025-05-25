import styled from "styled-components";

interface TitleProps {
  fontSize?: string;
  color?: string;
}

const Title = styled.p<TitleProps>`
  font-size: ${({ fontSize = "2em" }) => fontSize}; // Use prop or default
  font-weight: bold;
  margin: 0;
  color: ${({ color = "black" }) => color};
`;

export default Title;
