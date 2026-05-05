import React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Stack,
  Container,
} from "@chakra-ui/react";
import BannerImg from '../../assets/Images/Banner/hero-home.jpg';
import Card from '../Cards/Card';
import AboutUs from "../AboutUs/AboutUs";
import AboutBgImg from "../../assets/Images/AboutUs/about-us.jpg"; 

const Banner = () => {
  return (
    <Box width="100%" maxW="100vw" overflowX="hidden" position="relative">

      {/* 1. TOP BANNER SECTION */}
      <Box
        position="relative"
        minH={{ base: "80vh", md: "650px", lg: "750px", xl: "850px" }}
        maxH={{ md: "1000px" }} 
        height={{ base: "auto", md: "90vh" }} 
        width="100%"
        backgroundImage={`url(${BannerImg})`}
        backgroundSize="cover"
        backgroundPosition="center center"
        backgroundRepeat="no-repeat"
      >
        {/* Dark overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0,0,0,0.7)"
          zIndex="1"
        />

        {/* FIXED FOR 2556px: 
            Yahan humne ek Centered Content Container banaya hai jo layout ko limits ke andar centered rakhta hai.
            Is se banner text ultra-wide par screen ke kone mein nahi bhagega aur dynamic spacing balanced rahegi.
        */}
        <Box
          position="relative"
          zIndex="2"
          height="100%"
          maxW="1400px"
          mx="auto"
          width="100%"
        >
          {/* Content Wrapper */}
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            px={{ base: 6, md: 16 }}
            py={{ base: 24, md: 20 }} 
          >
            <Box maxW="650px" color="white" textAlign="left" mt={{ md: "100px", lg: "150px", xl: "180px", "2xl": "120px" }}>
              <Heading
                fontSize={{ base: "28px", sm: "36px", md: "48px", lg: "56px" }}
                lineHeight="1.1"
                fontWeight={600}
                mb={4}
              >
                Welcome to Madda Walabu University, Ethiopia
              </Heading>

              <Text
                fontSize={{ base: "14px", md: "16px" }}
                mb={6}
                maxW={{ base: "100%", md: "600px" }}
              >
                Founded in March 2005, Madda Walabu University is a public higher
                education institution in Bale Robe, Oromia, committed to producing
                entrepreneurial and employable graduates through quality education,
                research, training, and consultancy.
              </Text>

              <Stack
                direction={{ base: "column", sm: "row" }}
                spacing={4}
                mb={{ base: 12, md: 0 }}
              >
                <Button
                  bg="#1e5794"
                  color="white"
                  _hover={{ bg: "#2C5282" }}
                  px={8}
                  py={6}
                  fontSize={"15px"}
                  borderRadius={"none"}
                  width={{ base: "full", sm: "auto" }}
                >
                  Admission Now →
                </Button>

                <Button
                  variant="outline"
                  color="white"
                  borderColor="white"
                  _hover={{ bg: "whiteAlpha.200" }}
                  px={8}
                  py={6}
                  fontSize={"15px"}
                  borderRadius={"none"}
                  width={{ base: "full", sm: "auto" }}
                >
                  View Program →
                </Button>
              </Stack>
            </Box>
          </Box>

          {/* FIXED: Slider Dots ko centered boundary ke relative rakh diya hai taaki ye hamesha content area ke paas rahein */}
          <Box
            position="absolute"
            left={{ base: "50%", md: "auto" }}
            right={{ base: "auto", md: "60px" }} 
            transform={{ base: "translateX(-50%)", md: "none" }}
            bottom={{ base: "40px", md: "60px" }} 
            display="flex"
            gap="10px"
            zIndex="2"
          >
            <Box w="10px" h="10px" bg="white" borderRadius="full" />
            <Box w="10px" h="10px" bg="whiteAlpha.500" borderRadius="full" />
            <Box w="10px" h="10px" bg="whiteAlpha.500" borderRadius="full" />
          </Box>
        </Box>
      </Box>

      {/* 2. BOTTOM SECTION WRAPPER (Cards + About Us) */}
      <Box 
        backgroundImage={`url(${AboutBgImg})`}
        backgroundSize="cover"
        backgroundPosition="top center"
        width="100%"
        position="relative"
        pt="1px" 
      >
        
        {/* CARDS */}
        {/* Container maxW="1400px" lagaya hai taaki Cards aur AboutUs top Navbar aur Banner ke bilkul same alignment mein center ho jayein */}
        <Box
          position="relative"
          zIndex="3"
          mt={{ base: "-30px", md: "-60px" }} 
        >
          <Container maxW="1400px" px={{ base: 4, md: 8 }}>
            <Card />
          </Container>
        </Box>

        {/* ABOUT US SECTION */}
        <Box
          width="100%"
          py={{ base: 10, md: 20 }} 
          position="relative"
        >
          <Container maxW="1400px" px={{ base: 4, md: 8 }}>
            <AboutUs />
          </Container>
        </Box>

      </Box>
    </Box>
  );
};

export default Banner;