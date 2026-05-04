import React from 'react'
import {
    Box, Text, Heading, VStack, HStack, Image, Button, 
    Container, Flex, Icon, Divider, SimpleGrid,
    background
} from "@chakra-ui/react";
import { BsArrowRight, BsCalendar3, BsClock } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import card1 from "../../assets/Images/Events/card1.jpg"
import card2 from "../../assets/Images/Events/card2.jpg"
import card3 from "../../assets/Images/Events/card3.jpg"
const eventsData = [
    {
        id: 1,
        day: "12",
        month: "JAN",
        title: "Programming languages for a better world",
        desc: "Come for a quick session on how this question has crucially helped humanity with achieving one of its most impressive feats yet: orchestrating electric currents.",
        location: "25 Circular Road, New York City",
        date: "25.02.2025",
        time: "09:00am - 12:00pm",
        image: card1
    },
    {
        id: 2,
        day: "07",
        month: "FEB",
        title: "Center for Subjectivity Research 2024",
        desc: "Center for subjectivity research at the university of Copenhagen was established in 2002 on the basis of a grant from national research.",
        location: "25 Circular Road, New York City",
        date: "03.08.2025",
        time: "10:00am - 03:20pm",
        image: card2,
        reverse: true 
    },
    {
        id: 3,
        day: "22",
        month: "SEP",
        title: "The Future of Archives in the Digital Age",
        desc: "This talk explores the potential future of archives in the digital age, using one of the oldest philosophical archives and research institutes for philosophy in Germany.",
        location: "25 Circular Road, New York City",
        date: "14.11.2025",
        time: "11:00am - 04:00pm",
        image: card3
    }
];

const Events = () => {
    return (
        <Box width="100%" py={{ base: 10, md: 20 }} bg="white" >
            <Container maxW="1100px">
                {/* Header Section */}
                <Flex justify="space-between" align="flex-end" mb={5}>
                    <VStack align="start" spacing={1}>
                        <HStack spacing={3}>
                            <Box w="30px" h="2px" bg="#1a4d95" />
                            <Text fontSize="xs" fontWeight="800" color="#1a4d95" letterSpacing="widest">
                                STUDENT EVENTS
                            </Text>
                        </HStack>
                        <Heading fontSize="4xl" color="#001529" fontWeight="700" fontFamily="serif">
                            Alumni Events
                        </Heading>
                    </VStack>
                    <Button 
                        variant="outline" borderRadius="0" px={8} fontSize="xs" fontWeight="bold"
                        rightIcon={<Icon as={BsArrowRight} />} _hover={{bg: "#1a4d95", color: "white"}}
                    >
                        Explore All
                    </Button>
                </Flex>

                {/* Events List */}
                <VStack spacing={0} align="stretch">
                    {eventsData.map((item, index) => (
                        <Box key={item.id}>
                            <Flex 
                                direction={{ base: "column", md: item.reverse ? "row-reverse" : "row" }} 
                                gap={10} py={10} align="center"
                            >
                                <Box position="relative" flex="1">
                                    <Image src={item.image} borderRadius="2px" w="100%" h="280px" objectFit="cover" />
                                    <VStack 
                                        position="absolute" top={4} right={4} spacing={0} 
                                        bg="#1a4d95" color="white" minW="50px" borderRadius="2px"
                                    >
                                        <Text fontSize="xl" fontWeight="bold" pt={1}>{item.day}</Text>
                                        <Box bg="#3b6eb3" w="100%" textAlign="center" py={0.5}>
                                            <Text fontSize="9px" fontWeight="bold">{item.month}</Text>
                                        </Box>
                                    </VStack>
                                </Box>

                                {/* Content Part */}
                                <VStack flex="1.2" align="start" spacing={4}>
                                    <Heading fontSize="22px" color="#001529" fontWeight="700" lineHeight="1.3">
                                        {item.title}
                                    </Heading>
                                    <Text fontSize="14px" color="gray.600" noOfLines={3}>
                                        {item.desc}
                                    </Text>
                                    
                                    {/* Meta Info */}
                                    <HStack wrap="wrap" spacing={5} color="#001529" fontWeight="600" fontSize="11px">
                                        <HStack spacing={1}>
                                            <Icon as={HiLocationMarker} color="#1a4d95" />
                                            <Text>{item.location}</Text>
                                        </HStack>
                                        <HStack spacing={1}>
                                            <Icon as={BsCalendar3} color="#1a4d95" />
                                            <Text>{item.date}</Text>
                                        </HStack>
                                        <HStack spacing={1}>
                                            <Icon as={BsClock} color="#1a4d95" />
                                            <Text>{item.time}</Text>
                                        </HStack>
                                    </HStack>

                                    <Button 
                                        variant="outline" size="sm" fontSize="11px" fontWeight="bold" px={6}
                                        rightIcon={<Icon as={BsArrowRight} />} borderRadius="0"
                                    >
                                        Details
                                    </Button>
                                </VStack>
                            </Flex>
                            {index !== eventsData.length - 1 && <Divider borderColor="gray.100" />}
                        </Box>
                    ))}
                </VStack>
            </Container>
        </Box>
    )
}

export default Events;