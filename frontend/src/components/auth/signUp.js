import React, { useState } from 'react'
import { FormControl, FormHelperText, Input, Image, Center, Button, Toast } from '@chakra-ui/react';

const GoogleImg = 'https://imagepng.org/wp-content/uploads/2019/08/google-icon.png';
const AppleImg = 'https://freepngimg.com/download/apple/58687-logo-computer-apple-icons-free-hd-image.png';

const SignUp = ({onClose}) => {

    const [name, setname] = useState() 
    const [email, setemail] = useState() 
    const [conformpassword, setconformpassword] = useState()
    const [password, setpassword] = useState()
    const [pic, setpic] = useState()

    const postDetail = (pics) => {}
    
    const handleSignUpClick = () => {
        Toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        }) ;
        onClose() ; 
      } ;
      
    return (
        <>
            <FormControl isRequired>
                <Input placeholder='First name' type='name' onChange={(e)=> setname(e.target.value)}/>
            </FormControl>
            <FormControl isRequired>
                <Input mt={3} placeholder='Email address' type='email' onChange={(e)=> setemail(e.target.value)} />
            </FormControl>
            <FormControl isRequired>
                <Input mt={3} placeholder='create password' type='password' onChange={(e)=> setpassword(e.target.value)} />
            </FormControl>
            <FormControl isRequired>
                <Input mt={3} placeholder='conform password' type='conform password' onChange={(e)=> setconformpassword(e.target.value)}/>
            </FormControl>
            <FormControl >
                
                <Input mt={3} placeholder='upload profile picture' type='file' accept='image/*' p={1} onChange={(e)=> postDetail(e.target.value)}/>
                <Center><FormHelperText>or</FormHelperText></Center>
            </FormControl>
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
                
        </>
    )
}

export default SignUp ;