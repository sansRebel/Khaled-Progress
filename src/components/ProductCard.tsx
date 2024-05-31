import { Box, Image, Heading, Text, Flex, Badge, useColorModeValue } from '@chakra-ui/react';

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    rating: string;
  };
  onClick: () => void;
};

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      bg={useColorModeValue('white', 'gray.700')}
      _hover={{ boxShadow: "2xl", transform: "scale(1.05)", transition: "all 0.3s" }}
      transition="all 0.3s"
      onClick={onClick}
      cursor="pointer"
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
        <Text mb={4} color="gray.600">Rating: {product.rating}</Text>
        <Flex justify="space-between" align="center">
          <Text fontWeight="bold" fontSize="lg" color="brand.800">${product.price.toFixed(2)}</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCard;
