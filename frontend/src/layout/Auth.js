import React from 'react' ;
import { Image, Center, useToast, } from '@chakra-ui/react' ;
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,} from '@chakra-ui/react'
import { useDisclosure, Button } from "@chakra-ui/react" ;
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import SignUp from '../components/auth/signUp';
import Login from '../components/auth/login';

function Auth() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  const toast = useToast()

  return (
    <>
      <Button  onClick={onOpen}>
        Login
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size={'sm'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mt={1}> <Center> <Image w={120} src='../LetterLogo.png' alt='Chat App'/></Center> </ModalHeader>
          <ModalCloseButton />
          <Tabs isFitted>
            <ModalBody>
              <TabList>
                <Tab>Login</Tab>
                <Tab>Sign up</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Login onClose= {onClose}/>
                </TabPanel>
                <TabPanel>
                  <SignUp onClose= {onClose}/>
                </TabPanel>
              </TabPanels> 
            </ModalBody>
          </Tabs>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Auth;


