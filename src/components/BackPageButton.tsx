import { useRouter } from "next/dist/client/router";
import { IconButton } from "@chakra-ui/react";
import { RiArrowLeftSLine } from "react-icons/ri";

export function BackPageButton() {
  const { back, asPath } = useRouter();
  if (asPath === "/") {
    return <div />;
  }
  return (
    <IconButton
      aria-label="Voltar para página anterior"
      icon={<RiArrowLeftSLine />}
      onclick={back}
      variant="ghost"
      spacing="8"
      fontSize={["16", "32"]}
      justify="center"
      onClick={back}
    />
  );
}
