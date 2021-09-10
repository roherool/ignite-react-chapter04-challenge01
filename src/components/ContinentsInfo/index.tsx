import { Flex } from "@chakra-ui/react";

import { ContinentCard } from "./ContinentCard";

interface ContinentInfoProps {
  countries: number;
  cities: number;
  languages: number;
}

export function ContinentsInfo({
  countries,
  cities,
  languages,
}: ContinentInfoProps) {
  return (
    <Flex
      flex="1"
      width="100%"
      direction="row"
      justify="space-around"
      align="center"
      as="div"
    >
      <ContinentCard value={countries} kind="countries" />
      <ContinentCard value={languages} kind="languages" />
      <ContinentCard value={cities} kind="cities" />
    </Flex>
  );
}
