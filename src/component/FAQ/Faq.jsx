import React, { useState } from 'react';
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
    Container,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";

// Images Paths
import PersonImg from "../../assets/Images/Faq/personImg.jpg";
import Card2 from "../../assets/Images/Faq/card2.jpg";
import Card3 from "../../assets/Images/Faq/card3.jpg";

// Connecting the wide-screen CSS
import "../../CSS/faq.css";

const faqData = [
    {
        id: "01",
        question: "What is Madda Walabu University known for?",
        answer: "MWU is recognized for quality education, community engagement, and practical research with a strategic goal to become one of Ethiopia's top five societal problem-solving universities by 2030.",
        defaultOpen: true,
    },
    {
        id: "02",
        question: "Where is MWU located?",
        answer: "Madda Walabu University is located in Bale-Robe, Oromia Regional State, Ethiopia. It also has campuses in Goba and Shashemene.",
    },
    {
        id: "03",
        question: "How many programs and departments does MWU have?",
        answer: "MWU currently has 79 departments under seven colleges and three schools, offering undergraduate, postgraduate, and PhD programs.",
    },
    {
        id: "04",
        question: "What are MWU vision and mission?",
        answer: "MWU's vision is to become one of Ethiopia's top five societal problem-solving universities by 2030. Its mission is to produce entrepreneurial and employable graduates through quality education, research, and community service.",
    },
    {
        id: "05",
        question: "What campuses and research centers does MWU have?",
        answer: "MWU has three main campuses: Robe Main Campus, Goba Campus, and Shashemene Campus. It also hosts several research centers focused on agriculture, health sciences, and biodiversity.",
    },
    {
        id: "06",
        question: "How can international students or partners engage with MWU?",
        answer: "International students and partners can engage through MWU's admissions office, international partnerships program, and by visiting the official website at mwu.edu.et for collaboration opportunities.",
    },
];

