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
import { AiFillStar } from "react-icons/ai";
import { HiChatAlt2, HiClock } from "react-icons/hi"; 

// Image paths
import CropImg from "../../assets/Images/Academics/card1.jpg"; 
import DiseaseImg from "../../assets/Images/Academics/card2.jpg"; 
import TourismImg from "../../assets/Images/Academics/tourism.jpg"; 

// Connecting the wide-screen CSS
import "../../CSS/academics.css"; 

const programsData = [
  {
    image: CropImg,
    category: "Agriculture",
    title: "Comprehensive Crop and Livestock Productivity",
    rating: "(4.8)",
    description: "MWU advances crop yield, animal productivity, irrigation technology, agricultural value chains, and rural livelihood transformation.",
    meta1: "English",
    meta2: "04 Years"
  },
  {
    image: DiseaseImg,
    category: "Health and Medical Science",
    title: "Emerging Disease, Clinical, and Public Health Solutions",
    rating: "(4.8)",
    description: "MWU advances crop yield, animal productivity, irrigation technology, agricultural value chains, and rural livelihood transformation.",
    meta1: "Multidisciplinary",
    meta2: "04 Years"
  },
  {
    image: TourismImg,
    category: "Tourism and Heritage",
    title: "Sustainable Tourism and Heritage Conservation",
    rating: "(4.8)",
    description: "MWU advances crop yield, animal productivity, irrigation technology, agricultural value chains, and rural livelihood transformation.",
    meta1: "Community Focus",
    meta2: "04 Years"
  },
];

const Academics = () => {
  return (
    <Box width="100%" py={{ base: 10, md: 20 }} bg="white" overflow="hidden">
      
      {/* FIXED CONTAINER:
        Normal screens par maxW hamesha "1100px" hi rahega jaisa aapka original tha.
        Sirf "2xl" (1536px+) aur ultra-wide (2556px) par humne isko wide kiya hai taaki content natural lage.
      */}
      <Container 
        maxW={{ base: "1100px", "2xl": "1400px" }} 
        px={{ base: 4, md: 6 }} 
        className="custom-academics-container-wide"
      >
        
        {/* --- HEADER SECTION --- */}
        <Flex
          justify="space-between"
          align="flex-end"
          mb={10}
          direction={{ base: "column", md: "row" }}
          gap={4}
        >
          <VStack align="start" spacing={2} maxW="600px">
            <HStack spacing={3}>
              <Box w="25px" h="1.5px" bg="#1a4d95" />
              <Text textTransform="uppercase" fontSize="14px" fontWeight="700" color="#1a4d95" letterSpacing="widest">
                ACADEMICS AT MWU
              </Text>
            </HStack>

            <Heading fontSize={{ base: "xl", md: "3xl" }} color="#001529" fontWeight="700" lineHeight="1.2" fontFamily="serif">
              Relevant Programs for Local and Global Competence
            </Heading>
          </VStack>

          <Button
            variant="outline"
            size="sm"
            fontSize="11px"
            fontWeight="700"
            borderRadius="0px"
            borderColor="gray.200"
            color="gray.700"
            rightIcon={<Icon as={BsArrowRight} />}
            _hover={{ bg: "gray.50" }}
            px={6}
          >
            Explore All
          </Button>
        </Flex>

        {/* --- CARDS GRID --- */}
        <SimpleGrid 
          columns={{ base: 1, md: 3 }} 
          spacing={8} 
          className="custom-academics-grid-wide"
        >
          {programsData.map((item, index) => (
            <Box
              key={index}
              bg="white"
              border="1px solid"
              borderColor="gray.100"
              borderRadius="0px"
              overflow="hidden"
              boxShadow="0 2px 15px rgba(0,0,0,0.03)"
              transition="all 0.3s"
            >
              
              <Box 
                position="relative" 
                width="100%" 
                height={{ base: "190px", "2xl": "250px" }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
                <Box 
                  position="absolute" top={3} right={3} 
                  bg="#1a4d95" color="white" 
                  px={3} py={1} fontSize="9px" 
                  fontWeight="600" borderRadius="2px"
                >
                  <HStack spacing={1}>
                    <Icon as={HiChatAlt2} />
                    <Text>{item.category}</Text>
                  </HStack>
                </Box>
              </Box>

              {/* Content Section */}
              <VStack align="start" spacing={3} p={5}>
                <Text fontWeight="700" fontSize="17px" color="#001529" lineHeight="1.3" noOfLines={2}>
                  {item.title}
                </Text>

                <HStack spacing={0.5}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Icon key={s} as={AiFillStar} color="orange.400" boxSize={3.5} />
                  ))}
                  <Text fontSize="12px" color="gray.500" ml={1.5}>
                    {item.rating}
                  </Text>
                </HStack>

                <Text fontSize="12px" color="gray.500" lineHeight="1.6" noOfLines={3}>
                  {item.description}
                </Text>

                <Divider borderColor="gray.100" pt={2} />

                {/* --- SLEEK CARD FOOTER --- */}
                <Flex w="100%" justify="space-between" align="center" pt={1}>
                  <HStack spacing={4}>
                    <HStack spacing={1.5}>
                      <Icon as={HiChatAlt2} boxSize={4} color="#1a4d95" />
                      <Text fontSize="11px" fontWeight="600" color="#2D3748">{item.meta1}</Text>
                    </HStack>
                    <HStack spacing={1.5}>
                      <Icon as={HiClock} boxSize={4} color="#1a4d95" />
                      <Text fontSize="11px" fontWeight="600" color="#2D3748">{item.meta2}</Text>
                    </HStack>
                  </HStack>

                  <Button
                    variant="outline"
                    size="xs"
                    height="32px"
                    fontSize="11px"
                    fontWeight="700"
                    borderRadius="2px"
                    borderColor="gray.200"
                    color="gray.700"
                    rightIcon={<Icon as={BsArrowRight} />}
                    _hover={{ bg: "#1a4d95", color: "white", borderColor: "#1a4d95" }}
                  >
                    Discover
                  </Button>
                </Flex>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Academics;