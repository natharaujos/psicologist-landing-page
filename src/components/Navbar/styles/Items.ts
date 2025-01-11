import styled from "styled-components";
import { BORDO } from "../../../shared/constants/Colors";

const Items = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  height: 25%;
  list-style: none;
  font-weight: bold;
  color: ${BORDO};
`;

export default Items;
