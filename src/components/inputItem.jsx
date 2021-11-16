import React from 'react';
import {Input} from "@chakra-ui/react"
import  './item-todo.css'


function InputItem(props) {

    return (
        <Input w={'100%'} value={props.value1}
               onChange={props.handleChange}
               onKeyPress={props.handleKeypress}
               marginRight={'10px'} bg={'#ae5f75'} color={'white'}
        />
    )
}

export default InputItem;