import { Heading, Flex, useBreakpointValue } from "@chakra-ui/react";

import { Banner } from "../Banner";

interface ContinentBannerProps {
  bgImage: string;
  bgSize: string;
  bgPosition: string;
  continentName: string;
}

export function ContinentBanner({
  bgImage,
  bgPosition,
  bgSize,
  continentName,
}: ContinentBannerProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Banner
      bgImage={bgImage}
      bgSize={bgSize}
      bgPosition={bgPosition}
      heigh={isWideVersion ? "500px" : "150px"}
    >
      <Flex
        width="100%"
        height="100%"
        flex="1"
        align={isWideVersion ? "flex-end" : "center"}
        justify={isWideVersion ? "" : "center"}
        p={isWideVersion ? "12" : "0"}
      >
        <Heading
          fontSize={isWideVersion ? "56" : "28"}
          color="default.light.text"
          ml={isWideVersion ? "40" : "0"}
        >
          {continentName}
        </Heading>
      </Flex>
    </Banner>
  );
}
