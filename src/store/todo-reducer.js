import {Todos} from "./text-items";
import {ADD_EDIT_TODO, ADD_TODO, DONE_TODO,FILTER_TODO} from "../store/action-todo"

export const todoReducer = (state = Todos, action) => {
    switch (action.type) {
        case ADD_TODO:
            const item = action.payload
            console.log([...state,item])
            return [...state,item]
        case ADD_EDIT_TODO:
            const editItem = action.payload
            return state.map(el => el.id == editItem.id ? {...el,text:editItem.text,done:false}:{...el} )
        case DONE_TODO:
            console.log(state.map(el => el.id === action.payload.id ? {...el, done: !el.done} : {...el}))
            return state.map(el => el.id === action.payload.id ? {...el, done: !el.done} : {...el})
        case FILTER_TODO:
            return state.filter(el => el.done === false)
        default:
            return state
    }
}