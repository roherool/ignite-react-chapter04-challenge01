import { Flex, Heading, SimpleGrid, FlexProps } from "@chakra-ui/react";

import { CityCard } from "./CityCard";

interface City {
  id: string;
  name: string;
  country: string;
  flag?: string;
  continent: string;
  image?: string;
}

interface CitiesProps extends FlexProps {
  cities: City[];
}

export function City({ cities, ...rest }: CitiesProps) {
  return (
    <Flex direction="column" width="100%" {...rest}>
      <Heading fontSize={["24", "48"]}>
        Cidades {cities.length > 100 ? "100+" : cities.length}
      </Heading>
      <SimpleGrid minChildWidth="256px" gap="45px" mt="12">
        {cities.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
