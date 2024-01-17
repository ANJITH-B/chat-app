import React, { useState } from 'react'
import { FormControl, FormHelperText, Input, Image, Center, Button, Toast, Alert, AlertIcon, FormErrorMessage, InputGroup, TagLabel, Box } from '@chakra-ui/react';
import { FiUpload } from 'react-icons/fi';
import { IconButton, Icon } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'

const GoogleImg = 'https://imagepng.org/wp-content/uploads/2019/08/google-icon.png';
const AppleImg = 'https://freepngimg.com/download/apple/58687-logo-computer-apple-icons-free-hd-image.png';

const SignUp = ({ onClose }) => {

    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [conformpassword, setconformpassword] = useState()
    const [password, setpassword] = useState()
    const [pic, setPic] = useState()
    const [loading, setLoading] = useState(false)
   const toast = useToast();

    
const postDetails = (pics) => {
    setLoading(true);

    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    if (pics.type !== "image/jpeg" && pics.type !== "image/png") {
      toast({
        title: "Please Select a JPEG or PNG Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {

      const data = new FormData()
      data.append("file", pics)
      data.append('upload_present',"Chat-app");
      data.append("cloud_name", "dchypvjoe")
      
      
      fetch.post("https://api.cloudinary.com/v1_1/dchypvjoe/image/upload", data)
        .then((response) => {
          console.log("Cloudinary response:", response);
          setPic(response.data.url.toString());
          setLoading(false);
          toast({
            title: "Image uploaded successfully!",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
        })
        .catch((error) => {
            console.log("Cloudinary error:", error);
            setLoading(false);
        });
    }
  }
    // const postDetail = (pics) => {
    //     setLoding(true)
    //     if (pic === undefined) {
    //         toast({
    //             title: 'please select an image.',
    //             description: "We've.",
    //             status: 'warning',
    //             duration: 9000,
    //             isClosable: true,
    //             position: 'bottom',
    //           })
    //           return
    //     }
    //     if(pics.type === 'image/jpeg' || pics.type === "image/png"){
    //         const data = new FormData();
    //         data.append('file',pics);
    //         data.append('upload_present',"Chat-app");
    //         data.append('clound_name', 'dchypvjoe');
    //         fetch("https://api.cloudinary.com/v1_1/dchypvjoe/images/upload",{
    //             method: "post",
    //             body: data,
    //         })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setpic(data.url.toString());
    //             setLoding(false);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             setLoding(false);
    //         })

    //     }else {
    //         toast({
    //             title:"Please Select an Image!",
    //             status: "warning",
    //             duration: 5000,
    //             isClosable: true,
    //             position:"bottom",
    //         });
    //         setLoding(false);
    //         return;
    //     }
    // }

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
                <Input placeholder='First name' type='name' onChange={(e) => setname(e.target.value)} />
            </FormControl>
            <FormControl isRequired>
                <Input mt={3} placeholder='Email address' type='email' onChange={(e) => setemail(e.target.value)} />
                <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
                <Input mt={3} placeholder='create password' type='password' onChange={(e) => setpassword(e.target.value)} />
            </FormControl>
            <FormControl isRequired>
                <Input mt={3} placeholder='conform password' type='conform password' onChange={(e) => setconformpassword(e.target.value)} />
            </FormControl>
            <FormControl>
                <Box
                    mt={3}
                    as="label"
                    htmlFor="file-upload"
                    display="flex"
                    alignItems="center"
                    cursor="pointer"
                    bg="blue.500" // Blue background color
                    color="white" // White text color
                    p={2} // Padding around the label
                    borderRadius="md" // Rounded corners
                    _hover={{ bg: 'blue.600' }} // Darker blue on hover
                >
                        <Center ml={10} htmlFor="file-upload" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <Icon as={FiUpload} mr={2} />
                            Upload Profile Picture
                        </Center>
                    
                    <Input id="file-upload" type="file" accept="image/*" onChange={(e) => postDetails(e.target.value)} opacity={0} position="absolute" zIndex="-1" />
                </Box>
            </FormControl>

            <FormControl >
                
                <Center><FormHelperText>or</FormHelperText></Center>
            </FormControl>
            <Center mt={2} >
                <Button colorScheme='blue' width={"100vh"} variant='outline' mr={0} ml={0} >
                    <Image width={5} mr={2} src={GoogleImg} alt='Dan Abramov' />
                    Continue with Google
                </Button>
            </Center>
            {/* <Center mt={3} >
                    <Button colorScheme='blue' width={"100vh"} variant='outline' mr={0} ml={0} >
                        <Image width={10} ml={-5} src={AppleImg} alt='Dan Abramov' />
                        Continue with Apple
                    </Button>                 
                </Center> */}
            <Center mt={4} >
                <Button isLoading={loading} colorScheme='blue' mr={0} w={"100vh"} onClick={handleSignUpClick}>Sign up</Button>
            </Center>
            <Alert status='error' variant='subtle' mt={3}>
                    <AlertIcon />
                    please fill all mandatory fields
                </Alert>

        </>
    )
}

export default SignUp;