const Faq = () => {
    const [openId, setOpenId] = useState("01");

    const toggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <Box width="100%" py={{ base: 10, md: 24 }} position="relative" overflow="hidden">

            {/* --- DOTTED PATTERN TOP LEFT --- */}
            <Box
                position="absolute"
                top="30px"
                left="20px"
                zIndex="0"
                display={{ base: "none", md: "block" }}
            >
                {Array.from({ length: 8 }).map((_, row) => (
                    <Flex key={row} gap="10px" mb="10px">
                        {Array.from({ length: 10 }).map((_, col) => (
                            <Box
                                key={col}
                                w="4px"
                                h="4px"
                                borderRadius="full"
                                bg="gray.300"
                                opacity="0.6"
                            />
                        ))}
                    </Flex>
                ))}
            </Box>

            {/* --- DOTTED PATTERN BOTTOM RIGHT --- */}
            <Box
                position="absolute"
                bottom="30px"
                right="20px"
                zIndex="0"
                display={{ base: "none", md: "block" }}
            >
                {Array.from({ length: 8 }).map((_, row) => (
                    <Flex key={row} gap="10px" mb="10px">
                        {Array.from({ length: 10 }).map((_, col) => (
                            <Box
                                key={col}
                                w="4px"
                                h="4px"
                                borderRadius="full"
                                bg="gray.300"
                                opacity="0.6"
                            />
                        ))}
                    </Flex>
                ))}
            </Box>

            {/* container.xl limit ko target kiya aur maxW ko 2400px+ screens ke liye barha diya */}
            <Container 
                maxW={{ base: "container.xl", "2xl": "1600px" }} 
                px={{ base: 4, md: 16 }} 
                position="relative" 
                zIndex="1"
                className="custom-faq-container-wide"
                sx={{
                    "@media screen and (min-width: 2400px)": {
                        maxW: "2000px"
                    }
                }}
            >
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 16, lg: 20 }} alignItems="center">

                    {/* --- LEFT SIDE: IMAGE GALLERY --- */}
                    <Box width="100%" position="relative">
                        <HStack spacing={4} align="center">
                            <VStack spacing={4} width="55%">
                                {/* Ultra-wide screens (2500px+) par aspect ratios ko barqarar rakhne ke liye 
                                  heights ko dynamic dynamic calculations (vh / pixels) mein adjust kiya hai.
                                */}
                                <Image
                                    src={PersonImg}
                                    alt="President"
                                    objectFit="cover"
                                    height="320px"
                                    width="100%"
                                    boxShadow="xl"
                                    sx={{
                                        "@media screen and (min-width: 2000px)": {
                                            height: "440px"
                                        },
                                        "@media screen and (min-width: 2500px)": {
                                            height: "550px"
                                        }
                                    }}
                                />
                                <Image
                                    src={Card2}
                                    alt="Field Work"
                                    objectFit="cover"
                                    height="280px"
                                    width="100%"
                                    boxShadow="xl"
                                    sx={{
                                        "@media screen and (min-width: 2000px)": {
                                            height: "390px"
                                        },
                                        "@media screen and (min-width: 2500px)": {
                                            height: "480px"
                                        }
                                    }}
                                />
                            </VStack>

                            {/* Right Side Offset Image */}
                            <Box width="45%" pl={2}>
                                <Image
                                    src={Card3}
                                    alt="Graduation"
                                    objectFit="cover"
                                    height="280px"
                                    width="100%"
                                    boxShadow="xl"
                                    sx={{
                                        "@media screen and (min-width: 2000px)": {
                                            height: "390px"
                                        },
                                        "@media screen and (min-width: 2500px)": {
                                            height: "480px"
                                        }
                                    }}
                                />
                            </Box>
                        </HStack>

                        {/* Dotted Pattern Background (Left Top) */}
                        <Box
                            position="absolute"
                            top="-40px"
                            left="-40px"
                            zIndex="-1"
                            opacity="0.4"
                        >
                            <SimpleGrid columns={10} spacing={2}>
                                {Array.from({ length: 80 }).map((_, i) => (
                                    <Box key={i} w="4px" h="4px" bg="gray.300" borderRadius="full" />
                                ))}
                            </SimpleGrid>
                        </Box>
                    </Box>

                    {/* --- RIGHT SIDE: FAQ CONTENT --- */}
                    <VStack align="start" spacing={5} pt={{ md: 4 }}>
                        <HStack spacing={3}>
                            <Box w="30px" h="2px" bg="#1a4d95" />
                            <Text textTransform="uppercase" fontSize="xs" fontWeight="800" color="#1a4d95" letterSpacing="widest">
                                FAQ
                            </Text>
                        </HStack>

                        <Heading
                            fontSize={{ base: "2xl", md: "4xl", "2xl": "5xl" }}
                            color="#001529"
                            lineHeight="1.1"
                            fontFamily="serif"
                            fontWeight="600"
                        >
                            Frequently Asked <br /> Questions
                        </Heading>

                        <Text
                            fontSize={{ base: "xs", md: "sm", "2xl": "md" }}
                            color="#676e7b"
                            lineHeight="1.6"
                            fontWeight="400"
                            maxW="600px"
                            fontFamily="sans-serif"
                        >
                            Explore key facts about Madda Walabu University, including campuses,
                            academics, admissions, research priorities, and our 2030 strategic direction.
                        </Text>

                        {/* --- ACCORDION LIST --- */}
                        <VStack align="stretch" spacing={0} w="100%" pt={2}>
                            {faqData.map((item, index) => {
                                const isOpen = openId === item.id;
                                return (
                                    <Box
                                        key={item.id}
                                        borderBottom="1px solid"
                                        borderColor="gray.200"
                                        w="100%"
                                    >
                                        {/* Question Row */}
                                        <Flex
                                            justify="space-between"
                                            align="center"
                                            py={4}
                                            px={isOpen ? 5 : 4}
                                            cursor="pointer"
                                            bg={isOpen ? "#06162c" : "white"}
                                            color={isOpen ? "white" : "#001529"}
                                            onClick={() => toggle(item.id)}
                                            transition="all 0.2s"
                                            _hover={{ bg: isOpen ? "#06162c" : "gray.50" }}
                                        >
                                            <Text
                                                fontSize={{ base: "13px", md: "14px", "2xl": "16px" }}
                                                fontWeight="600"
                                                lineHeight="1.4"
                                                pr={4}
                                            >
                                                {item.id}. {item.question}
                                            </Text>
                                            <Icon
                                                as={isOpen ? CloseIcon : AddIcon}
                                                boxSize={isOpen ? "10px" : "12px"}
                                                color={isOpen ? "white" : "gray.500"}
                                                flexShrink={0}
                                            />
                                        </Flex>

                                        {/* Answer - slide open */}
                                        {isOpen && (
                                            <Box
                                                bg="#06162c"
                                                px={5}
                                                pb={5}
                                            >
                                                <Text
                                                    fontSize={{ base: "11px", md: "12px", "2xl": "14px" }}
                                                    color="gray.300"
                                                    lineHeight="1.7"
                                                    fontWeight="350"
                                                >
                                                    {item.answer}
                                                </Text>
                                            </Box>
                                        )}
                                    </Box>
                                );
                            })}
                        </VStack>
                    </VStack>

                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Faq;