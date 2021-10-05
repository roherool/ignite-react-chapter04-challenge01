import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

import { ContinentBanner } from "../../components/ContinentsInfo/ContinentBanner";
import { ContinentsInfo } from "../../components/ContinentsInfo";
import { City as Cities } from "../../components/City";

import { api } from "../../services/api";
import { api_unsplash } from "../../services/unsplash";

interface Continent {
  id: string;
  title: string;
  describe: string;
  image: string;
  betterImagePosition: string;
  biografy?: string;
  countries: number;
  cities: number;
  languages: number;
}

interface City {
  id: string;
  name: string;
  country: string;
  flag?: string;
  continent: string;
  image?: string;
}

interface ContinentsProps {
  continent: Continent;
  cities: City[];
}

export default function Continents({ continent, cities }: ContinentsProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex w="100%" direction="column" pb="12">
      <ContinentBanner
        bgImage={continent.image}
        bgPosition={continent.betterImagePosition}
        bgSize="cover"
        continentName={continent.title}
      />
      <Box maxW="1240px" px="10" marginX="auto">
        <Flex
          justify="space-between"
          align="center"
          width="100%"
          minH={isWideVersion ? "auto" : "300px"}
          direction={isWideVersion ? "row" : "column"}
        >
          <Box flex="1" width="100%">
            <Text as="p" fontSize={["md", "lg"]} align="justify" width="100%">
              {continent.biografy ?? "Not implemented"}
            </Text>
          </Box>
          <ContinentsInfo
            countries={continent.countries ?? 0}
            languages={continent.languages ?? 0}
            cities={continent.cities ?? 0}
          />
        </Flex>
        <Cities cities={cities} mt="16" />
      </Box>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const continentsResponse = await api.get(`/continents/${String(slug)}`);
  const continent = continentsResponse.data;

  const citiesResponse = await api.get(`/cities?continent=${String(slug)}`);
  const citiesData = citiesResponse.data;
  const cities: City[] = await Promise.all(
    citiesData.map(async (city: City) => {
      const unsplashResponse = await api_unsplash.get(
        encodeURI(`/search/photos?page=1&per_page=1&query=${city.id}`)
      );
      return {
        ...city,
        image: unsplashResponse.data.results[0].urls.raw,
      };
    })
  );

  return {
    props: {
      continent,
      cities,
    },
  };
};
