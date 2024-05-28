import { Box, Flex, Link, Text, Stack, VStack, HStack } from '@chakra-ui/react';
import NextLink from 'next/link';

const Footer = () => {
  return (
    <Box bg="brand.500" color="white" py={10} mt={10}>
      <Flex maxW="1200px" mx="auto" direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
        <VStack align="start" spacing={4} mb={{ base: 8, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">Soda Store</Text>
          <Text>© {new Date().getFullYear()} Soda Store. All rights reserved.</Text>
        </VStack>
        <HStack spacing={10} align="start">
          <VStack align="start" spacing={4}>
            <Text fontSize="lg" fontWeight="bold">About</Text>
            <Link as={NextLink} href="/about">About Us</Link>
            <Link as={NextLink} href="/contact">Contact Us</Link>
            <Link as={NextLink} href="/privacy">Privacy Policy</Link>
          </VStack>
          <VStack align="start" spacing={4}>
            <Text fontSize="lg" fontWeight="bold">Follow Us</Text>
            <Link href="https://facebook.com" isExternal>Facebook</Link>
            <Link href="https://twitter.com" isExternal>Twitter</Link>
            <Link href="https://instagram.com" isExternal>Instagram</Link>
          </VStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
