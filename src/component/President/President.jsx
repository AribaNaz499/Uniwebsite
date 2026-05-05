import React from 'react';
import {
    Box, Text, Heading, VStack, HStack, Image, Icon, SimpleGrid, Button, Container, Progress,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import Card from "../../assets/Images/President/card.jpg";
import Admission from "../../component/Admission/Admission"

// Connecting the wide-screen CSS
import "../../CSS/president.css";

const President = () => {
    const skills = [
        { label: "Faculty Skilled", value: 95 },
        { label: "Computer Science", value: 98 },
        { label: "Communication", value: 95 },
    ];

    return (
        <Box width="100%" bg="white" overflow="hidden">
            <Box py={{ base: 10, md: 24 }}>
                {/* UNTOUCHED CONTAINER: 
                    Aapka original maxW="1250px" bilkul locked hai.
                    Standard devices par margins aur sizes 100% safe hain.
                */}
                <Container 
                    maxW="1250px" 
                    px={{ base: 6, md: 12, lg: 20 }}
                    className="custom-president-container-wide"
                >
                    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }} alignItems="center">
                        {/* Left Side: Image with Background Box */}
                        {/* FIXED FOR ULTRA-WIDE (2556px) ONLY:
                            1. Normal screen sizes ke liye base="350px" aur md="480px" untouched locked hain.
                            2. Media query lagakar ultra-wide (2000px+) par main box ki height ko 680px kiya hai.
                            3. Image wrapper box ki height ko 90% se force karke 100% kiya hai taaki picture bottom ya top se thodi si bhi cut na ho.
                        */}
                        <Box
                            position="relative"
                            width="100%"
                            height={{ base: "350px", md: "480px" }} 
                            sx={{
                                "@media screen and (min-width: 2000px)": {
                                    height: "680px"
                                }
                            }}
                        >
                            <Box
                                position="absolute"
                                right="0"
                                top="0"
                                width="85%" 
                                height="90%" 
                                bg="#f4f7f9" 
                                zIndex="1"
                                sx={{
                                    "@media screen and (min-width: 2000px)": {
                                        height: "100%"
                                    }
                                }}
                            />
                            <Box
                                position="absolute"
                                left="0"
                                top="0"
                                width="50%" 
                                height="90%"
                                zIndex="2"
                                sx={{
                                    "@media screen and (min-width: 2000px)": {
                                        height: "100%",
                                        width: "52%" // Grid stretch ke hisab se perfect width proportion
                                    }
                                }}
                            >
                                <Image
                                    src={Card}
                                    alt="President"
                                    width="100%"
                                    height="100%"
                                    objectFit="cover"
                                    boxShadow="2xl"
                                />
                            </Box>
                        </Box>

                        {/* Right Side: Content */}
                        <VStack align="start" spacing={5}>
                            <HStack spacing={3}>
                                <Box w="30px" h="1.5px" bg="#1a4d95" />
                                <Text fontSize="11px" fontWeight="700" color="#1a4d95" letterSpacing="widest">
                                    OUR PRESIDENT
                                </Text>
                            </HStack>

                            <Heading fontSize={{ base: "2xl", md: "40px" }} color="#001529" fontFamily="serif" fontWeight="500">
                                President's Message
                            </Heading>

                            <Text fontSize="14px" color="gray.600" lineHeight="1.6">
                                A place to provide students with enough knowledge and skills in a complex world. 
                                Are you looking for exceptional education experience with meaningful outcomes for Ethiopia and the world.
                            </Text>

                            <VStack w="100%" spacing={5} pt={2}>
                                {skills.map((skill, index) => (
                                    <Box key={index} w="100%">
                                        <HStack justify="space-between" mb={1}>
                                            <Text fontWeight="600" fontSize="14px" color="#001529">{skill.label}</Text>
                                            <Text fontWeight="600" fontSize="14px" color="#001529">{skill.value}%</Text>
                                        </HStack>
                                        <Progress 
                                            value={skill.value} 
                                            height="4px" 
                                            borderRadius="full" 
                                            bg="gray.100"
                                            sx={{ "& > div": { backgroundColor: "#1a4d95" } }}
                                        />
                                    </Box>
                                ))}
                            </VStack>

                            <HStack w="100%" justify="space-between" align="center" pt={6} flexWrap="wrap">
                                <Button
                                    bg="#1a4d95" color="white" px={7} py={6} fontSize="13px" borderRadius="none"
                                    rightIcon={<Icon as={BsArrowRight} />}
                                    _hover={{ bg: "#002D62" }}
                                >
                                    Lecturer At Faculty
                                </Button>
                                <Box textAlign="right">
                                    <Text fontWeight="700" fontSize="14px" color="#001529" fontStyle="italic">
                                        Berhanemeskel Tena (PhD), President
                                    </Text>
                                </Box>
                            </HStack>
                        </VStack>
                    </SimpleGrid>
                </Container>
            </Box>

            <Box
                width="100%"
                py={{ base: 5, md: 15 }}
                position="relative"
                mt={{md:"-25px"}}
            >
                <Admission />
            </Box>
        </Box>
    );
};

export default President;