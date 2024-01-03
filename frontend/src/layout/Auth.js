import React from 'react';
import { Image, Center, } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, } from '@chakra-ui/react'
import { useDisclosure, Button } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import SignUp from '../components/auth/signUp';
import Login from '../components/auth/login';
import ForgetPass from '../components/auth/forgetPass';

function Auth() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showForgetPassword, setShowForgetPassword] = React.useState(false);
  const finalRef = React.useRef(null);
  const handleForgetPasswordClick = () => setShowForgetPassword(true)
  const handleCloseForgetPasswordClick = () => setShowForgetPassword(false);


  return (
    <>
      <Button onClick={onOpen}>
        Login
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size={'sm'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mt={1}> <Center> <Image w={120} src='../LetterLogo.png' alt='Chat App' /></Center> </ModalHeader>
          <ModalCloseButton />
          {showForgetPassword ? (
            <ModalBody><ForgetPass onBackToLogin={handleCloseForgetPasswordClick} onClose={onClose}/></ModalBody>
          ) : (
            <Tabs isFitted>
              <ModalBody>
                <TabList>
                  <Tab>Login</Tab>
                  <Tab>Sign up</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Login onClose={handleCloseForgetPasswordClick} onForgetPasswordClick={handleForgetPasswordClick} />
                  </TabPanel>
                  <TabPanel>
                    <SignUp onClose={handleCloseForgetPasswordClick} />
                  </TabPanel>
                </TabPanels>
              </ModalBody>
            </Tabs>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default Auth;


