import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  height: 30%;
  line-height: 4rem;
  margin: 0px;
  background-color: ${(props) => props.color};
`;

export default Header;
