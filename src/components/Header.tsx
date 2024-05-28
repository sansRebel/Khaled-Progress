import { Flex, Link, Spacer, Button, Box, Heading, HStack, Input, InputGroup, InputLeftElement, IconButton } from '@chakra-ui/react';
import NextLink from 'next/link';
import { SearchIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?query=${searchTerm}`);
    }
  };

  return (
    <Box bg="brand.500" color="white" py={4} boxShadow="sm">
      <Flex maxW="1200px" mx="auto" align="center">
        <Heading as="h1" size="lg" fontWeight="bold">
          Soft Drink Store
        </Heading>
        <Spacer />
        <form onSubmit={handleSearch}>
          <InputGroup maxW="400px" mx="4">
            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
            <Input
              type="text"
              placeholder="Search for drinks"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              bg="white"
              color="gray.800"
              borderRadius="md"
            />
            <IconButton
              type="submit"
              aria-label="Search"
              icon={<SearchIcon />}
              bg="brand.600"
              color="white"
              _hover={{ bg: 'brand.700' }}
              ml={2}
            />
          </InputGroup>
        </form>
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
          <Link as={NextLink} href="/login">
            <Button variant="ghost" colorScheme="whiteAlpha">Login</Button>
          </Link>
          <Link as={NextLink} href="/register">
            <Button variant="ghost" colorScheme="whiteAlpha">Register</Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
