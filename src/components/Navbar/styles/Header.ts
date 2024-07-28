import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  height: 14vh;
  background-color: ${(props) => props.color};
`;

export default Header;
