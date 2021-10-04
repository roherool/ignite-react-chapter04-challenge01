import { GetStaticProps } from "next";
import { Flex, Box, Divider } from "@chakra-ui/react";

import { HomeBanner } from "../components/HomeBanner";
import { ContinentsSlide } from "../components/ContinentsSlide";
import { Travel } from "../components/Travel";

import { api } from "../services/api";

interface HomeProps {
  continents: {
    id: string;
    title: string;
    describe: string;
    image: string;
    betterImagePosition: string;
  }[];
}

export default function Home({ continents }: HomeProps) {
  // console.log(continents);
  return (
    <Flex w="100%" direction="column" pb="12">
      <HomeBanner />
      <Travel />
      <Box flex="1" width={["60px", "90px"]} marginX="auto" my={["10", "20"]}>
        <Divider border="2px" borderColor="body.color" />
      </Box>
      <ContinentsSlide continents={continents} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await api.get("/continents");
  const continents = response.data;
  return {
    props: {
      continents,
    },
  };
};
