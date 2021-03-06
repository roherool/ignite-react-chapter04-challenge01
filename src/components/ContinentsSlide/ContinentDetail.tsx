import { Box, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";

interface ContinentDetailProps {
  href: string;
  title: string;
  describe: string;
  imageUrl: string;
  imagePosition?: string;
}

export function ContinentDetail({
  title,
  href,
  describe,
  imageUrl,
  imagePosition = "center",
}: ContinentDetailProps) {
  return (
    <Box
      bgImage={imageUrl}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition={imagePosition}
      color="default.light.text"
      h="450px"
      w="100%"
    >
      <Link href={href} passHref>
        <Flex
          as="a"
          direction="column"
          justifyContent="center"
          align="center"
          flex="1"
          h="100%"
          w="100%"
        >
          <Text
            fontSize={["24", "48"]}
            fontWeight="bold"
            textShadow="3px 3px #777"
          >
            {title}
          </Text>
          <Text fontSize={["12", "24"]} textShadow="3px 3px #777">
            {describe}
          </Text>
        </Flex>
      </Link>
    </Box>
  );
}
