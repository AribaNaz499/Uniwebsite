import React from 'react';
import { Box, Text, Heading, VStack, HStack, Image, Button, Container, Flex, Icon } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card1 from "../../assets/Images/Stories/card1.jpg"
import Card2 from "../../assets/Images/Stories/card2.jpg"
import Card3 from "../../assets/Images/Stories/card3.jpg"
import Card4 from "../../assets/Images/Stories/card4.jpg"
import Card5 from "../../assets/Images/Stories/card5.jpg"

const Stories = () => {
  const sliderImages = [Card1, Card2, Card3, Card4, Card5];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <Box width="100%" pt={{ base: 8, md: 10 }} pb={0} bg="white" overflowX="hidden">

      <Container maxW="1050px" px={{ base: 4, md: 6 }} mb={10}>
        <Flex
          justify="space-between"
          align={{ base: "center", md: "flex-end" }}
          direction={{ base: "column", md: "row" }}
          gap={6}
        >
          <VStack align={{ base: "center", md: "start" }} spacing={3}>
            <HStack spacing={3}>
              <Box w="30px" h="2px" bg="#1a4d95" />
              <Text textTransform="uppercase" fontSize="13px" fontWeight="800" color="#1a4d95" letterSpacing="widest">
                STUDENT STORIES
              </Text>
            </HStack>
            <Heading fontSize={{ base: "2xl", md: "4xl" }} color="#001529" fontWeight="700" fontFamily="serif">
              Our Student Stories
            </Heading>
          </VStack>

          <Button
            variant="outline"
            size="md"
            fontSize="12px"
            fontWeight="700"
            borderRadius="0px"
            borderColor="gray.300"
            rightIcon={<Icon as={BsArrowRight} />}
            px={8}
            _hover={{ bg: "#1a4d95", color: "white" }}
          >
            Explore All
          </Button>
        </Flex>
      </Container>

      {/* --- FULL SCREEN SLIDER --- */}
      <Box width="100%" mb={0} p={0} lineHeight={0}>
        <Slider {...settings}>
          {sliderImages.map((img, index) => (
            <Box key={index} px="1px">
              <Box
                position="relative"
                height={{ base: "250px", md: "380px" }}
                width="100%"
                overflow="hidden"
              >
                <Image
                  src={img}
                  display="block"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  filter="brightness(0.9)"
                />

                {/* FIX: VStack use kiya, har Text apni line par, padding aur font size properly set */}
                <VStack
                  position="absolute"
                  bottom="0"
                  left="0"
                  w="100%"
                  px={{ base: 3, md: 6 }}
                  py={{ base: 3, md: 5 }}
                  align="start"
                  spacing={1}
                  bgGradient="linear(to-t, rgba(0,0,0,0.85) 60%, transparent)"
                >
                  <Text
                    color="white"
                    fontWeight="700"
                    fontSize={{ base: "12px", md: "lg" }}
                    fontFamily="serif"
                    lineHeight="1.3"
                    noOfLines={1}
                  >
                    Student Name {index + 1}
                  </Text>
                  <Text
                    color="white"
                    fontSize={{ base: "10px", md: "11px" }}
                    lineHeight="1.3"
                    opacity="0.8"
                  >
                    Class of 2026
                  </Text>
                </VStack>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Stories;