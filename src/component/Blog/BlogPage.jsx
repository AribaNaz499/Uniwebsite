import React from 'react';
import {
  Box, Flex, Text, Heading, VStack, HStack, Image, Icon, Button, Container,
  Link, Grid, GridItem, Input, InputGroup, InputRightElement, Badge, Divider,
  TagLabel, Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import { HiLocationMarker, HiUser } from 'react-icons/hi';
import { BsCalendar3, BsClock, BsArrowRight, BsSearch, BsPlayFill } from 'react-icons/bs';
import { FaUser, FaFolderOpen, FaTag, FaRegNewspaper, FaMicroscope, FaUsers, FaGraduationCap, FaHandsHelping, FaLaptopCode } from 'react-icons/fa';

// Assets
import TextBg from "../../assets/Images/AboutUs/textbg.png";
import Banner from "../../assets/Images/AboutUs/banner.jpg";
import Img from "../../assets/Images/Blog/logo-black.svg";
import { LuBookOpen, LuTag } from 'react-icons/lu';

const BlogPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const categories = [
    { name: 'University News', count: 14, icon: FaRegNewspaper },
    { name: 'Research and Innovation', count: 11, icon: FaMicroscope },
    { name: 'Student Life', count: 16, icon: FaUsers },
    { name: 'Alumni Stories', count: 8, icon: FaGraduationCap },
    { name: 'Community Service', count: 10, icon: FaHandsHelping },
    { name: 'Admissions and Programs', count: 12, icon: FaLaptopCode },
  ];
  const recentPosts = [
    {
      title: "MWU At A Glance: 24,961 Students Across 79 Departments",
      date: "10/1/2026",
    },
    {
      title: "Research Centers In Robe, Bidire, And Harawa 1",
      date: "28/1/2026",
    },
    {
      title: "Digital Learning At MWU: Blended Teaching",
      date: "20/3/2026",
    },
  ];
  const tags = [
    'Education', 'Research', 'Innovation', 'Campus Life',
    'Alumni', 'Community', 'Agriculture', 'Event',
    'Student', 'Health Science', 'Technology', 'Ethiopia'
  ];
  return (
    <Box width="100%" bg="white" overflow="hidden">
      {/* SECTION 1: BANNER (Image 2) */}
      <Box width="100%" height={{ base: "auto", md: "400px" }} position="relative" mb={16} bg="#f7faff">
        <Flex width="100%" height="100%" direction={{ base: "column", md: "row" }}>
          <Box width={{ base: "100%", md: "45%" }} bgImage={`url(${TextBg})`} bgSize="cover" display="flex" alignItems="center" pl={{ base: 6, md: 24 }}>
            <VStack align="start" spacing={3}>
              <Heading fontSize={{ base: "28px", md: "48px" }} color="#001529" fontFamily="serif">MWU News and Blog</Heading>
              <HStack spacing={2} fontSize="14px">
                <Link as={RouterLink} to="/" color="gray.500">Home</Link>
                <Text color="gray.400">»</Text>
                <Text color="#1a4d95" fontWeight="600">MWU News and Blog</Text>
              </HStack>
            </VStack>
          </Box>
          <Box width={{ base: "100%", md: "55%" }} height={{ base: "250px", md: "100%" }}>
            <Image src={Banner} alt="Banner" width="100%" height="100%" objectFit="cover" />
          </Box>
        </Flex>
      </Box>

      <Container
        maxW={{ base: "100%", md: "90%", lg: "85%", xl: "container.xl", "2xl": "1800px" }}
        px={{ base: 4, sm: 6, md: 8, lg: 10 }}
        pb={20}
      >
        <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap={{ base: 8, md: "5%", lg: "8%" }}>

          {/* LEFT COLUMN: MAIN CONTENT */}
          <GridItem colSpan={{ lg: 2 }}>
            <VStack spacing={14} align="stretch">

              {/* SECTION 2: RESEARCH SYMPOSIUM (Image 1) */}
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
                  <HStack
                    align="center"
                    spacing={{ base: 4, md: 8 }}
                    borderLeft="3px solid #1a4d95"
                    pl={4}
                    py={1}
                    flexWrap="wrap"
                  >
                    <HStack spacing={2}>
                      <Icon as={HiUser} color="#1a4d95" boxSize={5} />
                      <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500" color="#001529"
                        _hover={{ color: "#1A4B96", cursor: "pointer" }}>
                        by MWU Communications
                      </Text>
                    </HStack>
                    <HStack spacing={2}>
                      <Icon as={BsClock} color="#1a4d95" boxSize={5} />
                      <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500" color="#001529"
                        _hover={{ color: "#1A4B96", cursor: "pointer" }}>
                        10 Jan, 2026
                      </Text>
                    </HStack>
                    <HStack spacing={2}>
                      <Icon as={LuBookOpen} color="#1a4d95" boxSize={5} />
                      <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500" color="#001529"
                        _hover={{ color: "#1A4B96", cursor: "pointer" }}>
                        University News
                      </Text>
                    </HStack>
                  </HStack>
                  <Heading
                    fontSize={{ base: "28px", md: "34px", lg: "40px" }}
                    lineHeight="1"
                    fontFamily="serif"
                    color="#001529"
                  >
                    MWU at a Glance: 24,961 Students Across 79 Departments
                  </Heading>
                  <Text color="gray.600" fontSize={{ base: "16px", md: "18px", lg: "20px" }} lineHeight="1.5">
                    Madda Walabu University currently serves around 24,961 students in undergraduate and postgraduate programs through 79 departments under seven colleges and three schools. This update highlights how those units support teaching, research, and community service across Bale and beyond.
                  </Text>
                  <Button mt={{ md: "6" }} mb={{ md: "8" }} variant="outline" borderColor="gray.300" color="gray.800" fontSize={{ base: 14, md: 17 }} px={8} py={7} borderRadius="0" rightIcon={<BsArrowRight />} _hover={{ bg: "#081933", color: "white" }}>Read More</Button>
                </VStack>
              </Box>

              {/* SECTION 3: MWU AT A GLANCE */}
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
                <HStack spacing={4} color="gray.600" fontSize="14px" mb={4}>
                  <HStack
                    align="center"
                    spacing={{ base: 4, md: 8 }}
                    borderLeft="3px solid #1a4d95"
                    pl={4}
                    py={1}
                    flexWrap="wrap"
                  >
                    <HStack spacing={2}>
                      <Icon as={HiUser} color="#1a4d95" boxSize={5} />
                      <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500" color="#001529"
                        _hover={{ color: "#1A4B96", cursor: "pointer" }}>
                        by MWU Communications
                      </Text>
                    </HStack>
                    <HStack spacing={2}>
                      <Icon as={BsClock} color="#1a4d95" boxSize={5} />
                      <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500" color="#001529"
                        _hover={{ color: "#1A4B96", cursor: "pointer" }}>
                        10 Jan, 2026
                      </Text>
                    </HStack>
                    <HStack spacing={2}>
                      <Icon as={LuBookOpen} color="#1a4d95" boxSize={5} />
                      <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500" color="#001529"
                        _hover={{ color: "#1A4B96", cursor: "pointer" }}>
                        Research
                      </Text>
                    </HStack>
                  </HStack>
                </HStack>
                <Heading
                  mb={6}
                  fontSize={{ base: "28px", md: "34px", lg: "40px" }}
                  lineHeight="1"
                  fontFamily="serif"
                  color="#001529"
                >
                  Research Centers in Robe, Bidire, and Harawa 1 Drive Local Solutions
                </Heading>
                <Text color="gray.600" mb={3} fontSize={{ base: "16px", md: "18px", lg: "20px" }} lineHeight="1.5">
                  MWU research centers in Robe Main Campus, Bidire Town, and Harawa 1 are advancing practical projects in agriculture, health, biodiversity, tourism, and technology. This report summarizes current projects and community outcomes.
                </Text>
                <Button mt={{ md: "6" }} mb={{ md: "5" }} variant="outline" borderColor="gray.300" color="gray.800" fontSize={{ base: 14, md: 17 }} px={8} py={7} borderRadius="0" rightIcon={<BsArrowRight />} _hover={{ bg: "#081933", color: "white" }}>Read More</Button>
              </Box>

              {/* SECTION 4: RESEARCH CENTERS */}
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
                <HStack spacing={4} color="gray.600" fontSize="14px" mb={4}>
                  <HStack
                    align="center"
                    spacing={{ base: 4, md: 8 }}
                    borderLeft="3px solid #1a4d95"
                    pl={4}
                    py={1}
                    flexWrap="wrap"
                  >
                    <HStack spacing={2}>
                      <Icon as={HiUser} color="#1a4d95" boxSize={5} />
                      <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500" color="#001529"
                        _hover={{ color: "#1A4B96", cursor: "pointer" }}>
                        by Alumni and Career Office
                      </Text>
                    </HStack>
                    <HStack spacing={2}>
                      <Icon as={BsClock} color="#1a4d95" boxSize={5} />
                      <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500" color="#001529"
                        _hover={{ color: "#1A4B96", cursor: "pointer" }}>
                        12 Feb, 2026
                      </Text>
                    </HStack>
                    <HStack spacing={2}>
                      <Icon as={LuTag} color="#1a4d95" boxSize={5} />
                      <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500" color="#001529"
                        _hover={{ color: "#1A4B96", cursor: "pointer" }}>
                        Alumni
                      </Text>
                    </HStack>
                  </HStack>
                </HStack>
                <Heading
                  mb={6}
                  fontSize={{ base: "28px", md: "34px", lg: "40px" }}
                  lineHeight="1"
                  fontFamily="serif"
                  color="#001529"
                >
                  Alumni Impact: Graduates Supporting Health, Agriculture, and Enterprise
                </Heading>
                <Text color="gray.600" mb={3} fontSize={{ base: "16px", md: "18px", lg: "20px" }} lineHeight="1.5">
                  Recent alumni stories show graduates applying MWU training in hospitals, schools, farms, and startups. The feature tracks practical impact and lessons students can use for career planning.
                </Text>
                <Button mt={{ md: "6" }} mb={{ md: "5" }} variant="outline" borderColor="gray.300" color="gray.800" fontSize={{ base: 14, md: 17 }} px={8} py={7} borderRadius="0" rightIcon={<BsArrowRight />} _hover={{ bg: "#081933", color: "white" }}>Read More</Button>
              </Box>

              {/* SECTION 5: ALUMNI IMPACT */}
              <Box>
                <HStack spacing={4} color="gray.600" fontSize="14px" mb={4}>
                  <HStack
                    align="center"
                    spacing={{ base: 4, md: 8 }}
                    borderLeft="3px solid #1a4d95"
                    pl={4}
                    py={1}
                    flexWrap="wrap"
                  >
                    <HStack spacing={2}>
                      <Icon as={HiUser} color="#1a4d95" boxSize={5} />
                      <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500" color="#001529"
                        _hover={{ color: "#1A4B96", cursor: "pointer" }}>
                        by Student Affairs Directorate
                      </Text>
                    </HStack>
                    <HStack spacing={2}>
                      <Icon as={BsClock} color="#1a4d95" boxSize={5} />
                      <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500" color="#001529"
                        _hover={{ color: "#1A4B96", cursor: "pointer" }}>
                        1 March, 2026
                      </Text>
                    </HStack>
                    <HStack spacing={2}>
                      <Icon as={LuTag} color="#1a4d95" boxSize={5} />
                      <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500" color="#001529"
                        _hover={{ color: "#1A4B96", cursor: "pointer" }}>
                        Student Life
                      </Text>
                    </HStack>
                  </HStack>
                </HStack>
                <Heading
                  mb={6}
                  fontSize={{ base: "28px", md: "34px", lg: "40px" }}
                  lineHeight="1"
                  fontFamily="serif"
                  color="#001529"
                >
                  Student Success Services: Mentorship, Guidance, and Campus Support
                </Heading>
                <Text color="gray.600" mb={3} fontSize={{ base: "16px", md: "18px", lg: "20px" }} lineHeight="1.5">
                  From orientation to graduation support, MWU student services now include expanded advising, peer mentoring, and wellbeing referrals designed to improve academic performance and retention.
                </Text>
                <Button mt={{ md: "6" }} mb={{ md: "5" }} variant="outline" borderColor="gray.300" color="gray.800" fontSize={{ base: 14, md: 17 }} px={8} py={7} borderRadius="0" rightIcon={<BsArrowRight />} _hover={{ bg: "#081933", color: "white" }}>Read More</Button>
              </Box>

              {/* SECTION 6: DIGITAL LEARNING VIDEO */}
              <Box
                width="100%"
                bg="gray.100"
                h={{ base: "220px", md: "300px", xl: "400px" }}
                borderRadius="15px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={6}
                position="relative"
                overflow="hidden"
              >
                <Text fontSize={{ base: "24px", md: "32px", lg: "40px" }} fontWeight="bold" color="gray.400">1209 × 490</Text>
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  boxSize={{ base: "60px", md: "80px" }}
                  bg="#1a4d95"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  onClick={onOpen}
                  _hover={{ transform: "translate(-50%, -50%) scale(1.1)", bg: "#0d3166" }}
                  transition="all 0.2s"
                  zIndex={2}
                >
                  <Icon as={BsPlayFill} color="white" boxSize={{ base: 8, md: 12 }} ml={1} />
                </Box>
              </Box>

              {/* Metadata Row */}
              <HStack spacing={0} color="gray.600" fontSize="14px" mb={{ md: "-8" }}>
                <HStack
                  align="center"
                  spacing={{ base: 4, md: 8 }}
                  borderLeft="3px solid #1a4d95"
                  pl={4}
                  py={1}
                  flexWrap="wrap"
                >
                  <HStack spacing={2}>
                    <Icon as={HiUser} color="#1a4d95" boxSize={5} />
                    <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500" color="#001529"
                      _hover={{ color: "#1A4B96", cursor: "pointer" }}>
                      by MWU Digital Learning Team
                    </Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={BsClock} color="#1a4d95" boxSize={5} />
                    <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500" color="#001529"
                      _hover={{ color: "#1A4B96", cursor: "pointer" }}>
                      20 Mar, 2026
                    </Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={LuTag} color="#1a4d95" boxSize={5} />
                    <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500" color="#001529"
                      _hover={{ color: "#1A4B96", cursor: "pointer" }}>
                      Innovation
                    </Text>
                  </HStack>
                </HStack>
              </HStack>

              <Heading
                mb={{ md: "-8" }}
                fontSize={{ base: "28px", md: "34px", lg: "40px" }}
                lineHeight="1"
                fontFamily="serif"
                color="#001529"
              >
                Digital Learning at MWU: Blended Teaching and Open Academic Resources
              </Heading>
              <Text color="gray.600" mb={3} fontSize={{ base: "16px", md: "18px", lg: "20px" }} lineHeight="1.5">
                This update explains how departments are using blended teaching, digital course materials, and virtual collaboration tools to improve access for on-campus and extension students.
              </Text>
              <Button
                mt={{ md: "-5" }}
                mb={{ md: "-12" }}
                variant="outline"
                borderColor="gray.300"
                color="gray.800"
                fontSize={{ base: 14, md: 17 }}
                w="fit-content"
                px={{ base: 6, md: 10 }}
                py={7}
                borderRadius="0"
                rightIcon={<BsArrowRight />}
                _hover={{ bg: "#081933", color: "white", borderColor: "#081933" }}
              >
                Read More
              </Button>

              {/* VIDEO MODAL */}
              <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
                <ModalOverlay bg="blackAlpha.800" />
                <ModalContent bg="transparent" boxShadow="none">
                  <ModalCloseButton color="white" size="lg" zIndex={10} />
                  <ModalBody p={0}>
                    <Box position="relative" paddingTop="56.25%">
                      <iframe
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          borderRadius: "10px"
                        }}
                        src="https://www.youtube.com/embed/_sI_Ps7JSEk"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </Box>
                  </ModalBody>
                </ModalContent>
              </Modal>

              {/* SECTION 7: PAGINATION */}
              <HStack spacing={2} pt={10} flexWrap="wrap">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Button
                    key={n}
                    variant="outline"
                    fontSize={{ base: 14, md: 18 }}
                    borderRadius="0"
                    boxSize={{ base: "40px", md: "54px" }}
                    _hover={{ bg: "#1a4d95", color: "white" }}
                    borderColor="gray.200"
                  >
                    {n}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  borderRadius="0"
                  fontSize={{ base: 14, md: 18 }}
                  boxSize={{ base: "40px", md: "45px" }}
                  rightIcon={<BsArrowRight fontSize={18} />}
                ></Button>
              </HStack>

            </VStack>
          </GridItem>

          {/* RIGHT COLUMN: SIDEBAR */}
          <GridItem>
            <VStack spacing={10} align="stretch">

              {/* Search Box */}
              <Box bg="#f4f7f6" p={6}>
                <InputGroup size="lg">
                  <Input placeholder="Search..." bg="white" borderRadius="0" border="none" />
                  <InputRightElement bg="#1a4d95" cursor="pointer" width="60px">
                    <Icon as={BsSearch} color="white" />
                  </InputRightElement>
                </InputGroup>
              </Box>

              {/* Category */}
              <Box border="1px solid #e2e8f0" p={8} bg="white" borderRadius="sm">
                <Box mb={6} borderBottom="1px solid #eee">
                  <Heading fontSize="24px" pb={2} borderBottom="3px solid #1a4d95" w="fit-content" color="#001529" fontFamily="serif">
                    Category
                  </Heading>
                </Box>
                <VStack align="stretch" spacing={0}>
                  {categories.map((cat, index) => (
                    <Box key={cat.name}>
                      <HStack justify="space-between" py={4} cursor="pointer" transition="0.2s" _hover={{ color: "#1a4d95" }} role="group">
                        <HStack spacing={4}>
                          <Icon as={cat.icon} color="#1a4d95" fontSize="20px" _groupHover={{ transform: "scale(1.1)" }} transition="0.2s" />
                          <Text fontWeight="400" fontSize="17px" color="#001529" _hover={{ color: "#1a4d95" }}>{cat.name}</Text>
                        </HStack>
                        <Text fontSize="18px" color="#001529">({cat.count})</Text>
                      </HStack>
                      {index !== categories.length - 1 && <Divider borderColor="#c9c7c7" />}
                    </Box>
                  ))}
                </VStack>
              </Box>

              {/* Recent Posts */}
              <Box border="1px solid #e2e8f0" p={6} bg="white">
                <Box mb={6} borderBottom="1px solid #eee">
                  <Heading fontSize="24px" pb={2} borderBottom="3px solid #1a4d95" w="fit-content" color="#001529" fontFamily="serif">
                    Recent Posts
                  </Heading>
                </Box>
                <VStack align="stretch" spacing={12}>
                  {recentPosts.map((post, index) => (
                    <HStack key={index} align="start" spacing={8} role="group" cursor="pointer">
                      <Box boxSize="80px" bg="gray.100" flexShrink={0} display="flex" alignItems="center" justifyContent="center" fontSize="12px" fontWeight="bold" borderRadius="sm">
                        80 × 80
                      </Box>
                      <VStack align="start" spacing={2}>
                        <Text fontWeight="500" fontSize="19px" lineHeight="1.3" color="#001529" _groupHover={{ color: "#1a4d95" }} transition="0.2s">
                          {post.title}
                        </Text>
                        <HStack fontSize="15px" color="#1a4d95" fontWeight="500">
                          <Icon as={BsCalendar3} />
                          <Text color="gray.500">{post.date}</Text>
                        </HStack>
                      </VStack>
                    </HStack>
                  ))}
                </VStack>
              </Box>

              {/* Popular Tags */}
              <Box border="1px solid #e2e8f0" p={6} bg="white">
                <Box mb={6} borderBottom="1px solid #eee">
                  <Heading fontSize="24px" pb={2} borderBottom="3px solid #1a4d95" w="fit-content" color="#001529" fontFamily="serif">
                    Popular Tags
                  </Heading>
                </Box>
                <Flex wrap="wrap" gap={3}>
                  {tags.map((tag) => (
                    <Box
                      key={tag}
                      px={4}
                      py={2}
                      textAlign="center"
                      alignItems="center"
                      bg="#f8f9fa"
                      color="#4A5568"
                      fontSize="17px"
                      fontWeight="400"
                      cursor="pointer"
                      borderRadius="4px"
                      transition="all 0.2s"
                      _hover={{ bg: "#1a4d95", color: "#d2d5d8", boxShadow: "md" }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Flex>
              </Box>

              {/* Contact Admissions */}
              <Box
                bg="#2c3e50"
                p={10}
                color="white"
                textAlign="center"
                minH="450px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <VStack spacing={6} w="100%">
                  <Text fontSize="22px" fontWeight="700" lineHeight="1.4" fontFamily="serif">
                    Need Help? Contact the MWU Admissions Office
                  </Text>
                  <Box bg="white" p={6} w="90%" borderRadius="2px" display="flex" alignItems="center" justifyContent="center" minH="70px">
                    <Image src={Img} alt="MWU Logo" maxW="100%" maxH="100px" objectFit="contain" />
                  </Box>
                  <VStack spacing={1}>
                    <Text fontSize="16px" fontWeight="400" opacity={0.9}>Phone and email support available</Text>
                    <Text fontSize="20px" fontWeight="700" letterSpacing="1px">+251 22 665 3092</Text>
                  </VStack>
                  <Button bg="#1a4d95" color="white" w="100%" h="55px" borderRadius="2px" fontSize="16px" fontWeight="bold" textTransform="uppercase" _hover={{ bg: "#153e77" }} transition="0.3s">
                    Contact MWU
                  </Button>
                </VStack>
              </Box>

            </VStack>
          </GridItem>

        </Grid>

        {/* Marquee */}
        <Box as="marquee" scrollamount="6" direction="left" style={{ width: "100%", display: "block" }}>
          <HStack spacing={{ base: 12, md: 24 }} display="inline-flex" mt={12}>
            {["HEALTH SCIENCE", "TOURISM & HERITAGE", "BIODIVERSITY"].map((item) => (
              <HStack key={item} spacing={3}>
                <Icon as={LuBookOpen} color="#1a4d95" boxSize={{ base: "18px", lg: "26px" }} />
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

      </Container>
    </Box>
  );
};

export default BlogPage;