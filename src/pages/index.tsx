import { useState } from 'react';
import { Box, Grid, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import products from '../data/products';
import { Product } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <Box p={5} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Box textAlign="center" mb={10}>
        <Heading as="h1" size="2xl" mb={4} color="brand.600" fontWeight="bold">
          Welcome to Our Store
        </Heading>
        <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')}>
          Discover our exclusive collection of products
        </Text>
      </Box>
      <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={8}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onClick={() => handleProductClick(product)} />
        ))}
      </Grid>
      {selectedProduct && (
        <ProductModal isOpen={!!selectedProduct} onClose={handleCloseModal} product={selectedProduct} />
      )}
    </Box>
  );
}
