import React from 'react'
import { Alert, AlertDescription, AlertIcon, Button, Center, FormControl, FormLabel, HStack, Input, Text } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons';

const ForgetPass = ({onBackToLogin, onClose}) => {
  return (
    <>
    <HStack>
      <ArrowBackIcon onClick={onBackToLogin} size='lg'/>
      <Text fontSize='xl'>Forget Password ?</Text>
    </HStack>
      <FormControl mt={3}>
        <FormLabel>Email address</FormLabel>
        <Input type='email' placeholder='enter your mail id'/>
      </FormControl>
      <Alert status='info' mt={3}>
        <AlertIcon />
        <AlertDescription>
          You can reset you'r password on Clicking mail reseived.
          remember you can only reset the password with in 10 min after mail reseived!
        </AlertDescription>
      </Alert>
      <Center mt={5} mb={5}>
        <Button onClick={onClose} colorScheme='blue' w={"100vh"} mr={0} size='md' >Sent Mail</Button>
      </Center>
    </>
  )
}

export default ForgetPass ;