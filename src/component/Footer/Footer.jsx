import React from "react";
import FooterImg from "../../assets/Images/Footer/footer.jpg";
import {
    Box,
    Text,
    Heading,
    Grid,
    VStack,
    HStack,
    Image,
    Icon,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaGlobe, FaEnvelope, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import UniLogo from "../../assets/Images/Footer/logo-white.png"
import Insta1 from "../../assets/Images/Insta/insta-1.png";
import Insta2 from "../../assets/Images/Insta/insta-2.png";
import Insta3 from "../../assets/Images/Insta/insta-3.png";
import Insta4 from "../../assets/Images/Insta/insta-4.png";
import Insta5 from "../../assets/Images/Insta/insta-5.png";
import Insta6 from "../../assets/Images/Insta/insta-6.png";
import Insta7 from "../../assets/Images/Insta/insta-7.png";
import Insta8 from "../../assets/Images/Insta/insta-8.png";
import Insta9 from "../../assets/Images/Insta/insta-9.png";

const Footer = () => {
    const instagramImages = [
        { src: Insta1, alt: "1" },
        { src: Insta2, alt: "2" },
        { src: Insta3, alt: "3" },
        { src: Insta4, alt: "4" },
        { src: Insta5, alt: "5" },
                { src: Insta6, alt: "6" },
        { src: Insta7, alt: "7" },
        { src: Insta8, alt: "8" },
        { src: Insta9, alt: "9" }
    ];

    return (
        <Box
            position="relative"
            w="100%"
            bgImage={`url(${FooterImg})`}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            color="white"
            minH="auto" 
        >
            <Box 
                minH="auto" 
                bg="rgba(10,20,40,0.85)" 
                w="100%" 
                pt={{ base: 10, md: 16 }} 
                pb={{ base: 6, md: 8 }} 
                px={{ base: 6, md: 16 }}
            >
                <Grid
                    templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "2fr 1fr 1fr 1fr" }}
                    gap={{ base: 12, md: 10 }}
                    position="relative"
                >
                    {/* SECTION 1 */}
                    <VStack align="start" spacing={4}>
                        <HStack spacing={3}>
                            <Image
                                ml={-4}

                                src={UniLogo}
                                boxSize="80px"
                                mr={-3}
                                width={"105%"}
                            />
                        </HStack>
                        <Text fontSize="sm" maxW="300px">
                            Excellence through Diversity, MWU advances quality education,
                            practical research, and community service.
                        </Text>
                        <VStack align="start" spacing={2} fontSize="sm" color="#cac7c7">
                            <HStack><Icon as={FaMapMarkerAlt} /> <Text>Bale-Robe, Oromia Regional State, Ethiopia</Text></HStack>
                            <HStack><Icon as={FaPhoneAlt} /> <Text>+251-226653092 / +251-222441616</Text></HStack>
                            <HStack><Icon as={FaGlobe} /> <Text>mwu.edu.et</Text></HStack>
                            <HStack><Icon as={FaEnvelope} /> <Text>info@mwu.edu.et</Text></HStack>
                        </VStack>
                    </VStack>

                    {/* Vertical Lines (Desktop Only) */}
                    <Box display={{ base: "none", lg: "block" }} position="absolute" left="32%" top="20%" height="40%" width="1px" bg="rgba(255, 255, 255, 0.15)" />
                    <Box display={{ base: "none", lg: "block" }} position="absolute" left="54%" top="20%" height="40%" width="1px" bg="rgba(255, 255, 255, 0.15)" />
                    <Box display={{ base: "none", lg: "block" }} position="absolute" left="77%" top="20%" height="40%" width="1px" bg="rgba(255, 255, 255, 0.15)" />

                    {/* SECTION 2 */}
                    <VStack align="start" spacing={3}>
                        <Heading size="sm">Useful Links</Heading>
                        {["Home", "About MWU", "Academic Programs", "Campuses", "Students", "Alumni", "Research", "News & Blog", "Contact Us"].map((item) => (
                            <Text color="#cac7c7" key={item} fontSize="sm" _hover={{color: "white", cursor: "pointer"}}>› {item}</Text>
                        ))}
                    </VStack>

                    {/* SECTION 3 */}
                    <VStack align="start" spacing={3}>
                        <Heading size="sm">Our Programs</Heading>
                        {[
                            "Undergraduate Degrees",
                            "Graduate Degrees",
                            "PhD Programs",
                            "Doctor of Medicine (MD)",
                            "BSc in Computer Science",
                            "MBA",
                            "PhD in Public Health",
                        ].map((item) => (
                            <Text color="#cac7c7" key={item} fontSize="sm" _hover={{color: "white", cursor: "pointer"}}>› {item}</Text>
                        ))}
                    </VStack>

                    {/* SECTION 4 */}
                    <VStack align="start" spacing={3}>
                        <Heading size="sm">Instagram</Heading>
                        <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                            {instagramImages.map((image, i) => (
                                <Image
                                    key={i}
                                    src={image.src}
                                    alt={image.alt}
                                    boxSize="60px"
                                    objectFit="cover"
                                    fallbackSrc="https://placehold.co/60x60/1a4d95/white?text=MWU"
                                />
                            ))}
                        </Grid>
                    </VStack>
                </Grid>

                {/* BOTTOM SECTION */}
                <Box py={6} borderTop="1px solid rgba(255,255,255,0.2)" mt={{ base: 10, md: 16 }}>
                    <Grid
                        templateColumns={{ base: "1fr", md: "1fr auto" }}
                        alignItems="center"
                        gap={{ base: 4, md: 0 }}
                    >
                        <Text 
                            color="#cac7c7" 
                            fontSize="sm" 
                            textAlign={{ base: "center", md: "left" }}
                        >
                            © Copyright 2026{" "}
                            <Text as="span" color="#3182ce" fontWeight="bold">
                                Madda Walabu University
                            </Text>
                            . All Rights Reserved.
                        </Text>

                        <HStack spacing={3} justify={{ base: "center", md: "flex-end" }}>
                            {[FaFacebookF, FaGlobe, FaLinkedinIn].map((IconComp, idx) => (
                                <Box key={idx} border="1px solid white" p={2} cursor="pointer" _hover={{ bg: "white", color: "#1a4d95" }} transition="0.3s">
                                    <Icon as={IconComp} />
                                </Box>
                            ))}
                        </HStack>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;