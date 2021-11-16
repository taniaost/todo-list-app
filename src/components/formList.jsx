import React, {useState, useMemo} from 'react';
import {Box, Button, Text, Flex} from "@chakra-ui/react"
import NewTodos from "./newTodos";
import InputItem from "./inputItem";
import {useSelector, useDispatch} from "react-redux";
import {v4 as uuid} from 'uuid';
import {ADD_EDIT_TODO, ADD_TODO, DONE_TODO, FILTER_TODO} from "../store/action-todo"


function FormList() {
    const items = useSelector((state) => state.todos)
    const dispatch = useDispatch();

    const [value1, setValue1] = useState('');
    const [valueEdit, setValueEdit] = useState('');
    const [editId, setEditId] = useState();


    const text = useMemo(() => ({
        title: 'ToDo List',
    }), []);

    function handleChange(e) {
        setValue1(e.target.value);
    }

    function handleChangeEdit(e) {
        setValueEdit(e.target.value);
    }

    const handleSave = () => {
        dispatch({
            type: ADD_TODO,
            payload: {
                id: uuid(),
                text: value1,
                done: false
            }
        })
        setValue1('');
    }

    const handleEditSave = () => {
        dispatch({
            type: ADD_EDIT_TODO,
            payload: {
                id: editId,
                text: valueEdit,
                done: false
            }
        })
    }

    const handleDone = (id) => {
        dispatch({
            type: DONE_TODO,
            payload: {
                id: id
            }
        })
    }

    const handleFilter = () => {
        dispatch({
            type: FILTER_TODO
        })
    }

    const handleEdit = (id) => {
        setEditId(id);
        // setValue(filtered);
    }

    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.charCode === 13) {
            console.log('enter press here! ')
            handleSave();
        }
    };

    const handleKeypressEdit = e => {
        //it triggers by pressing the enter key
        if (e.charCode === 13) {
            console.log('enter press here! ')
            handleEditSave();
            setEditId();
        }
    };

    return (
        // <ScaleFade in={handleFilter}>
        <Box p={'50px'} bg={'white'} width={'500px'} alignContent={'center'} m={'auto'}>

            <Text fontSize={'32px'} fontWeight={'900'} marginBottom={'20px'} color={'#aa8e8d'}
                  textAlign={'center'}>{text.title}</Text>

            {
                items.map(el =>
                    <React.Fragment key={el.id}>
                        {
                            editId === el.id ? (<InputItem handleChange={handleChangeEdit} id={el.id}
                                                          handleKeypress={handleKeypressEdit}/>) : (
                                <NewTodos text={el.text} id={el.id} done={el.done} handleDone={handleDone}
                                          handleEdit={handleEdit} handleChange={handleChange}
                                          handleKeypress={handleKeypress} editId={editId}/>
                            )
                        }

                    </React.Fragment>)
            }

            <Flex width={'300px'} m={'10px auto'} justifyContent={'center'}>
                <InputItem value1={value1} handleChange={handleChange} handleKeypress={handleKeypress}/>
                <Button onClick={handleSave}>OK</Button>
            </Flex>
            <Flex justifyContent={'center'}>
                <Button onClick={handleFilter}>Clear Completed</Button>
            </Flex>
        </Box>


    );
}

export default FormList;
