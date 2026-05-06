import React from 'react';
import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  Image,
  SimpleGrid,
  Button,
  Container,
  Flex,
  Icon,
  Divider
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

// Image paths
import CropImg from "../../assets/Images/CampusLife/card1.jpg"; 
import DiseaseImg from "../../assets/Images/CampusLife/card2.jpg"; 
import TourismImg from "../../assets/Images/CampusLife/card3.jpg"; 

// Connecting the wide-screen CSS
import "../../CSS/campusLife.css";

const programsData = [
  {
    image: CropImg,
    title: "Mentor Lecture",
    description: "MWU advances crop yield, animal productivity, irrigation technology, agricultural value chains, and rural livelihood transformation." ,
  },
  {
    image: DiseaseImg,
    title: "Group Study in Campus",
    description: "MWU advances crop yield, animal productivity, irrigation technology, agricultural value chains, and rural livelihood transformation.",
  },
  {
    image: TourismImg,
    title: "Art & Culture",    
    description: "MWU advances crop yield, animal productivity, irrigation technology, agricultural value chains, and rural livelihood transformation.",
  },
];

const CampusLife = () => {
  return (
    <Box width="100%" py={{ base: 12, md: 24 }} bg="white" overflow="hidden">
    
      <Container 
        maxW="1050px" 
        px={{ base: 4, md: 8 }}
        className="custom-campus-container-wide"
      >
        
        {/* --- HEADER SECTION --- */}
        <Flex
          justify={{md:"space-between", base:"center"}}
          align={{ base: "center", md: "flex-end" }} 
          mb={{ base: 8, md: 12 }}
          direction={{ base: "column", md: "row" }}
          gap={6}
        >
          <VStack align="start" spacing={3} maxW="600px">
            <HStack spacing={3}>
              <Box w="30px" h="2px" bg="#1a4d95" />
              <Text textTransform="uppercase" fontSize={{ base: "12px", md: "14px" }} fontWeight="700" color="#1a4d95" letterSpacing="widest">
                EXPERIENCE MWU
              </Text>
            </HStack>

            <Heading fontSize={{ base: "2xl", md: "4xl" }} color="#001529" fontWeight="700" lineHeight="1.2" fontFamily="serif">
              Campus Life
            </Heading>
          </VStack>

          <Button
            variant="outline"
            size="md"
            fontSize="12px"
            fontWeight="700"
            borderRadius="0px"
            borderColor="gray.300"
            color="#001529"
            rightIcon={<Icon as={BsArrowRight} />}
            _hover={{ bg: "#1a4d95", color: "white", borderColor: "#1a4d95" }}
            px={8}
            textAlign={{base:"left"}}
            w={{ base: "auto", md: "auto" }}
          >
            Explore All
          </Button>
        </Flex>

        {/* --- CARDS GRID --- */}
        <SimpleGrid 
          columns={{ base: 1, sm: 2, lg: 3 }} 
          spacing={{ base: 6, md: 8, lg: 10 }}
          className="custom-campus-grid-wide"
        >
          {programsData.map((item, index) => (
            <Box
              key={index}
              bg="white"
              border="1px solid"
              borderColor="gray.100"
              transition="transform 0.3s, box-shadow 0.3s"
              _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
            >
              {/* FIXED FOR ULTRA-WIDE (2556px) ONLY: 
                  1. Normal heights base="220px" aur md="200px" strictly locked hain (Untouched!).
                  2. Media Query strictly 2000px+ (ultra-wide) screens par wrapper box ki height ko barha kar 280px karegi.
              */}
              <Box 
                overflow="hidden" 
                height={{ base: "220px", md: "200px" }}
                sx={{
                  "@media screen and (min-width: 2000px)": {
                    height: "280px"
                  }
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Box>

              {/* Content Section */}
              <VStack align="start" spacing={4} p={{ base: 5, md: 6 }}>
                <VStack align="start" spacing={2}>
                   <Text fontWeight="700" fontSize="20px" color="#001529" lineHeight="1.3">
                    {item.title}
                  </Text>
                  <Box w="40px" h="2.5px" bg="#1a4d95" />
                </VStack>

                <Text fontSize="13px" color="gray.600" lineHeight="1.7" noOfLines={3}>
                  {item.description}
                </Text>

                <Divider borderColor="gray.100" />

                <Button
                  variant="link"
                  size="sm"
                  color="#1a4d95"
                  fontSize="13px"
                  fontWeight="700"
                  rightIcon={<Icon as={BsArrowRight} />}
                  _hover={{ textDecoration: "none", color: "#001529" }}
                >
                  View The Campus
                </Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CampusLife;