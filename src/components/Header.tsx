import { Flex, Link, Spacer, Box, Heading, HStack, Input, InputGroup, InputLeftElement, IconButton, Text, VStack, Image } from '@chakra-ui/react';
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
        <HStack spacing={8}> {/* Adjust spacing */}
          <Link as={NextLink} href="/" display="block">
            <VStack>
              <IconButton
                aria-label="Home"
                icon={<Image src="/images/home.svg" alt="Home" boxSize="24px" />}
                variant="ghost"
                colorScheme="whiteAlpha"
                _hover={{ bg: 'brand.600' }}
              />
              <Text>Home</Text>
            </VStack>
          </Link>
          <Link as={NextLink} href="/cart" display="block">
            <VStack>
              <IconButton
                aria-label="Cart"
                icon={<Image src="/images/cart.svg" alt="Cart" boxSize="24px" />}
                variant="ghost"
                colorScheme="whiteAlpha"
                _hover={{ bg: 'brand.600' }}
              />
              <Text>Cart</Text>
            </VStack>
          </Link>
          <Link as={NextLink} href="/checkout" display="block">
            <VStack>
              <IconButton
                aria-label="Checkout"
                icon={<Image src="/images/checkout.svg" alt="Checkout" boxSize="24px" />}
                variant="ghost"
                colorScheme="whiteAlpha"
                _hover={{ bg: 'brand.600' }}
              />
              <Text>Checkout</Text>
            </VStack>
          </Link>
          <Link as={NextLink} href="/login" display="block">
            <VStack>
              <IconButton
                aria-label="Login"
                icon={<Image src="/images/login.svg" alt="Login" boxSize="24px" />}
                variant="ghost"
                colorScheme="whiteAlpha"
                _hover={{ bg: 'brand.600' }}
              />
              <Text>Login</Text>
            </VStack>
          </Link>
          <Link as={NextLink} href="/register" display="block">
            <VStack>
              <IconButton
                aria-label="Register"
                icon={<Image src="/images/register.svg" alt="Register" boxSize="24px" />}
                variant="ghost"
                colorScheme="whiteAlpha"
                _hover={{ bg: 'brand.600' }}
              />
              <Text>Register</Text>
            </VStack>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
