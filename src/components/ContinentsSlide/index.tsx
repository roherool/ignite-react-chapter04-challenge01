import { VStack, Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
import Carousel from "../Carousel";
import { ContinentDetail } from "./ContinentDetail";

interface ContinentsProps {
  continents: {
    id: string;
    title: string;
    description: string;
    image: string;
    betterImagePosition: string;
  }[];
}

export function ContinentsSlide({ continents }: ContinentsProps) {
  const carouselContent = continents.map((continent) => (
    <ContinentDetail
      key={continent.id}
      title={continent.title}
      description={continent.description}
      imageUrl={continent.image}
      imagePosition={continent.betterImagePosition}
      href={`/continents/${continent.id}`}
    />
  ));

  return (
    <VStack spacing="8">
      <Flex direction="column" align="center" justify="space-between">
        <Text fontSize={["xl", "2xl"]}>Vamos nessa?</Text>
        <Text fontSize={["xl", "2xl"]}>Então escolha seu continente</Text>
      </Flex>
      <Box maxW="1240px" w="100%" h="450px">
        <Carousel content={carouselContent} />
      </Box>
    </VStack>
  );
}
