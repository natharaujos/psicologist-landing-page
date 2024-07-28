import { Box } from "@mui/material";
import { BLUE } from "../../shared/constants/Colors";
import Header from "./styles/Header";
import Item from "./styles/Item";
import Items from "./styles/Items";
import Logo from "./styles/Logo";

function Navbar() {
  return (
    <Header color={BLUE}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={{ xs: "0 2rem", md: "0 12rem" }}
        height={"100%"}
        width={"100%"}
      >
        <Logo>LOGO</Logo>
        <Items>
          <Item>Home</Item>
          <Item>Sobre mim</Item>
          <Item>Contato</Item>
        </Items>
      </Box>
    </Header>
  );
}

export default Navbar;
