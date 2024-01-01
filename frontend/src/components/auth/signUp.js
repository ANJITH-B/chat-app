import React from 'react'
import { FormControl, FormLabel, FormHelperText, Input, Image, Center, useToast, Button, Toast } from '@chakra-ui/react';

const GoogleImg = 'https://imagepng.org/wp-content/uploads/2019/08/google-icon.png';
const AppleImg = 'https://freepngimg.com/download/apple/58687-logo-computer-apple-icons-free-hd-image.png';


const SignUp = ({onClose}) => {

    const handleSignUpClick = () => {
        Toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        onClose(); 
      };
      
    return (
        <>
            <FormControl isRequired>
                <Input placeholder='First name' type='name' />
                <Input mt={3} placeholder='Email address' type='email' isRequired />
                <Input mt={3} placeholder='create password' type='password' />
                <Input mt={3} _placeholder={{ opacity: 100, }} placeholder='conform password' type='password' />
                <Center><FormHelperText>or</FormHelperText></Center>
                <Center mt={2} >
                    <Button colorScheme='blue' width={"100vh"} variant='outline' mr={0} ml={0} isFitted>
                        <Image width={5} mr={2} src={GoogleImg} alt='Dan Abramov' />
                        Continue with Google
                    </Button>
                </Center>
                <Center mt={3} >
                    <Button colorScheme='blue' width={"100vh"} variant='outline' mr={0} ml={0} isFitted>
                        <Image width={10} ml={-5} src={AppleImg} alt='Dan Abramov' />
                        Continue with Apple
                    </Button>                 
                </Center>
                <Center mt={5} >
                  <Button colorScheme='blue' mr={0} w={"100vh"} onClick={handleSignUpClick}>Sign up</Button>
                </Center>
            </FormControl>
        </>
    )
}

export default SignUp ;