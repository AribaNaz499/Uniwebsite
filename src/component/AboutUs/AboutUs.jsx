import React from 'react';
import {
    Box,
    Flex,
    Text,
    Heading,
    VStack,
    HStack,
    Image,
    Icon,
    SimpleGrid,
    Button,
    Container,
} from "@chakra-ui/react";
import { HiUsers, HiAcademicCap } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";

// Images Paths
import PersonImg from "../../assets/Images/AboutUs/person.jpg";
import GraduationImg from "../../assets/Images/AboutUs/graduation.jpg";
import FieldImg from "../../assets/Images/AboutUs/field.jpg";
import DottedPatternImg from "../../assets/Images/AboutUs/dotted-pattern.jpg";

const AboutUs = () => {
    return (
        <Box width="100%" py={{ base: 10, md: 24 }}>
            <Container maxW="container.xl" px={{ base: 4, md: 16 }}>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 16, lg: 20 }} alignItems="center">

                    {/* --- LEFT SIDE: IMAGE GALLERY --- */}
                    <Box
                        position={{ base: "relative", md: "relative" }}
                        width="100%"
                        height={{ base: "auto", md: "550px" }}
                    >
                        <Box
                            position={{ base: "relative", md: "absolute" }}
                            left="0"
                            bottom="0"
                            width={{ base: "100%", md: "70%" }} 
                            height={{ base: "300px", md: "90%" }} 
                            zIndex="2"
                            mb={{ base: 4, md: 0 }} 
                        >
                            <Image
                                src={PersonImg}
                                alt="President"
                                objectFit={{ md: "cover", base: "cover" }}
                                objectPosition={{ base: "top center" }} width={{ base: "100%", md: "80%" }}
                                height={{ base: "100%", md: "90%" }}
                                boxShadow="2xl"
                            />
                        </Box>

                        {/* 2. Side Images Stack */}
                        <VStack
                            position={{ base: "relative", md: "absolute" }} 
                            right="0"
                            top={{ md: "14", base: "0" }}
                            width={{ base: "100%", md: "40%" }} 
                            spacing={{ base: "4", md: "3" }}
                            zIndex="3"
                        >
                            <Image
                                src={GraduationImg}
                                alt="Graduation"
                                objectFit="cover"
                                height={{ base: "200px", md: "175px" }} 
                                width="100%"
                                boxShadow="xl"
                            />
                            <Image
                                src={FieldImg}
                                alt="Field Work"
                                objectFit="cover"
                                height={{ base: "200px", md: "262px" }} 
                                width="100%"
                                boxShadow="xl"
                            />
                        </VStack>

                        <Box
                            position="absolute"
                            left="-20px"
                            top="20px"
                            zIndex="1"
                            display={{ base: "none", md: "block" }}
                        >
                        </Box>
                    </Box>

                    {/* --- RIGHT SIDE: CONTENT --- */}
                    <VStack align="start" spacing={6}>
                        <HStack spacing={3}>
                            <Box w="30px" h="2px" bg="#1a4d95" />
                            <Text textTransform="uppercase" fontSize="xs" fontWeight="800" color="#1a4d95" letterSpacing="widest">
                                ABOUT MADDA WALABU UNIVERSITY
                            </Text>
                        </HStack>

                        <Heading fontSize={{ base: "2xl", md: "4xl" }} color="#001529" lineHeight="1.2" fontFamily="serif">
                            A Leading Public University Advancing Ethiopia Through Education and Innovation

                        </Heading>

                        <Text fontSize="sm" color="gray.600" lineHeight="tall">
                            Madda Walabu University currently serves around 24,961 students in undergraduate and postgraduate programs through 79 departments under seven colleges and three schools. currently serves around 24,961 students in undergraduate and postgraduate programs through 79 departments under seven colleges and three schools.
                        </Text>

                        <VStack align="start" spacing={6} w="100%">
                            {/* Feature 1 */}
                            <HStack align="start" spacing={4}>
                                <Box p={3} bg="blue.50" borderRadius="md">
                                    <Icon as={HiUsers} boxSize={6} color="#1a4d95" />
                                </Box>
                                <VStack align="start" spacing={1}>
                                    <Text fontWeight="bold" fontSize="md" color="#001529">Seven Colleges and Three Schools</Text>
                                    <Text fontSize="xs" color="gray.500">
                                        Academic units include Business and Economics, Agriculture, Engineering, and more.
                                        Academic units include Business and Economics, Agriculture, Engineering, and more.
                                        Academic units include Business and Economics, Agriculture, Engineering, and more.

                                    </Text>
                                </VStack>
                            </HStack>

                            {/* Feature 2 */}
                            <HStack align="start" spacing={4}>
                                <Box p={3} bg="blue.50" borderRadius="md">
                                    <Icon as={HiAcademicCap} boxSize={6} color="#1a4d95" />
                                </Box>
                                <VStack align="start" spacing={1}>
                                    <Text fontWeight="bold" fontSize="md" color="#001529">Mission and Vision</Text>
                                    <Text fontSize="xs" color="gray.500">
                                        Becoming one of Ethiopia's top five societal problem-solving universities by 2030.
                                        Academic units include Business and Economics, Agriculture, Engineering, and more.                                         Becoming one of Ethiopia's top five societal problem-solving universities by 2030.
                                        Becoming one of Ethiopia's top five societal problem-solving universities by 2030.
                                    </Text>
                                </VStack>
                            </HStack>
                        </VStack>

                        <Button
                            bg="#1a4d95"
                            color="white"
                            px={8}
                            py={7}
                            fontSize="sm"
                            _hover={{ bg: "#002D62" }}
                            rightIcon={<Icon as={BsArrowRight} />}
                            borderRadius="none"
                            alignSelf={{ base: "center", md: "flex-start" }}
                        >
                            Learn More
                        </Button>
                    </VStack>

                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default AboutUs;