import { BLUE } from "../../shared/constants/Colors";
import Header from "./components/Header";
import Item from "./components/Item";
import Items from "./components/Items";
import Logo from "./components/Logo";

function Navbar() {
  return (
    <Header color={BLUE}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 6rem",
        }}
      >
        <Logo>LOGO</Logo>
        <Items>
          <Item>Home</Item>
          <Item>Sobre mim</Item>
          <Item>Contato</Item>
        </Items>
      </div>
    </Header>
  );
}

export default Navbar;
