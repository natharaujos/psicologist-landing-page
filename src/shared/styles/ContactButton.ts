import styled from "styled-components";
import { ORANGE } from "../constants/Colors";

const ContactButton = styled.button`
  width: 300px;
  height: 50px;
  background: ${ORANGE};
  border-radius: 2rem;
  border: none;
  outline: none;
  box-shadow: none;
  font-weight: bold;
  color: white;
  font-size: 1em;
`;

export default ContactButton;
