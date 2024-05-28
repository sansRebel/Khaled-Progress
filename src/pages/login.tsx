import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Input, VStack, Heading, FormControl, FormLabel, Text } from '@chakra-ui/react';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/api', { email, password });
      const { user } = response.data;

      if (user.type === 'manager') {
        router.push('/manager');
      } else {
        router.push('/');
      }
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg" boxShadow="lg">
      <Heading as="h2" size="lg" mb={6} textAlign="center">
        Login
      </Heading>
      <form onSubmit={handleLogin}>
        <VStack spacing={4}>
          {error && <Text color="red.500">{error}</Text>}
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">Login</Button>
          <Text>
            Don't have an account? <Button as="a" variant="link" colorScheme="blue" href="/register">Register</Button>
          </Text>
        </VStack>
      </form>
    </Box>
  );
};

export default LoginPage;
