import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}

export const todoSLice = createSlice({
    name: 'todo',
    initialState,
    reducers: {  // it has two things one is property and other is functions. Two important key words "state or action"
         addTodo: (state, action) => {
            const todo ={
                id: nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
         },
         removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
         },
         // upateTodo...
    }   
})

export const {addTodo, removeTodo} = todoSLice.actions

export default todoSLice.reducer