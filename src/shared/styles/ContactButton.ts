import styled from "styled-components";
import { BLUE } from "../constants/Colors";

const ContactButton = styled.button`
  width: 300px;
  height: 50px;
  background: ${BLUE};
  border-radius: 2rem;
  border: none;
  outline: none;
  box-shadow: none;
  font-weight: bold;
  color: white;
  font-size: 1em;

  &:hover {
    background: white;
    color: ${BLUE};
    cursor: pointer;
    border: 3px solid ${BLUE};
  }
`;

export default ContactButton;
