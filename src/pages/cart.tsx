import { Box, Heading, Text, Stack, Flex, Image, Button } from '@chakra-ui/react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <Box p={5}>
      <Heading as="h1" size="2xl" mb={6} textAlign="center" color="brand.600">
        Your Cart
      </Heading>
      {cart.items.length === 0 ? (
        <Text textAlign="center" fontSize="xl" color="gray.600">
          Your cart is empty.
        </Text>
      ) : (
        <Stack spacing={6}>
          {cart.items.map((item) => (
            <Box key={item.id} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg" bg="white" p={6}>
              <Flex align="center">
                <Image src={item.image} alt={item.name} width="100px" height="100px" objectFit="cover" mr={6} />
                <Box flex="1">
                  <Heading as="h3" size="md" mb={2} noOfLines={1} color="brand.700">{item.name}</Heading>
                  <Text mb={4} noOfLines={2} color="gray.600">{item.description}</Text>
                  <Flex justify="space-between" align="center">
                    <Text fontWeight="bold" fontSize="lg" color="brand.800">${item.price.toFixed(2)}</Text>
                    <Button colorScheme="red" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          ))}
          <Button colorScheme="red" size="lg" onClick={clearCart}>Clear Cart</Button>
        </Stack>
      )}
    </Box>
  );
};

export default Cart;
