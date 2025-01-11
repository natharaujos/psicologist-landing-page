import styled from "styled-components";

interface TitleProps {
  fontSize?: string;
}

const Title = styled.p<TitleProps>`
  font-size: ${({ fontSize }) => fontSize || "2em"}; // Use prop or default
  font-weight: bold;
  margin: 0;
  color: black;
`;

export default Title;
