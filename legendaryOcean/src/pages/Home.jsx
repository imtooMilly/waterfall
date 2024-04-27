import { Button, Flex, Link, FormControl, FormLabel, Input, FormErrorMessage, Container, useDisclosure, FormHelperText, Box} from '@chakra-ui/react';
import { Form, Link as RouterLink, useOutletContext, useNavigate} from 'react-router-dom';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from '@chakra-ui/react'
import { useState, useEffect} from 'react';
import '/src/index.css'; // This goes up one directory level from 'page' to 'src'
import {List, ListItem, ListIcon,} from '@chakra-ui/react'

function Home() {
    return(
        <Flex direction={'column'} justifyContent="center" alignItems="center" height="60vh">
            <h1 style={{fontSize: '48px', margin: '20px 0'}}>Hello World!</h1>
            <Container id='intro'>
                <Box>
                    <div className="header-text">
                        <List>
                            <ListItem>UI Desginer</ListItem>
                            <ListItem>Software Developer</ListItem>
                        </List>
                        <br></br>
                        <h1>Hello, My name is <span>Milton Morris</span> <br></br> Welcome to my Online Portfolio!</h1>
                    </div>
                </Box>
            </Container>
        </Flex>
    )
    
}

export default Home; 