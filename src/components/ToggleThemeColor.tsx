import { useColorMode, Box, IconButton } from "@chakra-ui/react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

export function ToggleThemeColor() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Alterar cores"
      icon={colorMode === "light" ? <RiMoonLine /> : <RiSunLine />}
      onClick={ToggleThemeColor}
      variant="ghost"
      spacing="8"
      fontSize={["16", "32"]}
      justify="center"
    />
  );
}
