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
import UniLogo from "../../assets/Images/Logo/uniLogo.png"

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const topLinks = ["Students", "Staff", "Alumni", "Faculty", "Community"];

  return (
    <Box width="100%" fontFamily="sans-serif">
      <Box display={{ base: "none", lg: "block" }} bg="#001529" color="#dad9d9" py={3} px={10}>
        <Flex justify="space-between" align="center" fontSize="sm">
          <HStack spacing={9} ml={8} fontSize={"13px"}>
            {topLinks.map((link) => (
              <Link key={link}>{link}</Link>
            ))}
          </HStack>

          <HStack spacing={4}>
            <HStack>
              <HiOutlineChatBubbleLeftRight />
              <Link fontSize={"12px"}>FAQ</Link>
            </HStack>
            <Divider orientation="vertical" height="15px" />
            <HStack>
              <Image src="https://flagcdn.com/w20/us.png" alt="USA Flag" />
              <Text fontSize={"12px"} fontWeight={200}>EN</Text>
            </HStack>
          </HStack>
        </Flex>
      </Box>

      {/* --- MAIN NAVBAR --- */}
      <Flex
        bg="white"
        color="#333"
        align="center"
        px={0}
        boxShadow="md"
        height={{ base: "80px", md: "100px" }}
      >
        {/* LOGO SECTION */}
        <Flex
          bg="#1a4d95"
          color="white"
          height="100%"
          align="center"
          px={{ base: 4, md: 8 }}
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
          flex={{ base: 1, md: "auto" }}
        >
          <HStack spacing={{ base: 2, md: 8 }} pl={{ base: 0, md: 8 }}>
            <Box borderRadius="full" mr={{ base: 0, md: -9 }} p={1}>
              <Image src={UniLogo} borderRadius="full" boxSize={{ base: "50px", md: "70px" }} />
            </Box>
            <VStack align="start" spacing={0}>
              <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }} lineHeight="1.1">
                Madda Walabu University
              </Text>
              <Text fontSize={{ base: "10px", md: "xs" }}>Excellence through Diversity!</Text>
            </VStack>
          </HStack>
        </Flex>

        {/* DESKTOP MENU */}
        <HStack display={{ base: "none", lg: "flex" }} spacing={8} ml="auto" px={10} fontWeight="500" fontSize={"15px"}>
          <Link>Home</Link>
          <Link>About Us</Link>
          <Link>Programs +</Link>
          <Link>Events +</Link>
          <Link>Blogs +</Link>
          <Link>Contact Us</Link>

          <HStack spacing={4}>
            <IconButton variant="outline" icon={<SearchIcon />} aria-label="Search" borderRadius="none" />
            <IconButton variant="outline" icon={<BsGrid3X3GapFill />} aria-label="Menu" borderRadius="none" />
            <Button bg="#1a4d95" color="white" _hover={{ bg: "#153e77" }} rightIcon={<span>→</span>} borderRadius="sm" px={6} fontSize={"12px"}>
              Apply Now
            </Button>
            <Image src="https://flagcdn.com/w80/et.png" alt="Ethiopia Flag" boxSize="40px" width={"75px"} objectFit="cover" />
          </HStack>
        </HStack>

        <IconButton
          display={{ base: "flex", lg: "none" }}
          onClick={onOpen}
          icon={<HamburgerIcon />}
          variant="ghost"
          fontSize="25px"
          mr={4}
          aria-label="Open Menu"
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#001529" color="white">
          <DrawerCloseButton color="white" />
          <DrawerHeader borderBottomWidth="1px" borderColor="whiteAlpha.300">
            Navigation Menu
          </DrawerHeader>

          <DrawerBody>
            <VStack align="start" spacing={5} mt={4}>
              {/* Main Links */}
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
                _hover={{bg: "#153e77"}}
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