import React, { useRef, useState } from 'react';
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
} from "@chakra-ui/react";
import { BsArrowRight, BsPlayFill } from "react-icons/bs";
import GraduationVid from "../../assets/Images/WhyChoose/video.mp4";

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
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <Box width="100%" bg="#FFF9F9" overflow="hidden">
      <Flex direction={{ base: "column", lg: "row" }} align="stretch">

        {/* --- LEFT CONTENT SECTION --- */}
        <Box flex="1.2" py={{ base: 12, md: 24 }} px={{ base: 6, md: 16, xl: 24 }}>
          <VStack align="start" spacing={6} maxW="700px">
            <HStack spacing={3}>
              <Box w="25px" h="1.5px" bg="#1a4d95" />
              <Text textTransform="uppercase" fontSize={{ base: "12px", md: "14px" }} fontWeight="700" color="#1a4d95" letterSpacing="widest">
                WHY CHOOSE MWU
              </Text>
            </HStack>

            <Heading fontSize={{ base: "2xl", md: "4xl" }} color="#001529" fontWeight="650" lineHeight="1.1" fontFamily="serif">
              We help every student to <br /> stand out from the rest
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={10} spacingY={12} pt={8}>
              {features.map((item) => (
                <VStack key={item.id} align="start" spacing={3}>
                  <HStack align="start" spacing={4}>
                    <Text fontSize="3xl" fontWeight="650" color="#1a4d95" lineHeight="1">
                      {item.id}
                    </Text>
                    <VStack align="start" spacing={2}>
                      <Text fontWeight="750" fontSize="md" color="#001529">
                        {item.title}
                      </Text>
                      <Text fontSize="13px" color="gray.600" lineHeight="1.6">
                        {item.desc}
                      </Text>
                      <Button
                        variant="link"
                        rightIcon={<Icon as={BsArrowRight} />}
                        color="#001529"
                        fontSize="12px"
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

        {/* --- RIGHT VIDEO SECTION --- */}
        <Box
          flex="0.8"
          position="relative"
          h={{ base: "280px", lg: "auto" }}
          minH={{ lg: "500px" }}
          overflow="hidden"
          bg="#FFF9F9"
          sx={{ fontSize: 0, lineHeight: 0 }}
        >
          <video
            ref={videoRef}
            src={GraduationVid}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            playsInline
            loop
          />

          {!isPlaying && (
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w={{ base: "60px", md: "80px" }}
              h={{ base: "60px", md: "80px" }}
              bg="white"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              boxShadow="xl"
              zIndex="10"
              onClick={handleToggleVideo}
              transition="transform 0.3s"
              _hover={{ transform: "translate(-50%, -50%) scale(1.1)" }}
            >
              <Icon as={BsPlayFill} boxSize={{ base: 8, md: 12 }} color="#1a4d95" ml={1} />
            </Box>
          )}

          {isPlaying && (
            <Box
              position="absolute"
              inset="0"
              onClick={handleToggleVideo}
              cursor="pointer"
              zIndex="5"
            />
          )}
        </Box>

      </Flex>
    </Box>
  );
};

export default WhyChooseMwu;