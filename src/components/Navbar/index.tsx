import Header from "./components/Header";
import Item from "./components/Item";
import Items from "./components/Items";
import Logo from "./components/Logo";
import SpaceBetween from "../../shared/components/SpaceBetween";

function Navbar() {
  return (
    <Header>
      <SpaceBetween>
        <Logo>LOGO</Logo>
        <Items>
          <Item>Home</Item>
          <Item>Sobre mim</Item>
          <Item>Contato</Item>
        </Items>
      </SpaceBetween>
    </Header>
  );
}

export default Navbar;
