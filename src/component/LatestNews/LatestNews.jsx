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
import { HiChatAlt2, HiClock } from "react-icons/hi"; // Bottom icons ke liye

// Image paths
import CropImg from "../../assets/Images/Academics/card1.jpg"; 
import DiseaseImg from "../../assets/Images/Academics/card2.jpg"; 
import TourismImg from "../../assets/Images/Academics/tourism.jpg"; 

const programsData = [
  {
    image: CropImg,
    category: "24",
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


const LatestNews = () => {
  return (
    <Box width="100%" py={{ base: 10, md: 20 }} bg="white">
      <Container maxW="1050px" px={{ base: 4, md: 6 }}>
        
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
              <Text textTransform="uppercase" fontSize="13px" fontWeight="700" color="#1a4d95" letterSpacing="widest">
                LATEST NEWS & BLOG
              </Text>
            </HStack>

            <Heading fontSize={{ base: "xl", md: "3xl" }} color="#001529" fontWeight="700" lineHeight="1.2" fontFamily="serif">
              MWU Research, Innovation and Community Impact
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
            px={6}
            _hover={{ bg: "#1a4d95", color: "white" }}
          >
            Our Blogs
          </Button>
        </Flex>

        {/* --- CARDS GRID --- */}
        <SimpleGrid 
          columns={{ base: 1, md: 3 }} 
          spacing={6} // Spacing badha di taake cards ki apni width kam ho jaye
          width="100%"
        >
          {programsData.map((item, index) => (
            <Box
              key={index}
              bg="white"
              border="1px solid"
              borderColor="gray.100"
              borderRadius="0px"
              overflow="hidden"
              boxShadow="0 4px 20px rgba(0,0,0,0.04)"
              transition="all 0.3s"
              display="flex"
              flexDirection="column"
              /* 1. Lambai badhane ke liye minHeight add ki */
              minH="480px" 
              _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
            >
              {/* Image Section - Height thodi badha di */}
              <Box position="relative" width="100%" height="220px">
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
                  px={3} py={2} fontSize="28px" 
                  fontWeight="700" borderRadius="2px"
                  mr={"70%"}
                >
                  <HStack spacing={1}>
                    <Text>{item.category}</Text>
                  </HStack>
                  
                </Box>
              </Box>

              {/* Content Section - flex="1" lagaya taake footer hamesha bottom par rahe */}
              <VStack align="start" spacing={4} p={6} flex="1">
                <Text fontWeight="700" fontSize="18px" color="#001529" lineHeight="1.4" noOfLines={2}>
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

                <Text fontSize="13px" color="gray.600" lineHeight="1.7" noOfLines={4}>
                  {item.description}
                </Text>

                {/* Spacer use kiya taake footer niche rahe */}
                <Box flex="1" /> 

                <Divider borderColor="gray.100" />

                {/* --- CARD FOOTER --- */}
                <Flex w="100%" justify="space-between" align="center" pt={2}>
                  <HStack spacing={4}>
                    <HStack spacing={1.5}>
                      <Icon as={HiChatAlt2} boxSize={4} color="#1a4d95" />
                      <Text fontSize="11px" fontWeight="600" color="gray.600">{item.meta1}</Text>
                    </HStack>
                    <HStack spacing={1.5}>
                      <Icon as={HiClock} boxSize={4} color="#1a4d95" />
                      <Text fontSize="11px" fontWeight="600" color="gray.600">{item.meta2}</Text>
                    </HStack>
                  </HStack>

                  <Button
                    variant="link" // Link variant thoda sleek lagta hai lamba cards par
                    size="sm"
                    color="#1a4d95"
                    fontSize="12px"
                    fontWeight="700"
                    rightIcon={<Icon as={BsArrowRight} />}
                    _hover={{ textDecoration: "none", color: "#001529" }}
                  >
                    Read More
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

export default LatestNews;