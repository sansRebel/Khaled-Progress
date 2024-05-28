// src/pages/checkout.tsx
import { Box, Heading, Text, Stack, Flex, Button } from '@chakra-ui/react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, clearCart } = useCart();

  const handleCheckout = () => {
    clearCart();
    alert('Thank you for your purchase!');
  };

  return (
    <Box p={5}>
      <Heading as="h1" size="2xl" mb={6} textAlign="center" color="brand.600">
        Checkout
      </Heading>
      {cart.items.length === 0 ? (
        <Text textAlign="center" fontSize="xl" color="gray.600">
          Your cart is empty.
        </Text>
      ) : (
        <Stack spacing={6}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg" bg="white" p={6}>
            <Heading as="h3" size="md" mb={2} color="brand.700">Order Summary</Heading>
            {cart.items.map((item) => (
              <Flex key={item.id} justify="space-between" mb={4}>
                <Text>{item.name} (x{item.quantity})</Text>
                <Text>${(item.price * item.quantity).toFixed(2)}</Text>
              </Flex>
            ))}
            <Flex justify="space-between" mt={4}>
              <Text fontWeight="bold">Total</Text>
              <Text fontWeight="bold">${cart.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</Text>
            </Flex>
          </Box>
          <Button colorScheme="brand" size="lg" onClick={handleCheckout} alignSelf="center">Confirm Purchase</Button>
        </Stack>
      )}
    </Box>
  );
};

export default Checkout;
