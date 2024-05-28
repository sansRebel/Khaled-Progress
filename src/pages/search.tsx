import { useRouter } from 'next/router';
import { Box, Heading, Text, SimpleGrid, Image, Button } from '@chakra-ui/react';
import products from '../data/products';

const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const searchQuery = Array.isArray(query) ? query[0] : query;

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes((searchQuery || '').toLowerCase())
  );

  return (
    <Box p={8}>
      <Heading as="h2" size="xl" mb={6}>
        Search Results
      </Heading>
      {searchQuery ? (
        <>
          <Text mb={4}>Showing results for: {searchQuery}</Text>
          {filteredProducts.length > 0 ? (
            <SimpleGrid columns={[1, null, 3]} spacing={8}>
              {filteredProducts.map(product => (
                <Box
                  key={product.id}
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="lg"
                  p={4}
                >
                  <Image src={product.image} alt={product.name} />
                  <Text mt={2} fontWeight="bold" fontSize="xl">
                    {product.name}
                  </Text>
                  <Text>{product.price}</Text>
                  <Button mt={4} size="sm" variant="solid" colorScheme="brand">
                    Add to Cart
                  </Button>
                </Box>
              ))}
            </SimpleGrid>
          ) : (
            <Text>No products found.</Text>
          )}
        </>
      ) : (
        <Text>Please enter a search query.</Text>
      )}
    </Box>
  );
};

export default SearchPage;
