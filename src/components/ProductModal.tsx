import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Box, Image, Heading, Text, Flex, Button, useColorModeValue } from '@chakra-ui/react';
import { Product, useCart } from '../context/CartContext';

type ProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
};

const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
  const { addToCart } = useCart();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{product.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Image src={product.image} alt={product.name} width="100%" height="300px" objectFit="cover" />
            <Box mt={4}>
              <Text>{product.description}</Text>
              <Flex justify="space-between" align="center" mt={4}>
                <Text fontWeight="bold" fontSize="2xl" color="brand.800">${product.price.toFixed(2)}</Text>
                <Text>Rating: {product.rating}</Text>
              </Flex>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
          <Button colorScheme="red" ml={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
