import React from 'react'
import { FormControl, FormLabel, FormHelperText, Input, Image, Center, useToast, } from '@chakra-ui/react'
import {
  Modal, Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
// import img from '../../../../public/Le'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function Auth() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  const toast = useToast()

  const handleSignUpClick = () => {
    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
    onClose(); // Close the modal or popover when the toast is shown
  };
  return (
    <>

      <Button  onClick={onOpen}>
        Login
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size={'sm'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mt={1}> <Center> <Image width={120} src='../LetterLogo.png' alt='Chat App'/></Center> </ModalHeader>
          <ModalCloseButton />
          <Tabs isFitted>
            <ModalBody>
              <TabList>
                <Tab>Login</Tab>
                <Tab>Sign up</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' />
                    <FormLabel>Password</FormLabel>
                    <Input type='password' />
                    <FormHelperText>Forget password ?</FormHelperText>
                  </FormControl>
                </TabPanel>
                <TabPanel>
                  <FormControl isRequired>
                    <FormLabel>Full name</FormLabel>
                    <Input placeholder='First name' />
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' />
                    <FormLabel>Password</FormLabel>
                    <Input type='password' />
                    <Center>
                      <FormHelperText>or</FormHelperText>
                    </Center>
                  </FormControl>
                </TabPanel>
              </TabPanels>
              <Center >
                <Button colorScheme='blue' width={"100vh"} variant='outline' mr={4} ml={4} isFitted>
                  <Image width={5} mr={2} src='https://imagepng.org/wp-content/uploads/2019/08/google-icon.png' alt='Dan Abramov' />
                  Continue with Google
                </Button>
              </Center>
              <Center mt={3}>
                <Button colorScheme='blue' width={"100vh"} variant='outline' mr={4} ml={4} isFitted>
                  <Image width={10} ml={-5} src='https://freepngimg.com/download/apple/58687-logo-computer-apple-icons-free-hd-image.png' alt='Dan Abramov' />
                  Continue with Apple
                </Button>
              </Center>
            </ModalBody>
            <ModalFooter>
              <TabPanels align='end' >
                <TabPanel>
                  <Button colorScheme='blue' width={"20vh"} mr={0} size='md' onClick={onClose}>Login</Button>
                </TabPanel>
                <TabPanel>
                  <Button colorScheme='blue' mr={0} onClick={handleSignUpClick}>Sign up</Button>
                </TabPanel>
              </TabPanels>
            </ModalFooter>
          </Tabs>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Auth;





