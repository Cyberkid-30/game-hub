import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSqwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding={"10px"}>
      <Image src={logo} boxSize={"60px"} />
      <ColorModeSqwitch />
    </HStack>
  );
};

export default NavBar;
