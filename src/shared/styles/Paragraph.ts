import styled from "styled-components";

interface ParagraphProps {
  color?: string;
  fontSize?: string;
}

const Paragraph = styled.p<ParagraphProps>`
  font-size: ${({ fontSize = "1em" }) => fontSize};
  margin: 0;
  color: ${({ color = "black" }) => color};
`;

export default Paragraph;
