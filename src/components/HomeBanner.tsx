import {
  Box,
  Stack,
  Text,
  Heading,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Banner } from "./Banner";

export function HomeBanner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Banner bgImage="/banner-background.png" bgSize="cover" heigh="335px">
      <Stack direction="column" p="8" justify="center" spacing="5">
        <Heading
          size={!!isWideVersion ? "lg" : "md"}
          color="default.light.text"
        >
          5 continentes,
          <br />
          infinitas possibilidades.
        </Heading>
        <Text color="default.light.text">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou
        </Text>
      </Stack>

      {isWideVersion && (
        <Box>
          <Image src="/airplane.png" alt="avião de viagem" mt="76px" />
        </Box>
      )}
      {/* </Flex> */}
    </Banner>
  );
}
