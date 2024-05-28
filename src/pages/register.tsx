import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Input, VStack, Heading, FormControl, FormLabel, Text } from '@chakra-ui/react';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();
    // Currently accepting any credentials
    console.log('Registering with', email, password);
    router.push('/');
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg" boxShadow="lg">
      <Heading as="h2" size="lg" mb={6} textAlign="center">
        Register
      </Heading>
      <form onSubmit={handleRegister}>
        <VStack spacing={4}>
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
