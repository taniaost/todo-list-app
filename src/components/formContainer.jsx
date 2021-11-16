import React from 'react';
import {todoReducer} from "./todo-reducer"
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        item: state,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddNewItem: (text)=>{
            let action = UpdateNewPostActionCreator(text);
            dispatch(action);
        },
        EditItem:()=> {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
