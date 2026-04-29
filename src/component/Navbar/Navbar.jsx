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
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { px } from 'framer-motion';
import UniLogo from "../../assets/Images/Logo/uniLogo.png"

const Navbar = () => {
  return (
    <Box width="100%" fontFamily="sans-serif">
      {/* --- TOP DARK BLUE BAR --- */}
      <Box bg="#001529" color="#dad9d9" py={3} px={10}>
        <Flex justify="space-between" align="center" fontSize="sm">
          <HStack spacing={9} ml={8} fontSize={"13px"}>
            <Link>Students </Link>
            <Link>Staff</Link>
            <Link>Alumni</Link>
            <Link>Faculty</Link>
            <Link>Community</Link>
          </HStack>

          <HStack spacing={4}>
            <HStack>
              <HiOutlineChatBubbleLeftRight />
              <Link  fontSize={"12px"}>FAQ</Link>
            </HStack>
            <Divider orientation="vertical" height="15px" />
            <HStack>
              <Image  src="https://flagcdn.com/w20/us.png" alt="USA Flag" />
              <Text fontSize={"12px"} fontWeight={200}>EN</Text>
            </HStack>
          </HStack>
        </Flex>
      </Box>

      <Flex
        bg="white"
        color="#333"
        align="center"
        px={0}
        boxShadow="md"
        height="100px"
      >
        <Flex
          bg="#1a4d95"
          color="white"
          height="100%"
          align="center"
          px={8}
          position="relative"
          _after={{
            content: '""',
            position: 'absolute',
            right: '-30px',
            top: 0,
            width: '0',
            height: '0',
            borderTop: '100px solid #1a4d95',
            borderRight: '30px solid transparent',
          }}
        >
          <HStack spacing={8} pl={8}>
            <Box borderRadius="full"  mr={-9} p={1}>
              <Image src={UniLogo} borderRadius="full" boxSize="70px" />
            </Box>
            <VStack align="start" spacing={0}>
              <Text fontWeight="bold" fontSize="md" lineHeight="1.1">
                Madda Walabu University
              </Text>
              <Text fontSize="xs">Excellence through Diversity!</Text>
            </VStack>
          </HStack>
        </Flex>

        <HStack spacing={8} ml="auto" px={10} fontWeight="500" fontSize={"15px"}>
          <Link >Home</Link>
          <Link>About Us</Link>
          <Link>Programs +</Link>
          <Link>Events +</Link>
          <Link>Blogs +</Link>
          <Link>Contact Us</Link>

          <HStack spacing={4}>
            <IconButton
              variant="outline"
              icon={<SearchIcon />}
              aria-label="Search"
              borderRadius="none"
            />
            <IconButton
              variant="outline"
              icon={<BsGrid3X3GapFill />}
              aria-label="Menu"
              borderRadius="none"
            />
            <Button
              colorScheme="messenger"
              bg="#1a4d95"
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
              borderRadius="md"
              boxSize="40px"
              width="auto"
              objectFit="cover"
            />

          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;