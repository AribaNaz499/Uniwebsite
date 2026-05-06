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
    ModalContent,
    ModalCloseButton,
    ModalBody,
    useDisclosure,
    Grid,
    GridItem,
    IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LuBookOpen } from "react-icons/lu";
import Background from "../../assets/Images/Admission/background.webp"

import FooterImg from "../../assets/Images/Footer/footer.jpg";
import { HiOutlineAcademicCap, HiOutlineUser, HiOutlineMail, HiOutlinePhone, HiOutlineUserGroup, HiOutlineLibrary, HiOutlineLocationMarker } from "react-icons/hi";
import { Link as RouterLink } from 'react-router-dom';
import { BsArrowRight, BsPlayFill, BsPlus } from "react-icons/bs";
import Card from "../../assets/Images/President/card.jpg";
import Admission from "../../component/Admission/Admission"
import Tourism from "../../assets/Images/AboutUs/Banner.jpg"
import TextBg from "../../assets/Images/AboutUs/textbg.png"
import { HiUsers, HiAcademicCap } from "react-icons/hi";
import { BsJournalBookmarkFill, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import PersonImg from "../../assets/Images/AboutUs/person.jpg";
import GraduationImg from "../../assets/Images/AboutUs/graduation.jpg";
import FieldImg from "../../assets/Images/AboutUs/field.jpeg";
import DottedPatternImg from "../../assets/Images/AboutUs/dotted-pattern.jpg";

import VideoBg from "../../assets/Images/AboutUs/video-banner.jpg";
import Card1 from "../../assets/Images/AboutUs/card1.jpg"
import Card2 from "../../assets/Images/AboutUs/card2.jpg"
import Card3 from "../../assets/Images/AboutUs/card3.jpg"
import Card4 from "../../assets/Images/AboutUs/card4.jpg"


import Img1 from "../../assets/Images/AboutUs/alumni-1.jpg";
import Img2 from "../../assets/Images/AboutUs/alumni-2.jpg";
import Img3 from "../../assets/Images/AboutUs/alumni-3.jpg";
import Img4 from "../../assets/Images/AboutUs/alumni-4.jpg";
import Img5 from "../../assets/Images/AboutUs/alumni-5.jpg";
import Img6 from "../../assets/Images/AboutUs/alumni-6.jpg";

const AboutUsPage = () => {
    const testimonialData = [
        {
            rating: 4.8,
            text: "MWU helped me combine academic theory with practical field experience, making me more confident and employable in today's competitive environment.",
            name: "Albert Flores",
            role: "Students",
            avatar: "https://via.placeholder.com/78", // Aap apna image URL de sakte hain
        },
        {
            rating: 4.8,
            text: "The university's community-focused approach and supportive faculty gave me opportunities to contribute to local development while building global skills.",
            name: "Ronald Richards",
            role: "Students",
            avatar: "https://via.placeholder.com/78",
        },
        {
            rating: 4.8,
            text: "From research projects to campus collaboration, MWU prepared me to think critically, solve problems and lead with purpose.",
            name: "Berhanemeskel Tena (PhD)",
            role: "Students",
            avatar: "https://via.placeholder.com/78",
        },
        {
            rating: 4.9,
            text: "A simple testimonial slider can instantly make a landing page feel more credible, polished and engaging for visitors.",
            name: "Lucas Martin",
            role: "Frontend Developer",
            avatar: "https://via.placeholder.com/78",
        },
        {
            rating: 4.7,
            text: "The glass card, hover effects and responsive spacing make this UI component easy to reuse in modern web projects.",
            name: "Sofia Bennett",
            role: "UI Designer",
            avatar: "https://via.placeholder.com/78",
        }
    ];
    const campusImages = [
        { id: 1, url: Card1, title: "Library", available: true },
        { id: 2, url: Card2, title: "Admin Block", available: true },
        { id: 3, url: Card3, title: "Main Campus", available: true },
        { id: 4, url: Card4, title: "Sports Complex", available: true },
        { id: 5, url: null, title: "Auditorium", available: true },
        { id: 6, url: null, title: "Canteen", available: true },
    ];
    const availableImages = campusImages.filter(img => img.available);


    const [currentIndex, setCurrentIndex] = useState(0);
    const { isOpen: isCampusOpen, onOpen: onCampusOpen, onClose: onCampusClose } = useDisclosure();

    const handleCardClick = (index) => {
        setCurrentIndex(index);
        onCampusOpen();
    };

    const handlePrev = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? availableImages.length - 1 : prev - 1));
    };

    const handleNext = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev === availableImages.length - 1 ? 0 : prev + 1));
    };

    const handlePlusClick = (image) => {
        setSelectedImage(image);
        onOpens();
    };


    const { isOpen, onOpen, onClose } = useDisclosure();

    const youtubeVideoUrl = "https://www.youtube.com/embed/EZfLOSQ8hW8?autoplay=1&vq=hd1080";
    const skills = [
        { label: "Faculty Skilled", value: 95 },
        { label: "Computer Science", value: 98 },
        { label: "Communication", value: 95 },
    ];

    const [activePage, setActivePage] = useState(0);
    const autoPlayRef = useRef();

    const cardsPerPage = { base: 1, md: 2, lg: 3 };

    const totalPages = testimonialData.length - 2 > 0 ? testimonialData.length - 2 : 1;

    useEffect(() => {
        autoPlayRef.current = nextSlide;
    });

    useEffect(() => {
        const play = () => {
            autoPlayRef.current();
        };
        const interval = setInterval(play, 3000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setActivePage((prev) => (prev + 1) % testimonialData.length);
    };

    const handleDotClick = (index) => {
        setActivePage(index);
    };

    const getVisibleCards = () => {
        const items = [];
        for (let i = 0; i < 3; i++) {
            items.push(testimonialData[(activePage + i) % testimonialData.length]);
        }
        return items;
    };

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
                                About Madda Walabu <br /> University
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
                                <Text color="#1a4d95">About MWU</Text>
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
                            bg="rgba(0, 21, 41, 0.12)"
                            zIndex={1}
                        />
                        <Image
                            src={Tourism}
                            alt="Madda Walabu University Gate"
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </Box>
                </Flex>
            </Box>

            {/* About Us */}
            <Container maxW={{ base: "container.xl", "2xl": "1600px" }} px={{ base: 4, md: 16, "2xl": 24 }}>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16, "2xl": 24 }} alignItems="center">

                    {/* --- LEFT SIDE: CONTENT --- */}
                    <VStack
                        mt={{ base: "0", lg: "5%", "2xl": "8%" }}
                        mb={{ base: "10px", lg: "20px" }}
                        align="start"
                        spacing={{ base: 5, "2xl": 8 }}
                        width="100%"
                    >
                        <HStack spacing={3}>
                            <Box w="30px" h="2px" bg="#1a4d95" />
                            <Text textTransform="uppercase" fontSize={{ base: "16px", "2xl": "20px" }} fontWeight="600" color="#1a4d95" letterSpacing="sm">
                                About MWU
                            </Text>
                        </HStack>

                        <Heading fontSize={{ base: "2xl", md: "42px", "2xl": "54px" }} color="#001529" lineHeight="1.15" fontFamily="serif">
                            A Public University <br />
                            Driving Societal <br />
                            Impact in Ethiopia
                        </Heading>

                        <Text fontSize={{ base: "lg", "2xl": "xl" }} color="gray.500" lineHeight="1.6">
                            Madda Walabu University currently enrolls around 24,961 students in undergraduate and postgraduate studies through 79 departments under seven colleges and three schools. MWU is committed to producing competent, entrepreneurial, and employable graduates through relevant and quality education, research, training, consultancy, and community service.
                        </Text>

                        <VStack align="start" spacing={{ base: 5, "2xl": 7 }} w="100%">
                            {/* Feature 1 */}
                            <HStack align="start" spacing={4}>
                                <Box p={3} bg="blue.50" borderRadius="md" flexShrink={0}>
                                    <Icon as={HiUsers} boxSize={{ base: 5, "2xl": 7 }} color="#1a4d95" />
                                </Box>
                                <VStack align="start" spacing={1}>
                                    <Text fontWeight="bold" fontSize={{ base: "20px", "2xl": "25px" }} color="#001529">Seven Colleges and Three Schools</Text>
                                    <Text fontSize={{ base: "15px", "2xl": "17px" }} color="gray.500" lineHeight="1.5">
                                        Vision: becoming one of the top five societal problem-solving universities in Ethiopia by 2030. Mission: delivering quality education, impactful research outputs, and need-based community services that foster socio-economic development.
                                    </Text>
                                </VStack>
                            </HStack>

                            {/* Feature 2 */}
                            <HStack align="start" spacing={4}>
                                <Box p={3} bg="blue.50" borderRadius="md" flexShrink={0}>
                                    <Icon as={HiAcademicCap} boxSize={{ base: 5, "2xl": 7 }} color="#1a4d95" />
                                </Box>
                                <VStack align="start" spacing={1}>
                                    <Text fontWeight="bold" fontSize={{ base: "20px", "2xl": "25px" }} color="#001529">Vision and Mission 2030</Text>
                                    <Text fontSize={{ base: "15px", "2xl": "17px" }} color="gray.500" lineHeight="1.5">
                                        MWU operates integrated research centers at Robe Main Campus, Bidire Town in Madda Walabu Woreda, and Harawa 1 in Ginir Woreda to support practical solutions in agriculture, health, biodiversity, tourism, and technology.
                                    </Text>
                                </VStack>
                            </HStack>

                            {/* Feature 3 */}
                            <HStack align="start" spacing={4}>
                                <Box p={3} bg="blue.50" borderRadius="md" flexShrink={0}>
                                    <Icon as={BsJournalBookmarkFill} boxSize={{ base: 5, "2xl": 7 }} color="#1a4d95" />
                                </Box>
                                <VStack align="start" spacing={1}>
                                    <Text fontWeight="bold" fontSize={{ base: "20px", "2xl": "25px" }} color="#001529">Research and Community Engagement</Text>
                                    <Text fontSize={{ base: "15px", "2xl": "17px" }} color="gray.500" lineHeight="1.5">
                                        MWU academic units include Business and Economics, Social Sciences and Humanities, Natural and Computational Sciences, Agriculture and Natural Resources, Education and Behavioral Sciences, Engineering, and Computing; plus Schools of Health Sciences, Medicine, and Law.
                                    </Text>
                                </VStack>
                            </HStack>
                        </VStack>


                        <Button
                            bg="#1a4d95"
                            color="white"
                            mt={{ base: 4, md: "3", "2xl": "6" }}
                            px={{ base: 8, "2xl": 10 }}
                            py={{ base: 7, "2xl": 8 }}
                            fontSize={{ base: "sm", "2xl": "md" }}
                            _hover={{ bg: "#002D62" }}
                            rightIcon={<Icon as={BsArrowRight} />}
                            borderRadius="none"
                            alignSelf={{ base: "center", md: "flex-start" }}
                        >
                            Learn More
                        </Button>
                    </VStack>


                    {/* --- RIGHT SIDE: IMAGE GALLERY --- */}
                    <Box
                        position="relative"
                        width="100%"
                        height={{ base: "auto", md: "550px", xl: "600px", "2xl": "750px" }}
                        display="flex"
                        flexDirection={{ base: "column", md: "row" }}
                        gap={{ base: 4, md: 0 }}
                    >
                        {/* 1. Main Left Image */}
                        <Box
                            position={{ base: "relative", md: "absolute" }}
                            left="0"
                            bottom="0"
                            width={{ base: "100%", md: "70%", "2xl": "68%" }}
                            height={{ base: "300px", sm: "400px", md: "90%" }}
                            zIndex="2"
                        >
                            <Image
                                src={PersonImg}
                                alt="President"
                                objectFit="cover"
                                objectPosition="top center"
                                width={{ base: "100%", md: "80%" }}
                                height="100%"
                                boxShadow="2xl"
                            />
                        </Box>

                        <VStack
                            position={{ base: "relative", md: "absolute" }}
                            right="0"
                            top={{ base: "0", md: "14", "2xl": "20" }}
                            width={{ base: "100%", md: "40%", "2xl": "42%" }}
                            spacing={{ base: "4", md: "3", "2xl": "5" }}
                            zIndex="3"
                            height={{ base: "auto", md: "90%" }}
                            justify="center"
                        >
                            <Image
                                src={GraduationImg}
                                alt="Graduation"
                                objectFit="cover"
                                height={{ base: "200px", sm: "250px", md: "175px", "2xl": "240px" }}
                                width="100%"
                                boxShadow="xl"
                                border="4px solid white"
                            />
                            <Image
                                src={FieldImg}
                                alt="Field Work"
                                objectFit="cover"
                                height={{ base: "200px", sm: "250px", md: "262px", "2xl": "340px" }}
                                width="100%"
                                boxShadow="xl"
                                border="4px solid white"
                            />
                        </VStack>
                    </Box>

                </SimpleGrid>
            </Container>

            {/* History Section */}
            <Box
                py={{ base: 10, md: 23 }}
                bg="white"
                position="relative"
                zIndex={2}
                boxShadow="0px 15px 30px rgba(0,0,0,0.05)"
            >
                <Container
                    maxW={{ base: "100%", lg: "1300px", "2xl": "1600px" }}
                    px={{ base: 6, md: 12, lg: 20 }}
                    className="custom-president-container-wide"
                >
                    <SimpleGrid
                        columns={{ base: 1, lg: 2 }}
                        spacing={{ base: 8, lg: 8, "2xl": 16 }}
                        alignItems="center"
                    >
                        {/* Left Side Content */}
                        <VStack align="start" spacing={5} w="100%">
                            <HStack spacing={3}>
                                <Box w="30px" h="1.5px" bg="#1a4d95" />
                                <Text
                                    fontSize={{ base: "16px", md: "18px", "2xl": "20px" }}
                                    fontWeight="600"
                                    color="#1a4d95"
                                    letterSpacing="sm"
                                >
                                    HISTORY OF WALABU
                                </Text>
                            </HStack>

                            <Heading
                                fontSize={{ base: "2xl", md: "44px", "2xl": "56px" }}
                                lineHeight="1.15"
                                color="#001529"
                                fontFamily="serif"
                                fontWeight="500"
                            >
                                The Historical Roots of <br />
                                Madda Walabu University
                            </Heading>
                        </VStack>

                        {/* Right Side: Content */}
                        <VStack align="start" spacing={4} w="100%" maxW="100%">
                            <Text
                                fontSize={{ base: "16px", md: "18px", "2xl": "20px" }}
                                color="gray.600"
                                lineHeight="1.7"
                                w={{ base: "100%", lg: "110%" }}
                            >
                                Madda Walabu University is named after the historical place called Madda Walabu, known in Oromo oral traditions as the cradle land of the Oromo people and the birthplace of the Gadaa system.
                            </Text>

                            <Text
                                fontSize={{ base: "16px", md: "18px", "2xl": "20px" }}
                                color="gray.600"
                                lineHeight="1.7"
                                w={{ base: "100%", lg: "110%" }}
                            >
                                Madda Walabu University is named after the historical place called Madda Walabu, known in Oromo oral traditions as the cradle land of the Oromo people and the birthplace of the Gadaa system.
                            </Text>

                            <Text
                                fontSize={{ base: "16px", md: "18px", "2xl": "20px" }}
                                color="gray.600"
                                lineHeight="1.7"
                                w={{ base: "100%", lg: "110%" }}
                            >
                                Madda Walabu University is named after the historical place called Madda Walabu, known in Oromo oral traditions as the cradle land of the Oromo people and the birthplace of the Gadaa system.
                            </Text>
                        </VStack>
                    </SimpleGrid>
                </Container>
            </Box>


            {/* STICKY/PARALLAX VIDEO REVEAL SECTION */}
            <Box
                position="relative"
                width="100%"
                height={{ base: "350px", md: "500px", "2xl": "650px" }}
                overflow="hidden"
            >
                <Box
                    position="sticky"
                    top={0}
                    bottom={0}
                    height="100%"
                    width="100%"
                    zIndex={1}
                    bgImage={`url(${VideoBg})`}
                    bgSize="cover"
                    bgPosition="center"
                    bgAttachment={{ base: "scroll", lg: "fixed" }}
                >
                    {/* Dark overlay */}
                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        width="100%"
                        height="100%"
                        bg="rgba(0, 21, 41, 0.45)"
                    />

                    {/* Central Play Button */}
                    <Flex
                        width="100%"
                        height="100%"
                        alignItems="center"
                        justifyContent="center"
                        position="relative"
                        zIndex={2}
                    >
                        <Box
                            as="button"
                            onClick={onOpen}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            w={{ base: "70px", md: "90px", "2xl": "110px" }}
                            h={{ base: "70px", md: "90px", "2xl": "110px" }}
                            borderRadius="full"
                            bg="white"
                            boxShadow="0 10px 25px rgba(0,0,0,0.3)"
                            transition="all 0.3s ease-in-out"
                            _hover={{
                                transform: "scale(1.1)",
                                bg: "#1a4d95",
                                color: "white"
                            }}
                            cursor="pointer"
                            color="#1a4d95"
                        >
                            <Icon as={BsPlayFill} boxSize={{ base: 8, md: 12, "2xl": 16 }} ml={1} />
                        </Box>
                    </Flex>
                </Box>
            </Box>

            {/* DYNAMIC YOUTUBE VIDEO POPUP (LIGHTBOX)*/}
            <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
                <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(5px)" />
                <ModalContent bg="transparent" boxShadow="none" mx={4}>
                    <ModalCloseButton color="white" fontSize="lg" right="2" top="-8" />
                    <ModalBody p={0}>
                        <Box
                            position="relative"
                            paddingBottom="56.25%"
                            height={0}
                            overflow="hidden"
                            borderRadius="md"
                            bg="black"
                        >
                            {isOpen && (
                                <iframe
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%"
                                    }}
                                    src={youtubeVideoUrl}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            )}
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>


            {/* Testimonials  */}
            <Box py={{ base: 10, md: 24 }} bg="#fbfcfd">
                <Container
                    maxW="1350px"
                    px={{ base: 6, md: 12, lg: 20 }}
                    className="custom-president-container-wide"
                >
                    <VStack align="start" spacing={5} mb={12}>
                        <HStack spacing={3}>
                            <Box w="30px" h="1.5px" bg="#1a4d95" />
                            <Text
                                fontSize="18px"
                                fontWeight="600"
                                color="#1a4d95"
                                letterSpacing="widest"
                            >
                                TESTIMONIALS
                            </Text>
                        </HStack>

                        <Heading
                            fontSize={{ base: "2xl", md: "46px" }}
                            lineHeight={1.1}
                            color="#001529"
                            fontFamily="serif"
                            fontWeight="500"
                        >
                            Voices from the <br />
                            MWU Community
                        </Heading>

                        <Text
                            fontSize="21px"
                            color="gray.500"
                            maxW={{ base: "100%", md: "45%" }}
                            lineHeight="1.4"
                        >
                            Students and partners highlight MWU's practical learning culture,
                            research relevance, and commitment to solving real social and economic
                            challenges.
                        </Text>
                    </VStack>

                    <Box w="100%" position="relative" overflow="hidden" py={2}>
                        <SimpleGrid
                            columns={{ base: 1, md: 2, lg: 3 }}
                            spacing={8}
                            transition="all 0.5s ease-in-out"
                        >
                            {getVisibleCards().map((item, index) => (
                                <Box
                                    key={index}
                                    bg="white"
                                    border="1px solid"
                                    borderColor="gray.100"
                                    borderRadius="lg"
                                    p={6}
                                    boxShadow="sm"
                                    position="relative"
                                    minH="250px"
                                    w="100%"
                                    mx="auto"
                                    display="flex"
                                    flexDirection="column"
                                    justifyContent="space-between"
                                    transition="transform 0.3s ease, box-shadow 0.3s ease"
                                    _hover={{
                                        transform: "translateY(-4px)",
                                        boxShadow: "md",
                                    }}
                                >
                                    <Flex justify="space-between" align="center" mb={4}>
                                        <HStack spacing={1}>
                                            <Box color="#ff7a00" fontSize="22px">★★★★★</Box>
                                            <Text fontSize="14px" fontWeight="600" color="gray.500" ml={1}>
                                                ({item.rating})
                                            </Text>
                                        </HStack>

                                        <Box
                                            fontSize="44px"
                                            fontWeight="bold"
                                            fontFamily="serif"
                                            color="#1a4d95"
                                            lineHeight={1}
                                            opacity={0.8}
                                        >
                                            ”
                                        </Box>
                                    </Flex>

                                    {/* Content Area */}
                                    <Text
                                        color="#4a5568"
                                        fontSize="15px"
                                        lineHeight="1.6"
                                        mb={4}
                                        flex="1"
                                    >
                                        {item.text}
                                    </Text>

                                    {/* Bottom Section: User Info and Avatar */}
                                    <Flex justify="space-between" align="center" pt={3} borderTop="1px solid" borderColor="gray.50">
                                        <VStack align="start" spacing={0}>
                                            <Text
                                                fontWeight="bold"
                                                fontSize="16px"
                                                lineHeight="1.2"
                                                color="#001529"
                                                fontFamily="serif"
                                            >
                                                {item.name}
                                            </Text>
                                            <Text fontSize="13px" color="gray.500">
                                                {item.role}
                                            </Text>
                                        </VStack>

                                        {/* Avatar Container */}
                                        <Box
                                            w="64px"
                                            h="64px"
                                            bg="#ebebeb"
                                            borderRadius="md"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            fontSize="10px"
                                            fontWeight="bold"
                                            color="gray.600"
                                            overflow="hidden"
                                        >
                                            {item.avatar ? (
                                                <Avatar src={item.avatar} name={item.name} w="100%" h="100%" borderRadius="none" />
                                            ) : (
                                                "78 × 78"
                                            )}
                                        </Box>
                                    </Flex>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>

                    {/* --- Slider Dots Navigation --- */}
                    <Flex justify="center" mt={8} gap={3}>
                        {testimonialData.map((_, index) => (
                            <Box
                                key={index}
                                w={activePage === index ? "10px" : "7px"}
                                h={activePage === index ? "10px" : "7px"}
                                bg={activePage === index ? "#1a4d95" : "gray.300"}
                                borderRadius="full"
                                cursor="pointer"
                                transition="all 0.3s ease"
                                onClick={() => handleDotClick(index)}
                                _hover={{ bg: "#1a4d95", transform: "scale(1.2)" }}
                            />
                        ))}
                    </Flex>
                </Container>
            </Box>

            {/* Count  */}
            <Box
                w="100%"
                bgImage={`url(${FooterImg})`}
                bgSize="cover"
                bgPosition="center"
                position="relative"
            >
                <Box bg="rgba(11, 20, 39, 0.9)" py={{ base: 10, md: 16 }}>

                    <Container
                        maxW="98%"
                        className="custom-count-container-wide"
                        px={{ base: 2, md: 4, lg: 6 }}
                        pt={2}
                        pb={2}
                    >
                        <Grid
                            templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
                            gap={{ base: 8, md: 4 }}
                            w="100%"
                        >
                            {/* SECTION 1: Departments */}
                            <HStack
                                justify="center"
                                spacing={5}
                                borderRight={{ md: "1px solid rgba(255, 255, 255, 0.3)" }}
                                px={4}
                                w="100%"
                            >
                                <Icon as={HiOutlineLibrary} boxSize={{ base: "40px", md: "50px" }} color="#19286e" />
                                <Box color="white">
                                    <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" lineHeight="1">9</Text>
                                    <Text fontSize="md" fontWeight="450">Departments</Text>
                                </Box>
                            </HStack>

                            {/* SECTION 2: Colleges */}
                            <HStack
                                justify="center"
                                spacing={5}
                                borderRight={{ md: "1px solid rgba(255, 255, 255, 0.3)" }}
                                px={4}
                                w="100%"
                            >
                                <Icon as={HiOutlineAcademicCap} boxSize={{ base: "40px", md: "50px" }} color="#19286e" />
                                <Box color="white">
                                    <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" lineHeight="1">1</Text>
                                    <Text fontSize="md" fontWeight="450">Colleges and<br />Schools</Text>
                                </Box>
                            </HStack>

                            {/* SECTION 3: Campuses */}
                            <HStack
                                justify="center"
                                spacing={5}
                                borderRight={{ md: "1px solid rgba(255, 255, 255, 0.3)" }}
                                px={4}
                                w="100%"
                            >
                                <Icon as={HiOutlineLocationMarker} boxSize={{ base: "40px", md: "50px" }} color="#19286e" />
                                <Box color="white">
                                    <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" lineHeight="1">0</Text>
                                    <Text fontSize="md" fontWeight="450">Campuses</Text>
                                </Box>
                            </HStack>

                            {/* SECTION 4: Students */}
                            <HStack
                                justify="center"
                                spacing={5}
                                px={4}
                                w="100%"
                            >
                                <Icon as={HiOutlineUserGroup} boxSize={{ base: "40px", md: "50px" }} color="#19286e" />
                                <Box color="white">
                                    <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" lineHeight="1">2,496</Text>
                                    <Text fontSize="md" fontWeight="450">Enrolled Students</Text>
                                </Box>
                            </HStack>
                        </Grid>
                    </Container>
                </Box>
            </Box>

            {/* Professor  */}
            <Box width="100%" py={{ base: 12, md: 24 }} bg="white" overflow="hidden" mb={{ md: "-10" }}>
                <Container
                    maxW="1400px"
                    px={{ base: 4, md: 8, lg: 12 }}
                    className="custom-campus-container-wide"
                >
                    {/* --- HEADER SECTION --- */}
                    <Flex
                        justify={{ md: "space-between", base: "center" }}
                        align={{ base: "center", md: "flex-end" }}
                        mb={{ base: 8, md: 12 }}
                        direction={{ base: "column", md: "row" }}
                        gap={6}
                    >
                        <VStack align="start" spacing={3} maxW="600px">
                            <HStack spacing={3}>
                                <Box w="30px" h="2px" bg="#1a4d95" />
                                <Text textTransform="uppercase" fontSize={{ base: "16px", md: "18px" }} fontWeight="600" color="#1a4d95" letterSpacing="widest">
                                    PROFESSOR
                                </Text>
                            </HStack>

                            <Heading fontSize={{ base: "3xl", md: "42px" }} color="#001529" fontWeight="700" lineHeight="1.2" fontFamily="serif">
                                Academic Leaders and Experts
                            </Heading>
                        </VStack>

                        <Button
                            size="md"
                            fontSize="16px"
                            fontWeight="600"
                            borderRadius="0px"
                            py={7}
                            bg={"#1A4B96"}
                            color={"white"}
                            rightIcon={<Icon as={BsArrowRight} />}
                            _hover={{ bg: "#07162C", color: "white" }}
                            px={8}
                            textAlign={{ base: "left" }}
                            w={{ base: "auto", md: "auto" }}
                        >
                            Explore All
                        </Button>
                    </Flex>

                    <SimpleGrid
                        columns={{ base: 1, lg: 2 }}
                        spacing={8}
                        w="100%"
                    >
                        {[
                            {
                                name: "Berhanemeskel Tena (PhD)",
                                role: "Professor of Literature",
                                email: "info@mwu.edu.et",
                                phone: "+251-226653092",
                            },
                            {
                                name: "Dr Bezabih Wendimu",
                                role: "Professor of Design",
                                email: "info@mwu.edu.et",
                                phone: "+251-226653092",
                            },
                            {
                                name: "Dr. Aster Kassa",
                                role: "Professor of Technology",
                                email: "info@mwu.edu.et",
                                phone: "+251-226653092",
                            },
                            {
                                name: "Prof. Tadesse Kebede",
                                role: "Professor of Science",
                                email: "info@mwu.edu.et",
                                phone: "+251-226653092",
                            },
                        ].map((prof, index) => (
                            <Flex
                                key={index}
                                bg="white"
                                border="1px solid"
                                borderColor="gray.200"
                                borderRadius="none"

                                py={8}
                                px={4}
                                direction={{ base: "column", sm: "row" }}
                                align="center"
                                gap={6}
                                w="100%"
                                transition="box-shadow 0.3s ease"
                                _hover={{ boxShadow: "md" }}
                            >
                                <Box
                                    w={{ base: "110%", sm: "210px" }}
                                    h="210px"
                                    bg="#e2e8f0"
                                    borderRadius="none"
                                    overflow="hidden"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    position="relative"
                                >
                                    {/* Standard Avatar Silhouette Graphic */}
                                    <Icon
                                        as={HiOutlineUser}
                                        boxSize="160px"
                                        color="gray.400"
                                        position="absolute"
                                        bottom="-5px"
                                    />
                                </Box>

                                {/* Right Side: Professor Info */}
                                <VStack align="start" spacing={3} flex="1">
                                    <Box>
                                        <Heading
                                            fontSize="26px"
                                            color="#001529"
                                            fontFamily="serif"
                                            fontWeight="700"
                                            mb={1}
                                        >
                                            {prof.name}
                                        </Heading>
                                        <Text fontSize="17px" color="gray.500" fontWeight="500">
                                            {prof.role}
                                        </Text>
                                    </Box>

                                    <VStack align="start" spacing={1.5} w="100%">
                                        {/* Email */}
                                        <HStack spacing={2} color="#1a4d95">
                                            <Icon as={HiOutlineMail} boxSize="18px" />
                                            <Text fontSize="16px" fontWeight="500" cursor="pointer" _hover={{ textDecoration: "underline" }}>
                                                {prof.email}
                                            </Text>
                                        </HStack>

                                        {/* Phone */}
                                        <HStack spacing={2} color="#1a4d95">
                                            <Icon as={HiOutlinePhone} boxSize="18px" />
                                            <Text fontSize="16px" fontWeight="500">
                                                {prof.phone}
                                            </Text>
                                        </HStack>
                                    </VStack>

                                    <HStack spacing={3} pt={2}>
                                        {["f", "t", "in"].map((platform) => (
                                            <Box
                                                key={platform}
                                                w="32px"
                                                h="32px"
                                                borderRadius="full"
                                                border="1px solid"
                                                borderColor="gray.200"
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                                cursor="pointer"
                                                fontSize="14px"
                                                fontWeight="bold"
                                                color="#081933"
                                                transition="all 0.2s ease"
                                                _hover={{ bg: "#1a4d95", color: "white", borderColor: "#1a4d95" }}
                                            >
                                                {platform}
                                            </Box>
                                        ))}
                                    </HStack>
                                </VStack>
                            </Flex>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Campus Life  */}
            <Box width="100%" py={{ base: 10, md: 22 }} bg="#F6F6FF" overflow="hidden">
                <Container
                    maxW="1300px"
                    px={{ base: 4, md: 8 }}
                    className="custom-campus-container-wide"
                >
                    {/* --- HEADER SECTION --- */}
                    <Flex
                        justify={{ md: "space-between", base: "center" }}
                        align={{ base: "center", md: "flex-end" }}
                        mb={{ base: 8, md: 12 }}
                        direction={{ base: "column", md: "row" }}
                        gap={6}
                    >
                        <VStack align="start" spacing={3} maxW="600px">
                            <HStack spacing={3}>
                                <Box w="30px" h="2px" bg="#1a4d95" />
                                <Text
                                    textTransform="uppercase"
                                    fontSize={{ base: "14px", md: "18px" }}
                                    fontWeight="600"
                                    color="#1a4d95"
                                    letterSpacing="widest"
                                >
                                    CAMPUS LIFE
                                </Text>
                            </HStack>

                            <Heading
                                fontSize={{ base: "28px", md: "40px" }}
                                color="#001529"
                                fontWeight="700"
                                lineHeight="1.2"
                                fontFamily="serif"
                            >
                                MWU Campuses and Student Life
                            </Heading>
                        </VStack>

                        <Button
                            size="md"
                            fontSize="16px"
                            fontWeight="600"
                            borderRadius="0px"
                            py={7}
                            bg={"#1A4B96"}
                            color={"white"}
                            rightIcon={<Icon as={BsArrowRight} />}
                            _hover={{ bg: "#07162C", color: "white" }}
                            px={8}
                            textAlign={{ base: "left" }}
                            w={{ base: "auto", md: "auto" }}
                        >
                            Explore All
                        </Button>
                    </Flex>

                    <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} w="100%" spacing={6}>
                        {availableImages.slice(0, 4).map((image, index) => (
                            <Box
                                key={image.id}
                                as={motion.div}
                                position="relative"
                                overflow="hidden"
                                boxShadow="lg"
                                cursor="pointer"
                                h={{ base: "280px", md: "350px" }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src={image.url}
                                    alt={image.title}
                                    w="100%"
                                    h="100%"
                                    objectFit="cover"
                                    transition="0.3s ease-in-out"
                                />

                                {/* --- Dark Hover Overlay --- */}
                                <Box
                                    position="absolute"
                                    top={0}
                                    left={0}
                                    w="100%"
                                    h="100%"
                                    bg="rgba(0, 21, 41, 0.75)"
                                    opacity={0}
                                    _hover={{ opacity: 1 }}
                                    transition="0.3s ease-in-out"
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="center"
                                    gap={4}
                                    p={4}
                                    // Direct click handler targeting the correct campusImages index
                                    onClick={() => handleCardClick(index)}
                                >
                                    <Icon
                                        as={BsPlus}
                                        boxSize="60px"
                                        color="white"
                                    />
                                    <Text
                                        fontSize="20px"
                                        fontWeight="600"
                                        color="white"
                                        fontFamily="serif"
                                    >
                                        {image.title}
                                    </Text>
                                </Box>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Container>

                {/* --- IMAGE MODAL SLIDER (Active inside the Popup) --- */}

                <Modal isOpen={isCampusOpen} onClose={onCampusClose} size="5xl" isCentered>
                    <ModalOverlay bg="rgba(0, 0, 0, 0.9)" />
                    <ModalContent borderRadius="none" bg="transparent" boxShadow="none" maxW="90vw">
                        <ModalCloseButton color="white" size="lg" zIndex={20} />
                        <ModalBody p={0} position="relative" display="flex" alignItems="center" justifyContent="center">

                            {/* Left Navigation Icon */}
                            <IconButton
                                aria-label="Previous image"
                                icon={<Icon as={BsChevronLeft} boxSize="30px" />}
                                onClick={handlePrev}
                                position="absolute"
                                left={{ base: "10px", md: "-60px" }}
                                bg="transparent"
                                color="white"
                                _hover={{ bg: "whiteAlpha.200", color: "#1A4B96" }}
                                _active={{ bg: "whiteAlpha.300" }}
                                borderRadius="full"
                                size="lg"
                                zIndex={15}
                            />

                            {/* Dynamic Image & Counter */}
                            <VStack align="center" spacing={4} w="100%">
                                <Image
                                    src={availableImages[currentIndex].url}
                                    alt={availableImages[currentIndex].title}
                                    maxH="70vh"
                                    objectFit="contain"
                                    borderRadius="sm"
                                    boxShadow="2xl"
                                />

                                <VStack spacing={1}>
                                    <Text
                                        fontSize="22px"
                                        color="white"
                                        fontFamily="serif"
                                        fontWeight="600"
                                    >
                                        {availableImages[currentIndex].title}
                                    </Text>
                                    <Text fontSize="14px" color="gray.400">
                                        {currentIndex + 1} of {availableImages.length}
                                    </Text>
                                </VStack>
                            </VStack>

                            {/* Right Navigation Icon */}
                            <IconButton
                                aria-label="Next image"
                                icon={<Icon as={BsChevronRight} boxSize="30px" />}
                                onClick={handleNext}
                                position="absolute"
                                right={{ base: "10px", md: "-60px" }}
                                bg="transparent"
                                color="white"
                                _hover={{ bg: "whiteAlpha.200", color: "#1A4B96" }}
                                _active={{ bg: "whiteAlpha.300" }}
                                borderRadius="full"
                                size="lg"
                                zIndex={15}
                            />

                        </ModalBody>
                    </ModalContent>
                </Modal>

            </Box>


            {/* Alumini  */}
            <Box width="100%" py={{ base: 10, md: 24 }}>
                <Container maxW={{ base: "1300px", "2xl": "1800px" }} px={{ base: 4, md: 16, "2xl": 24 }}>
                    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 16, lg: 20 }} alignItems="center">

                        <Box
                            width="100%"
                            height="auto"
                            position="relative"
                            py={{ base: 4, md: 2 }}
                        >
                            <SimpleGrid
                                columns={{ base: 2, sm: 3 }}
                                spacing={{ base: 3, md: 4 }}
                                width="100%"
                            >
                                {/* Row 1 - Image 1 */}
                                <Box
                                    overflow="hidden"
                                    boxShadow="lg"
                                    h={{ base: "140px", md: "190px" }}
                                    transition="transform 0.3s ease-in-out"
                                    _hover={{ transform: "scale(1.03)" }}
                                >
                                    <Image
                                        src={Img1}
                                        alt="Alumni Activity 1"
                                        objectFit="cover"
                                        w="100%"
                                        h="100%"
                                    />
                                </Box>

                                {/* Row 1 - Image 2 */}
                                <Box
                                    overflow="hidden"
                                    boxShadow="lg"
                                    h={{ base: "140px", md: "190px" }}
                                    transition="transform 0.3s ease-in-out"
                                    _hover={{ transform: "scale(1.03)" }}
                                >
                                    <Image
                                        src={Img2}
                                        alt="Alumni Activity 2"
                                        objectFit="cover"
                                        w="100%"
                                        h="100%"
                                    />
                                </Box>

                                {/* Row 1 - Image 3 */}
                                <Box
                                    overflow="hidden"
                                    boxShadow="lg"
                                    h={{ base: "140px", md: "190px" }}
                                    transition="transform 0.3s ease-in-out"
                                    _hover={{ transform: "scale(1.03)" }}
                                >
                                    <Image
                                        src={Img3}
                                        alt="Alumni Activity 3"
                                        objectFit="cover"
                                        w="100%"
                                        h="100%"
                                    />
                                </Box>

                                {/* Row 2 - Image 4 */}
                                <Box
                                    overflow="hidden"
                                    boxShadow="lg"
                                    h={{ base: "140px", md: "190px" }}
                                    transition="transform 0.3s ease-in-out"
                                    _hover={{ transform: "scale(1.03)" }}
                                >
                                    <Image
                                        src={Img4}
                                        alt="Alumni Activity 4"
                                        objectFit="cover"
                                        w="100%"
                                        h="100%"
                                    />
                                </Box>

                                {/* Row 2 - Image 5 */}
                                <Box
                                    overflow="hidden"
                                    boxShadow="lg"
                                    h={{ base: "140px", md: "190px" }}
                                    transition="transform 0.3s ease-in-out"
                                    _hover={{ transform: "scale(1.03)" }}
                                >
                                    <Image
                                        src={Img5}
                                        alt="Alumni Activity 5"
                                        objectFit="cover"
                                        w="100%"
                                        h="100%"
                                    />
                                </Box>

                                {/* Row 2 - Image 6 */}
                                <Box
                                    overflow="hidden"
                                    boxShadow="lg"
                                    h={{ base: "140px", md: "190px" }}
                                    transition="transform 0.3s ease-in-out"
                                    _hover={{ transform: "scale(1.03)" }}
                                >
                                    <Image
                                        src={Img6}
                                        alt="Alumni Activity 6"
                                        objectFit="cover"
                                        w="100%"
                                        h="100%"
                                    />
                                </Box>
                            </SimpleGrid>
                        </Box>

                        {/* --- RIGHT SIDE: CONTENT --- */}
                        <VStack align="start" spacing={6}>
                            <HStack spacing={3}>
                                <Box w="30px" h="2px" bg="#1a4d95" />
                                <Text textTransform="uppercase" fontSize="18px" fontWeight="600" color="#1a4d95" letterSpacing="md">
                                    ALUMNI
                                </Text>
                            </HStack>

                            <Heading fontWeight={600} fontSize={{ base: "2xl", md: "46px" }} color="#001529" lineHeight="1" fontFamily="serif">
                                MWU Alumni and Global
                                Professional Networking
                            </Heading>

                            <Text fontSize="19px" color="gray.500" lineHeight="1.4">
                                At Madda Walabu University, we prepare graduates for meaningful careers through inclusive learning, practical training, and a strong community-centered academic environment. practical skills and build a network of industry contacts.                            </Text>

                            <Flex
                                direction={{ base: "column", sm: "row" }}
                                gap={8}
                                alignSelf={{ base: "center", md: "flex-start" }}
                                w={{ base: "100%", sm: "auto" }}

                            >
                                {/* --- 1. Apply Now Button --- */}
                                <Button
                                    bg="#1a4d95"
                                    color="white"
                                    px={8}
                                    py={7}
                                    fontSize="18px"
                                    fontWeight="600"
                                    _hover={{ bg: "#081933" }}
                                    rightIcon={<Icon as={BsArrowRight} />}
                                    borderRadius="none"
                                    w={{ base: "100%", sm: "auto" }}
                                >
                                    Apply Now
                                </Button>

                                <Button
                                    variant="outline"
                                    borderColor="black"
                                    color="black"
                                    px={8}
                                    py={7}
                                    fontSize="18px"
                                    fontWeight="600"
                                    _hover={{ bg: "#081933", color: "white" }}
                                    rightIcon={<Icon as={BsArrowRight} />}
                                    borderRadius="none"
                                    w={{ base: "100%", sm: "auto" }}
                                >
                                    View All
                                </Button>
                            </Flex>
                        </VStack>

                    </SimpleGrid>
                </Container>
            </Box>

            {/* Latest News  */}
          <Box width="100%" bg="white" overflow="hidden" py={8}>
    {/* --- TOP HEADER BAR (Full Width - No Extra Space) --- */}
    <Box width="100%" borderBottom="1px solid" borderColor="gray.100" py={{ base: 4, md: 3 }} mb={6}>
        {/* maxW: Regular desktops par 1500px rahega aur ultra-wide (2k/2560px) par automatically 2100px ho jayega */}
        <Container 
            maxW={{ base: "100%", lg: "1500px", "2xl": "2100px" }} 
            px={{ base: 6, md: 12, lg: 20 }} 
            className="custom-admission-top-wide"
        >
            <SimpleGrid
                columns={{ base: 1, md: 3 }}
                spacing={{ base: 4, md: 10 }}
                justifyItems={{ base: "flex-start", md: "center" }}
            >
                {["HEALTH SCIENCE", "TOURISM & HERITAGE", "BIODIVERSITY"].map((item) => (
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
            </SimpleGrid>

            {/* --- HEADER SECTION --- */}
            <Flex
                justify={{ md: "space-between", base: "center" }}
                align={{ base: "center", md: "flex-end" }}
                mb={{ base: 8, md: 12 }}
                direction={{ base: "column", md: "row" }}
                gap={6}
            >
                <VStack align="start" spacing={3} maxW="800px">
                    <HStack spacing={3}>
                        <Box w="30px" h="2px" bg="#1a4d95" />
                        <Text textTransform="uppercase" fontSize={{ base: "14px", md: "18px" }} fontWeight="600" color="#1a4d95" letterSpacing="widest">
                            LATEST AND NEWS
                        </Text>
                    </HStack>

                    <Heading fontSize={{ base: "2xl", md: "4xl", xl: "5xl" }} color="#001529" fontWeight="700" lineHeight="1.2" fontFamily="serif">
                        MWU News and Insights
                    </Heading>
                </VStack>

                <Button
                    variant="outline"
                    size="md"
                    fontSize="12px"
                    fontWeight="700"
                    borderRadius="0px"
                    borderColor="gray.300"
                    color="#001529"
                    rightIcon={<Icon as={BsArrowRight} />}
                    _hover={{ bg: "#1a4d95", color: "white", borderColor: "#1a4d95" }}
                    px={8}
                    textAlign={{ base: "left" }}
                    w={{ base: "auto", md: "auto" }}
                >
                    Explore All
                </Button>
            </Flex>
        </Container>
    </Box>

    {/* --- CARDS CONTAINER (Responsive Width for all devices) --- */}
    <Container 
        maxW={{ base: "100%", lg: "1500px", "2xl": "2100px" }} 
        px={{ base: 6, md: 12, lg: 20 }}
    >
        <Flex
            direction="row"
            wrap="wrap"
            gap={8}
            width="100%"
        >
            {/* --- CARD 1 --- */}
            <Box
                flex={{ base: "1 1 100%", lg: "1 1 calc(50% - 16px)" }}
                borderWidth="1px"
                borderColor="gray.100"
                overflow="hidden"
                bg="#F4F6F8"
                display="flex"
                flexDirection="column"
                minH="450px"
                transition="all 0.3s ease-in-out"
                _hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
            >
                <Box p={8} flex="1">
                    <HStack spacing={2} mb={3} color="gray.600" fontSize="13px">
                        <Text>×</Text>
                        <Text fontWeight="600">By Dr Bezabih Wendimu</Text>
                        <Text>|</Text>
                        <Icon as={LuBookOpen} size="14px" />
                        <Text>0 Comment</Text>
                    </HStack>

                    <Heading as="h3" size="md" color="#001529" fontFamily="serif" mb={6} lineHeight="1.4">
                        Beyond the Lecture Hall languages
                    </Heading>

                    <Button
                        variant="outline"
                        rightIcon={<Icon as={BsArrowRight} />}
                        borderRadius="0px"
                        size="sm"
                        fontSize="12px"
                        borderColor="gray.300"
                        color="#001529"
                        _hover={{ bg: "#1a4d95", color: "white", borderColor: "#1a4d95" }}
                    >
                        View Details
                    </Button>
                </Box>

                <Box bg="#E5E8EB" h="300px" position="relative" display="flex" alignItems="center" justifyContent="center">
                    <Box position="absolute" bottom="20px" left="20px" bg="#1a4d95" color="white" p={3} textAlign="center" minW="60px">
                        <Text fontSize="18px" fontWeight="bold" lineHeight="1">21</Text>
                        <Text fontSize="10px" textTransform="uppercase">June, 25</Text>
                    </Box>
                    <Text color="gray.500" fontSize="24px" fontWeight="700">312 × 258</Text>
                </Box>
            </Box>

            {/* --- CARD 2 --- */}
            <Box
                flex={{ base: "1 1 100%", lg: "1 1 calc(50% - 16px)" }}
                borderWidth="1px"
                borderColor="gray.100"
                overflow="hidden"
                bg="#F4F6F8"
                display="flex"
                flexDirection="column"
                minH="450px"
                transition="all 0.3s ease-in-out"
                _hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
            >
                <Box bg="#E5E8EB" h="300px" position="relative" display="flex" alignItems="center" justifyContent="center">
                    <Box position="absolute" bottom="20px" left="20px" bg="#1a4d95" color="white" p={3} textAlign="center" minW="60px" zIndex="2">
                        <Text fontSize="18px" fontWeight="bold" lineHeight="1">21</Text>
                        <Text fontSize="10px" textTransform="uppercase">June, 25</Text>
                    </Box>
                    <Text color="gray.500" fontSize="24px" fontWeight="700">648 × 258</Text>
                </Box>

                <Box p={8} flex="1">
                    <HStack spacing={2} mb={3} color="gray.600" fontSize="13px">
                        <Text>×</Text>
                        <Text fontWeight="600">By Dr Bezabih Wendimu</Text>
                        <Text>|</Text>
                        <Icon as={LuBookOpen} size="14px" />
                        <Text>0 Comment</Text>
                    </HStack>

                    <Heading as="h3" size="md" color="#001529" fontFamily="serif" mb={6} lineHeight="1.4">
                        We individually assess each plan and offer optimal solutions
                    </Heading>

                    <Button
                        variant="outline"
                        rightIcon={<Icon as={BsArrowRight} />}
                        borderRadius="0px"
                        size="sm"
                        fontSize="12px"
                        borderColor="gray.300"
                        color="#001529"
                        _hover={{ bg: "#1a4d95", color: "white", borderColor: "#1a4d95" }}
                    >
                        View Details
                    </Button>
                </Box>
            </Box>

            {/* --- CARD 3 --- */}
            <Box
                flex={{ base: "1 1 100%", lg: "0 1 calc(50% - 16px)" }}
                borderWidth="1px"
                borderColor="gray.100"
                overflow="hidden"
                bg="#F4F6F8"
                display="flex"
                flexDirection="column"
                minH="450px"
                transition="all 0.3s ease-in-out"
                _hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
            >
                <Box p={8} flex="1">
                    <HStack spacing={2} mb={3} color="gray.600" fontSize="13px">
                        <Text>×</Text>
                        <Text fontWeight="600">By Dr Bezabih Wendimu</Text>
                        <Text>|</Text>
                        <Icon as={LuBookOpen} size="14px" />
                        <Text>0 Comment</Text>
                    </HStack>

                    <Heading as="h3" size="md" color="#001529" fontFamily="serif" mb={6} lineHeight="1.4">
                        The University Voice for a better world
                    </Heading>

                    <Button
                        variant="outline"
                        rightIcon={<Icon as={BsArrowRight} />}
                        borderRadius="0px"
                        size="sm"
                        fontSize="12px"
                        borderColor="gray.300"
                        color="#001529"
                        _hover={{ bg: "#1a4d95", color: "white", borderColor: "#1a4d95" }}
                    >
                        View Details
                    </Button>
                </Box>

                <Box bg="#E5E8EB" h="300px" position="relative" display="flex" alignItems="center" justifyContent="center">
                    <Box position="absolute" bottom="20px" left="20px" bg="#1a4d95" color="white" p={3} textAlign="center" minW="60px">
                        <Text fontSize="18px" fontWeight="bold" lineHeight="1">21</Text>
                        <Text fontSize="10px" textTransform="uppercase">June, 25</Text>
                    </Box>
                    <Text color="gray.500" fontSize="24px" fontWeight="700">312 × 258</Text>
                </Box>
            </Box>
        </Flex>
    </Container>
</Box>
        </Box>
    )
}

export default AboutUsPage;