import React, { useState } from 'react'
import { FormControl, FormLabel, FormHelperText, Input, Image, Center, Button, } from '@chakra-ui/react';

const GoogleImg = 'https://imagepng.org/wp-content/uploads/2019/08/google-icon.png';
const AppleImg = 'https://freepngimg.com/download/apple/58687-logo-computer-apple-icons-free-hd-image.png';

const Login = ({ onClose, onForgetPasswordClick }) => {

  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  return (
    <>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type='email' onChange={(e) => setemail(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input type='password' onChange={(e) => setpassword(e.target.value)} />
        <FormHelperText onClick={onForgetPasswordClick} color="blue.500" cursor='pointer' >Forget password ?</FormHelperText>
      </FormControl>
      <Center mt={3} >
        <Button colorScheme='blue' w={"100vh"} variant='outline' mr={0} ml={0} isFitted>
          <Image width={5} mr={2} src={GoogleImg} alt='Dan Abramov' /> Continue with Google
        </Button>
      </Center>
      <Center mt={3} >
        <Button colorScheme='blue' w={"100vh"} variant='outline' mr={0} ml={0} isFitted>
          <Image width={10} ml={-5} src={AppleImg} /> Continue with Apple
        </Button>
      </Center>
      <Center mt={5}>
        <Button colorScheme='blue' w={"100vh"} mr={0} size='md' onClick={onClose}>Login</Button>
      </Center>
      <Center mt={3} >
        <Button colorScheme='green' mr={0} w={"100vh"} onClick={() => { setemail("guest@example.com"); setpassword("123456") }}>Guest User</Button>
      </Center>
    </>
  )
}

export default Login;
