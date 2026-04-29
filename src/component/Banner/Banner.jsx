import React from "react";
import {
    Box,
    Button,
    Heading,
    Text,
    Stack,
} from "@chakra-ui/react";
import BannerImg from '../../assets/Images/Banner/banner.jpg'
import Card from '../Cards/Card'

const Banner = () => {
    return (
    <Box
        position="relative"
        minH="100vh"
        h="100vh"
        width="100%"
        backgroundImage={`url(${BannerImg})`} 
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
    >

        <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="rgba(0,0,0,0.7)"
        />

        <Box
            position="relative"
            zIndex="2"
            height="100%"
            display="flex"
            alignItems="center"
            px={{ base: 6, md: 16 }}
        >
            <Box maxW="600px" color="white">
                <Heading
                    fontSize={{ base: "28px", md: "48px", lg: "56px" }}
                    lineHeight="1.1"
                    fontWeight={600}
                    mb={4}
                >
                    Welcome to Madda Walabu University, Ethiopia
                </Heading>

                <Text fontSize={{ base: "14px", md: "16px" }} mb={6}>
                    Founded in March 2005, Madda Walabu University is a public higher
                    education institution in Bale Robe, Oromia, committed to producing
                    entrepreneurial and employable graduates through quality education,
                    research, training, and consultancy.
                </Text>

                <Stack direction="row" spacing={4}>
                    <Button
                        bg="#1e5794"
                        color="white"
                        _hover={{ bg: "#2C5282" }}
                        px={3}
                        py={6}
                        fontSize={"15px"}
                        borderRadius={"none"}
                    >
                        Admission Now →
                    </Button>

                    <Button
                        variant="outline"
                        color="white"
                        borderColor="white"
                        _hover={{ bg: "whiteAlpha.200" }}
                         px={3}
                        py={6}
                        fontSize={"15px"}
                        borderRadius={"none"}
                    >
                        View Program →
                    </Button>
                </Stack>
            </Box>
        </Box>

        {/* 🔘 Slider dots */}
        <Box
            position="absolute"
            right="20px"
            bottom="20px"
            display="flex"
            gap="10px"
        >
            <Box w="10px" h="10px" bg="white" borderRadius="full" />
            <Box w="10px" h="10px" bg="whiteAlpha.500" borderRadius="full" />
            <Box w="10px" h="10px" bg="whiteAlpha.500" borderRadius="full" />
        </Box>

        <Box>
            <Card/>
        </Box>
    </Box>
    );
};

export default Banner;