import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Flex,
  HStack,
  Text,
  Image,
  Link,
  Button,
  IconButton,
  VStack,
  Divider,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons';
import { BsGrid3X3GapFill, BsArrowRight } from 'react-icons/bs';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaBookOpen,
  FaLink
} from 'react-icons/fa';
import { FiMapPin, FiMail } from 'react-icons/fi';
import { BiCalendar } from 'react-icons/bi';

import UniLogo from "../../assets/Images/Logo/logo-white.png";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // RIGHT SIDEBAR
  const {
    isOpen: isSidebarOpen,
    onOpen: onSidebarOpen,
    onClose: onSidebarClose,
  } = useDisclosure();

  const [eventsOpen, setEventsOpen] = useState(false);
  const [blogsOpen, setBlogsOpen] = useState(false);
  const [hoveredEventItem, setHoveredEventItem] = useState(false);
  const [hoveredBlogItem, setHoveredBlogItem] = useState(false);

  const eventsTimeoutRef = useRef(null);
  const blogsTimeoutRef = useRef(null);
  const eventsDropdownRef = useRef(null);
  const blogsDropdownRef = useRef(null);

  useEffect(() => {
    return () => {
      if (eventsTimeoutRef.current) clearTimeout(eventsTimeoutRef.current);
      if (blogsTimeoutRef.current) clearTimeout(blogsTimeoutRef.current);
    };
  }, []);

  const handleEventsMouseEnter = () => {
    if (eventsTimeoutRef.current) clearTimeout(eventsTimeoutRef.current);
    setEventsOpen(true);
  };

  const handleEventsMouseLeave = () => {
    eventsTimeoutRef.current = setTimeout(() => {
      setEventsOpen(false);
      setHoveredEventItem(false);
    }, 200);
  };

  const handleBlogsMouseEnter = () => {
    if (blogsTimeoutRef.current) clearTimeout(blogsTimeoutRef.current);
    setBlogsOpen(true);
  };

  const handleBlogsMouseLeave = () => {
    blogsTimeoutRef.current = setTimeout(() => {
      setBlogsOpen(false);
      setHoveredBlogItem(false);
    }, 200);
  };

  const topLinks = ["Students", "Staff", "Alumni", "Faculty", "Community"];

  // POSTS DATA
  const recentPosts = [
    {
      id: 1,
      title: "Trailblazers In Faculty Perspectives",
      date: "26/6/2025",
      image: "https://placehold.co/80x80",
    },
    {
      id: 2,
      title: "Future Focus Preparing For Tomorrow",
      date: "24/6/2025",
      image: "https://placehold.co/80x80",
    },
    {
      id: 3,
      title: "The Green Initiative Sustainability In Action",
      date: "24/6/2025",
      image: "https://placehold.co/80x80",
    },
  ];

  return (
    <Box width="100%" maxW="100vw" fontFamily="sans-serif">

      {/* --- TOP HEADER NAVBAR --- */}
      <Box display={{ base: "none", lg: "block" }} bg="#001529" color="#dad9d9" py={3}>
        <Box maxW="1400px" mx="auto" px={10}>
          <Flex justify="space-between" align="center" fontSize="sm">
            <HStack spacing={9} fontSize={"13px"}>
              {topLinks.map((link) => (
                <Link key={link} _hover={{ color: "white" }}>{link}</Link>
              ))}
            </HStack>

            <HStack spacing={4}>
              <HStack>
                <HiOutlineChatBubbleLeftRight />
                <Link fontSize={"12px"} _hover={{ color: "white" }}>FAQ</Link>
              </HStack>

              <Divider orientation="vertical" height="15px" />

              <HStack>
                <Image src="https://flagcdn.com/w20/us.png" alt="USA Flag" />
                <Text fontSize={"12px"} fontWeight={200}>EN</Text>
              </HStack>
            </HStack>
          </Flex>
        </Box>
      </Box>

      {/* --- MAIN NAVBAR --- */}
      <Box bg="white" boxShadow="md" width="100%" position="relative" overflow="visible" zIndex={100}>
        <Box
          position="absolute"
          left={0}
          top={0}
          bottom={0}
          width={{
            base: "0px",
            md: "calc(50vw - 420px)",
            lg: "calc(50vw - 420px)",
            xl: "calc(50vw - 410px)",
            "2xl": "calc(50vw - 520px)"
          }}
          bg="#1a4d95"
          zIndex={1}
          display={{ base: "none", md: "block" }}
        />

        <Box
          maxW="1400px"
          mx="auto"
          width="100%"
          position="relative"
          zIndex={2}
          overflow="visible"
        >
          <Flex
            color="#333"
            align="stretch"
            px={0}
            height={{ base: "80px", md: "100px" }}
            width="100%"
            overflow="visible"
          >

            {/* LOGO SECTION */}
            <Flex
              as={RouterLink}
              to="/"
              bg="#1a4d95"
              color="white"
              height="100%"
              align="center"
              pl={{ base: 4, md: 8, "2xl": 12 }}
              pr={{ base: 4, md: 6 }}
              position="relative"
              _after={{
                content: { base: 'none', md: '""' },
                position: 'absolute',
                right: '-30px',
                top: 0,
                width: '0',
                height: '0',
                borderTop: '100px solid #1a4d95',
                borderRight: '30px solid transparent',
              }}
              flexShrink={0}
            >
              <HStack spacing={{ base: 1, md: 2 }} pl={{ base: 2, md: 3 }} py={1}>
                <Box borderRadius="full" p={0} flexShrink={0}>
                  <Image
                    src={UniLogo}
                    alt="MWU Logo"
                    w={{ base: "140px", md: "200px", lg: "250px" }}
                    h={{ base: "45px", md: "60px", lg: "70px" }}
                    objectFit="contain"
                  />
                </Box>
              </HStack>
            </Flex>

            {/* DESKTOP MENU */}
            <HStack
              display={{ base: "none", lg: "flex" }}
              spacing={8}
              ml="auto"
              px={10}
              fontWeight="500"
              fontSize={"15px"}
              align="center"
              overflow="visible"
            >
              <Link as={RouterLink} to="/" _hover={{ color: "#1a4d95" }}>
                Home
              </Link>

              <Link as={RouterLink} to="/about" _hover={{ color: "#1a4d95" }}>
                About Us
              </Link>

              <Link as={RouterLink} to="/programs" _hover={{ color: "#1a4d95" }}>
                Programs +
              </Link>

              {/* ---- Events Dropdown ---- */}
              <Box
                position="relative"
                h="100%"
                onMouseEnter={handleEventsMouseEnter}
                onMouseLeave={handleEventsMouseLeave}
              >
                <Link
                  as={RouterLink}
                  to="/events"
                  display="flex"
                  alignItems="center"
                  h="100%"
                  color={eventsOpen ? "#1a4d95" : "#333"}
                  _hover={{ color: "#1a4d95" }}
                  fontWeight="500"
                >
                  Events +
                </Link>

                {eventsOpen && (
                  <Box
                    position="absolute"
                    top="100%"
                    left="0"
                    minW="200px"
                    bg="white"
                    boxShadow="0 6px 16px rgba(0,0,0,0.15)"
                    borderRadius="md"
                    overflow="hidden"
                    zIndex={9999}
                    mt="-2px"
                    pt="2px"
                    ref={eventsDropdownRef}
                    onMouseEnter={handleEventsMouseEnter}
                    onMouseLeave={handleEventsMouseLeave}
                  >
                    <Box borderTop="3px solid #1a4d95">
                      <Link
                        as={RouterLink}
                        to="/event-detail"
                        display="block"
                        position="relative"
                        onMouseEnter={() => setHoveredEventItem(true)}
                        onMouseLeave={() => setHoveredEventItem(false)}
                        style={{ textDecoration: 'none' }}
                      >
                        <Box
                          px={5}
                          py={5}
                          transition="all 0.3s ease"
                          bg={hoveredEventItem ? "#f5f8ff" : "white"}
                          color={hoveredEventItem ? "#1a4d95" : "#333"}
                          borderBottom="1px solid #f0f0f0"
                          display="flex"
                          alignItems="center"
                          gap={3}
                        >
                          <Box
                            as={FaBookOpen}
                            size={18}
                            color={hoveredEventItem ? "#1a4d95" : "#999"}
                            style={{
                              transition: "all 0.3s ease",
                              opacity: hoveredEventItem ? 1 : 0,
                              transform: hoveredEventItem
                                ? "translateX(0)"
                                : "translateX(-10px)",
                            }}
                          />

                          <Text
                            fontWeight="500"
                            fontSize="14px"
                            transform={hoveredEventItem
                              ? "translateX(0)"
                              : "translateX(-10px)"
                            }
                            transition="all 0.3s ease"
                          >
                            Event Details
                          </Text>
                        </Box>
                      </Link>
                    </Box>
                  </Box>
                )}
              </Box>

              {/* ---- Blogs Dropdown ---- */}
              <Box
                position="relative"
                h="100%"
                onMouseEnter={handleBlogsMouseEnter}
                onMouseLeave={handleBlogsMouseLeave}
              >
                <Link
                  as={RouterLink}
                  to="/blogs"
                  display="flex"
                  alignItems="center"
                  h="100%"
                  color={blogsOpen ? "#1a4d95" : "#333"}
                  _hover={{ color: "#1a4d95" }}
                  fontWeight="500"
                >
                  Blogs +
                </Link>

                {blogsOpen && (
                  <Box
                    position="absolute"
                    top="100%"
                    left="0"
                    minW="200px"
                    bg="white"
                    boxShadow="0 6px 16px rgba(0,0,0,0.15)"
                    borderRadius="md"
                    overflow="hidden"
                    zIndex={9999}
                    mt="-2px"
                    pt="2px"
                    ref={blogsDropdownRef}
                    onMouseEnter={handleBlogsMouseEnter}
                    onMouseLeave={handleBlogsMouseLeave}
                  >
                    <Box borderTop="3px solid #1a4d95">
                      <Link
                        as={RouterLink}
                        to="/blog-detail"
                        display="block"
                        position="relative"
                        onMouseEnter={() => setHoveredBlogItem(true)}
                        onMouseLeave={() => setHoveredBlogItem(false)}
                        style={{ textDecoration: 'none' }}
                      >
                        <Box
                          px={5}
                          py={5}
                          transition="all 0.3s ease"
                          bg={hoveredBlogItem ? "#f5f8ff" : "white"}
                          color={hoveredBlogItem ? "#1a4d95" : "#333"}
                          borderBottom="1px solid #f0f0f0"
                          display="flex"
                          alignItems="center"
                          gap={3}
                        >
                          <Box
                            as={FaBookOpen}
                            size={18}
                            color={hoveredBlogItem ? "#1a4d95" : "#999"}
                            style={{
                              transition: "all 0.3s ease",
                              opacity: hoveredBlogItem ? 1 : 0,
                              transform: hoveredBlogItem
                                ? "translateX(0)"
                                : "translateX(-10px)",
                            }}
                          />

                          <Text
                            fontWeight="500"
                            fontSize="14px"
                            transform={hoveredBlogItem
                              ? "translateX(0)"
                              : "translateX(-10px)"
                            }
                            transition="all 0.3s ease"
                          >
                            Blog Details
                          </Text>
                        </Box>
                      </Link>
                    </Box>
                  </Box>
                )}
              </Box>

              <Link as={RouterLink} to="/contact" _hover={{ color: "#1a4d95" }}>
                Contact Us
              </Link>

              {/* ACTIONS */}
              <HStack spacing={4} ml={4}>
                <IconButton
                  variant="outline"
                  icon={<SearchIcon />}
                  aria-label="Search"
                  borderRadius="none"
                />

                {/* 3X3 ICON CLICK */}
                <IconButton
                  variant="outline"
                  icon={<BsGrid3X3GapFill />}
                  aria-label="Menu"
                  borderRadius="none"
                  onClick={onSidebarOpen}
                />

                <Button
                  as={RouterLink}
                  to="/apply"
                  bg="#1a4d95"
                  color="white"
                  _hover={{ bg: "#153e77" }}
                  rightIcon={<span>→</span>}
                  borderRadius="sm"
                  px={6}
                  fontSize={"12px"}
                >
                  Apply Now
                </Button>

                <Image
                  src="https://flagcdn.com/w80/et.png"
                  alt="Ethiopia Flag"
                  boxSize="40px"
                  width={"75px"}
                  objectFit="cover"
                  borderRadius="sm"
                />
              </HStack>
            </HStack>

            {/* MOBILE / TABLET TOGGLE */}
            <IconButton
              display={{ base: "flex", lg: "none" }}
              alignSelf="center"
              ml="auto"
              onClick={onOpen}
              icon={<HamburgerIcon />}
              variant="ghost"
              fontSize="25px"
              mr={4}
              aria-label="Open Menu"
            />
          </Flex>
        </Box>
      </Box>

      {/* --- MOBILE/TABLET DRAWER --- */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent bg="#001529" color="white">
          <DrawerCloseButton color="white" />

          <DrawerHeader borderBottomWidth="1px" borderColor="whiteAlpha.300">
            Navigation Menu
          </DrawerHeader>

          <DrawerBody>
            <VStack align="start" spacing={5} mt={4}>
              <Link as={RouterLink} to="/" onClick={onClose}>Home</Link>
              <Link as={RouterLink} to="/about" onClick={onClose}>About Us</Link>
              <Link as={RouterLink} to="/programs" onClick={onClose}>Programs</Link>

              <Box width="100%">
                <Text fontWeight="bold" mb={2} color="white">
                  Events
                </Text>

                <VStack align="start" spacing={2} pl={3}>
                  <Link
                    as={RouterLink}
                    to="/event-detail"
                    fontSize="sm"
                    color="#dad9d9"
                    onClick={onClose}
                  >
                    <HStack spacing={2}>
                      <FaBookOpen size={14} />
                      <Text>Event Details</Text>
                    </HStack>
                  </Link>
                </VStack>
              </Box>

              <Box width="100%">
                <Text fontWeight="bold" mb={2} color="white">
                  Blogs
                </Text>

                <VStack align="start" spacing={2} pl={3}>
                  <Link
                    as={RouterLink}
                    to="/blog-detail"
                    fontSize="sm"
                    color="#dad9d9"
                    onClick={onClose}
                  >
                    <HStack spacing={2}>
                      <FaBookOpen size={14} />
                      <Text>Blog Details</Text>
                    </HStack>
                  </Link>
                </VStack>
              </Box>

              <Link as={RouterLink} to="/contact" onClick={onClose}>
                Contact Us
              </Link>

              <Divider borderColor="whiteAlpha.300" />

              <Text
                fontSize="xs"
                fontWeight="bold"
                color="gray.400"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                University Portals
              </Text>

              <VStack align="start" spacing={3} pl={2}>
                {topLinks.map((link) => (
                  <Link
                    key={link}
                    fontSize="sm"
                    color="#dad9d9"
                    onClick={onClose}
                  >
                    {link}
                  </Link>
                ))}
              </VStack>

              <Divider borderColor="whiteAlpha.300" />

              <Button
                as={RouterLink}
                to="/apply"
                w="full"
                bg="#1a4d95"
                color="white"
                _hover={{ bg: "#153e77" }}
                rightIcon={<span>→</span>}
                onClick={onClose}
              >
                Apply Now
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* drawer  */}

      <Drawer
        isOpen={isSidebarOpen}
        placement="right"
        onClose={onSidebarClose}
        size="md"
      >
        <DrawerOverlay bg="rgba(0,0,0,0.45)" />

        <DrawerContent
          bg="#001B44"
          color="white"
          maxW={{ base: "100%", md: "45%", lg: "38%" }}
          overflowY="auto"
        >
          <DrawerCloseButton
            color="black"
            bg="white"
            borderRadius="full"
            mt={3}
            mr={3}
          />

          <DrawerBody px={{ base: 6, md: 8 }} py={10}>

            {/* LOGO */}
            <Image
              src={UniLogo}
              alt="logo"
              w="380px"
              mb={8}
            />

            {/* DESCRIPTION */}
            <Text
              color="#8c8d8f"
              lineHeight="2"
              fontSize="19px"
              mb={10}
              px={8}
            >
              Madda Walabu University is a public university founded in March 2005 and located in Bale-Robe, Oromia, Ethiopia. Guided by the motto Excellence through Diversity (???? ??????), MWU advances quality education, practical research, and community service.
            </Text>

            {/* CONTACT */}
            <VStack align="start" spacing={6} mb={12}>

              <HStack align="start" spacing={4} px={3}>
                <Flex
                  w="42px"
                  h="42px"
                  border="1px solid rgba(255,255,255,0.3)"
                  borderRadius="full"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  <FiMapPin />
                </Flex>

                <Text fontSize="21px" color={"#bfc0c2"}>
                  Bale-Robe, Oromia Regional State, Ethiopia
                </Text>
              </HStack>

              <HStack align="start" spacing={4}>
                <Flex
                  w="42px"
                  h="42px"
                  border="1px solid rgba(255,255,255,0.3)"
                  borderRadius="full"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  <FiMail />
                </Flex>

                <Text fontSize="21px" color={"#bfc0c2"} >
                  info@mwu.edu.et
                </Text>
              </HStack>
            </VStack>

            {/* RECENT POSTS */}
            <Box pb={10}>
              <Text
                fontSize="26px"
                fontWeight="500"
                mb={8}
                position="relative"
                pl={4}
                _before={{
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: "8px",
                  width: "3px",
                  height: "80%",
                  bg: "#1a4d95",
                }}
              >
                Recent Posts
              </Text>
              <VStack spacing={8} align="stretch">

                {recentPosts.map((post) => (
                  <HStack key={post.id} align="start" spacing={5}>

                    {/* IMAGE */}
                    <Link
                      as={RouterLink}
                      to="/blog-detail"
                      _hover={{ textDecoration: "none" }}
                      role="group"
                    >
                      <Box
                        position="relative"
                        overflow="hidden"
                        borderRadius="6px"
                        flexShrink={0}
                        w="80px"
                        h="80px"
                      >

                        <Image
                          src={post.image}
                          alt={post.title}
                          w="100%"
                          h="100%"
                          objectFit="cover"
                          transition="0.4s ease"
                          _groupHover={{
                            transform: "scale(1.08)",
                          }}
                        />

                        {/* BLACK OVERLAY */}
                        <Box
                          position="absolute"
                          inset={0}
                          bg="rgba(0,0,0,0.55)"
                          opacity={0}
                          transition="0.3s ease"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          _groupHover={{
                            opacity: 1,
                          }}
                        >

                          {/* BLUE LINK ICON */}
                          <Flex
                            w="34px"
                            h="34px"
                            borderRadius="full"
                            bg="#1a4d95"
                            align="center"
                            justify="center"
                            transform="scale(0.8)"
                            transition="0.3s ease"
                            _groupHover={{
                              transform: "scale(1)",
                            }}
                          >
                            <FaLink color="white" size={15} />
                          </Flex>

                        </Box>

                      </Box>
                    </Link>

                    {/* CONTENT */}
                    <Box flex="1">

                      <Link
                        as={RouterLink}
                        to="/blog-detail"
                        _hover={{
                          textDecoration: "none",
                          color: "#4DA3FF",
                        }}
                      >
                        <Text
                          fontSize="21px"
                          px={2}
                          fontWeight="500"
                          lineHeight="1.2"
                          transition="0.3s ease"
                        >
                          {post.title}
                        </Text>
                      </Link>

                      <HStack mt={3} spacing={2} color="#6EA8FF">
                        <BiCalendar />
                        <Text fontSize="14px" color={"#8b8e92"}>
                          {post.date}
                        </Text>
                      </HStack>

                    </Box>

                  </HStack>
                ))}

              </VStack>
            </Box>


            {/* TAGS */}
            <Box pb={10}>
              <Text
                fontSize="26px"
                fontWeight="500"
                mb={8}
                position="relative"
                pl={4}
                _before={{
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: "8px",
                  width: "3px",
                  height: "80%",
                  bg: "#1a4d95",
                }}
              >
                Popular Tags
              </Text>

              <HStack spacing={4} flexWrap="wrap">

                {[
                  FaFacebookF,
                  FaInstagram,
                  FaTwitter,
                  FaLinkedinIn,
                  FaYoutube,
                ].map((Icon, index) => (

                  <Flex
                    key={index}
                    w="46px"
                    h="46px"
                    border="1px solid rgba(255,255,255,0.4)"
                    align="center"
                    justify="center"
                    cursor="pointer"
                    transition="all 0.3s ease"
                    borderRadius="4px"
                    _hover={{
                      bg: "#1a4d95",
                      borderColor: "#1a4d95",
                      transform: "translateY(-4px)",
                    }}
                  >
                    <Icon size={18} />
                  </Flex>

                ))}

              </HStack>
            </Box>

          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </Box>
  );
};

export default Navbar;