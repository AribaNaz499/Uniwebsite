import React from 'react';
import { Box, Flex, Text, SimpleGrid, Icon, Link, Container } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaFlask, FaHandshake, FaBookOpen } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const cardData = [
  { title: "Multi-Campus Learning", icon: FaMapMarkerAlt, bgColor: "#FFF5F5", description: "Experience student-centered education across Robe Main Campus, Goba Campus, and Shashemene Campus in Ethiopia." },
  { title: "Integrated Research", icon: FaFlask, bgColor: "#F7FAFC", description: "Experience student-centered education across Robe Main Campus, Goba Campus, and Shashemene Campus in Ethiopia." },
  { title: "Community Service", icon: FaHandshake, bgColor: "#F5F5FF", description: "Experience student-centered education across Robe Main Campus, Goba Campus, and Shashemene Campus in Ethiopia." },
  { title: "Quality Academics", icon: FaBookOpen, bgColor: "#F0FFF4", description: "Experience student-centered education across Robe Main Campus, Goba Campus, and Shashemene Campus in Ethiopia." },
];

const CardSection = () => {
  return (
    <Container maxW="container.xl" px={4}>
      <SimpleGrid 
        columns={{ base: 1, md: 2, lg: 4 }} 
        spacing={{ base: 6, lg: 4 }} 
      >
        {cardData.map((card, index) => (
          <Flex
            key={index}
            bg={card.bgColor}
            p={8}
            px={4}
            direction="column"
            minH="320px"
            transition="0.3s"
            boxShadow="xl" 
            _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}
          >
            <Icon as={card.icon} w={8} h={8} mb={6} color="black" />
            <Text fontSize="xl" fontWeight="bold" color="#002D62" mb={4} fontFamily="serif">
              {card.title}
            </Text>
            <Text fontSize="sm" color="gray.600" mb={8}>
              {card.description}
            </Text>
            <Link
              mt="auto"
              display="inline-flex"
              alignItems="center"
              fontSize="sm"
              fontWeight="bold"
              border="1px solid"
              borderColor="gray.300"
              px={4}
              py={2}
              width="fit-content"
              _hover={{ bg: "white", textDecoration: "none" }}
            >
              Learn More <Icon as={BsArrowRight} ml={2} />
            </Link>
          </Flex>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default CardSection;