import React from 'react';
import {Flex, Text,Box,Button,ScaleFade } from "@chakra-ui/react"
import  './item-todo.css'


function NewTodos(props) {

    const handleClick = (e) => {
        e.preventDefault()
        props.handleDone(e.currentTarget.id)
    }
     function handleEditItem(e){
        e.preventDefault()
        props.handleEdit(e.currentTarget.id)
    }

    return (
            <ScaleFade initialScale={.2}  in={handleClick}>
                <Flex  w={'300px'} marginBottom={'10px'} alignItems={'center'} m={'20px auto'} >
                    <Box  w={'100%'} h={'40px'}
                          as={props.done ? "del" : ""} bg={props.done ? "#6d335c" : "#ae5f75"}
                          color={props.done ? "#d37b79" : "#fff"}
                          justifyContent={'center'}
                          alignItems={'center'}
                          borderRadius={'5px'}
                          onClick={handleClick}
                          id={props.id} >
                        <Text  textAlign={'center'} fontSize={'20px'}  fontWeight={'900'} >{props.text}</Text>
                    </Box>
                    <Button id={props.id} onClick={handleEditItem}>Edit</Button>
                </Flex>
            </ScaleFade>



    );
}

export default NewTodos;
