import { SimpleGrid, Box, Flex, useBreakpointValue } from "@chakra-ui/react";

import { TravelItem } from "./TravelItem";

const travelItems = [
  { title: "vida noturna", image: "/travel-cocktail.png" },
  { title: "praia", image: "/travel-surf.png" },
  { title: "moderno", image: "/travel-building.png" },
  { title: "clássico", image: "/travel-museum.png" },
  { title: "e mais...", image: "/travel-earth.png" },
];

export function Travel() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex minH="145px" marginX="auto" w="100%" justify="center">
      <Box flex="1" maxW="1160px">
        <SimpleGrid
          flex="1"
          align="center"
          minChildWidth="145px"
          spacing="40px"
        >
          {travelItems.map((item) => (
            <TravelItem
              key={item.title}
              title={item.title}
              image={item.image}
              isWideVersion={isWideVersion}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
