import { ReactNode } from "react";
import { Flex, useBreakpointValue } from "@chakra-ui/react";

interface BannerProps {
  bgImage: string;
  bgSize: string;
  bgPosition?: string;
  heigh: string;
  children: ReactNode;
}

export function Banner({
  bgImage,
  bgSize,
  bgPosition = "center",
  heigh,
  children,
}: BannerProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      direction="row"
      width="100%"
      height={heigh}
      bgImage={bgImage}
      bgRepeat="no-repeat"
      bgSize={bgSize}
      bgPosition={bgPosition}
      justify="space-evenly"
      mb={["14", "28"]}
    >
      {children}
    </Flex>
  );
}
