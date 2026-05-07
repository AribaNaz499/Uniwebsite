import React from 'react';
import {
    Box, Text, Heading, VStack, HStack, Icon, Button, Container, SimpleGrid
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { LuBookOpen } from "react-icons/lu";
import Background from "../../assets/Images/Admission/background.webp"

// Connecting the wide-screen CSS
import "../../CSS/admission.css";

const AdmissionSection = () => {
    return (
        <Box width="100%" bg="white" overflow="hidden">
            {/* --- TOP HEADER BAR --- */}
            <Box width="100%" borderBottom="1px solid" borderColor="gray.100" py={{ base: 4, md: 3 }}>
                {/* Standard desktop maxW 1500px is strictly preserved */}
                <Container maxW="1500px" className="custom-admission-top-wide">
                    {/* <SimpleGrid 
                        columns={{ base: 1, md: 3 }} 
                        spacing={{ base: 4, md: 10 }}
                        justifyItems={{ base: "flex-start", md: "center" }}
                    >
                        {[ "HEALTH SCIENCE", "TOURISM & HERITAGE", "BIODIVERSITY" ].map((item) => (
                            <HStack key={item} spacing={3} mb={10}>
                                <Icon as={LuBookOpen} color="#1a4d95" boxSize={{ base: "18px", lg: "26px" }} />
                                <Text
                                    fontWeight="700"
                                    fontSize={{ base: "20px", md: "22px", lg: "26px" }}
                                    color="#001529"
                                    letterSpacing="1px"
                                    whiteSpace="normal" 
                                >
                                    {item}
                                </Text>
                            </HStack>
                        ))}
                    </SimpleGrid> */}
                    <Box
  as="marquee"
  scrollamount="6" // Speed adjust karne ke liye (kam/zyada kar sakte hain)
  direction="left" // Left ki taraf chalega
  style={{ width: "100%", display: "block" }}
>
  <HStack 
    spacing={{ base: 12, md: 24 }} // Items ke darmiyan spacing barha di taake chalte hue pyare lagein
    display="inline-flex" 
    py={4}
  >
    {["HEALTH SCIENCE", "TOURISM & HERITAGE", "BIODIVERSITY"].map((item) => (
      <HStack key={item} spacing={3}>
        <Icon 
          as={LuBookOpen} 
          color="#1a4d95" 
          boxSize={{ base: "18px", lg: "26px" }} 
        />
        <Text
          fontWeight="700"
          fontSize={{ base: "20px", md: "22px", lg: "26px" }}
          color="#001529"
          letterSpacing="1px"
          whiteSpace="nowrap" // Isko nowrap kiya taake text beech me se toot ke niche line par na jaye
        >
          {item}
        </Text>
      </HStack>
    ))}
  </HStack>
</Box>
                </Container>
            </Box>

            {/* --- HERO SECTION --- */}
            <Box
                width="100%"
                position="relative"
                minH={{ base: "400px", md: "500px", lg: "600px" }}
                backgroundImage={`url(${Background})`}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                display="flex"
                alignItems="center"
            >
                <Box 
                    display={{ base: "block", md: "none" }}
                    position="absolute" 
                    top={0} left={0} right={0} bottom={0} 
                    bg="blackAlpha.500" 
                />

                {/* Standard desktop maxW 1230px is strictly preserved */}
                <Container 
                    maxW="1230px" 
                    position="relative" 
                    py={{ base: 8, md: 20 }}
                    className="custom-admission-hero-wide"
                >
                    <Box
                        bg="white"
                        p={{ base: 6, sm: 8, md: 12 }}
                        maxW={{ base: "95%", md: "500px", lg: "560px" }}
                        boxShadow="2xl"
                        zIndex="2"
                        mx={{ base: "auto", md: "0" }}
                    >
                        <VStack align="start" spacing={{ base: 4, md: 5 }}>
                            <HStack spacing={3}>
                                <Box w="25px" h="1.5px" bg="#1a4d95" />
                                <Text fontSize="10px" fontWeight="700" color="#1a4d95" textTransform="uppercase">
                                    Admissions and Partnerships
                                </Text>
                            </HStack>

                            <Heading
                                as="h1"
                                fontSize={{ base: "22px", sm: "26px", md: "32px", lg: "38px" }}
                                color="#001529"
                                fontFamily="serif"
                                fontWeight="500"
                                lineHeight="1.2"
                                textAlign="left"
                            >
                                Join Madda Walabu University for Transformative Higher Education
                            </Heading>

                            <Text fontSize={{ base: "13px", md: "14px" }} color="gray.600" lineHeight="1.7">
                                MWU equips students with practical knowledge, entrepreneurial thinking,
                                and employable skills while delivering need-based community service.
                            </Text>

                            <Button
                                bg="#1a4d95"
                                color="white"
                                px={{ base: 5, md: 7 }}
                                py={{ base: 5, md: 6 }}
                                fontSize="13px"
                                borderRadius="none"
                                rightIcon={<Icon as={BsArrowRight} />}
                                _hover={{ bg: "#002D62" }}
                                width={{ base: "100%", sm: "auto" }}
                            >
                                Apply Or Partner With MWU
                            </Button>
                        </VStack>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default AdmissionSection;