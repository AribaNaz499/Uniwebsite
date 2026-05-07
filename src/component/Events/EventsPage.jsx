import React, { useState, useEffect, useRef } from 'react';
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
    Progress,
    Avatar,
    Container,
    Link,
    Modal,
    ModalOverlay,
    Input,
    Select,
    Textarea,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    useDisclosure,
    Grid,
    GridItem,
    IconButton,
    Divider
} from "@chakra-ui/react";
import TextBg from "../../assets/Images/AboutUs/textbg.png"
import { Link as RouterLink } from 'react-router-dom';
import Banner from "../../assets/Images/AboutUs/banner.jpg"

import { BsArrowRight, BsCalendar3, BsClock } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { LuBookOpen } from "react-icons/lu";

// Image Import
import card1 from "../../assets/Images/Events/event-1.jpg"
import card2 from "../../assets/Images/Events/event-2.jpg"
import card3 from "../../assets/Images/Events/event-3.jpg"
import { color } from 'framer-motion';

const EventsPage = () => {
    const eventsData = [
        {
            id: 1,
            day: "14",
            month: "MAY",
            title: "MWU Research and Innovation Symposium 2026",
            desc: "A full-day institutional symposium presenting research outputs from agriculture, health sciences, engineering, and social sciences, with panel sessions on community impact and funding opportunities.",
            desc2: "Faculty, postgraduate students, and partners will share applied projects from Robe, Bidire, and Harawa 1 research centers.",
            location: "Main Campus Auditorium, Bale-Robe",
            date: " 14.05.2026",
            time: " 09:00am - 04:30pm",
            image: card1
        },
        {
            id: 2,
            day: "02",
            month: "JUN",
            title: "Community Health and One-Health Forum",
            desc: "The School of Health Sciences hosts public and university stakeholders to discuss maternal health, zoonotic risk management, and integrated community health outreach models.",
            desc2: "Participants include clinicians, public health researchers, local health officers, and senior students in field practicum tracks.",
            location: " Goba Campus Conference Hall",
            date: "02.06.2026",
            time: "08:30am - 02:00pm",
            image: card2,
            reverse: true
        },
        {
            id: 3,
            day: "26",
            month: "JUN",
            title: "Climate-Smart Agriculture Field Day",
            desc: "The College of Agriculture and Natural Resources demonstrates drought-resilient farming practices, irrigation methods, and post-harvest techniques tested in regional plots.",
            desc2: "Extension teams and local farmers will co-review results to plan scaling for the next planting cycle.",
            location: "Bidire Research Center, Madda Walabu Woreda",
            date: " 26.06.2026",
            time: " 09:00am - 03:00pm",
            image: card3
        }
    ];

    return (

        <Box width="100%" bg="white" overflow="hidden">
            {/* Banner */}
            <Box
                width="100%"
                height={{ base: "auto", md: "390px", "2xl": "480px" }}
                position="relative"
                mb={10}
                overflow="hidden"
                bg="#f7faff"
            >
                <Flex
                    width="100%"
                    height="100%"
                    direction={{ base: "column", md: "row" }}
                >
                    <Box
                        width={{ base: "100%", md: "45%" }}
                        bgImage={`url(${TextBg})`}
                        bgSize="cover"
                        bgPosition="center"
                        bgRepeat="no-repeat"
                        height={{ base: "240px", md: "100%" }}
                        position="relative"
                        display="flex"
                        alignItems="center"
                        pl={{ base: 6, md: 12, lg: 20, xl: 24, "2xl": "12%" }}
                        pr={{ base: 6, md: 8, "2xl": "5%" }}
                        py={{ base: 8, md: 0 }}
                        zIndex={2}
                    >
                        <Box
                            position="absolute"
                            bottom="0"
                            right="-1px"
                            width="0"
                            height="0"
                            borderBottom={{ md: "480px solid transparent" }}
                            borderRight={{ md: "50px solid white" }}
                            zIndex={3}
                            display={{ base: "none", md: "block" }}
                            sx={{
                                "@media screen and (min-width: 2000px)": {
                                    borderBottom: "580px solid transparent",
                                    borderRight: "70px solid white"
                                }
                            }}
                        />

                        <VStack align="start" spacing={{ base: 2, md: 3 }} maxW="580px">
                            <Heading
                                as="h1"
                                fontSize={{ base: "24px", sm: "28px", md: "32px", lg: "40px", xl: "44px", "2xl": "52px" }}
                                color="#001529"
                                fontFamily="serif"
                                fontWeight="600"
                                lineHeight={{ base: "1.2", md: "1.15" }}
                            >
                                MWU Events
                            </Heading>
                            <HStack spacing={2} fontSize={{ base: "13px", md: "14px" }} fontWeight="500" pt={2}>
                                <Link
                                    as={RouterLink}
                                    to="/"
                                    color="gray.500"
                                    _hover={{ color: "#1a4d95", textDecoration: "underline" }}
                                >
                                    Home
                                </Link>
                                <Text color="gray.400">»</Text>
                                <Text color="#1a4d95"> MWU Events</Text>
                            </HStack>
                        </VStack>
                    </Box>

                    <Box
                        width={{ base: "100%", md: "55%" }}
                        height={{ base: "220px", md: "100%" }}
                        position="relative"
                    >
                        <Box
                            position="absolute"
                            top={0}
                            left={0}
                            width="100%"
                            height="100%"
                            bg="rgba(0, 21, 41, 0.15)"
                            zIndex={1}
                        />
                        <Image
                            src={Banner}
                            alt="Madda Walabu University Gate"
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </Box>
                </Flex>
            </Box>

            {/* Alumini */}
            <Box width="100%" py={{ base: 10, md: 20 }} bg="white" mt={{ md: "-10" }} overflow="hidden">

                <Container
                    maxW="1400px"
                    px={{ base: 6, md: 10 }}
                    className="custom-events-container-wide"
                    sx={{
                        "@media screen and (min-width: 2500px)": {
                            maxW: "2000px"
                        }
                    }}
                >
                    <VStack spacing={0} align="stretch">
                        {eventsData.map((item, index) => (
                            <Box key={item.id}>
                                <Flex
                                    direction={{ base: "column", md: item.reverse ? "row-reverse" : "row" }}
                                    gap={{ base: 8, md: 20 }} // Large gap as seen in design
                                    py={{ base: 10, md: 16 }}
                                    align="center"
                                >
                                    <Box
                                        position="relative"
                                        flex={{ base: "1", md: "1.7" }}
                                        width="100%"
                                        height={{ base: "300px", md: "480px" }}
                                        boxShadow="2xl"
                                        overflow="hidden"
                                        sx={{
                                            "@media screen and (min-width: 2000px)": {
                                                height: "600px"
                                            }
                                        }}
                                    >
                                        <Image
                                            src={item.image}
                                            borderRadius="4px"
                                            w="100%"
                                            h="100%"
                                            objectFit="cover"
                                            transition="0.5s all"
                                            _hover={{ transform: "scale(1.05)" }}
                                        />

                                        {/* Date Badge */}
                                        <VStack
                                            position="absolute" top={6} right={6} spacing={0}
                                            bg="#1a4d95" color="white" minW="65px" borderRadius="4px"
                                            overflow="hidden"
                                            boxShadow="xl"
                                        >
                                            <Text fontSize="23px" fontWeight="400" py={1}>{item.day}</Text>
                                            <Box bg="#3b6eb3" w="100%" textAlign="center" py={1.5}>
                                                <Text fontSize="14px" fontWeight="500" textTransform="uppercase">{item.month}</Text>
                                            </Box>
                                        </VStack>
                                    </Box>

                                    {/* --- CONTENT SIDE (30% Jagah) --- */}
                                    <VStack
                                        flex={{ base: "1", md: "0.8" }}
                                        align="start"
                                        spacing={8}
                                        pl={{ md: 0, lg: -8 }}
                                    >
                                        <Heading
                                            fontSize={{ base: "26px", md: "38px" }}
                                            color="#001529"
                                            fontWeight="800"
                                            lineHeight="1.1"
                                            fontFamily="serif"
                                        >
                                            {item.title}
                                        </Heading>

                                        <Text
                                            fontSize={{ base: "17px", md: "19px" }}
                                            color="gray.500"
                                            lineHeight="1.8"
                                        >
                                            {item.desc}
                                        </Text>
                                        <Text
                                            fontSize={{ base: "17px", md: "19px" }}
                                            color="gray.500"
                                            lineHeight="1.8"
                                            mt={{ md: "-2" }}
                                        >
                                            {item.desc2}
                                        </Text>

                                        {/* Meta Info */}
                                        <VStack align="start" spacing={4} w="100%" borderLeft="3px solid #1a4d95" pl={4}>
                                            <HStack spacing={2}>
                                                <Icon as={HiLocationMarker} color="#1a4d95" boxSize={5} />
                                                <Text
                                                    fontSize="16px"
                                                    fontWeight="500"
                                                    color="#23384d"
                                                    cursor="pointer"
                                                    transition="all 0.3s"
                                                    _hover={{ color: "#6B8BBB" }}
                                                >
                                                    {item.location}
                                                </Text>
                                            </HStack>
                                            <HStack spacing={4}>
                                                <HStack spacing={2}>
                                                    <Icon as={BsCalendar3} color="#1a4d95" boxSize={4} />
                                                    <Text fontSize="16px" fontWeight="500"
                                                        color="#23384d"
                                                        cursor="pointer"
                                                        transition="all 0.3s"
                                                        _hover={{ color: "#6B8BBB" }}
                                                    >{item.date}</Text>
                                                </HStack>
                                                <HStack spacing={2}>
                                                    <Icon as={BsClock} color="#1a4d95" boxSize={4} />
                                                    <Text fontSize="16px" fontWeight="500"
                                                        color="#23384d"
                                                        cursor="pointer"
                                                        transition="all 0.3s"
                                                        _hover={{ color: "#6B8BBB" }}>
                                                        {item.time}</Text>
                                                </HStack>
                                            </HStack>
                                        </VStack>

                                        <Button
                                            variant="outline"
                                            size="lg"
                                            fontSize="14px"
                                            fontWeight="600"
                                            px={10}
                                            h="55px" // Bigger button
                                            borderColor="#0c1e36"
                                            color="#0c1e36"
                                            rightIcon={<Icon as={BsArrowRight} />}
                                            borderRadius="0"
                                            _hover={{ bg: "#0c1e36", color: "white" }}
                                            textTransform="uppercase"
                                        >
                                            Details
                                        </Button>
                                    </VStack>
                                </Flex>
                                {index !== eventsData.length - 1 && <Divider borderColor="gray.400" opacity={0.6} />}
                            </Box>
                        ))}
                    </VStack>
                </Container>
            </Box>

            {/* Marquee */}
            <Box
              as="marquee"
              scrollamount="6" 
              direction="left" 
              style={{ width: "100%", display: "block" }}
            >
              <HStack 
                spacing={{ base: 12, md: 24 }} 
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
                      whiteSpace="nowrap" 
                    >
                      {item}
                    </Text>
                  </HStack>
                ))}
              </HStack>
            </Box>

        </Box>
    )
}

export default EventsPage