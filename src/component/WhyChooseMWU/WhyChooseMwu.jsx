import React, { useRef } from 'react';
import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  SimpleGrid,
  Button,
  Flex,
  Icon,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  AspectRatio,
  useDisclosure
} from "@chakra-ui/react";
import { BsArrowRight, BsPlayFill } from "react-icons/bs";
import GraduationVid from "../../assets/Images/WhyChoose/video.mp4";
import Thumbnail from "../../assets/Images/WhyChoose/thumbnail.webp";

const features = [
  {
    id: 1,
    title: "Get a Top-Tier Global Education",
    desc: "A Kingdom perspective is integrated into your studies and woven through the entire stadium experience."
  },
  {
    id: 2,
    title: "Join a Spiritually Vibrant Campus Community",
    desc: "Opportunities for faith and fellowship are all around, from chapel worship and dorm devotions to communal meals, clubs and activities."
  },
  {
    id: 3,
    title: "Be Prepared for a Thriving Career",
    desc: "A Kingdom perspective is integrated into your studies and woven through the entire MWU experience."
  },
  {
    id: 4,
    title: "Experience a Cost-Competitive Education",
    desc: "Opportunities for faith and fellowship are all around, from chapel worship and dorm devotions to communal meals, clubs and activities."
  }
];

const WhyChooseMwu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const videoRef = useRef(null);

  const handleCloseModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  };

  return (
    // Pure page ka background color wrapper full width rahega
    <Box width="100%" bg="#FFF9F9" overflow="hidden">
      
      {/* Container wrapper 
          "3xl" (2556px+) par humne isko properly control kiya hai taaki grid lines out of bounds na jayein
      */}
      <Box maxW={{ base: "100%", "2xl": "1800px", "3xl": "2500px" }} mx="auto">
        
        {/* FIXED: 
            Humne main Flex box par align="stretch" rakha hai aur ultra-wide screen (3xl) ke liye 
            flex alignment direct center align ki hai.
        */}
        <Flex 
          direction={{ base: "column", lg: "row" }} 
          align={{ base: "stretch", "3xl": "center" }}
        >

          {/* --- LEFT CONTENT SECTION --- */}
          {/* FIXED: 
              Normal laptops aur desktop screens par custom margins aur normal layouts ko disturb nahi kiya.
              Sirf "3xl" (2556px) screens par text container ke andar auto flex vertical center kiya hai.
          */}
          <Box 
            flex="1.2" 
            py={{ base: 12, md: 24, "2xl": 32, "3xl": "auto" }} 
            px={{ base: 6, md: 16, xl: 24, "2xl": 36 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <VStack align="start" spacing={{ base: 6, "2xl": 10 }} maxW={{ base: "700px", "2xl": "900px" }}>
              <HStack spacing={3}>
                <Box w="25px" h="1.5px" bg="#1a4d95" />
                <Text 
                  textTransform="uppercase" 
                  fontSize={{ base: "12px", md: "14px", "2xl": "18px" }} 
                  fontWeight="700" 
                  color="#1a4d95" 
                  letterSpacing="widest"
                >
                  WHY CHOOSE MWU
                </Text>
              </HStack>

              <Heading 
                fontSize={{ base: "2xl", md: "4xl", "2xl": "5xl" }} 
                color="#001529" 
                fontWeight="650" 
                lineHeight="1.1" 
                fontFamily="serif"
              >
                We help every student to <br /> stand out from the rest
              </Heading>

              <SimpleGrid 
                columns={{ base: 1, md: 2 }} 
                spacingX={{ base: 10, "2xl": 16 }} 
                spacingY={{ base: 12, "2xl": 16 }} 
                pt={{ base: 8, "2xl": 12 }}
              >
                {features.map((item) => (
                  <VStack key={item.id} align="start" spacing={3}>
                    <HStack align="start" spacing={4}>
                      <Text 
                        fontSize={{ base: "3xl", "2xl": "4xl" }} 
                        fontWeight="650" 
                        color="#1a4d95" 
                        lineHeight="1"
                      >
                        {item.id}
                      </Text>
                      <VStack align="start" spacing={2}>
                        <Text 
                          fontWeight="750" 
                          fontSize={{ base: "md", "2xl": "lg" }} 
                          color="#001529"
                        >
                          {item.title}
                        </Text>
                        <Text 
                          fontSize={{ base: "13px", "2xl": "15px" }} 
                          color="gray.600" 
                          lineHeight="1.6"
                        >
                          {item.desc}
                        </Text>
                        <Button
                          variant="link"
                          rightIcon={<Icon as={BsArrowRight} />}
                          color="#001529"
                          fontSize={{ base: "12px", "2xl": "14px" }}
                          fontWeight="700"
                          border={"1px solid #ebe8e8"}
                          p={2}
                          pt={2}
                          _hover={{ textDecoration: "none", color: "#1a4d95" }}
                        >
                          Explore More
                        </Button>
                      </VStack>
                    </HStack>
                  </VStack>
                ))}
              </SimpleGrid>
            </VStack>
          </Box>

          {/* --- RIGHT THUMBNAIL SECTION --- */}
          {/* FIXED: 
              Normal mobile aur laptop screens par height layout ko same rakha hai.
              Sirf ultra-wide (3xl/2556px) screens par is right container ke sizes ko optimize kiya hai 
              taaki image height limits mein rahe aur visual hierarchy center mein align ho jaye.
          */}
          <Box
            flex="0.8"
            position="relative"
            h={{ base: "280px", lg: "auto" }}
            minH={{ lg: "500px", "2xl": "750px", "3xl": "850px" }} 
            maxH={{ "3xl": "1000px" }}
            overflow="hidden"
            cursor="pointer"
            onClick={onOpen}
            sx={{ fontSize: 0, lineHeight: 0 }}
          >
            {/* Static Thumbnail Image */}
            <Image
              src={Thumbnail}
              alt="MWU Graduation Ceremony Video Thumbnail"
              width="100%"
              height="100%"
              objectFit="cover"
              display="block"
            />

            {/* Black Overlay */}
            <Box
              position="absolute"
              inset={0}
              bg="rgba(0, 0, 0, 0.4)"
              zIndex="1"
            />

            {/* Static Play Button Overlay */}
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w={{ base: "60px", md: "80px", "2xl": "110px" }}
              h={{ base: "60px", md: "80px", "2xl": "110px" }}
              bg="white"
              borderRadius="full"
              display="flex"
              align="center"
              justifyContent="center"
              boxShadow="xl"
              zIndex="10"
              transition="all 0.3s"
              _hover={{ transform: "translate(-50%, -50%) scale(1.1)", bg: "blue.50" }}
            >
              <Icon as={BsPlayFill} boxSize={{ base: 8, md: 12, "2xl": 16 }} color="#1a4d95" ml={1} />
            </Box>
          </Box>

        </Flex>
      </Box>

      {/* ==========================================================================
          VIDEO POPUP MODAL SECTION
          ========================================================================== */}
      <Modal 
        isOpen={isOpen} 
        onClose={handleCloseModal} 
        isCentered 
        size={{ base: "full", md: "4xl", "2xl": "6xl" }}
        motionPreset="slideInBottom"
      >
        <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(5px)" />
        <ModalContent 
          bg="transparent" 
          boxShadow="none" 
          p={0} 
          m={0}
          borderRadius="none"
        >
          <ModalCloseButton 
            color="white" 
            size="lg" 
            zIndex="20" 
            top="10px" 
            right="10px"
            _hover={{bg: "whiteAlpha.300"}}
          />
          <ModalBody p={0} display="flex" alignItems="center" justifyContent="center">
            
            <AspectRatio 
              ratio={16 / 9} 
              width="100%" 
              maxH="90vh" 
              bg="black"
              borderRadius="md"
              overflow="hidden"
            >
              <video
                ref={videoRef}
                src={GraduationVid}
                controls
                autoPlay 
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain", 
                  display: "block",
                }}
              />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>

    </Box>
  );
};

export default WhyChooseMwu;