import React, { useState } from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'

const Signup = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [pic, setPic] = useState()
    const [show, setShow] = useState(false)

    const handleCLick = () => setShow(!show)
    
    const postDetails = (pic) => { }

    const submitHandler = () => {}
    


    return (
        <VStack spacing={'5px'}>
            <FormControl id='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder='Enter your Name' onChange={(e)=>setName(e.target.value)}/>
            </FormControl>

            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)}/>
            </FormControl>

            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input type={show ? "text" : "password"} placeholder='Enter your password'
                        onChange={(e) => setPassword(e.target.value)} />
                    <InputRightElement>
                        <Button h='1.75rem' size={'sm'} onClick={handleCLick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
               
            </FormControl>

            <FormControl id='password' isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input type={show ? "text" : "password"} placeholder='Enter your password'
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                    <InputRightElement>
                        <Button h='1.75rem' size={'sm'} onClick={handleCLick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
               
            </FormControl>

            <FormControl id='pic' isRequired>
                <FormLabel>Upload your picture</FormLabel>
                <Input type={'file'} accept='image/*'
                    onChange={(e) => postDetails(e.target.files[0])} />
            </FormControl>

            <Button colorScheme={"blue"}
                width="100%"
                style={{ marginTop: 15}}
            onClick={submitHandler}>
                Sign Up
            </Button>

            
      </VStack>
   
  )
}

export default Signup