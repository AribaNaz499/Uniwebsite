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
    Divider,
    InputGroup, InputRightElement, Checkbox, FormControl
} from "@chakra-ui/react";
import TextBg from "../../assets/Images/AboutUs/textbg.png"
import { Link as RouterLink } from 'react-router-dom';
import Banner from "../../assets/Images/AboutUs/banner.jpg"
import { HiLocationMarker, HiUser } from 'react-icons/hi';
import { BsCalendar3, BsClock, BsArrowRight, BsSearch, BsPlayFill } from 'react-icons/bs';
import { FaUser, FaFolderOpen, FaTag, FaRegNewspaper, FaMicroscope, FaUsers, FaGraduationCap, FaHandsHelping, FaLaptopCode } from 'react-icons/fa';
import { LuBookOpen, LuTag } from 'react-icons/lu';
import { MdCheckCircleOutline } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { FiUser, FiMail, FiGlobe, FiEdit3 } from "react-icons/fi"; // Icons import karein
const EventsDetailPage = () => {
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
                                lineHeight={{ base: "1.1", md: "1.1" }}
                            >
                                Research and Innovation Symposium 2026
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
                                <Text color="#1a4d95"> Event Details</Text>
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

            <Container
                maxW={{ base: "100%", md: "90%", lg: "85%", xl: "container.xl", "2xl": "1800px" }}
                px={{ base: 4, sm: 6, md: 8, lg: 10 }}
                pb={20}
            >
                <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap={{ base: 8, md: "5%", lg: "8%" }}>
                    {/* Left Grid  */}
                    <GridItem colSpan={{ lg: 2 }}>
                        <VStack spacing={14} align="stretch">


                            {/* About Text  */}
                            <Box>
                                <Box
                                    width="100%"
                                    bg="#EEEEEE"
                                    h={{ base: "220px", md: "300px", lg: "380px" }}
                                    borderRadius="15px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    mb={6}
                                >
                                    <Text fontSize={{ base: "24px", md: "32px", lg: "40px" }} fontWeight="bold" color="gray.700">1209 × 490</Text>
                                </Box>
                                <VStack align="start" spacing={4}>
                                    <Heading
                                        fontSize={{ base: "30px", md: "36px", lg: "42px" }}
                                        lineHeight="1"
                                        fontFamily="serif"
                                        color="#001529"
                                        mt={3}
                                    >
                                        About the event
                                    </Heading>
                                    <Text color="gray.600" fontSize={{ base: "16px", md: "18px", lg: "20px" }} lineHeight="1.5">
                                        The MWU Research and Innovation Symposium 2026 brings together faculty, students, government offices, industry partners, and community organizations to review practical research outcomes and define priority actions for the next academic year.
                                    </Text>
                                    <Text color="gray.600" fontSize={{ base: "16px", md: "18px", lg: "20px" }} lineHeight="1.5">
                                        The program focuses on solutions in agriculture, health, biodiversity, engineering, and social development, reflecting MWU's mission of linking teaching and research with real community needs in Bale and surrounding zones.
                                    </Text>

                                    <VStack align="start" spacing={1} mt={1}>
                                        {/* Point 1 */}
                                        <HStack align="start" spacing={3}>
                                            <Icon as={MdCheckCircleOutline} color="gray.600" fontSize={"22px"} mt={1} />
                                            <Text color="gray.600" fontSize={{ base: "17px", md: "19px", lg: "21px" }} lineHeight="1.4">
                                                Research presentation tracks for agriculture, health sciences, engineering, and social sciences.
                                            </Text>
                                        </HStack>

                                        {/* Point 2 */}
                                        <HStack align="start" spacing={3}>
                                            <Icon as={MdCheckCircleOutline} fontSize={"22px"} color="gray.600" mt={1} />
                                            <Text color="gray.600" fontSize={{ base: "17px", md: "19px", lg: "21px" }} lineHeight="1.5">
                                                Student innovation exhibition featuring final-year projects and prototype demonstrations.
                                            </Text>
                                        </HStack>

                                        {/* Point 3 */}
                                        <HStack align="start" spacing={3}>
                                            <Icon as={MdCheckCircleOutline} fontSize={"22px"} color="gray.600" mt={1} />
                                            <Text color="gray.600" fontSize={{ base: "17px", md: "19px", lg: "21px" }} lineHeight="1.5">
                                                Panel discussion on research commercialization and community uptake pathways.
                                            </Text>
                                        </HStack>

                                        {/* Point 4 */}
                                        <HStack align="start" spacing={3}>
                                            <Icon as={MdCheckCircleOutline} fontSize={"22px"} color="gray.600" mt={1} />
                                            <Text color="gray.600" fontSize={{ base: "17px", md: "19px", lg: "21px" }} lineHeight="1.5">
                                                Partnership desk for collaboration with public institutions, NGOs, and private organizations.
                                            </Text>
                                        </HStack>
                                    </VStack>
                                    <Text mb={"-3"} color="gray.600" fontSize={{ base: "16px", md: "18px", lg: "20px" }} lineHeight="1.5">
                                        This symposium also serves as a planning platform for interdisciplinary proposals that can be implemented through MWU research centers in Robe, Bidire, and Harawa 1.
                                    </Text>
                                    <Text color="gray.600" mb={"-3"} fontSize={{ base: "16px", md: "18px", lg: "20px" }} lineHeight="1.5">
                                        Participants will receive a post-event summary with priority action points, partner commitments, and follow-up timelines to ensure implementation beyond the conference date.
                                    </Text>
                                    <Text color="gray.600" mb={"-3"} fontSize={{ base: "16px", md: "18px", lg: "20px" }} lineHeight="1.5">
                                        Students are encouraged to attend the methodological sessions to strengthen proposal writing, data interpretation, and publication readiness.
                                    </Text>
                                    <Text color="gray.600" fontSize={{ base: "16px", md: "18px", lg: "20px" }} lineHeight="1.5">
                                        Registration is open to university units, external partners, and invited guests until 10 May 2026.
                                    </Text>

                                </VStack>
                            </Box>

                            {/* Map  */}
                            <Box>
                                <Text
                                    fontSize="38px"
                                    fontWeight="600"
                                    mb={8}
                                    position="relative"
                                    pb={3}

                                    display="inline-block"
                                    _after={{
                                        content: '""',
                                        position: "absolute",
                                        left: 0,
                                        bottom: 0,
                                        width: "140px",
                                        height: "1px",
                                        bg: "#1a4d95",
                                    }}
                                >
                                    Location
                                </Text>
                                <Box
                                    as="iframe"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.01923456789!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2s!4v1620000000000" // Yahan apna map link dalein
                                    width="100%"
                                    height={{ base: "220px", md: "300px", lg: "380px" }}
                                    borderRadius="1px"
                                    border="none"
                                    mb={6}
                                    title="Google Map"
                                    allowFullScreen
                                />
                            </Box>


                            {/* Form  */}
                            <Box>
                                <Text
                                    fontSize="38px"
                                    fontWeight="600"
                                    mb={2}
                                    position="relative"
                                    pb={3}
                                    mt={{ md: "-6" }}
                                    display="inline-block"
                                >
                                    Leave Your Thoghts
                                </Text>

                                <VStack spacing={5} align="stretch" mt={4}>
                                    {/* Name and Phone Grid */}
                                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                                        <FormControl>
                                            <InputGroup size="lg">
                                                <Input placeholder="Name*" borderRadius="4px" border="1px solid" borderColor="gray.300" _focus={{ borderColor: "blue.500" }} />
                                                <InputRightElement children={<FiUser color="gray" />} />
                                            </InputGroup>
                                        </FormControl>

                                        <FormControl>
                                            <InputGroup size="lg">
                                                <Input placeholder="Phone*" borderRadius="4px" border="1px solid" borderColor="gray.300" />
                                                <InputRightElement children={<BsPhone color="gray" />} />
                                            </InputGroup>
                                        </FormControl>
                                    </Grid>

                                    {/* Email Field */}
                                    <FormControl>
                                        <InputGroup size="lg">
                                            <Input placeholder="e-mail address*" borderRadius="4px" border="1px solid" borderColor="gray.300" />
                                            <InputRightElement children={<FiMail color="gray" />} />
                                        </InputGroup>
                                    </FormControl>

                                    {/* Subject Select Field */}
                                    <FormControl>
                                        <Select placeholder="Subject" size="lg" borderRadius="4px" border="1px solid" borderColor="gray.300" color="gray.500">
                                            <option value="option1">Inquiry</option>
                                            <option value="option2">Feedback</option>
                                        </Select>
                                    </FormControl>

                                    {/* Website Field */}
                                    <FormControl>
                                        <InputGroup size="lg">
                                            <Input placeholder="Website" borderRadius="4px" border="1px solid" borderColor="gray.300" />
                                            <InputRightElement children={<FiGlobe color="gray" />} />
                                        </InputGroup>
                                    </FormControl>

                                    {/* Comment Field */}
                                    <FormControl>
                                        <InputGroup size="lg">
                                            <Textarea
                                                placeholder="Comment*"
                                                borderRadius="4px"
                                                border="1px solid"
                                                borderColor="gray.300"
                                                minH="150px"
                                                pt={4}
                                            />
                                            <InputRightElement pt={4} children={<FiEdit3 color="gray" />} />
                                        </InputGroup>
                                    </FormControl>

                                    {/* Checkbox */}
                                    <Checkbox colorScheme="blue" color="gray.600">
                                        Save my name, email, and website in this browser for the next time I comment.
                                    </Checkbox>

                                    {/* Submit Button */}
                                    <Box>
                                        <Button
                                            bg="#1E4E91"
                                            color="white"
                                            size="lg"
                                            px={6}
                                            py={7}
                                            borderRadius="2px"
                                            _hover={{ bg: "#081933" }}
                                            textTransform="capitalize"
                                            fontWeight="600"
                                        >
                                            Send Message
                                        </Button>
                                    </Box>
                                </VStack>
                            </Box>

                        </VStack>
                    </GridItem>

                    {/* Right Grid  */}
                    <GridItem>
                        <VStack spacing={10} align="stretch">
                            <Box border="1px solid #e2e8f0" p={8} bg="white" borderRadius="sm">
                                <Box mb={6} borderBottom="1px solid #eee">
                                    <Heading fontSize="24px" pb={2} borderBottom="3px solid #1a4d95" w="fit-content" color="#001529" fontFamily="serif">
                                        Event Details
                                    </Heading>
                                </Box>
                            </Box>


                        </VStack>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    )
}

export default EventsDetailPage