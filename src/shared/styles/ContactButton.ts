import styled from "styled-components";
import { BLUE } from "../constants/Colors";

const ContactButton = styled.button`
  width: 300px;
  height: 50px;
  background: white;
  border-radius: 2rem;
  border: 3px solid ${BLUE};
  outline: none;
  box-shadow: none;
  font-weight: bold;
  color: ${BLUE};
  font-size: 1em;

  &:hover {
    background: ${BLUE};
    color: white;
    cursor: pointer;
    border: 3px solid ${BLUE};
  }
`;

export default ContactButton;
