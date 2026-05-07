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
} from "@chakra-ui/react";
import { LuBookOpen } from "react-icons/lu";
import { motion } from "framer-motion";
import Background from "../../assets/Images/Admission/background.webp"
import ContactImg from "../../assets/Images/Contact/contact-img.jpeg"
import FooterImg from "../../assets/Images/Footer/footer.jpg";
import { HiOutlineAcademicCap, HiOutlineUser, HiOutlineMail, HiOutlinePhone, HiOutlineUserGroup, HiOutlineLibrary, HiOutlineLocationMarker } from "react-icons/hi";
import { Link as RouterLink } from 'react-router-dom';
import TextBg from "../../assets/Images/AboutUs/textbg.png"
import Banner from "../../assets/Images/AboutUs/video-banner.jpg"
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import personImg from "../../assets/Images/AboutUs/person.jpg"
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
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
                Contact Madda Walabu  <br /> University
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
                <Text color="#1a4d95">Contact MWU</Text>
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

      {/* Info  */}
      <Box width="100%" bg="white" py={{ base: 10, md: 16 }}>
        <Container
          maxW={{ base: "100%", lg: "1500px", "2xl": "2100px" }}
          px={{ base: 6, md: 12, lg: 20 }}
        >
          <SimpleGrid
            columns={{ base: 1, lg: 3 }}
            spacing={{ base: 8, xl: 12 }}
            alignItems="stretch" // Teeno columns ko auto equal-height par lock rakhta hai
          >
            {/* --- LEFT COLUMN: MWU Main Campus Info --- */}
            <VStack align="stretch" spacing={6} justify="space-between" h="100%">
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "39px" }}
                color="#001529"
                fontWeight="500"
                fontFamily="serif"
                lineHeight="1.1"
              >
                MWU Main Campus Information:
              </Heading>

              {/* Badi screens par spacing barabar rakhne ke liye flex layouts use kiye hain */}
              <VStack
                align="stretch"
                mt={{ md: "-45px", xl: "-85px" }} // Large monitors par spacing dynamic controls
                spacing={6}
                flex="1"
                justify="center"
              >
                {/* Address Card */}
                <Box
                  bg="white"
                  borderWidth="1px"
                  borderColor="gray.200"
                  p={6}
                  boxShadow="sm"
                  display="flex"
                  alignItems="center"
                  gap={4}
                  minH="150px"
                >
                  <Box bg="red.50" p={3} borderRadius="sm">
                    <Icon as={FiMapPin} color="#1a4d95" boxSize="24px" />
                  </Box>
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="600" color="#001529" fontSize="21px">
                      Main Campus Address
                    </Text>
                    <Text color="gray.600" lineHeight={1.4} fontSize="18px">
                      Bale-Robe, Oromia Regional State, Ethiopia
                    </Text>
                  </VStack>
                </Box>

                {/* Phone Card */}
                <Box
                  bg="white"
                  borderWidth="1px"
                  borderColor="gray.200"
                  p={6}
                  boxShadow="sm"
                  display="flex"
                  alignItems="center"
                  gap={4}
                  minH="150px"
                >
                  <Box bg="red.50" p={3} borderRadius="sm">
                    <Icon as={FiPhone} color="#1a4d95" boxSize="24px" />
                  </Box>
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="600" color="#001529" fontSize="21px">
                      Phone Number
                    </Text>
                    <Text color="gray.600" fontSize="18px">
                      +251-226653092 <br /> +251-222441616
                    </Text>
                  </VStack>
                </Box>

                {/* Email Card */}
                <Box
                  bg="white"
                  borderWidth="1px"
                  borderColor="gray.200"
                  p={6}
                  boxShadow="sm"
                  display="flex"
                  alignItems="center"
                  gap={4}
                  minH="150px"
                >
                  <Box bg="red.50" p={3} borderRadius="sm">
                    <Icon as={FiMail} color="#1a4d95" boxSize="24px" />
                  </Box>
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="600" color="#001529" fontSize="21px">
                      Email Address
                    </Text>
                    <Text color="gray.600" fontSize="18px">
                      info@mwu.edu.et
                    </Text>
                  </VStack>
                </Box>
              </VStack>
            </VStack>

            {/* --- CENTER COLUMN: Portrait Image --- */}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="stretch" // Badi screens par full-height stretch hoga (no gaps)
              h="100%"
              minH={{ base: "320px", md: "450px", lg: "100%" }} // Responsive height fallback
              mt={{ base: 4, lg: 16 }} // Titles ke barabar align karne ke liye top margin lagaya
            >
              <Image
                src={personImg}
                alt="MWU Official"
                objectFit="cover"
                objectPosition="top center" // Mobile par image ko upar se cut hone se bachaega
                w="100%"
                h="100%"
                maxH={{ base: "400px", md: "550px", lg: "100%" }} // Small devices par height control karta hai
                borderRadius="0px"
                boxShadow="md"
              />
            </Box>

            {/* --- RIGHT COLUMN: Additional Campus Contacts --- */}
            <VStack align="stretch" spacing={6} justify="space-between" h="100%">
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "39px" }}
                color="#001529"
                fontWeight="500"
                fontFamily="serif"
                lineHeight="1.1"
              >
                Additional Campus and Office Contacts:
              </Heading>

              <VStack
                align="stretch"
                mt={{ md: "-45px", xl: "-85px" }} // Large monitors par spacing dynamic controls
                spacing={4}
                flex="1"
                justify="center"
              >
                {/* Address Card */}
                <Box
                  bg="white"
                  borderWidth="1px"
                  borderColor="gray.200"
                  p={6}
                  boxShadow="sm"
                  display="flex"
                  alignItems="center"
                  gap={4}
                  minH="150px"
                >
                  <Box bg="red.50" p={3} borderRadius="sm">
                    <Icon as={FiMapPin} color="#1a4d95" boxSize="24px" />
                  </Box>
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="700" color="#001529" fontSize="21px">
                      Main Campus Address
                    </Text>
                    <Text color="gray.600" fontSize="18px" lineHeight={1.3}>
                      Goba Campus and Shashemene Campus, Ethiopia
                    </Text>
                  </VStack>
                </Box>

                {/* Phone Card */}
                <Box
                  bg="white"
                  borderWidth="1px"
                  borderColor="gray.200"
                  p={6}
                  boxShadow="sm"
                  display="flex"
                  alignItems="center"
                  gap={4}
                  minH="150px"
                >
                  <Box bg="red.50" p={3} borderRadius="sm">
                    <Icon as={FiPhone} color="#1a4d95" boxSize="24px" />
                  </Box>
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="500" color="#001529" fontSize="21px">
                      Phone Number
                    </Text>
                    <Text color="gray.600" fontSize="18px">
                      +251-226652519 (Fax) <br /> +251-226653092
                    </Text>
                  </VStack>
                </Box>

                {/* Email Card */}
                <Box
                  bg="white"
                  borderWidth="1px"
                  borderColor="gray.200"
                  p={6}
                  boxShadow="sm"
                  display="flex"
                  alignItems="center"
                  gap={4}
                  minH="150px"
                >
                  <Box bg="red.50" p={3} borderRadius="sm">
                    <Icon as={FiMail} color="#1a4d95" boxSize="24px" />
                  </Box>
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="500" color="#001529" fontSize="21px">
                      Email Address
                    </Text>
                    <Text color="gray.600" fontSize="18px">
                      info@mwu.edu.et
                    </Text>
                  </VStack>
                </Box>
              </VStack>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>


      {/* Adress Iframe  */}
      <Box
        mt={{ md: "-34" }}
        width="100%"
        bg="white"
      >
        <Box
          className="contact-map style3"
          width="100vw"
          marginLeft="calc(-50vw + 50%)"
          marginRight="calc(-50vw + 50%)"
          height={{ base: "265px", md: "365px", "2xl": "425px" }}
          borderWidth="0px"
          overflow="hidden"
          position="relative"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8554013462476!2d39.994561775715226!3d7.142714315656558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17ca074622243709%3A0x68807ba66bcb9c71!2zTWFkZGEgV2FsYWJ1IFVuaXZlcnNpdHkgTWFpbiBDYW1wdXMgKOGImOGLsCDhi4jhiIvhiaEg4Yup4YqS4Ymo4Yit4Yiy4YmyIOGLi-GKkyDhjI3hiaLvvIk!5e0!3m2!1sen!2s!4v1776858976349!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{
              border: 0,
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0
            }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Box>

      <Box width="100%" bg="white" py={{ base: 12, md: 20 }}>
        <Container
          maxW={{ base: "100%", lg: "1500px", "2xl": "2100px" }}
          px={{ base: 6, md: 12, lg: 20 }}
        >
          <Grid
            templateColumns={{ base: "1fr", lg: "repeat(12, 1fr)" }}
            gap={{ base: 8, lg: 12 }}
            alignItems="stretch"
            bg="white"
            boxShadow="sm"
            overflow="hidden"
          >
            <GridItem bg={"#EEF1F4"} colSpan={{ base: 12, lg: 6 }} p={{ base: 6, md: 12, "2xl": 16 }}>
              <VStack align="start" spacing={6} as="form" onSubmit={handleSubmit} width="100%">

                <HStack spacing={3}>
                  <Box w="30px" h="2px" bg="#1a4d95" />
                  <Text
                    textTransform="uppercase"
                    fontSize={{ base: "16px", md: "18px" }}
                    fontWeight="600"
                    color="#1a4d95"
                    letterSpacing="md"
                  >
                    GET IN TOUCH WITH MWU
                  </Text>
                </HStack>

                <Heading
                  as="h2"
                  fontSize={{ base: "2xl", md: "42px" }}
                  color="#001529"
                  fontWeight="500"
                  fontFamily="serif"
                  lineHeight="1.1"
                  mb={4}
                >
                  Admissions, Partnerships, <br /> or General Inquiry?
                </Heading>

                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4} width="100%">
                  <GridItem>
                    <Input
                      placeholder="name*"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      bg="#F4F6F8"
                      border="none"
                      borderRadius="0px"
                      height="50px"
                      fontSize="18px"
                      _placeholder={{ color: "gray.700" }}
                      _focus={{ bg: "white", boxShadow: "outline" }}
                    />
                  </GridItem>
                  <GridItem>
                    <Input
                      placeholder="Phone*"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      type="tel"
                      bg="#F4F6F8"
                      border="none"
                      borderRadius="0px"
                      height="50px"
                      fontSize="18px"
                      _placeholder={{ color: "gray.700" }}
                      _focus={{ bg: "white", boxShadow: "outline" }}
                    />
                  </GridItem>
                </Grid>

                <Input
                  placeholder="e-mail address*"
                  name="email"
                  color="gray.700"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  type="email"
                  bg="#F4F6F8"
                  border="none"
                  borderRadius="0px"
                  height="50px"
                  fontSize="18px"
                  _placeholder={{ color: "gray.700" }}
                  _focus={{ bg: "white", boxShadow: "outline" }}
                />

                <Select
                  placeholder="Select Inquiry Topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  bg="#F4F6F8"
                  border="none"
                  borderRadius="0px"
                  height="50px"
                  fontSize="18px"
                  color="gray.700"
                  _focus={{ bg: "white", boxShadow: "outline" }}
                >
                  <option value="admissions">Admissions</option>
                  <option value="partnerships">Partnerships</option>
                  <option value="general">General Inquiry</option>
                </Select>

                <Textarea
                  placeholder="Write your message*"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  bg="#F4F6F8"
                  border="none"
                  borderRadius="0px"
                  minH="150px"
                  fontSize="18px"
                  _placeholder={{ color: "gray.700" }}
                  _focus={{ bg: "white", boxShadow: "outline" }}
                />

                <Button
                  type="submit"
                  bg="#1a4d95"
                  color="white"
                  borderRadius="0px"
                  size="lg"
                  fontSize="18px"
                  fontWeight="700"
                  px={8}
                  py={8}
                  _hover={{ bg: "#001529" }}
                >
                  Send Message
                </Button>
              </VStack>
            </GridItem>

            {/* --- RIGHT COLUMN: Image --- */}
            <GridItem
              colSpan={{ base: 12, lg: 6 }}
              position="relative"
              minH={{ base: "300px", lg: "auto" }}
            >
              <Image
                src={ContactImg}
                alt="MWU Contact Support"
                objectFit="cover"
                width="100%"
                height="100%"
                position={{ lg: "absolute" }}
                top={0}
                left={0}
              />
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Box
        as="marquee"
        scrollamount="6" // Speed adjust karne ke liye (kam/zyada kar sakte hain)
        direction="left" // Left ki taraf chalega
        style={{ width: "100%", display: "block" }}
      >
        <HStack
          spacing={{ base: 12, md: 24 }} // Items ke darmiyan spacing barha di taake chalte hue pyare lagein
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
                whiteSpace="nowrap" // Isko nowrap kiya taake text beech me se toot ke niche line par na jaye
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

export default ContactUs