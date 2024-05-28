import { useState } from 'react';
import { Box, Button, Input, VStack, Heading, FormControl, FormLabel, SimpleGrid, Image, Text } from '@chakra-ui/react';
import productsData from '../data/products';
import { Product } from '../context/CartContext';

const ManagerPage = () => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const addProduct = () => {
    const newProduct: Product = {
      id: products.length + 1,
      name,
      price: parseFloat(price),
      image,
      description
    };

    setProducts([...products, newProduct]);
  };

  const removeProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <Box maxW="1200px" mx="auto" mt={10} p={6}>
      <Heading as="h2" size="lg" mb={6}>
        Manage Products
      </Heading>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addProduct();
        }}
      >
        <VStack spacing={4} align="start">
          <FormControl id="name">
            <FormLabel>Product Name</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} required />
          </FormControl>
          <FormControl id="price">
            <FormLabel>Price</FormLabel>
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              step="0.01"
            />
          </FormControl>
          <FormControl id="image">
            <FormLabel>Image URL</FormLabel>
            <Input value={image} onChange={(e) => setImage(e.target.value)} required />
          </FormControl>
          <FormControl id="description">
            <FormLabel>Description</FormLabel>
            <Input value={description} onChange={(e) => setDescription(e.target.value)} required />
          </FormControl>
          <Button type="submit" colorScheme="blue">Add Product</Button>
        </VStack>
      </form>
      <Heading as="h3" size="md" mt={10} mb={4}>
        Current Products
      </Heading>
      <SimpleGrid columns={[1, null, 3]} spacing={8}>
        {products.map(product => (
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
            <Text>${product.price.toFixed(2)}</Text>
            <Text>{product.description}</Text>
            <Button mt={4} size="sm" variant="solid" colorScheme="red" onClick={() => removeProduct(product.id)}>
              Remove Product
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ManagerPage;
