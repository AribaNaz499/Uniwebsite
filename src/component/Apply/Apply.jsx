import React from 'react';
import {
  Box, Text, Heading, VStack, HStack, Image, Icon, SimpleGrid, Button, Container,
} from "@chakra-ui/react";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import Card1 from "../../assets/Images/Apply/card1.jpg";

const Apply = () => {
  const admissionLinks = [
    "Undergraduate Admissions", "Transfer Admissions",
    "Graduate Admissions", "Financial Aid Applications",
    "International Students", "Scholarship Opportunities",
    "Scholarship Opportunities", "Campus Visit Scheduling"
  ];

  return (
    <Box width="100%" py={{ base: 10, md: 20 }} bg="#001529" position="relative" overflow="hidden">
      
      {/* Right Side Decorative Shape */}
      <Box 
        position="absolute" 
        right="0" 
        top="0" 
        h="100%" 
        w="28%" 
        bg="#1a4d95" 
        clipPath="polygon(35% 0, 100% 0, 100% 100%, 0% 100%)"
        display={{ base: "none", lg: "block" }}
        zIndex="1"
      />

      <Container maxW="1200px" px={{ base: 6, md: 10, lg: 20 }} position="relative" zIndex="2">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 10, lg: 12 }} alignItems="center">

          {/* LEFT CONTENT */}
          <VStack align="start" spacing={6}>
            <HStack spacing={3}>
              <Box w="25px" h="1px" bg="#1a4d95" />
              <Text fontSize="10px" fontWeight="700" color="#4a90e2" letterSpacing="2px">
                APPLY TO MWU
              </Text>
            </HStack>


            <Heading 
              fontSize={{ base: "28px", md: "42px" }} 
              color="white" 
              lineHeight="1.2" 
              fontWeight="500"
              fontFamily="'Playfair Display', serif"
            >
              We are one of the <br /> largest university
            </Heading>

            <Text fontSize="14px" color="gray.300" lineHeight="1.6" maxW="460px">
              MWU provides globally relevant knowledge, practical competence, and innovation-driven learning for a complex world. Start your higher education journey with a university committed to social impact.
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={6} spacingY={3} w="100%">
              {admissionLinks.map((text, index) => (
                <HStack key={index} align="center" spacing={2}>
                  <Icon as={HiOutlineCheckCircle} boxSize="18px" color="#f04c59" />
                  <Text fontSize="14px" fontWeight="450" color="white" letterSpacing="0.5px">
                    {text}
                  </Text>
                </HStack>
              ))}
            </SimpleGrid>

            <Button
              bg="#1a4d95"
              color="white"
              px={7}
              py={6}
              fontSize="13px"
              fontWeight="600"
              borderRadius="none"
              rightIcon={<Icon as={BsArrowRight} />}
              _hover={{ bg: "#2359a7" }}
              mt={4}
            >
              More About Admission
            </Button>
          </VStack>

          {/* RIGHT IMAGE */}
          <Box>
             <Image
                src={Card1}
                alt="University Presentation"
                w="100%"
                h={{ base: "auto", md: "420px" }} 
                objectFit="cover"
                boxShadow="0 20px 40px rgba(0,0,0,0.4)"
              />
          </Box>

        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Apply;