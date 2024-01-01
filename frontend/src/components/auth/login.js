import React from 'react'
import { FormControl, FormLabel, FormHelperText, Input, Image, Center, useToast, Button } from '@chakra-ui/react';

const GoogleImg = 'https://imagepng.org/wp-content/uploads/2019/08/google-icon.png';
const AppleImg = 'https://freepngimg.com/download/apple/58687-logo-computer-apple-icons-free-hd-image.png';

const Login = (onClose) => {
  return (
    <>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type='email' />
        <FormLabel>Password</FormLabel>
        <Input type='password' />
        <FormHelperText>Forget password ?</FormHelperText>
      </FormControl>
      <Center mt={2} >
        <Button colorScheme='blue' w={"100vh"} variant='outline' mr={0} ml={0} isFitted>
          <Image width={5} mr={2} src={GoogleImg} alt='Dan Abramov' />
          Continue with Google
        </Button>
      </Center>
      <Center mt={3} >
        <Button colorScheme='blue' w={"100vh"} variant='outline' mr={0} ml={0} isFitted>
          <Image width={10} ml={-5} src={AppleImg} />
          Continue with Apple
        </Button>
      </Center>
      <Center mt={5}>
      <Button colorScheme='blue' w={"100vh"} mr={0} size='md' onClick={onClose}>Login</Button>
      </Center>


    </>
  )
}

export default Login;
