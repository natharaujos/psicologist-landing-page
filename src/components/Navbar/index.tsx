import { BLUE } from "../../shared/constants/Colors";
import Container from "./components/Container";
import Header from "./components/Header";
import Item from "./components/Item";
import Items from "./components/Items";
import Logo from "./components/Logo";

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
