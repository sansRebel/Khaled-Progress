import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Input, VStack, Heading, FormControl, FormLabel, Text } from '@chakra-ui/react';
import axios from 'axios';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState<'customer' | 'manager'>('customer');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match bravv');
      return;
    }

    try {
      const res = await axios.post('/api/api?type=add-user', { email, password, type: userType });
      if (res.status === 201) {
        router.push('/login');
      } else {
        setError('An error occurred. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg" boxShadow="lg">
      <Heading as="h2" size="lg" mb={6} textAlign="center">
        Register
      </Heading>
      <form onSubmit={handleRegister}>
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
          <FormControl id="confirm-password">
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">Register</Button>
          <Text>
            Already have an account? <Button as="a" variant="link" colorScheme="blue" href="/login">Login</Button>
          </Text>
        </VStack>
      </form>
    </Box>
  );
};

export default RegisterPage;
