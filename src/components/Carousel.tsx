import React, { ReactNode } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Navigation, Pagination]);

interface CarouselProps {
  content: ReactNode[];
}

export default function Carousel({ content }: CarouselProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box
      w="100%"
      h="100%"
      sx={{
        "--swiper-navigation-color": "colors.default.highlight",
        "--swiper-pagination-bullet-active": "colors.default.highlight",
        "--swiper-pagination-bullet": "colors.default.dark.text",
        "--swiper-navigation-size": `${isWideVersion ? "40px" : "32px"}`,

        ".swiper-pagination-bullet": {
          "background-color": "var(--swiper-pagination-bullet)",
        },

        ".swiper-pagination-bullet-active": {
          "background-color": "var(--swiper-pagination-bullet-active)",
        },

        ".swiper-container": {
          width: "100%",
          height: "100%",
        }
      }}
    >
      <Swiper navigation={true} pagination={true} className="mySwiper">
        {content?.map((item) => (
          <SwiperSlide>{item}</SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
