import React,{ useState } from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'

const Login = () => {
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
  
    const [show, setShow] = useState(false)

    const handleCLick = () => setShow(!show)
    
    

    const submitHandler = () => {}
    


    return (
        <VStack spacing={'5px'}>
           
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

           
            <Button colorScheme={"blue"}
                width="100%"
                style={{ marginTop: 15}}
            onClick={submitHandler}>
               Login
            </Button>

            <Button
                variant={'solid'}
                colorScheme={"red"}
                width="100%"
               
                onClick={() => {
                    setEmail("guestuser.example.com")
                    setPassword("123456")
            }}>
               Get Guest User Credentials
            </Button>


            
      </VStack>
   
  )
}

export default Login