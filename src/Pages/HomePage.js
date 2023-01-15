import React from 'react'
import { Container, Box, Text, Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'
import Signup from '../Components/Authentication/Signup'
import Login from '../Components/Authentication/Login'


const HomePage = () => {
  return (
    <Container maxW='xl' centerContent>
      <Box
        d='flex'
        p='3'
        bg='white'
        justifyContent='center'
        
        w={'100%'}
        m="40px 0 15px 0"
        borderRadius={'lg'}
        borderWidth='1px'

      >
        <Text fontSize={'4xl'} fontFamily='Work sans' textAlign={'center'}>Talk-A-Tive</Text>
      </Box>
      <Box
        bg={'white'}
        w='100%'
        p={4}
        borderRadius='lg'
        borderWidth='1px'
      >
        <Tabs variant='soft-rounded' >
  <TabList mb="1em">
    <Tab w="50%">Login</Tab>
    <Tab w='50%'>Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
     <Login/>
    </TabPanel>
    <TabPanel>
      <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>

      </Box>
    </Container>
  )
}

export default HomePage