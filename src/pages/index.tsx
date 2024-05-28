import { Box, Grid, Image, Heading, Text, Button, Flex, Badge } from '@chakra-ui/react';
import products from '../data/products';
import { useCart } from '../context/CartContext';

export default function Home() {
  const { addToCart } = useCart();

  return (
    <Box p={5} bg="gray.50">
      <Box textAlign="center" mb={10}>
        <Heading as="h1" size="2xl" mb={4} color="brand.600" fontWeight="bold">
          Welcome to Our Store
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Discover our exclusive collection of products
        </Text>
      </Box>
      <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={8}>
        {products.map((product) => (
          <Box
            key={product.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            bg="white"
            _hover={{ boxShadow: "2xl", transform: "scale(1.05)", transition: "all 0.3s" }}
            transition="all 0.3s"
          >
            <Image src={product.image} alt={product.name} width="100%" height="200px" objectFit="cover" />
            <Box p={6}>
              <Flex justifyContent="space-between" alignItems="baseline">
                <Heading as="h3" size="md" mb={2} noOfLines={1} color="brand.700">{product.name}</Heading>
                <Badge borderRadius="full" px="2" colorScheme="brand">
                  New
                </Badge>
              </Flex>
              <Text mb={4} noOfLines={3} color="gray.600">{product.description}</Text>
              <Flex justify="space-between" align="center">
                <Text fontWeight="bold" fontSize="lg" color="brand.800">${product.price.toFixed(2)}</Text>
                <Button colorScheme="brand" size="sm" onClick={() => addToCart(product)}>Add to Cart</Button>
              </Flex>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
