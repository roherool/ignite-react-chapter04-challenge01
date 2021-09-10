import { Box, Flex, Image } from "@chakra-ui/react";
import { ToggleThemeColor } from "./ToggleThemeColor";
import { BackPageButton } from "./BackPageButton";

export function Header() {
  return (
    <Flex as="header" w="100%" h={["50px", "100px"]} justify="center">
      <Flex
        height="100%"
        maxW="1300px"
        width="90%"
        align="center"
        justifyContent="space-between"
      >
        <BackPageButton />
        <Image
          src="/logo.svg"
          alt="WorldTrip"
          objectFit="cover"
          h={["5", "12"]}
        />
        <ToggleThemeColor />
      </Flex>
    </Flex>
  );
}
