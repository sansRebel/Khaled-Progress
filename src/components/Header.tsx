
import { Flex, Link, Spacer, Button, Box, Heading, HStack } from '@chakra-ui/react';
import NextLink from 'next/link';

const Header = () => {
  return (
    <Box bg="brand.500" color="white" py={4} boxShadow="sm">
      <Flex maxW="1200px" mx="auto" align="center">
        <Heading as="h1" size="lg" fontWeight="bold">
          
        </Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link as={NextLink} href="/">
            <Button variant="ghost" colorScheme="whiteAlpha">Home</Button>
          </Link>
          <Link as={NextLink} href="/cart">
            <Button variant="ghost" colorScheme="whiteAlpha">Cart</Button>
          </Link>
          <Link as={NextLink} href="/checkout">
            <Button variant="ghost" colorScheme="whiteAlpha">Checkout</Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
