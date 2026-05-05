import React from 'react';
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
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import UniLogo from "../../assets/Images/Logo/logo-white.png";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const topLinks = ["Students", "Staff", "Alumni", "Faculty", "Community"];

  return (
    // Outer Wrapper: Width ko stretch rakh kar extra elements ka overflow block kiya hai
    <Box width="100%" maxW="100vw" overflowX="hidden" fontFamily="sans-serif">
      
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
      {/* Background container: Full width background setting */}
      <Box bg="white" boxShadow="md" width="100%" position="relative">
        
        {/* BACKGROUND BLUE PANEL (Ultra-wide scale protection)
            Yeh block back-end par left screen-edge se shuru ho kar content area ke start tak solid blue background hold rakhta hai,
            jiski wajah se ultra-wide screens par logo ke piche ka background kabhi khali nahi dikhta.
        */}
        <Box 
          position="absolute"
          left={0}
          top={0}
          bottom={0}
          width={{ base: "0px", md: "calc(50vw - 420px)", lg: "calc(50vw - 420px)", xl: "calc(50vw - 410px)", "2xl": "calc(50vw - 520px)" }}
          bg="#1a4d95"
          zIndex={1}
          display={{ base: "none", md: "block" }}
        />

        {/* INNER CONTENT GRID: Content ko 1400px maximum limits ke andar center rakhta hai */}
        <Box maxW="1400px" mx="auto" width="100%" position="relative" zIndex={2}>
          <Flex
            color="#333"
            align="stretch"
            px={0}
            height={{ base: "80px", md: "100px" }}
            width="100%"
          >
            {/* LOGO SECTION */}
            <Flex
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
              <HStack
                spacing={{ base: 1, md: 2 }} 
                pl={{ base: 2, md: 3 }}      
                py={1}                     
              >
                <Box
                  borderRadius="full"
                  p={0}                     
                  flexShrink={0}          
                >
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
            >
              <Link _hover={{ color: "#1a4d95" }}>Home</Link>
              <Link _hover={{ color: "#1a4d95" }}>About Us</Link>
              <Link _hover={{ color: "#1a4d95" }}>Programs +</Link>
              <Link _hover={{ color: "#1a4d95" }}>Events +</Link>
              <Link _hover={{ color: "#1a4d95" }}>Blogs +</Link>
              <Link _hover={{ color: "#1a4d95" }}>Contact Us</Link>

              <HStack spacing={4} ml={4}>
                <IconButton variant="outline" icon={<SearchIcon />} aria-label="Search" borderRadius="none" />
                <IconButton variant="outline" icon={<BsGrid3X3GapFill />} aria-label="Menu" borderRadius="none" />
                <Button bg="#1a4d95" color="white" _hover={{ bg: "#153e77" }} rightIcon={<span>→</span>} borderRadius="sm" px={6} fontSize={"12px"}>
                  Apply Now
                </Button>
                <Image src="https://flagcdn.com/w80/et.png" alt="Ethiopia Flag" boxSize="40px" width={"75px"} objectFit="cover" borderRadius="sm" />
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
              <Link onClick={onClose}>Home</Link>
              <Link onClick={onClose}>About Us</Link>
              <Link onClick={onClose}>Programs</Link>
              <Link onClick={onClose}>Events</Link>
              <Link onClick={onClose}>Blogs</Link>
              <Link onClick={onClose}>Contact Us</Link>

              <Divider borderColor="whiteAlpha.300" />

              <Text fontSize="xs" fontWeight="bold" color="gray.400" textTransform="uppercase" letterSpacing="wider">
                University Portals
              </Text>
              <VStack align="start" spacing={3} pl={2}>
                {topLinks.map((link) => (
                  <Link key={link} fontSize="sm" color="#dad9d9" onClick={onClose}>{link}</Link>
                ))}
              </VStack>

              <Divider borderColor="whiteAlpha.300" />

              <Button
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
    </Box>
  );
};

export default Navbar;