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
import { HiOutlineChat, HiXCircle } from "react-icons/hi";

// Correct path to the newly created Latest News CSS
import "../../CSS/latestNews.css";

// Image paths
import CropImg from "../../assets/Images/LatestNews/card1.jpg";
import DiseaseImg from "../../assets/Images/LatestNews/card2.jpg";
import TourismImg from "../../assets/Images/LatestNews/tourism.jpg";

const programsData = [
  {
    image: CropImg,
    category: "24",
    date: "APR, 2026",
    title: "Center of Excellence in Agriculture: From Wheat Yield to Value Chain Impact",
    description: "Discover how MWU is improving crop productivity, animal production, irrigation technology, and agro-pastoral livelihoods through applied research.",
    meta1: "English",
    meta2: "04 Years",
    comment: "0 Comment",
    uni: "By MWU Communications",
  },
  {
    image: DiseaseImg,
    category: "29",
    date: "MAR, 2026",
    title: "Health and Medical Science at MWU: From Clinical Practice to Public Health Innovation",
    description: "Explore MWU initiatives in infectious and chronic disease response, maternal and child health, nutrition, and health system innovation.",
    meta1: "Multidisciplinary",
    meta2: "04 Years",
    comment: "0 Comment",
    uni: "By MWU Communications",
  },
  {
    image: TourismImg,
    category: "18",
    date: "APR, 2026",
    title: "Science and Technology at MWU: AI, Big Data, and Green Transition for Development",
    description: "Learn how MWU integrates AI, machine learning, digital literacy, cybersecurity, and smart infrastructure to solve real societal challenges.",
    meta1: "Community Focus",
    meta2: "04 Years",
    comment: "0 Comment",
    uni: "By MWU Communications",
  },
];

const LatestNews = () => {
  return (
    <Box width="100%" py={{ base: 10, md: 20, "2xl": 28 }} bg="white">
      {/* Container limits ko adjust kiya hai:
        Standard screens par 1050px, wide screens par scale hokar 1600px+ 
        aur 2556px+ ultra-wide displays ke liye 1900px set kiya hai.
      */}
      <Container 
        maxW={{ base: "1050px", "2xl": "1600px" }} 
        px={{ base: 4, md: 6 }}
        className="custom-latestnews-container-wide"
        sx={{
          "@media screen and (min-width: 2400px)": {
            maxW: "1900px"
          }
        }}
      >

        {/* --- HEADER SECTION --- */}
        <Flex
          justify="space-between"
          align="flex-end"
          mb={10}
          direction={{ base: "column", md: "row" }}
          gap={4}
        >
          <VStack align="start" spacing={2} maxW="800px">
            <HStack spacing={3}>
              <Box w="25px" h="1.5px" bg="#1a4d95" />
              <Text textTransform="uppercase" fontSize="13px" fontWeight="700" color="#1a4d95" letterSpacing="widest">
                LATEST NEWS & BLOG
              </Text>
            </HStack>

            <Heading fontSize={{ base: "xl", md: "3xl", "2xl": "4xl" }} color="#001529" fontWeight="700" lineHeight="1.2" fontFamily="serif">
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
          spacing={6} 
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
              minH={{ base: "480px", "2xl": "580px" }}
              _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
            >
              {/* Ultra-wide screens par ratio maintain rakhne ke liye heights ko 
                media queries ke zariye adjust kiya hai taaki cropping na ho.
              */}
              <Box 
                position="relative" 
                width="100%" 
                height="220px"
                sx={{
                  "@media screen and (min-width: 2000px)": {
                    height: "300px"
                  },
                  "@media screen and (min-width: 2500px)": {
                    height: "380px"
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

                <VStack
                  position="absolute"
                  top="15px"
                  left="15px"
                  spacing={0}
                  align="stretch"
                  minW="60px"
                  textAlign="center"
                  boxShadow="lg"
                >
                  <Box
                    bg="#1a4d95"
                    color="white"
                    py={2}
                    px={2}
                    fontSize="24px"
                    fontWeight="bold"
                  >
                    <Text lineHeight="1">{item.category}</Text>
                  </Box>

                  <Box
                    bg="white"
                    color="black"
                    py={1}
                    px={2}
                    fontSize="10px"
                    fontWeight="700"
                    textTransform="uppercase"
                    borderBottomRadius="2px"
                  >
                    <Text lineHeight="1">{item.date}</Text>
                  </Box>
                </VStack>
              </Box>

              <VStack align="start" spacing={0} p={6} flex="1">
                <Flex w="100%" justify="space-between" align="center" pt={2}>
                  <HStack spacing={1.5}>
                    <Icon as={HiXCircle} boxSize={4} color="#1b4075" />
                    <Text fontSize="12px" fontWeight="600" color="gray.600">{item.uni}</Text>
                  </HStack>
                </Flex>
                
                <Flex w="100%" justify="space-between" align="center" pt={2}>
                  <HStack spacing={4} mt={-2}>
                    <HStack spacing={1.5}>
                      <Icon as={HiOutlineChat} boxSize={4} color="#1a4d95" />
                      <Text fontSize="12px" fontWeight="600" color="gray.600">{item.comment}</Text>
                    </HStack>
                  </HStack>
                </Flex>

                <Text 
                  fontWeight="600" 
                  mt={2} 
                  fontSize={{ base: "19px", "2xl": "22px" }} 
                  color="#001529" 
                  lineHeight="1.3" 
                  noOfLines={3}
                >
                  {item.title}
                </Text>

                <Text 
                  fontSize={{ base: "14px", "2xl": "16px" }} 
                  mt={2} 
                  color="gray.600" 
                  lineHeight="1.7" 
                  noOfLines={4}
                >
                  {item.description}
                </Text>

                <Box flex="1" />

                <Divider borderColor="gray.100" my={3} />

                <Flex w="100%" justify="space-between" align="center" pt={2}>
                  <Button
                    variant="link" 
                    size="sm"
                    color="#525253"
                    fontSize="12px"
                    fontWeight="700"
                    border={"1px solid #e0e0e0"}
                    px={2}
                    py={2}
                    borderRadius={"none"}
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