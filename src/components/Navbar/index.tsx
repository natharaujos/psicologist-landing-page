import { BLUE } from "../../shared/constants/Colors";
import Container from "./styles/Container";
import Header from "./styles/Header";
import Item from "./styles/Item";
import Items from "./styles/Items";
import Logo from "./styles/Logo";

function Navbar() {
  return (
    <Header color={BLUE}>
      <Container>
        <Logo>LOGO</Logo>
        <Items>
          <Item>Home</Item>
          <Item>Sobre mim</Item>
          <Item>Contato</Item>
        </Items>
      </Container>
    </Header>
  );
}

export default Navbar;
