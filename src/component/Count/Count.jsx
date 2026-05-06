import React from "react";
import FooterImg from "../../assets/Images/Footer/footer.jpg";
import {
    Box,
    Text,
    Grid,
    HStack,
    Icon,
    Container,
} from "@chakra-ui/react";
import { HiOutlineAcademicCap, HiOutlineUserGroup, HiOutlineLibrary, HiOutlineLocationMarker } from "react-icons/hi";

import "../../CSS/count.css";

const Count = () => {
    return (
        <Box
            w="100%"
            bgImage={`url(${FooterImg})`}
            bgSize="cover"
            bgPosition="center"
            position="relative"
        >
            <Box bg="rgba(11, 20, 39, 0.9)" py={{ base: 10, md: 14 }}>
               
                <Container 
                    maxW="container.xl" 
                    className="custom-count-container-wide"
                >
                    <Grid
                        templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
                        gap={{ base: 8, md: 0 }}
                    >
                        {/* SECTION 1: Departments */}
                        <HStack 
                            justify="center" 
                            spacing={5} 
                            borderRight={{ md: "1px solid rgba(255, 255, 255, 0.3)" }}
                            px={4}
                        >
                            <Icon as={HiOutlineLibrary} boxSize={{ base: "40px", md: "50px" }} color="#19286e" />
                            <Box color="white">
                                <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" lineHeight="1">9</Text>
                                <Text fontSize="sm" fontWeight="450">Departments</Text>
                            </Box>
                        </HStack>

                        {/* SECTION 2: Colleges */}
                        <HStack 
                            justify="center" 
                            spacing={5} 
                            borderRight={{ md: "1px solid rgba(255, 255, 255, 0.3)" }}
                            px={4}
                        >
                            <Icon as={HiOutlineAcademicCap} boxSize={{ base: "40px", md: "50px" }} color="#19286e" />
                            <Box color="white">
                                <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" lineHeight="1">1</Text>
                                <Text fontSize="sm" fontWeight="450">Colleges and<br/>Schools</Text>
                            </Box>
                        </HStack>

                        {/* SECTION 3: Campuses */}
                        <HStack 
                            justify="center" 
                            spacing={5} 
                            borderRight={{ md: "1px solid rgba(255, 255, 255, 0.3)" }}
                            px={4}
                        >
                            <Icon as={HiOutlineLocationMarker} boxSize={{ base: "40px", md: "50px" }} color="#19286e" />
                            <Box color="white">
                                <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" lineHeight="1">0</Text>
                                <Text fontSize="sm" fontWeight="450">Campuses</Text>
                            </Box>
                        </HStack>

                        {/* SECTION 4: Students */}
                        <HStack 
                            justify="center" 
                            spacing={5} 
                            px={4}
                        >
                            <Icon as={HiOutlineUserGroup} boxSize={{ base: "40px", md: "50px" }} color="#19286e" />
                            <Box color="white">
                                <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" lineHeight="1">2,496</Text>
                                <Text fontSize="sm" fontWeight="450">Enrolled Students</Text>
                            </Box>
                        </HStack>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Count;