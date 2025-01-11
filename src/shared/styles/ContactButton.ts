import styled from "styled-components";
import { BORDO } from "../constants/Colors";

const ContactButton = styled.button`
  width: 300px;
  height: 50px;
  background: white;
  border-radius: 2rem;
  border: 3px solid ${BORDO};
  outline: none;
  box-shadow: none;
  font-weight: bold;
  color: ${BORDO};
  font-size: 1em;

  &:hover {
    background: ${BORDO};
    color: white;
    cursor: pointer;
    border: 3px solid ${BORDO};
  }
`;

export default ContactButton;
